"use client";

import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Code2, Database, Cpu, Wrench, Palette, Terminal } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Palette className="w-5 h-5 text-primary" />,
    skills: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Backend & Databases",
    icon: <Database className="w-5 h-5 text-primary" />,
    skills: ["Node.js", "Firebase", "Supabase", "PostgreSQL", "MySQL", "PHP", "REST APIs"]
  },
  {
    title: "Embedded & FPGA",
    icon: <Cpu className="w-5 h-5 text-primary" />,
    skills: ["Verilog", "Xilinx Vitis HLS", "FPGA Acceleration", "ATmega328P", "Communication Interfaces", "Arduino"]
  },
  {
    title: "Languages",
    icon: <Code2 className="w-5 h-5 text-primary" />,
    skills: ["JavaScript", "TypeScript", "Python", "C/C++", "HTML5", "CSS3"]
  },
  {
    title: "UI/UX",
    icon: <Palette className="w-5 h-5 text-primary" />,
    skills: ["Figma", "Responsive Design", "User Interface Design"]
  },
  {
    title: "Tools",
    icon: <Wrench className="w-5 h-5 text-primary" />,
    skills: ["Git", "GitHub", "Vercel", "GCC", "Linux", "Arduino IDE", "cPanel", "phpMyAdmin"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 -skew-y-3 transform origin-top-left z-0" />
      
      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Technical Skills</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors duration-300">
                <CardHeader className="flex flex-row items-center gap-3 pb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    {category.icon}
                  </div>
                  <CardTitle className="text-lg m-0">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 pt-4">
                    {category.skills.map(skill => (
                      <Badge key={skill} variant="outline" className="bg-background/50">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
