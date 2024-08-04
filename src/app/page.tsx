import Image from "next/image";
import Hero from "./components/Hero";
import SectionTitle from "./components/SectionTitle";

export default function Home() {
  return (
    <main>
      <Hero />
      <SectionTitle title="About me" />
      <div className="w-2 h-20"></div>
    </main>
  );
}
