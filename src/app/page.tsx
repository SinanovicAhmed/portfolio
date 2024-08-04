import Image from "next/image";
import Hero from "./components/Hero";
import SectionTitle from "./components/SectionTitle";
import About from "./components/About";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
    </main>
  );
}
