"use client";

import { useState } from "react";
import { menu } from "@/data/menu";
import { Star } from "./Star";

// La carta como un pliego impreso.
export function Carta() {
  const [idx, setIdx] = useState(0);
  const cat = menu[idx];

  return (
    <section id="carta" aria-labelledby="carta-title" className="paper relative">
      <div aria-hidden className="torn absolute inset-x-0 top-0 -translate-y-[calc(100%-1px)] text-paper" />
      <div className="mx-auto max-w-[1400px] px-4 pb-20 pt-14 sm:px-8 sm:pb-28 sm:pt-20">
        <div className="flex items-start justify-between">
          <Star size={22} />
          <p className="label text-center text-[clamp(0.95rem,1.25vw,1.2rem)] leading-tight tracking-[0.04em]">
            Café, cocina y pecados
            <br />
            servidos dentro del castillo
          </p>
          <Star size={22} />
        </div>
        <h2 id="carta-title" data-reveal className="display mt-4 text-center text-[clamp(5rem,17vw,15rem)]">
          La <span className="text-blood">carta</span>
        </h2>

        <div role="tablist" aria-label="Categorías de la carta" className="no-scrollbar sticky top-14 z-30 -mx-4 mt-8 flex items-center gap-1 overflow-x-auto border-y border-ink/20 bg-paper px-4 sm:static sm:mx-0 sm:justify-center sm:bg-transparent sm:px-0">
          {menu.map((c, k) => {
            const on = k === idx;
            return (
              <button
                key={c.id}
                role="tab"
                aria-selected={on}
                aria-controls="carta-panel"
                id={`tab-${c.id}`}
                onClick={() => setIdx(k)}
                className={`label flex h-14 shrink-0 items-center gap-2 px-3 text-[1.3rem] tracking-[0.03em] transition-colors duration-200 sm:px-4 ${
                  on ? "text-blood" : "text-ink/60 hover:text-ink"
                }`}
              >
                {on && <span className="star text-blood" style={{ ["--s" as string]: "11px" }} aria-hidden />}
                {c.title}
              </button>
            );
          })}
        </div>

        <div
          id="carta-panel"
          role="tabpanel"
          aria-labelledby={`tab-${cat.id}`}
          key={cat.id}
          className="mt-12 grid animate-[fade_500ms_var(--ease-out-expo)] gap-12 lg:grid-cols-[minmax(0,24rem)_minmax(0,1fr)] lg:gap-16"
        >
          <figure className="mx-auto w-full max-w-[340px] lg:sticky lg:top-24 lg:max-w-none lg:self-start">
            <img src={cat.image.src} alt={cat.image.alt} loading="lazy" className="halftone w-full" />
            <figcaption className="label mt-3 flex items-center justify-between text-[1.05rem] tracking-[0.04em]">
              <span>{cat.title}</span>
              <span className="text-blood">El Purgatorio</span>
            </figcaption>
          </figure>

          <div className="space-y-12">
            {cat.intro && <p className="display text-[clamp(2.2rem,3.4vw,3rem)] font-[300] normal-case leading-[1]">{cat.intro}</p>}
            {cat.groups.map((g, gi) => (
              <div key={gi}>
                {g.title && (
                  <h3 className="label mb-5 flex items-center gap-3 text-[1.9rem] text-blood">
                    <span className="star" style={{ ["--s" as string]: "14px" }} aria-hidden />
                    {g.title}
                  </h3>
                )}
                <ul className="grid gap-x-12 gap-y-6 md:grid-cols-2">
                  {g.items.map((it, ii) => (
                    <li key={`${it.name}-${ii}`}>
                      <p className="flex items-baseline gap-2">
                        <span className="display text-[clamp(1.7rem,2.3vw,2.1rem)] font-[420] leading-none">
                          {it.name}
                          {it.note && <span className="label ml-2 align-middle text-[0.95rem] tracking-[0.04em] text-blood">{it.note}</span>}
                        </span>
                        <span className="leader" />
                        <span className="label shrink-0 text-[1.3rem] tabular-nums">{it.price}</span>
                      </p>
                      {it.detail && <p className="mt-1.5 max-w-[52ch] text-[1rem] italic leading-snug text-ash">{it.detail}</p>}
                    </li>
                  ))}
                </ul>
                {g.footnote && <p className="label mt-6 text-[1.1rem] tracking-[0.04em] text-blood">{g.footnote}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
