"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

interface Particle {
  x: number;
  y: number;
  hx: number;
  hy: number;
  vx: number;
  vy: number;
  color: string;
  w: number;
  h: number;
  rot: number;
  baseRot: number;
  rotV: number;
}

// Physics tuning for extremely smooth cursor repulsion
const REPULSION_RADIUS = 200;
const REPULSION_STRENGTH = 1.5;
const SPRING = 0.05;
const DAMPING = 0.85;

function createPhyllotaxisParticles(
  w: number,
  h: number,
  colors: string[]
): Particle[] {
  const particles: Particle[] = [];
  const centerX = w / 2;
  const centerY = h / 2;
  
  // Phyllotaxis (sunflower) parameters
  // To cover the screen, we need enough particles based on the radius
  const maxRadius = Math.max(w, h) * 0.6; 
  const c = 22; // spread factor
  const n = Math.floor((maxRadius / c) ** 2); // number of particles to fill radius

  const goldenAngle = 2.39996323; // ~137.5 degrees in radians

  for (let i = 0; i < n; i++) {
    const r = c * Math.sqrt(i);
    const theta = i * goldenAngle;
    
    const hx = centerX + r * Math.cos(theta);
    const hy = centerY + r * Math.sin(theta);
    
    // Dash rotation perpendicular to radius
    const baseRot = theta + Math.PI / 2;

    // Gradient-like color selection based on distance from center (optional) or random
    const color = colors[Math.floor(Math.random() * colors.length)];

    particles.push({
      x: hx,
      y: hy,
      hx,
      hy,
      vx: 0,
      vy: 0,
      color,
      w: 8, // dash width
      h: 2.5, // dash height
      rot: baseRot,
      baseRot,
      rotV: 0,
    });
  }
  return particles;
}

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -999, y: -999, tx: -999, ty: -999 });
  const particles = useRef<Particle[]>([]);
  const rafId = useRef<number>(0);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isDark = resolvedTheme === "dark";

    // Brutalist palette
    const lightColors = ["#FACC15", "#111111", "#444444", "#D4A017", "#888888"];
    const darkColors = ["#FACC15", "#ffffff", "#aaaaaa", "#FFE066", "#777777"];
    const colors = isDark ? darkColors : lightColors;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles.current = createPhyllotaxisParticles(canvas.width, canvas.height, colors);
    };

    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      // Target mouse position
      mouse.current.tx = e.clientX;
      mouse.current.ty = e.clientY;
    };
    const onMouseLeave = () => {
      mouse.current.tx = -999;
      mouse.current.ty = -999;
    };

    // If mouse starts offscreen, initialize smoothly
    mouse.current.x = mouse.current.tx;
    mouse.current.y = mouse.current.ty;

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Interpolate mouse position for buttery smooth tracking
      if (mouse.current.tx !== -999) {
        mouse.current.x += (mouse.current.tx - mouse.current.x) * 0.15;
        mouse.current.y += (mouse.current.ty - mouse.current.y) * 0.15;
      } else {
        mouse.current.x = -999;
        mouse.current.y = -999;
      }

      for (const p of particles.current) {
        const dx = p.x - mouse.current.x;
        const dy = p.y - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Repulsion force
        if (dist < REPULSION_RADIUS && mouse.current.x !== -999) {
          const force = ((REPULSION_RADIUS - dist) / REPULSION_RADIUS) ** 2;
          const angle = Math.atan2(dy, dx);
          p.vx += Math.cos(angle) * force * REPULSION_STRENGTH;
          p.vy += Math.sin(angle) * force * REPULSION_STRENGTH;
          
          // Spin dash slightly on repel
          p.rotV += force * 0.05;
        }

        // Spring back to home position
        p.vx += (p.hx - p.x) * SPRING;
        p.vy += (p.hy - p.y) * SPRING;

        // Damping (friction)
        p.vx *= DAMPING;
        p.vy *= DAMPING;

        // Apply velocity
        p.x += p.vx;
        p.y += p.vy;

        // Spring rotation back to base tangential rotation
        p.rotV += (p.baseRot - p.rot) * (SPRING * 1.5);
        p.rotV *= DAMPING;
        p.rot += p.rotV;

        // Draw dash
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        // Draw slightly rounded dashes
        ctx.beginPath();
        ctx.roundRect(-p.w / 2, -p.h / 2, p.w, p.h, 2);
        ctx.fill();
        ctx.restore();
      }

      rafId.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(rafId.current);
    };
  }, [mounted, resolvedTheme]);

  if (!mounted) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0, opacity: resolvedTheme === "dark" ? 0.35 : 0.65 }}
    />
  );
}
