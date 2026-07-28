"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

interface Particle {
  x: number;
  y: number;
  z: number;
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
  scale: number;
  targetScale: number;
}

// Physics tuning for extremely smooth cursor repulsion
const REPULSION_RADIUS = 400;   // Increased so it reacts from further away
const REPULSION_STRENGTH = 1.8; // Increased for more sensitive push
const SPRING = 0.015;           // Lowered for slower return
const DAMPING = 0.92;           // Increased for buttery glide

const GOOGLE_COLORS = [
  "#4285F4", // Blue
  "#00ACC1", // Cyan
  "#34A853", // Green
  "#FBBC05", // Yellow
  "#FF6D00", // Orange
  "#EA4335", // Red
  "#8E24AA", // Purple
];

function createFibonacciSphere(
  w: number,
  h: number,
): Particle[] {
  const particles: Particle[] = [];
  // Center of the sphere
  const centerX = w * 0.5;
  const centerY = h * 0.5;
  
  // Radius of the globe
  const radius = Math.max(w, h) * 0.6; // Spread much wider
  const N = 1200; // Increased particle count for wider sphere
  const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

  for (let i = 0; i < N; i++) {
    const y = 1 - (i / (N - 1)) * 2; // y goes from 1 to -1
    const r = Math.sqrt(1 - y * y); // radius at y
    const theta = phi * i;
    
    const x = Math.cos(theta) * r;
    const z = Math.sin(theta) * r;
    
    // Project 3D coordinates to 2D screen
    const px = centerX + x * radius;
    const py = centerY + y * radius;
    
    // Base rotation - tangential to the sphere surface
    // Looking at the antigravity reference, dashes rotate along the curve
    const baseRot = Math.atan2(y, x) + Math.PI / 2;

    // Color gradient mapping based on X and Y position (diagonal gradient)
    // Map x and y from [-1, 1] to a color index
    const gradientVal = (x - y + 2) / 4; // 0 to 1
    const colorIndex = Math.floor(gradientVal * GOOGLE_COLORS.length);
    const color = GOOGLE_COLORS[Math.max(0, Math.min(GOOGLE_COLORS.length - 1, colorIndex))];

    particles.push({
      x: px,
      y: py,
      z,
      hx: px,
      hy: py,
      vx: 0,
      vy: 0,
      color,
      w: 8, // dash width
      h: 2.5, // dash height
      rot: baseRot,
      baseRot,
      rotV: 0,
      scale: 1,
      targetScale: 1,
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

    const resize = () => {
      // Get the parent container's dimensions instead of window to stay contained in Hero
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
        particles.current = createFibonacciSphere(canvas.width, canvas.height);
      }
    };

    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.tx = e.clientX - rect.left;
      mouse.current.ty = e.clientY - rect.top;
    };
    const onMouseLeave = () => {
      mouse.current.tx = -999;
      mouse.current.ty = -999;
    };

    mouse.current.x = mouse.current.tx;
    mouse.current.y = mouse.current.ty;

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth mouse interpolation (slower tracking for softer feel)
      if (mouse.current.tx !== -999) {
        mouse.current.x += (mouse.current.tx - mouse.current.x) * 0.08;
        mouse.current.y += (mouse.current.ty - mouse.current.y) * 0.08;
      } else {
        mouse.current.x = -999;
        mouse.current.y = -999;
      }

      // Sort particles by Z so front ones draw on top of back ones
      const sortedParticles = [...particles.current].sort((a, b) => a.z - b.z);

      for (const p of sortedParticles) {
        const dx = p.x - mouse.current.x;
        const dy = p.y - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Reset target scale
        p.targetScale = 1;

        // Repulsion force
        if (dist < REPULSION_RADIUS && mouse.current.x !== -999) {
          // Linear falloff feels smoother than exponential
          const force = (REPULSION_RADIUS - dist) / REPULSION_RADIUS;
          const angle = Math.atan2(dy, dx);
          
          p.vx += Math.cos(angle) * force * REPULSION_STRENGTH;
          p.vy += Math.sin(angle) * force * REPULSION_STRENGTH;
          p.rotV += force * 0.03; // Gentle rotation twist
          
          // Particles swell up beautifully when pushed
          p.targetScale = 1 + force * 2.0; 
        }

        // Smoothly animate scale
        p.scale += (p.targetScale - p.scale) * 0.08;

        p.vx += (p.hx - p.x) * SPRING;
        p.vy += (p.hy - p.y) * SPRING;
        p.vx *= DAMPING;
        p.vy *= DAMPING;
        p.x += p.vx;
        p.y += p.vy;

        p.rotV += (p.baseRot - p.rot) * (SPRING * 1.5);
        p.rotV *= DAMPING;
        p.rot += p.rotV;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        
        // Fading for particles on the "back" of the 3D sphere
        const alpha = p.z > 0 ? 0.9 : 0.25;
        ctx.globalAlpha = alpha;
        
        // Combine Z depth scale with interactive mouse scale
        const depthScale = p.z > 0 ? 1 : 0.6;
        
        // Organic breathing animation (wave pattern using time and spatial position)
        const time = Date.now() / 1000;
        const breatheScale = 1 + Math.sin(time * 1.5 + (p.hx + p.hy) * 0.02) * 0.5; // Scales between 0.5 and 1.5
        
        const finalScale = depthScale * p.scale * breatheScale;
        ctx.scale(finalScale, finalScale);

        ctx.fillStyle = p.color;
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
      className="absolute inset-0 pointer-events-auto"
      style={{ zIndex: 0 }}
    />
  );
}
