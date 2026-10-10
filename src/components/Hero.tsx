"use client";

import { asset } from "@/lib";

import { useEffect, useRef } from "react";
import { Plaque } from "./Plaque";
import { Embers } from "./Embers";

export function Hero() {
  const root = useRef<HTMLElement>(null);

  // Profundidad sutil siguiendo el cursor: se escriben variables CSS directamente, sin re-render.
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (!matchMedia("(pointer: fine)").matches || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let tx = 0, ty = 0, x = 0, y = 0;
    const onMove = (e: PointerEvent) => {
      tx = e.clientX / window.innerWidth - 0.5;
      ty = e.clientY / window.innerHeight - 0.5;
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const tick = () => {
      x += (tx - x) * 0.08;
      y += (ty - y) * 0.08;
      el.style.setProperty("--px", x.toFixed(4));
      el.style.setProperty("--py", y.toFixed(4));
      raf = Math.abs(tx - x) + Math.abs(ty - y) > 0.0005 ? requestAnimationFrame(tick) : 0;
    };
    el.addEventListener("pointermove", onMove);
    return () => {
      el.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={root}
      id="inicio"
      className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden [--px:0] [--py:0]"
    >
      {/* Escena: caja con la proporción de la imagen para que las antorchas caigan en su sitio. */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -z-10 h-[max(100%,56.25vw)] w-[max(100%,177.78svh)]"
        style={{ transform: "translate(calc(-50% + var(--px) * -18px), calc(-50% + var(--py) * -12px)) scale(1.04)" }}
      >
        <img
          src={asset("/img/gen/hero.webp")}
          alt=""
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <span className="torch absolute left-[15.7%] top-[45%] h-[34%] w-[16%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,#ff3b2fa0,#c1121f40_45%,transparent)] mix-blend-screen" />
        <span
          className="torch absolute left-[84%] top-[44.5%] h-[34%] w-[16%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,#ff3b2fa0,#c1121f40_45%,transparent)] mix-blend-screen"
          style={{ animationDelay: "-1.1s" }}
        />
        <span className="torch absolute left-1/2 top-[62%] h-[40%] w-[22%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,#5a46ff55,transparent)] mix-blend-screen [animation-duration:5s]" />
      </div>

      {/* Viñeta, niebla y fundido hacia la página. */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_30%,#0a0607cc_85%)]" />
      <div aria-hidden className="pointer-events-none absolute inset-x-[-10%] top-[-6%] -z-10 h-[30%]">
        <div className="fog h-full w-full bg-[radial-gradient(ellipse_at_30%_40%,#5e081255,transparent_60%),radial-gradient(ellipse_at_75%_30%,#2a212488,transparent_60%)] blur-2xl" />
      </div>
      <div aria-hidden className="pointer-events-none absolute inset-x-[-10%] bottom-[8%] -z-10 h-[26%]">
        <div className="fog h-full w-full bg-[radial-gradient(ellipse_at_50%_60%,#c9bcb41f,transparent_65%)] blur-2xl [animation-duration:34s]" />
      </div>
      <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-ink" />

      <Embers />

      {/* Objetos flotando a los lados, como reliquias de la barra. */}
      <img
        src={asset("/img/gen/mug.webp")}
        alt=""
        aria-hidden
        className="float pointer-events-none absolute bottom-[6%] left-[-6%] w-[38vw] max-w-[300px] drop-shadow-[0_0_28px_#c1121f88] sm:left-[3%] sm:bottom-[14%] lg:left-[6%] lg:w-[21vw]"
        style={{ ["--rot" as string]: "-8deg", translate: "calc(var(--px) * 26px) calc(var(--py) * 18px)" }}
      />
      <img
        src={asset("/img/gen/wine.webp")}
        alt=""
        aria-hidden
        className="float pointer-events-none absolute bottom-[4%] right-[-8%] w-[34vw] max-w-[270px] drop-shadow-[0_0_28px_#5a46ff77] sm:right-[3%] sm:bottom-[10%] lg:right-[6%] lg:w-[18vw]"
        style={{ ["--rot" as string]: "6deg", animationDelay: "-3.5s", translate: "calc(var(--px) * 30px) calc(var(--py) * 20px)" }}
      />

      <div className="relative z-10 flex max-w-[52rem] flex-col items-center px-4 pb-[18vh] pt-28 text-center sm:pb-16">
        <img
          src={asset("/img/gen/emblem.webp")}
          alt=""
          aria-hidden
          width={120}
          height={120}
          className="h-[clamp(72px,11vh,118px)] w-auto drop-shadow-[0_0_24px_#ff2b3f88]"
        />
        <p className="mt-3 font-script text-[clamp(2rem,4.2vw,3.2rem)] leading-[1.2] text-bone [text-shadow:0_2px_16px_#000]">
          Arte, café y algo más
        </p>
        <h1 className="ignite neon mt-1 font-gothic text-[clamp(3.6rem,10.5vw,8.5rem)] font-extrabold leading-[0.9] tracking-[-0.01em]">
          El Purgatorio
        </h1>
        <p className="mt-5 max-w-[34ch] text-[clamp(1.1rem,1.6vw,1.35rem)] leading-snug text-bone [text-shadow:0_2px_12px_#000]">
          Café, cócteles y cultura en una sección del Castillo del Mono Osorio, en Bogotá.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Plaque href="#carta">Ver la carta</Plaque>
          <Plaque href="#pecados" glow="#7c6cff" size="sm">
            Siete pecados
          </Plaque>
        </div>
      </div>

      <div id="nav-sentinel" aria-hidden className="absolute left-0 top-[40svh] h-px w-px" />
    </section>
  );
}
