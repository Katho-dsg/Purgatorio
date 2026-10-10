"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { Frame } from "./Frame";
import { SectionTitle } from "./SectionTitle";

type Shot = { src: string; alt: string; caption: string };
type Room = { id: string; label: string; glow: string; shots: Shot[] };

const rooms: Room[] = [
  {
    id: "salones",
    label: "Los salones",
    glow: "#ff2b3f",
    shots: [
      { src: "/img/fotos/arco.webp", alt: "Arco de piedra del castillo pintado de rojo y blanco", caption: "Arcos de piedra, pintados de sangre y hueso" },
      { src: "/img/fotos/sala-roja.webp", alt: "Salón rojo con biblioteca y sillón morado", caption: "El salón rojo y su biblioteca" },
      { src: "/img/fotos/rostro.webp", alt: "Gran pintura de un rostro de mujer en una pared roja", caption: "Rostros que no apartan la mirada" },
      { src: "/img/fotos/patio.webp", alt: "Personas conversando en el patio del castillo", caption: "El patio, bajo las luces" },
    ],
  },
  {
    id: "uv",
    label: "Luz negra",
    glow: "#7c6cff",
    shots: [
      { src: "/img/fotos/sala-uv.webp", alt: "Sala de luz negra con un niño de yeso y una pintura fluorescente", caption: "La sala de luz negra" },
      { src: "/img/fotos/galeria-uv.webp", alt: "Pared de cuadros bajo luz ultravioleta", caption: "Obra que solo se ve en la oscuridad" },
      { src: "/img/fotos/muneco-jaula.webp", alt: "Muñeco tatuado dentro de una jaula de alambre", caption: "Encierros" },
      { src: "/img/fotos/figura-uv.webp", alt: "Figura con máscara rosada bajo luz azul", caption: "Lo que brilla cuando se apaga la luz" },
    ],
  },
  {
    id: "callan",
    label: "Lo que callan",
    glow: "#ff3dbb",
    shots: [
      { src: "/img/fotos/marco-brazos.webp", alt: "Brazos con cicatrices dentro de un marco dorado", caption: "Las marcas que se enmarcan" },
      { src: "/img/fotos/muneco-rejas.webp", alt: "Muñeco tatuado detrás de unos barrotes", caption: "Detrás de los barrotes" },
      { src: "/img/fotos/muneco-cafe.webp", alt: "Muñeco con hojas secas sosteniendo una taza de café", caption: "Compañía para el café" },
      { src: "/img/fotos/incomodate.webp", alt: "Afiche del taller de dibujo ciego Incomódate", caption: "Incomódate: belleza en lo imperfecto" },
    ],
  },
  {
    id: "barra",
    label: "La barra",
    glow: "#f3c58a",
    shots: [
      { src: "/img/fotos/taza-calavera.webp", alt: "Espresso cayendo en una taza de calavera", caption: "El espresso de la casa" },
      { src: "/img/fotos/coctel.webp", alt: "Cóctel espumoso en una mesa de mosaico", caption: "Cócteles en el patio" },
      { src: "/img/fotos/chai.webp", alt: "Chai rosa en copa de corazón", caption: "Chai de rosas" },
      { src: "/img/fotos/vino.webp", alt: "Copa de vino tinto y muñeco de terciopelo", caption: "Vino para los fríos bogotanos" },
    ],
  },
];

export function Gallery() {
  const [roomIdx, setRoomIdx] = useState(0);
  const [i, setI] = useState(0);
  const room = rooms[roomIdx];
  const n = room.shots.length;
  const at = (k: number) => room.shots[(k + n) % n];
  const go = (d: number) => setI((v) => (v + d + n) % n);

  return (
    <section
      id="galeria"
      aria-labelledby="galeria-title"
      className="relative isolate overflow-hidden py-24 sm:py-32"
      style={{ backgroundImage: "linear-gradient(#0a0607 0%, #0a0607b8 18%, #0a0607b8 82%, #0a0607 100%), url(/img/gen/wall.webp)", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
        <SectionTitle id="galeria-title">El castillo por dentro</SectionTitle>
        <p data-reveal className="mx-auto mt-5 max-w-[46ch] text-center text-[1.2rem] text-bone/85">
          Una sección del castillo convertida en casa de cultura. Recorre sus salas.
        </p>

        <div role="tablist" aria-label="Salas" className="no-scrollbar -mx-4 mt-10 flex gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:gap-5 sm:overflow-visible sm:px-0">
          {rooms.map((r, k) => {
            const on = k === roomIdx;
            return (
              <span key={r.id} className="plaque-wrap shrink-0" style={{ ["--plaque-glow" as string]: r.glow }}>
                <button
                  role="tab"
                  aria-selected={on}
                  aria-controls="galeria-panel"
                  onClick={() => {
                    setRoomIdx(k);
                    setI(0);
                  }}
                  className="plaque plaque-sm"
                  style={{
                    ["--plaque-glow" as string]: r.glow,
                    color: on ? "#fff" : r.glow,
                    opacity: on ? 1 : 0.8,
                    boxShadow: on
                      ? `inset 0 0 0 1px #ffffff30, inset 0 0 0 4px #0a0607, inset 0 0 0 5px ${r.glow}, inset 0 0 28px ${r.glow}66`
                      : undefined,
                  }}
                >
                  {r.label}
                </button>
              </span>
            );
          })}
        </div>

        <div id="galeria-panel" role="tabpanel" aria-label={room.label} className="relative mt-12">
          <div className="grid grid-cols-[1fr] items-center justify-items-center md:grid-cols-[1fr_1.25fr_1fr] md:gap-2 lg:gap-6">
            <button type="button" onClick={() => go(-1)} className="hidden w-full max-w-[300px] opacity-55 transition-opacity duration-300 hover:opacity-90 md:block" aria-label="Foto anterior">
              <Frame key={`p-${room.id}-${i}`} src={at(i - 1).src} alt="" />
            </button>
            <figure key={`c-${room.id}-${i}`} className="w-full max-w-[400px] animate-[fade_500ms_var(--ease-out-expo)]">
              <Frame src={at(i).src} alt={at(i).alt} glow={`${room.glow}66`} />
              <figcaption className="-mt-2 text-center font-gothic text-[1.45rem] font-semibold text-bone" aria-live="polite">
                {at(i).caption}
              </figcaption>
            </figure>
            <button type="button" onClick={() => go(1)} className="hidden w-full max-w-[300px] opacity-55 transition-opacity duration-300 hover:opacity-90 md:block" aria-label="Foto siguiente">
              <Frame key={`n-${room.id}-${i}`} src={at(i + 1).src} alt="" />
            </button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-6">
            {[-1, 1].map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => go(d)}
                aria-label={d < 0 ? "Foto anterior" : "Foto siguiente"}
                className="grid h-14 w-14 place-items-center rounded-full bg-[radial-gradient(circle_at_50%_30%,#3a2a2d,#0c0607)] text-bone shadow-[inset_0_0_0_1px_#ffffff22,inset_0_0_0_4px_#0a0607,inset_0_0_0_5px_var(--g),0_6px_16px_#000a] transition-[transform,box-shadow] duration-150 hover:shadow-[inset_0_0_0_1px_#ffffff22,inset_0_0_0_4px_#0a0607,inset_0_0_0_5px_var(--g),0_0_18px_var(--g)] active:scale-95"
                style={{ ["--g" as string]: room.glow }}
              >
                {d < 0 ? <ArrowLeft size={22} weight="bold" color={room.glow} /> : <ArrowRight size={22} weight="bold" color={room.glow} />}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
