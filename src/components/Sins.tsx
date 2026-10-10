"use client";

import { useState } from "react";
import { classics, sins } from "@/data/menu";
import { SectionTitle } from "./SectionTitle";

// "Confiesa tu pecado": eliges un pecado y la vitrina muestra su cóctel real de la carta.
export function Sins() {
  const [idx, setIdx] = useState(2);
  const sin = sins[idx];

  return (
    <section
      id="pecados"
      aria-labelledby="pecados-title"
      className="relative isolate overflow-hidden py-24 sm:py-32"
      style={{ ["--g" as string]: sin.glow }}
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 transition-[background] duration-700"
        style={{ background: `radial-gradient(60% 50% at 28% 55%, ${sin.glow}26, transparent 70%), radial-gradient(40% 40% at 85% 20%, #5a46ff1f, transparent 70%), #0a0607` }}
      />

      <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
        <SectionTitle id="pecados-title" tone="uv">
          Confiesa tu pecado
        </SectionTitle>
        <p data-reveal className="mx-auto mt-5 max-w-[48ch] text-center text-[1.2rem] text-bone/85">
          Siete pecados, siete cócteles de autor. Elige el tuyo y te servimos su absolución.
        </p>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
          {/* Vitrina en forma de arco gótico */}
          <div data-reveal className="relative mx-auto w-full max-w-[520px]">
            <div
              className="relative aspect-[4/5] overflow-hidden rounded-t-[50%_40%] bg-ink-2 transition-shadow duration-700"
              style={{ boxShadow: `0 0 0 1px #ffffff1a, 0 0 0 8px #120a0c, 0 0 0 9px ${sin.glow}88, 0 30px 80px #000, 0 0 70px ${sin.glow}55` }}
            >
              {sins.map((s, k) => (
                <img
                  key={s.id}
                  src={s.image}
                  alt={k === idx ? `Cóctel ${s.name}` : ""}
                  aria-hidden={k !== idx}
                  loading={k === idx ? "eager" : "lazy"}
                  className="absolute inset-0 h-full w-full object-cover transition-[opacity,filter,transform] duration-700 ease-[var(--ease-out-expo)]"
                  style={{
                    opacity: k === idx ? 1 : 0,
                    filter: k === idx ? "none" : "blur(8px)",
                    transform: k === idx ? "scale(1)" : "scale(1.04)",
                  }}
                />
              ))}
              <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/90 to-transparent" />
              <p
                aria-hidden
                className="absolute inset-x-0 bottom-5 text-center font-gothic text-[clamp(3rem,7vw,4.6rem)] font-extrabold leading-none text-[#fff3f1] transition-[text-shadow] duration-700"
                style={{ textShadow: `0 0 10px ${sin.glow}, 0 0 30px ${sin.glow}aa` }}
              >
                {sin.name}
              </p>
            </div>
          </div>

          <div>
            <div role="radiogroup" aria-label="Elige un pecado" className="grid grid-cols-4 gap-2.5 sm:grid-cols-7 lg:grid-cols-4 xl:grid-cols-7">
              {sins.map((s, k) => {
                const on = k === idx;
                return (
                  <button
                    key={s.id}
                    type="button"
                    role="radio"
                    aria-checked={on}
                    onClick={() => setIdx(k)}
                    className="group relative aspect-[3/4] overflow-hidden rounded-[6px] bg-ink-2 transition-[transform,box-shadow] duration-200 active:scale-[0.97]"
                    style={{
                      boxShadow: on
                        ? `0 0 0 2px ${s.glow}, 0 0 22px ${s.glow}99`
                        : "0 0 0 1px #ffffff22",
                    }}
                  >
                    <img
                      src={s.image}
                      alt=""
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-300 group-hover:scale-105"
                      style={{ opacity: on ? 1 : 0.55 }}
                    />
                    <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink to-transparent px-1 pb-1.5 pt-6 text-center font-cond text-[0.95rem] font-semibold uppercase tracking-[0.06em] text-bone">
                      {s.name}
                    </span>
                  </button>
                );
              })}
            </div>

            <div key={sin.id} className="mt-9 animate-[fade_500ms_var(--ease-out-expo)]" aria-live="polite">
              <div className="flex items-baseline justify-between gap-6">
                <h3 className="font-gothic text-[clamp(2.4rem,4vw,3.2rem)] font-extrabold leading-none text-[#fff3f1]" style={{ textShadow: `0 0 18px ${sin.glow}99` }}>
                  {sin.name}
                </h3>
                <p className="font-cond text-[2rem] font-semibold tabular-nums text-bone">{sin.price}</p>
              </div>
              <p className="mt-4 max-w-[58ch] text-[1.25rem] leading-relaxed text-bone/90">{sin.description}</p>
            </div>

            <div className="mt-12 pt-8 shadow-[0_-1px_0_#ffffff14]">
              <p className="font-script text-[2.1rem] leading-none text-bone/90">Y para los clásicos...</p>
              <ul className="mt-5 grid gap-x-10 gap-y-4 md:grid-cols-2 lg:grid-cols-1 2xl:grid-cols-3">
                {classics.map((c) => (
                  <li key={c.name}>
                    <p className="flex items-baseline gap-2 font-cond text-[1.25rem] font-semibold uppercase tracking-[0.04em]">
                      <span className="whitespace-nowrap">{c.name}</span>
                      <span className="leader" />
                      <span className="tabular-nums">{c.price}</span>
                    </p>
                    <p className="mt-1 text-[1.02rem] leading-snug text-bone-dim">{c.detail}</p>
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
