import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Publications } from "@/components/sections/Publications";
import { Achievements } from "@/components/sections/Achievements";
import { GitHubStats } from "@/components/sections/GitHubStats";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Publications />
        <Achievements />
        <GitHubStats />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
