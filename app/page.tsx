import Navbar from "@/components/navbar";
import Hero from "@/sections/hero";
import About from "@/sections/about";
import Skills from "@/sections/skills";
import Projects from "@/sections/projects";
import Experience from "@/sections/experience";
import Achievements from "@/sections/achievements";
import Contact from "@/sections/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-foreground relative z-10">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
