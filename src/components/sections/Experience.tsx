"use client";

import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Web Master",
    company: "IEEE – VBIT Student Branch",
    period: "2024 - Present",
    description: "Re-engineered and deployed the official IEEE - VBIT Student Branch website using Next.js, TypeScript, and Tailwind CSS to improve scalability, responsiveness, and website performance. Engineered a secure PHP/MySQL admin dashboard and improved Core Web Vitals with performance-focused frontend enhancements achieving Lighthouse score of 92."
  },
  {
    role: "Web Designer",
    company: "IEEE – VBIT Student Branch",
    period: "2023 - 2024",
    description: "Developed dynamic event registration platforms and competition websites using Firebase and JavaScript with secure admin dashboards, Razorpay integration, and Cloud Firestore workflows."
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Experience</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </motion.div>

        <div className="max-w-3xl">
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-0"
              >
                <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
                  <div className="mb-4 md:mb-0 md:col-span-1 pt-1">
                    <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                  </div>

                  <div className="md:col-span-3 relative">
                    {/* Timeline dot */}
                    <div className="absolute -left-10 md:-left-[2.15rem] top-1.5 w-3 h-3 bg-primary rounded-full ring-4 ring-background" />
                    {/* Timeline line */}
                    {index !== experiences.length - 1 && (
                      <div className="absolute -left-[2.15rem] md:-left-[1.85rem] top-4 w-px h-[calc(100%+3rem)] bg-border" />
                    )}

                    <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-primary font-medium mb-4">
                      <Building2 className="w-4 h-4" />
                      {exp.company}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
