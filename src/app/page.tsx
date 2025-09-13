import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import { ThemeToggle } from "@/components/ThemeToggle";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <main className="min-h-screen  bg-white">
        <ThemeToggle />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
    </>
  );
}
