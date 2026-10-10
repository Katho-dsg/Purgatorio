"use client";

import { useState } from "react";
import { classics, sins } from "@/data/menu";
import { asset } from "@/lib";
import { Star } from "./Star";

// Siete pecados: un cónclave de encapuchados y un cóctel por pecado.
export function Sins() {
  const [idx, setIdx] = useState(2);
  const sin = sins[idx];

  return (
    <section id="pecados" aria-labelledby="pecados-title" className="relative isolate overflow-hidden bg-ink text-bone">
      <div className="relative">
        <img src={asset("/img/v2/hooded.webp")} alt="" aria-hidden loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover object-top" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(#0e0b0b66,#0e0b0b22_40%,#0e0b0b_100%)]" />

        <div className="mx-auto max-w-[1400px] px-4 pb-10 pt-12 sm:px-8 sm:pt-16">
          <div className="flex items-start justify-between">
            <div data-reveal>
              <p className="label text-[clamp(2rem,3.6vw,3.2rem)]">Pecado</p>
              <p className="micro mt-2 max-w-[18ch] text-ash-light">Siete cócteles de autor</p>
            </div>
            <div data-reveal className="text-right">
              <p className="label text-[clamp(2rem,3.6vw,3.2rem)]">Absolución</p>
              <p className="micro ml-auto mt-2 max-w-[18ch] text-ash-light">Cada uno a $42.000</p>
            </div>
          </div>

          <h2 id="pecados-title" className="relative mx-auto mt-[clamp(6rem,16vw,14rem)] max-w-[900px]">
            <span className="sr-only">Siete pecados</span>
            <img data-reveal src={asset("/img/v2/pecados.webp")} alt="" className="relative z-10 mx-auto w-[min(88vw,760px)] drop-shadow-[0_6px_30px_#000]" />
            <img src={asset("/img/v2/rose.webp")} alt="" aria-hidden className="pointer-events-none absolute -left-1 bottom-[8%] z-20 w-[15%] min-w-[60px] rotate-[8deg] sm:left-0" />
          </h2>
          <p data-reveal className="mx-auto mt-4 max-w-[46ch] text-center text-[1.15rem] text-bone/90">
            Elige tu pecado y te servimos su absolución.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-4 pb-[calc(11.4vw+4rem)] sm:px-8 sm:pb-[calc(11.4vw+5rem)]">
        <div role="radiogroup" aria-label="Elige un pecado" className="grid grid-cols-4 gap-2 sm:grid-cols-7 sm:gap-3">
          {sins.map((s, k) => {
            const on = k === idx;
            return (
              <button
                key={s.id}
                type="button"
                role="radio"
                aria-checked={on}
                onClick={() => setIdx(k)}
                className={`group relative text-left transition-transform duration-150 active:scale-[0.97] ${on ? "" : "opacity-80 hover:opacity-100"}`}
              >
                <span className="block aspect-[3/4] overflow-hidden bg-ink-2">
                  <img
                    src={s.image}
                    alt=""
                    loading="lazy"
                    className={`h-full w-full object-cover transition-[filter,transform] duration-500 group-hover:scale-105 ${on ? "" : "grayscale-[1] brightness-[1.15] contrast-[1.1]"}`}
                  />
                </span>
                <span className={`label mt-2 flex items-center gap-1.5 text-[1.05rem] tracking-[0.04em] sm:text-[1.2rem] ${on ? "text-white" : "text-bone/75"}`}>
                  {on && <Star size={10} className="text-blood" />}
                  {s.name}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16">
          <div key={sin.id} className="animate-[fade_500ms_var(--ease-out-expo)]" aria-live="polite">
            <div className="flex items-end justify-between gap-6 border-b border-white/15 pb-3">
              <h3 className="display text-[clamp(4rem,9vw,7.5rem)] text-bone">{sin.name}</h3>
              <p className="label pb-2 text-[clamp(1.8rem,3vw,2.4rem)] tabular-nums text-blood">{sin.price}</p>
            </div>
            <p className="mt-5 max-w-[56ch] text-[1.2rem] leading-relaxed text-bone/90">{sin.description}</p>
          </div>

          <div className="blood printed self-start p-6 sm:p-8">
            <div className="relative z-10">
              <p className="label text-[1.8rem]">Y para los clásicos</p>
              <ul className="mt-5 space-y-5">
                {classics.map((c) => (
                  <li key={c.name}>
                    <p className="label flex items-baseline gap-2 text-[1.35rem] tracking-[0.02em]">
                      <span className="whitespace-nowrap">{c.name}</span>
                      <span className="leader" />
                      <span className="tabular-nums">{c.price}</span>
                    </p>
                    <p className="mt-1 text-[1rem] leading-snug text-bone/90">{c.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
