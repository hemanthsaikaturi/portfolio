"use client";

import { motion } from "framer-motion";
import { BookOpen, ExternalLink } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export function Publications() {
  return (
    <section id="publications" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Publications</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative group rounded-2xl border border-border/50 bg-card/50 p-8 overflow-hidden backdrop-blur-sm hover:border-primary/50 transition-colors duration-500">
            {/* Subtle glow effect */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
              <div className="hidden md:flex shrink-0 p-4 bg-primary/10 rounded-xl">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full uppercase tracking-wider">
                    IEEE Xplore
                  </span>
                  <span className="text-sm font-medium text-muted-foreground">
                    2025
                  </span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold leading-tight mb-4 group-hover:text-primary transition-colors">
                  A Low-Cost, Learnable Universal Remote Architecture with Persistent Storage for Unknown IR Protocols
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed max-w-3xl">
                  Proposed a cost-effective embedded system using ATmega328P with on-device learning and persistent storage for handling standard and unknown IR protocols.
                </p>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-border/50 pt-6">
                  <div className="text-sm font-mono text-muted-foreground">
                    DOI: <span className="text-foreground">10.1109/ICRTEEICT67512.2025.11448777</span>
                  </div>
                  <Button asChild className="gap-2">
                    <Link href="https://ieeexplore.ieee.org/document/11448777" target="_blank">
                      View Publication <ExternalLink className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
