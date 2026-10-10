import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { StoneBand } from "@/components/StoneBand";
import { Story } from "@/components/Story";
import { Gallery } from "@/components/Gallery";
import { Sins } from "@/components/Sins";
import { Carta } from "@/components/Carta";
import { Events } from "@/components/Events";
import { Visit } from "@/components/Visit";
import { Footer } from "@/components/Footer";
import { RevealObserver } from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StoneBand />
        <Story />
        <Gallery />
        <Sins />
        <Carta />
        <Events />
        <Visit />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
