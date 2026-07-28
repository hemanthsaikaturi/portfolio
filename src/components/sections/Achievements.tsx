"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Briefcase } from "lucide-react";

const achievements = [
  {
    num: "01",
    title: "IEEEXtreme 18.0",
    icon: <Trophy className="w-6 h-6" />,
    highlight: "Global Rank 1848",
    items: ["Region 10 Rank 1048", "University Rank 3", "Team: IEEEVBITSB9", "24-hour competitive programming"],
  },
  {
    num: "02",
    title: "AAKAR–2026",
    icon: <Award className="w-6 h-6" />,
    highlight: "First Prize",
    items: ["Research & Development Cell", "Vignana Bharathi Institute of Technology", "Technical project innovation"],
  },
  {
    num: "03",
    title: "IEEE RAS Internship",
    icon: <Briefcase className="w-6 h-6" />,
    highlight: "5-Week Program",
    items: ["Research Methodology", "3D Modelling", "Embedded Systems & IoT", "IEEE RAS Hyderabad Section"],
  },
];

export function Achievements() {
  return (
    <section className="py-24 bg-muted/40 border-y-2 border-border">
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
            05 / Achievements
          </span>
          <h2 className="section-heading text-3xl md:text-5xl font-extrabold mt-2">
            Recognition
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="brutalist-card bg-card p-6 flex flex-col"
            >
              {/* Number + icon row */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-display font-extrabold text-4xl text-border/20 leading-none select-none">
                  {item.num}
                </span>
                <div className="accent-box p-2.5">
                  {item.icon}
                </div>
              </div>

              <h3 className="font-display font-bold text-xl mb-2">{item.title}</h3>

              {/* Highlight badge */}
              <div className="mb-4">
                <span className="inline-block font-mono font-bold text-xs tracking-widest uppercase border-2 border-foreground px-3 py-1 bg-foreground text-background">
                  {item.highlight}
                </span>
              </div>

              {/* Details */}
              <div className="border-t-2 border-border/30 pt-4 flex-1">
                <ul className="space-y-1.5">
                  {item.items.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-2 w-1 h-1 bg-primary shrink-0 block" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
