"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { FloatingShapes } from "@/components/FloatingShapes";
import { BrutalistMascot } from "@/components/BrutalistMascot";

const experiences = [
  {
    role: "Product Engineer Intern",
    company: "PersonaOn",
    period: "May 2026 – Present",
    location: "Remote",
    current: true,
    bullets: [
      "Developed and improved product features across frontend and backend based on business requirements, user feedback, and product priorities.",
      "Wrote clean, maintainable, and efficient code for full-stack tasks while fixing bugs to improve product stability and usability.",
      "Collaborated with the product team on feature requirements, feasibility trade-offs, and timely delivery.",
      "Tested features prior to release and documented completed work, known issues, and implementation notes for team reference.",
    ],
  },
  {
    role: "Web Master",
    company: "IEEE – VBIT Student Branch",
    period: "July 2025 – Present",
    location: "Hyderabad, Telangana",
    current: true,
    bullets: [
      "Re-engineered and deployed the official IEEE-VBIT Student Branch website using Next.js, TypeScript, and Tailwind CSS, achieving a Lighthouse performance score of 92.",
      "Engineered a secure PHP/MySQL admin dashboard for feedback and query management with authentication and automated email routing.",
      "Implemented Technical SEO enhancements including structured metadata, sitemap optimization, and dynamic OpenGraph integration.",
    ],
  },
  {
    role: "Web Designer",
    company: "IEEE – VBIT Student Branch",
    period: "July 2024 – July 2025",
    location: "Hyderabad, Telangana",
    current: false,
    bullets: [
      "Developed dynamic event registration platforms using JavaScript and Firebase, automating event management workflows.",
      "Integrated Razorpay payment gateway and automated registration data exports to Google Sheets using Google Apps Script.",
      "Designed interactive competition websites with multi-level progression and real-time validation using Cloud Firestore.",
    ],
  },
  {
    role: "Virtual Intern",
    company: "IEEE Robotics and Automation Society",
    period: "March 2025 – April 2025",
    location: "Virtual",
    current: false,
    bullets: [
      "Completed a 5-week internship covering Research Methodology, 3D Modelling, Embedded Systems, and IoT under IEEE RAS Hyderabad Section.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24 bg-muted/40 border-y-2 border-border overflow-hidden">
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
            02 / Experience
          </span>
          <h2 className="section-heading text-3xl md:text-5xl font-extrabold mt-2 mb-0">
            Work History
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative">
          {/* Timeline */}
          <div className="relative lg:col-span-8 max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-[17px] top-2 bottom-2 w-0.5 bg-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="relative md:pl-12"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 top-5 w-[35px] h-[35px] border-2 border-border flex items-center justify-center font-display font-extrabold text-xs hidden md:flex ${
                    exp.current ? "bg-primary text-primary-foreground border-primary" : "bg-background text-foreground"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Card */}
                <div className="brutalist-card bg-card p-6">
                  {/* Header row */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-display font-bold text-xl leading-tight">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span className="accent-box text-[10px] font-mono font-bold tracking-widest uppercase px-2 py-0.5">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="font-bold text-sm text-primary">{exp.company}</p>
                    </div>

                    <div className="flex flex-col items-end gap-1 text-xs text-muted-foreground font-mono">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t-2 border-border/30 mb-4" />

                  {/* Bullets */}
                  <ul className="space-y-2">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 bg-primary shrink-0 block" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

          {/* Right column mascot */}
          <div className="hidden lg:flex lg:col-span-4 relative justify-center items-start pt-[450px]">
            <BrutalistMascot />
          </div>
        </div>
      </div>
    </section>
  );
}
