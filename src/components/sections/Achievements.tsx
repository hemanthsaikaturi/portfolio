"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const achievements = [
  {
    title: "IEEEXtreme 18.0",
    icon: <Trophy className="w-6 h-6 text-yellow-500" />,
    items: [
      "Global Rank 1848",
      "Region 10 Rank 1048",
      "University Rank 3",
      "Team: IEEEVBITSB9"
    ]
  },
  {
    title: "AAKAR–2026",
    icon: <Award className="w-6 h-6 text-primary" />,
    items: [
      "First Prize",
      "Research & Development Cell",
      "VBIT"
    ]
  },
  {
    title: "IEEE Robotics and Automation Society Internship",
    icon: <Briefcase className="w-6 h-6 text-blue-400" />,
    items: [
      "Research Methodology",
      "Embedded Systems",
      "IoT",
      "3D Modelling"
    ]
  }
];

export function Achievements() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Achievements & Internships</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="p-3 bg-background/50 rounded-xl border border-border/50">
                    {achievement.icon}
                  </div>
                  <CardTitle className="text-xl m-0">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-3">
                    {achievement.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
