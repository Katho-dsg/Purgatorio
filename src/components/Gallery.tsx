"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { asset } from "@/lib";
import { Star } from "./Star";

type Shot = { src: string; alt: string; caption: string };
type Room = { id: string; label: string; shots: Shot[] };

const rooms: Room[] = [
  {
    id: "salones",
    label: "Los salones",
    shots: [
      { src: asset("/img/fotos/arco.webp"), alt: "Arco de piedra del castillo pintado de rojo y blanco", caption: "Arcos de piedra, pintados de sangre y hueso" },
      { src: asset("/img/fotos/sala-roja.webp"), alt: "Salón rojo con biblioteca y sillón morado", caption: "El salón rojo y su biblioteca" },
      { src: asset("/img/fotos/rostro.webp"), alt: "Gran pintura de un rostro de mujer en una pared roja", caption: "Rostros que no apartan la mirada" },
      { src: asset("/img/fotos/patio.webp"), alt: "Personas conversando en el patio del castillo", caption: "El patio, bajo las luces" },
    ],
  },
  {
    id: "uv",
    label: "Luz negra",
    shots: [
      { src: asset("/img/fotos/sala-uv.webp"), alt: "Sala de luz negra con un niño de yeso y una pintura fluorescente", caption: "La sala de luz negra" },
      { src: asset("/img/fotos/galeria-uv.webp"), alt: "Pared de cuadros bajo luz ultravioleta", caption: "Obra que solo se ve en la oscuridad" },
      { src: asset("/img/fotos/muneco-jaula.webp"), alt: "Muñeco tatuado dentro de una jaula de alambre", caption: "Encierros" },
      { src: asset("/img/fotos/figura-uv.webp"), alt: "Figura con máscara rosada bajo luz azul", caption: "Lo que brilla cuando se apaga la luz" },
    ],
  },
  {
    id: "callan",
    label: "Lo que callan",
    shots: [
      { src: asset("/img/fotos/marco-brazos.webp"), alt: "Brazos con cicatrices dentro de un marco dorado", caption: "Las marcas que se enmarcan" },
      { src: asset("/img/fotos/muneco-rejas.webp"), alt: "Muñeco tatuado detrás de unos barrotes", caption: "Detrás de los barrotes" },
      { src: asset("/img/fotos/muneco-cafe.webp"), alt: "Muñeco con hojas secas sosteniendo una taza de café", caption: "Compañía para el café" },
      { src: asset("/img/fotos/incomodate.webp"), alt: "Afiche del taller de dibujo ciego Incomódate", caption: "Incomódate: belleza en lo imperfecto" },
    ],
  },
  {
    id: "barra",
    label: "La barra",
    shots: [
      { src: asset("/img/fotos/taza-calavera.webp"), alt: "Espresso cayendo en una taza de calavera", caption: "El espresso de la casa" },
      { src: asset("/img/fotos/coctel.webp"), alt: "Cóctel espumoso en una mesa de mosaico", caption: "Cócteles en el patio" },
      { src: asset("/img/fotos/chai.webp"), alt: "Chai rosa en copa de corazón", caption: "Chai de rosas" },
      { src: asset("/img/fotos/vino.webp"), alt: "Copa de vino tinto y muñeco de terciopelo", caption: "Vino para los fríos bogotanos" },
    ],
  },
];

// Afiche colgado en un muro de concreto con grafiti y sombra de barrotes.
export function Gallery() {
  const [roomIdx, setRoomIdx] = useState(0);
  const [i, setI] = useState(0);
  const [color, setColor] = useState(false);
  const room = rooms[roomIdx];
  const n = room.shots.length;
  const shot = room.shots[i];
  const go = (d: number) => setI((v) => (v + d + n) % n);

  return (
    <section id="galeria" aria-labelledby="galeria-title" className="relative isolate overflow-hidden bg-ink py-20 text-bone sm:py-28">
      <img src={asset("/img/v2/concrete.webp")} alt="" aria-hidden loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,#0e0b0b55,#0e0b0bd9_75%)]" />

      <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
        <h2 id="galeria-title" data-reveal className="display text-center text-[clamp(3.4rem,7.6vw,7rem)] text-bone [text-shadow:0_4px_30px_#000]">
          El castillo <span className="text-blood">por dentro</span>
        </h2>

        <div role="tablist" aria-label="Salas" className="no-scrollbar -mx-4 mt-8 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
          {rooms.map((r, k) => {
            const on = k === roomIdx;
            return (
              <button
                key={r.id}
                role="tab"
                aria-selected={on}
                aria-controls="galeria-panel"
                onClick={() => {
                  setRoomIdx(k);
                  setI(0);
                }}
                className={`label h-11 shrink-0 px-4 text-[1.2rem] tracking-[0.03em] transition-colors duration-200 ${
                  on ? "bg-blood text-white" : "bg-ink/80 text-bone/80 shadow-[inset_0_0_0_1px_#ffffff30] hover:text-white"
                }`}
              >
                {r.label}
              </button>
            );
          })}
        </div>

        <div id="galeria-panel" role="tabpanel" aria-label={room.label} className="relative mx-auto mt-10 grid max-w-[980px] grid-cols-[auto_1fr_auto] items-center gap-3 sm:gap-8">
          <button type="button" onClick={() => go(-1)} aria-label="Foto anterior" className="grid h-12 w-12 place-items-center bg-ink text-bone shadow-[inset_0_0_0_1px_#ffffff30] transition-colors hover:bg-blood active:scale-95">
            <ArrowLeft size={22} weight="bold" />
          </button>

          {/* El afiche */}
          <figure
            className="relative mx-auto w-full max-w-[480px] bg-ink p-3 shadow-[0_30px_70px_#000c] sm:p-4"
            onMouseEnter={() => setColor(true)}
            onMouseLeave={() => setColor(false)}
          >
            <div className="flex items-end justify-between gap-3 border-b border-white/15 pb-2">
              <p className="display text-[clamp(2.4rem,6vw,3.6rem)] text-bone">{room.label}</p>
              <p className="micro pb-1 text-right text-ash-light">El Purgatorio</p>
            </div>
            <button
              type="button"
              key={`${room.id}-${i}`}
              onClick={() => setColor((c) => !c)}
              aria-pressed={color}
              aria-label="Ver la foto a color"
              className={`duo mt-3 block aspect-[4/5] w-full animate-[fade_600ms_var(--ease-out-expo)] ${color ? "color" : ""}`}
            >
              <img src={shot.src} alt={shot.alt} className="h-full w-full object-cover" />
            </button>
            <figcaption className="mt-3 flex items-center justify-between gap-3">
              <span className="label text-[1.1rem] tracking-[0.04em] text-bone">{shot.caption}</span>
              <Star size={14} className="text-blood" />
            </figcaption>
          </figure>

          <button type="button" onClick={() => go(1)} aria-label="Foto siguiente" className="grid h-12 w-12 place-items-center bg-ink text-bone shadow-[inset_0_0_0_1px_#ffffff30] transition-colors hover:bg-blood active:scale-95">
            <ArrowRight size={22} weight="bold" />
          </button>

          {/* Sombra de barrotes cayendo sobre el afiche */}
          <div aria-hidden className="pointer-events-none absolute inset-y-[-6%] left-[8%] right-[8%] bg-[repeating-linear-gradient(90deg,transparent_0_54px,#00000070_54px_70px)] blur-[3px] [transform:skewX(-8deg)]" />
        </div>
        <p className="micro mt-6 text-center text-ash-light">Toca la foto para verla a color</p>
      </div>
    </section>
  );
}
