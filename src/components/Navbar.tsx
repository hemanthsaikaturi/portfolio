"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Download, Menu, X, Sun, Moon } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

const navItems = [
  { name: "Home", href: "/#home" },
  { name: "Projects", href: "/#projects" },
  { name: "Skills", href: "/#skills" },
  { name: "Experience", href: "/#experience" },
  { name: "Publications", href: "/#publications" },
  { name: "GitHub", href: "/#github" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b-2",
        isScrolled
          ? "bg-background border-border"
          : "bg-background/90 border-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 h-14 flex items-center justify-between">
        {/* Logo — brutalist mark */}
        <Link
          href="/#home"
          className="text-xl font-display font-bold tracking-tighter border-2 border-border px-3 py-0.5 hover:bg-primary hover:border-primary hover:text-primary-foreground transition-colors duration-150"
        >
          HK
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/20 px-3 py-1.5 transition-colors duration-150"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right controls */}
        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild className="border-2 border-transparent hover:border-border rounded-none">
            <Link href="https://github.com/hemanthsaikaturi" target="_blank">
              <Github className="w-4 h-4" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild className="border-2 border-transparent hover:border-border rounded-none">
            <Link href="https://www.linkedin.com/in/hemanthsaikaturi/" target="_blank">
              <Linkedin className="w-4 h-4" />
            </Link>
          </Button>

          {/* Dark mode toggle */}
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2 border-2 border-border hover:bg-primary hover:border-primary hover:text-primary-foreground transition-colors duration-150"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          )}

          <Button
            asChild
            className="ml-2 rounded-none border-2 border-foreground bg-foreground text-background hover:bg-primary hover:border-primary hover:text-primary-foreground font-bold tracking-wide transition-colors duration-150"
          >
            <Link href="/Hemanth_Resume_Master.pdf" target="_blank">
              <Download className="w-4 h-4 mr-2" />Resume
            </Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-2">
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2 border-2 border-border hover:bg-primary hover:border-primary hover:text-primary-foreground transition-colors duration-150"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          )}
          <button
            className="p-2 border-2 border-border text-foreground hover:bg-foreground hover:text-background transition-colors duration-150"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="md:hidden absolute top-14 left-0 w-full bg-background border-b-2 border-border"
        >
          <nav className="flex flex-col p-4 gap-0">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 px-4 text-sm font-medium border-b-2 border-border/30 hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <div className="flex gap-3 pt-4 px-4">
              <Button variant="outline" size="icon" asChild className="rounded-none border-2 border-border">
                <Link href="https://github.com/hemanthsaikaturi" target="_blank">
                  <Github className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild className="rounded-none border-2 border-border">
                <Link href="https://www.linkedin.com/in/hemanthsaikaturi/" target="_blank">
                  <Linkedin className="w-4 h-4" />
                </Link>
              </Button>
              <Button className="flex-1 rounded-none border-2 border-foreground bg-foreground text-background hover:bg-primary hover:border-primary hover:text-primary-foreground font-bold" asChild>
                <Link href="/Hemanth_Resume_Master.pdf" target="_blank">
                  <Download className="w-4 h-4 mr-2" />Resume
                </Link>
              </Button>
            </div>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
