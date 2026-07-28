import Link from "next/link";
import { Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t-4 border-foreground bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="inline-block border-2 border-background px-3 py-1 mb-4">
              <span className="font-display font-extrabold text-2xl tracking-tighter">HK</span>
            </div>
            <p className="text-background/70 text-sm max-w-xs leading-relaxed font-mono">
              Full Stack Developer, Embedded Systems Engineer &amp; FPGA Enthusiast building scalable platforms and hardware-software systems.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-display font-bold text-xs tracking-widest uppercase mb-5 text-background/50">
              Navigate
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "#home" },
                { label: "Projects", href: "#projects" },
                { label: "Experience", href: "#experience" },
                { label: "Publications", href: "#publications" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-background/70 hover:text-background font-mono transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-display font-bold text-xs tracking-widest uppercase mb-5 text-background/50">
              Connect
            </h3>
            <div className="flex flex-col gap-3">
              <Link
                href="https://github.com/hemanthsaikaturi"
                target="_blank"
                className="flex items-center gap-2 text-sm text-background/70 hover:text-background font-mono transition-colors"
              >
                <Github className="w-4 h-4" /> hemanthsaikaturi
              </Link>
              <Link
                href="https://www.linkedin.com/in/hemanthsaikaturi/"
                target="_blank"
                className="flex items-center gap-2 text-sm text-background/70 hover:text-background font-mono transition-colors"
              >
                <Linkedin className="w-4 h-4" /> hemanthsaikaturi
              </Link>
              <Link
                href="mailto:hemanthsaiworks@gmail.com"
                className="flex items-center gap-2 text-sm text-background/70 hover:text-background font-mono transition-colors"
              >
                <Mail className="w-4 h-4" /> hemanthsaiworks@gmail.com
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-background/20 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-background/50 font-mono">
            © {new Date().getFullYear()} Hemanthsai Katuri. All rights reserved.
          </p>
          <p className="text-xs text-background/50 font-mono">
            Built with Next.js + Tailwind CSS + Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
