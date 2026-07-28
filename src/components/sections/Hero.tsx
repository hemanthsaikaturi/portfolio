"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import Link from "next/link";
import Image from "next/image";

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
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-primary" />

      <div className="container relative z-10 mx-auto px-4 md:px-8 py-16">
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
              className="flex flex-wrap items-center gap-3"
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

          {/* ── RIGHT: 3D Photo Card ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex justify-center lg:justify-end"
          >
            <div
              className="relative w-72 md:w-80 lg:w-96"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Offset shadow layers (brutalist stacked effect) */}
              <div className="absolute inset-0 translate-x-4 translate-y-4 bg-primary border-2 border-border" />
              <div className="absolute inset-0 translate-x-2 translate-y-2 bg-muted border-2 border-border" />

              {/* 3D tilt card */}
              <motion.div
                style={{
                  rotateX,
                  rotateY,
                  transformPerspective: 1000,
                }}
                className="relative z-10 photo-card bg-muted"
              >
                <Image
                  src="/profile.jpg"
                  alt="Hemanthsai Katuri — Full Stack Developer & Embedded Systems Engineer"
                  width={500}
                  height={500}
                  priority
                  className="w-full h-auto object-cover grayscale-[15%] contrast-[1.05]"
                />

                {/* Floating label on photo */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-foreground/90 text-background">
                  <p className="font-display font-bold text-sm tracking-wide">
                    Hemanthsai Katuri
                  </p>
                  <p className="font-mono text-xs text-background/70 tracking-widest uppercase">
                    ECE @ VBIT · 2026
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
