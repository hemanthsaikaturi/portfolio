"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import Link from "next/link";
import Image from "next/image";
import { ParticleField } from "@/components/ParticleField";

export function Hero() {
  // 3D tilt motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), {
    stiffness: 300,
    damping: 28,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), {
    stiffness: 300,
    damping: 28,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-14 overflow-hidden bg-background"
    >
      <ParticleField />
      
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-primary" />

      <div className="container relative z-10 mx-auto px-4 md:px-8 py-16 pointer-events-none">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── LEFT: Text content ── */}
          <div>
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2 mb-8"
            >
              <span className="accent-box text-xs font-mono font-bold tracking-widest uppercase px-3 py-1">
                Open to Opportunities
              </span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground mono-tag">
                <MapPin className="w-3 h-3" /> Hyderabad, India
              </span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="font-display text-sm font-bold tracking-[0.25em] uppercase text-muted-foreground mb-1">
                Hemanthsai Katuri
              </p>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[0.95] mb-6 text-foreground">
                Full{" "}
                <span className="inline-block bg-primary text-primary-foreground px-2 pb-1">
                  Stack
                </span>
                <br />
                Developer
                <span className="text-primary">.</span>
                <br />
                <span className="text-3xl md:text-4xl font-bold text-muted-foreground">
                  Embedded &amp; FPGA Engineer
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-lg border-l-4 border-primary pl-4"
            >
              Building scalable web platforms, embedded architectures, and
              hardware-software co-designed systems with a focus on performance,
              research, and engineering depth.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 pointer-events-auto"
            >
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 bg-foreground text-background font-bold border-2 border-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground transition-colors duration-150 text-sm"
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/Hemanth_Resume_Master.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 px-5 py-3 bg-transparent text-foreground font-bold border-2 border-border hover:bg-foreground hover:text-background transition-colors duration-150 text-sm"
              >
                <Download className="w-4 h-4" /> Resume
              </Link>

              {/* Social icons */}
              <div className="flex items-center gap-2 ml-1">
                <Link
                  href="https://github.com/hemanthsaikaturi"
                  target="_blank"
                  className="p-2.5 border-2 border-border hover:bg-foreground hover:text-background hover:border-foreground transition-colors duration-150"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/hemanthsaikaturi/"
                  target="_blank"
                  className="p-2.5 border-2 border-border hover:bg-foreground hover:text-background hover:border-foreground transition-colors duration-150"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-6 mt-10 pt-8 border-t-2 border-border/30"
            >
              {[
                { num: "4+", label: "Years Coding" },
                { num: "5+", label: "Live Projects" },
                { num: "1", label: "IEEE Paper" },
              ].map(({ num, label }) => (
                <div key={label}>
                  <p className="font-display font-extrabold text-2xl leading-none">
                    {num}
                  </p>
                  <p className="text-xs text-muted-foreground font-mono uppercase tracking-widest mt-0.5">
                    {label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: 3D Aesthetic Photo Card ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex justify-center lg:justify-end relative"
          >
            {/* Spinning decorative asterisk badge behind the card */}
            <motion.div 
              className="absolute -top-12 -right-12 text-primary z-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <svg width="120" height="120" viewBox="0 0 100 100" fill="currentColor">
                <path d="M50 0L55 40L95 30L65 60L90 95L50 75L10 95L35 60L5 30L45 40Z" />
              </svg>
            </motion.div>

            <div
              className="relative w-80 md:w-96 lg:w-[28rem] z-10 pointer-events-auto"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* 3D tilt minimalist polaroid card */}
              <motion.div
                style={{
                  rotateX,
                  rotateY,
                  transformPerspective: 1000,
                }}
                className="relative bg-background border-2 border-border p-3 shadow-[8px_8px_0_0_rgba(0,0,0,1)] dark:shadow-[8px_8px_0_0_rgba(255,255,255,1)] hover:shadow-[12px_12px_0_0_var(--color-primary)] transition-shadow duration-300"
              >
                {/* Photo container */}
                <div className="relative overflow-hidden border-2 border-border bg-muted aspect-[4/5]">
                  <Image
                    src="/profile.jpg"
                    alt="Hemanthsai Katuri"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                    className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Subtle noise overlay for aesthetic texture */}
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                </div>

                {/* Minimalist typography below photo */}
                <div className="mt-3 text-left">
                  <p className="font-display font-black text-sm md:text-base tracking-tight uppercase">
                    Hemanthsai Katuri
                  </p>
                  <p className="font-mono text-[10px] md:text-xs text-muted-foreground tracking-widest uppercase mt-0.5">
                    FULL STACK DEV
                  </p>
                </div>
                
                {/* Floating mini badge */}
                <div className="absolute -right-3 -bottom-3 bg-primary text-primary-foreground border-2 border-border px-3 py-1 font-mono text-[10px] font-black tracking-widest uppercase rotate-[-5deg]">
                  SYS.ENG
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
