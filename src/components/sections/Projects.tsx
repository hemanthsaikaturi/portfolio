"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

const projects = [
  {
    title: "Hybrid Genetic Algorithm Framework for FPGA CNN Accelerators",
    description: "Developed a memory-aware optimization framework for FPGA-based CNN accelerators using Hybrid Genetic Algorithms and HLS directives. Implemented parameterized MAC-array and Conv2D accelerator models and automated synthesis evaluation workflows for latency, DSP, LUT, BRAM, and timing analysis.",
    tech: ["Xilinx Vitis HLS", "Verilog", "FPGA", "CNN", "Genetic Algorithms"],
    links: {}
  },
  {
    title: "Learnable Universal Remote Architecture",
    description: "Designed and implemented a programmable universal IR remote supporting both standard and unknown IR protocols using ATmega328P with EEPROM-based persistent storage and runtime IR learning capabilities.",
    tech: ["ATmega328P", "Arduino", "EEPROM", "IRremote"],
    publication: "Published in IEEE Xplore.",
    links: {}
  },
  {
    title: "Svadhyay LMS",
    description: "Architected and developed a custom Learning Management System serving 390+ students with role-based dashboards, secure authentication, automated PDF certificate generation, and scalable email notification systems.",
    tech: ["Next.js", "React", "Tailwind CSS", "Supabase", "PostgreSQL"],
    links: {
      live: "https://svadhyay.ieeevbitsb.in/"
    }
  },
  {
    title: "IEEE - VBIT Student Branch Website",
    description: "Re-engineered and deployed the official IEEE - VBIT Student Branch website to improve scalability, responsiveness, and overall website performance. Implemented Technical SEO enhancements and achieved Lighthouse performance score of 92.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "PHP", "MySQL"],
    links: {
      live: "https://ieeevbitsb.in/"
    }
  },
  {
    title: "Dynamic Event Registration Portal",
    description: "Developed a full-stack event registration system with secure admin dashboards, payment integration, automated attendee management, and Firestore-to-Google Sheets synchronization workflows.",
    tech: ["JavaScript", "Firebase", "Razorpay", "Google Apps Script"],
    links: {
      live: "https://registration.ieeevbitsb.in/"
    }
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <Card className="h-full flex flex-col bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors duration-300">
                <CardHeader>
                  <CardTitle className="text-xl leading-tight">{project.title}</CardTitle>
                  {project.publication && (
                    <CardDescription className="text-primary font-medium mt-2">
                      {project.publication}
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-secondary/50 hover:bg-secondary/80">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-4 border-t border-border/50 flex gap-3">
                  {project.links.live && (
                    <Button size="sm" variant="default" asChild className="gap-2">
                      <Link href={project.links.live} target="_blank">
                        <ExternalLink className="w-4 h-4" /> Live Site
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
