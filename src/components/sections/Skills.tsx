"use client";

import { motion } from "framer-motion";
import { Code2, Database, Cpu, Wrench, Palette, Terminal, Bot } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: <Code2 className="w-5 h-5" />,
    skills: ["JavaScript", "TypeScript", "Python", "C/C++", "Verilog", "HTML5", "CSS3"],
  },
  {
    title: "Frontend",
    icon: <Palette className="w-5 h-5" />,
    skills: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend & Databases",
    icon: <Database className="w-5 h-5" />,
    skills: ["Node.js", "Firebase", "Supabase", "PostgreSQL", "MySQL", "PHP", "REST APIs"],
  },
  {
    title: "Embedded & FPGA",
    icon: <Cpu className="w-5 h-5" />,
    skills: ["ATmega328P", "Arduino", "FPGA Acceleration", "Xilinx Vitis HLS", "Verilog", "Communication Interfaces"],
  },
  {
    title: "AI & Tools",
    icon: <Bot className="w-5 h-5" />,
    skills: ["GitHub Copilot", "ChatGPT", "Claude", "Cursor", "Gemini", "Prompt Engineering", "LLM-Assisted Dev"],
  },
  {
    title: "Tools & Platforms",
    icon: <Wrench className="w-5 h-5" />,
    skills: ["Git", "GitHub", "Vercel", "VS Code", "Linux", "cPanel", "phpMyAdmin", "Google Apps Script"],
  },
  {
    title: "UI/UX & Design",
    icon: <Terminal className="w-5 h-5" />,
    skills: ["Figma", "Responsive Design", "User Interface Design"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 8 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 350, damping: 22 },
  },
};

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-muted/40 border-y-2 border-border">
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
            03 / Skills
          </span>
          <h2 className="section-heading text-3xl md:text-5xl font-extrabold mt-2">
            Technical Stack
          </h2>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              className="brutalist-card bg-card p-5"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-4 pb-3 border-b-2 border-border">
                <div className="p-2 accent-box">
                  {category.icon}
                </div>
                <h3 className="font-display font-bold text-base tracking-tight">
                  {category.title}
                </h3>
              </div>

              {/* Skill tags with spring animation */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={tagVariants}
                    className="mono-tag hover:bg-foreground hover:text-background hover:border-foreground transition-colors duration-150 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
