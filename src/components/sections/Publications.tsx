"use client";

import { motion } from "framer-motion";
import { ExternalLink, BookOpen } from "lucide-react";
import { FloatingShapes } from "@/components/FloatingShapes";
import Link from "next/link";
import Image from "next/image";

export function Publications() {
  return (
    <section id="publications" className="relative py-24 bg-background overflow-hidden border-t-2 border-border">
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
            04 / Publications
          </span>
          <h2 className="section-heading text-3xl md:text-5xl font-extrabold mt-2">
            Research
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="w-full max-w-5xl"
        >
          {/* Legacy Academic Journal Card layout */}
          <div className="brutalist-card bg-card p-8 md:p-12 relative overflow-hidden flex flex-col border-4">
            {/* Background Number */}
            <div className="absolute top-0 right-4 font-display font-extrabold text-[12rem] leading-none text-border/5 select-none pointer-events-none">
              01
            </div>

            {/* Legacy Journal Header */}
            <div className="border-b-4 border-foreground pb-8 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative z-10">
              <div className="flex-1">
                <p className="font-mono text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">
                  Original Research Article
                </p>
                <h3 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl leading-tight text-foreground">
                  A Low-Cost, Learnable Universal Remote Architecture with Persistent Storage for Unknown IR Protocols
                </h3>
              </div>
              {/* IEEE Logo Badge */}
              <div className="shrink-0 bg-white p-3 border-4 border-border shadow-[4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-[4px_4px_0_0_rgba(255,255,255,1)] rotate-2 hover:rotate-0 transition-transform duration-300">
                <Image src="/ieee-logo.svg" alt="IEEE Logo" width={160} height={48} className="h-12 w-auto object-contain" />
              </div>
            </div>

            {/* Legacy Abstract Body */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 relative z-10">
              {/* Left sidebar - Meta data */}
              <div className="md:col-span-3 lg:col-span-4 flex flex-col gap-6">
                <div>
                  <span className="block font-mono text-xs uppercase text-muted-foreground font-bold mb-1">Published In</span>
                  <span className="font-serif font-bold text-xl">IEEE Xplore</span>
                </div>
                <div>
                  <span className="block font-mono text-xs uppercase text-muted-foreground font-bold mb-1">Year</span>
                  <span className="font-mono text-lg font-bold">2025</span>
                </div>
                <div>
                  <span className="block font-mono text-xs uppercase text-muted-foreground font-bold mb-1">DOI</span>
                  <span className="font-mono text-sm break-all font-bold">10.1109/ICRTEEICT67512.2025.11448777</span>
                </div>
                <div>
                  <span className="block font-mono text-xs uppercase text-muted-foreground font-bold mb-1">Authors</span>
                  <span className="font-serif font-bold text-lg">Hemanthsai Katuri</span>
                </div>
              </div>

              {/* Right content - Abstract */}
              <div className="md:col-span-9 lg:col-span-8 border-t-4 md:border-t-0 md:border-l-4 border-foreground pt-8 md:pt-0 md:pl-8 lg:pl-12">
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="w-5 h-5" />
                  <p className="font-mono text-lg font-bold uppercase tracking-widest">Abstract</p>
                </div>
                <p className="font-serif text-xl md:text-2xl leading-relaxed text-foreground/90 text-justify">
                  Proposed a cost-effective embedded system using ATmega328P with on-device learning and persistent storage for handling standard and unknown IR protocols. This architecture significantly reduces hardware overhead while maintaining universal compatibility across diverse infrared transmission standards.
                </p>
                
                <div className="mt-10">
                  <Link
                    href="https://ieeexplore.ieee.org/document/11448777"
                    target="_blank"
                    className="inline-flex items-center gap-2 px-6 py-4 bg-foreground text-background font-bold text-sm md:text-base border-4 border-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-150 uppercase tracking-widest shadow-[4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-[4px_4px_0_0_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
                  >
                    View Publication <ExternalLink className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
