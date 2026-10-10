"use client";

import { useState } from "react";
import { menu } from "@/data/menu";
import { SectionTitle } from "./SectionTitle";
import { Frame } from "./Frame";

export function Carta() {
  const [idx, setIdx] = useState(0);
  const cat = menu[idx];

  return (
    <section id="carta" aria-labelledby="carta-title" className="relative isolate overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(70%_50%_at_50%_0%,#5e081240,transparent_70%),#0a0607]" />
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
        <SectionTitle id="carta-title">La carta</SectionTitle>

        <div
          role="tablist"
          aria-label="Categorías de la carta"
          className="no-scrollbar -mx-4 mt-10 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0"
        >
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
                className={`shrink-0 px-4 py-2 font-gothic text-[1.3rem] font-semibold transition-[color,text-shadow,box-shadow] duration-200 ${
                  on ? "neon shadow-[inset_0_-2px_0_#ff2b3f]" : "text-bone/70 hover:text-bone"
                }`}
              >
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
          className="mt-12 grid animate-[fade_500ms_var(--ease-out-expo)] gap-12 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-16"
        >
          <div className="mx-auto w-full max-w-[300px] lg:sticky lg:top-28 lg:max-w-none lg:self-start">
            <Frame src={cat.image.src} alt={cat.image.alt} glow="#c1121f55" />
          </div>

          <div className="space-y-12">
            {cat.intro && <p className="font-script text-[2.2rem] leading-tight text-bone/90">{cat.intro}</p>}
            {cat.groups.map((g, gi) => (
              <div key={gi}>
                {g.title && (
                  <h3 className="mb-5 font-gothic text-[2rem] font-extrabold leading-none text-[#ff8a95] [text-shadow:0_0_14px_#c1121f88]">{g.title}</h3>
                )}
                <ul className="grid gap-x-12 gap-y-5 md:grid-cols-2">
                  {g.items.map((it, ii) => (
                    <li key={`${it.name}-${ii}`}>
                      <p className="flex items-baseline gap-2 font-cond text-[1.35rem] font-semibold uppercase leading-tight tracking-[0.03em] text-bone">
                        <span>
                          {it.name}
                          {it.note && <span className="ml-2 font-serif text-[0.95rem] normal-case italic tracking-normal text-bone-dim">({it.note})</span>}
                        </span>
                        <span className="leader" />
                        <span className="shrink-0 tabular-nums">{it.price}</span>
                      </p>
                      {it.detail && <p className="mt-1 max-w-[52ch] text-[1.05rem] italic leading-snug text-bone-dim">{it.detail}</p>}
                    </li>
                  ))}
                </ul>
                {g.footnote && <p className="mt-5 font-cond text-[1.05rem] uppercase tracking-[0.06em] text-[#ff8a95]">{g.footnote}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
