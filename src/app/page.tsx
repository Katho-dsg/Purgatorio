import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Band } from "@/components/Band";
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
        <Band left="Gótico" right="Cultura">
          Café, cócteles y arte en una sección del Castillo del Mono Osorio, en Bogotá. Un espacio para todo público.
        </Band>
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
