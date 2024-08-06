import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills/Skills";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}
