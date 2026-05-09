"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import { Button } from "../ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-50 mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] opacity-50 mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm md:text-base font-semibold text-primary mb-4 tracking-wider uppercase">
              Hemanthsai Katuri
            </h2>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            Full Stack Developer, <br className="hidden md:block" />
            <span className="text-gradient">Embedded Systems</span> Engineer & FPGA Enthusiast
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Building scalable web platforms, embedded architectures, and hardware-software co-designed systems with a focus on performance, research, and engineering depth.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" asChild className="w-full sm:w-auto gap-2">
              <Link href="#projects">
                View Projects<ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild className="w-full sm:w-auto gap-2">
              <Link href="/Hemanth_Resume_Master.pdf" target="_blank">
                <Download className="w-4 h-4" />Download Resume
              </Link>
            </Button>
            <div className="flex items-center gap-2 mt-4 sm:mt-0 sm:ml-2">
              <Button size="icon" variant="ghost" asChild className="rounded-full">
                <Link href="https://github.com/hemanthsaikaturi" target="_blank">
                  <Github className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="icon" variant="ghost" asChild className="rounded-full">
                <Link href="https://www.linkedin.com/in/hemanthsai-katuri-91b72925a/" target="_blank">
                  <Linkedin className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
