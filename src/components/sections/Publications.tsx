"use client";

import { motion } from "framer-motion";
import { BookOpen, ExternalLink } from "lucide-react";
import Link from "next/link";

export function Publications() {
  return (
    <section id="publications" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
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
          className="max-w-4xl"
        >
          <div className="brutalist-card bg-card p-8 md:p-10 relative overflow-hidden">
            {/* Background number */}
            <div className="absolute top-0 right-4 font-display font-extrabold text-[8rem] leading-none text-border/10 select-none pointer-events-none">
              01
            </div>

            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
              {/* Icon box */}
              <div className="shrink-0 accent-box p-4">
                <BookOpen className="w-8 h-8" />
              </div>

              <div className="flex-1">
                {/* Badge row */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="accent-box font-mono text-[10px] font-bold tracking-widest uppercase px-3 py-1">
                    IEEE Xplore
                  </span>
                  <span className="mono-tag">2025</span>
                </div>

                <h3 className="font-display font-extrabold text-xl md:text-2xl leading-tight mb-4">
                  A Low-Cost, Learnable Universal Remote Architecture with
                  Persistent Storage for Unknown IR Protocols
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Proposed a cost-effective embedded system using ATmega328P
                  with on-device learning and persistent storage for handling
                  standard and unknown IR protocols. Published in IEEE Xplore.
                </p>

                {/* DOI + Link row */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t-2 border-border/30 pt-5">
                  <div className="font-mono text-sm text-muted-foreground">
                    DOI:{" "}
                    <span className="text-foreground">
                      10.1109/ICRTEEICT67512.2025.11448777
                    </span>
                  </div>
                  <Link
                    href="https://ieeexplore.ieee.org/document/11448777"
                    target="_blank"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background font-bold text-sm border-2 border-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground transition-colors duration-150"
                  >
                    View Publication <ExternalLink className="w-4 h-4" />
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
