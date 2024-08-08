import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills/Skills";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact";
import AOSComponent from "@/components/AOS";

export default function Home() {
  return (
    <AOSComponent>
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </AOSComponent>
  );
}
