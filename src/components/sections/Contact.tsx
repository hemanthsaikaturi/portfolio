"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import Link from "next/link";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY_HERE";
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: accessKey, ...formData }),
      });
      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const inputClass =
    "w-full px-4 py-3 bg-background border-2 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-0 transition-colors duration-150 font-mono text-sm rounded-none";
  const labelClass = "block font-display font-bold text-sm mb-1.5 uppercase tracking-wide";

  return (
    <section id="contact" className="py-24 bg-background border-t-2 border-border">
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
            06 / Contact
          </span>
          <h2 className="section-heading text-3xl md:text-5xl font-extrabold mt-2">
            Get In Touch
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl border-l-4 border-primary pl-4">
            Whether you have a question, a project proposal, or just want to say hi — my inbox is always open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left — contact links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="space-y-4"
          >
            {/* Email card */}
            <a
              href="mailto:hemanthsaiworks@gmail.com"
              className="brutalist-card flex items-center gap-4 p-5 bg-card group"
            >
              <div className="accent-box p-3 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="font-mono text-xs font-bold tracking-widest uppercase text-muted-foreground mb-0.5">Email</p>
                <p className="font-display font-bold text-base group-hover:text-primary transition-colors">
                  hemanthsaiworks@gmail.com
                </p>
              </div>
            </a>

            {/* LinkedIn card */}
            <a
              href="https://www.linkedin.com/in/hemanthsaikaturi/"
              target="_blank"
              rel="noopener noreferrer"
              className="brutalist-card flex items-center gap-4 p-5 bg-card group"
            >
              <div className="accent-box p-3 shrink-0">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <p className="font-mono text-xs font-bold tracking-widest uppercase text-muted-foreground mb-0.5">LinkedIn</p>
                <p className="font-display font-bold text-base group-hover:text-primary transition-colors">
                  Hemanthsai Katuri
                </p>
              </div>
            </a>

            {/* Action buttons */}
            <div className="flex gap-3 pt-2">
              <Link
                href="https://github.com/hemanthsaikaturi"
                target="_blank"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border-2 border-border font-bold text-sm hover:bg-foreground hover:text-background hover:border-foreground transition-colors duration-150"
              >
                <Github className="w-4 h-4" /> GitHub
              </Link>
              <Link
                href="/Hemanth_Resume_Master.pdf"
                target="_blank"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-foreground text-background border-2 border-foreground font-bold text-sm hover:bg-primary hover:border-primary hover:text-primary-foreground transition-colors duration-150"
              >
                <Download className="w-4 h-4" /> Resume
              </Link>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="brutalist-card bg-card p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className={labelClass}>Name</label>
                    <input
                      id="name"
                      className={inputClass}
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>Email</label>
                    <input
                      id="email"
                      type="email"
                      className={inputClass}
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className={labelClass}>Subject</label>
                  <input
                    id="subject"
                    className={inputClass}
                    placeholder="Project Inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className={labelClass}>Message</label>
                  <textarea
                    id="message"
                    className={`${inputClass} min-h-[140px] resize-none`}
                    placeholder="Hello Hemanth, I'd like to discuss..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-foreground text-background border-2 border-foreground font-display font-bold text-sm uppercase tracking-widest hover:bg-primary hover:border-primary hover:text-primary-foreground disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-150"
                >
                  {status === "loading" ? (
                    "Sending..."
                  ) : status === "success" ? (
                    <><CheckCircle2 className="w-4 h-4" /> Message Sent!</>
                  ) : status === "error" ? (
                    <><AlertCircle className="w-4 h-4" /> Failed — Try Again</>
                  ) : (
                    <><Send className="w-4 h-4" /> Send Message</>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
