"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FloatingShapes } from "@/components/FloatingShapes";

const projects = [
  {
    num: "01",
    title: "Hybrid Genetic Algorithm Framework for FPGA CNN Accelerators",
    description:
      "Memory-aware optimization framework for FPGA-based CNN accelerators using Hybrid Genetic Algorithms and HLS directives. Parameterized MAC-array and Conv2D models with automated synthesis evaluation for latency, DSP, LUT, BRAM, and timing.",
    tech: ["Xilinx Vitis HLS", "Verilog", "FPGA", "CNN", "Genetic Algorithms"],
    label: null,
    links: {},
  },
  {
    num: "02",
    title: "Learnable Universal Remote Architecture",
    description:
      "Programmable universal IR remote supporting standard and unknown IR protocols using ATmega328P, with EEPROM-based persistent storage, NEC/raw signal decoding, and runtime IR learning capabilities.",
    tech: ["ATmega328P", "Arduino", "EEPROM", "IRremote", "C/C++"],
    label: "IEEE Published",
    links: {},
  },
  {
    num: "03",
    title: "Svadhyay LMS",
    description:
      "Custom Learning Management System serving 390+ students with role-based dashboards, secure Supabase auth, automated PDF certificate generation, and scalable email notification systems.",
    tech: ["Next.js", "React", "Tailwind CSS", "Supabase", "PostgreSQL"],
    label: null,
    links: { live: "https://svadhyay.ieeevbitsb.in/" },
  },
  {
    num: "04",
    title: "IEEE-VBIT Student Branch Website",
    description:
      "Re-engineered official IEEE-VBIT website for scalability, responsiveness, and SEO. Achieved Lighthouse performance score of 92 through optimized rendering and Core Web Vitals improvements.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "PHP", "MySQL"],
    label: null,
    links: { live: "https://ieeevbitsb.in/" },
  },
  {
    num: "05",
    title: "Dynamic Event Registration Portal",
    description:
      "Full-stack event registration system with secure admin dashboards, Razorpay payment integration, automated attendee management, and Firestore-to-Google Sheets synchronization.",
    tech: ["JavaScript", "Firebase", "Razorpay", "Google Apps Script"],
    label: null,
    links: { live: "https://registration.ieeevbitsb.in/" },
  },
  {
    num: "06",
    title: "UI-Bucket",
    description:
      "A comprehensive UI component repository featuring live interactive previews, multi-format source inspection (React/HTML/CSS), and zero-install code exports. Built to provide developers with a curated archive of high-quality, stylistically diverse UI components.",
    tech: ["React", "TypeScript", "GSAP", "Three.js", "Vite"],
    label: "Upcoming",
    links: {},
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-background overflow-hidden">
      <FloatingShapes />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <span className="font-mono text-xs font-bold tracking-widest uppercase text-muted-foreground">
            01 / Projects
          </span>
          <h2 className="section-heading text-3xl md:text-5xl font-extrabold mt-2">
            Featured Work
          </h2>
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l-2 border-t-2 border-border">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              whileHover={{ rotateY: 2, rotateX: -1, scale: 1.01 }}
              style={{ transformPerspective: 800 }}
              className="group border-r-2 border-b-2 border-border bg-card hover:bg-muted/30 transition-colors duration-200 flex flex-col"
            >
              <div className="p-6 flex-1 flex flex-col">
                {/* Number + label row */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display font-extrabold text-4xl text-border/30 leading-none select-none">
                    {project.num}
                  </span>
                  {project.label === "IEEE Published" ? (
                    <div className="flex items-center bg-white px-2 py-1 border-2 border-border shadow-[2px_2px_0_0_rgba(0,0,0,1)] dark:shadow-[2px_2px_0_0_rgba(255,255,255,1)]">
                      <Image src="/ieee-logo.svg" alt="IEEE Published" width={120} height={36} className="h-8 w-auto object-contain" />
                    </div>
                  ) : project.label && (
                    <span className="accent-box text-[10px] font-mono font-bold tracking-widest uppercase px-2 py-0.5">
                      {project.label}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-lg leading-tight mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="mono-tag text-[10px]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              {project.links.live && (
                <div className="border-t-2 border-border p-4">
                  <Link
                    href={project.links.live}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-xs font-bold font-mono uppercase tracking-widest hover:text-primary transition-colors"
                  >
                    Live Site <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
