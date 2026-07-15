import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import { ThemeToggle } from "@/components/ThemeToggle";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import { Toaster } from "react-hot-toast";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-[#0F172A]  ">
        {/* <ThemeToggle /> */}
        <Hero />
        {/* <About /> */}
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
        <Toaster />
      </main>
    </>
  );
}
