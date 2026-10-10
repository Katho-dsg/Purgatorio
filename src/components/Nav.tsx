"use client";

import { useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { mapsUrl } from "@/data/site";

const links = [
  { href: "#historia", label: "La que sostiene" },
  { href: "#galeria", label: "El castillo" },
  { href: "#pecados", label: "Siete pecados" },
  { href: "#carta", label: "La carta" },
  { href: "#visita", label: "Visítanos" },
];

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById("nav-sentinel");
    if (!sentinel) return;
    const io = new IntersectionObserver(([e]) => setSolid(!e.isIntersecting));
    io.observe(sentinel);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,backdrop-filter,box-shadow] duration-500 ${
        solid ? "bg-ink/80 shadow-[0_1px_0_#ffffff10] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav aria-label="Principal" className="mx-auto flex h-[68px] max-w-[1400px] items-center justify-between gap-6 px-4 sm:px-8">
        <a href="#inicio" className="flex items-center gap-3" aria-label="El Purgatorio, inicio">
          <img src="/img/gen/emblem.webp" alt="" width={34} height={34} className="h-[34px] w-[34px] drop-shadow-[0_0_8px_#c1121f99]" />
          <span className="bg-ink px-2.5 py-0.5 font-cond text-[1.35rem] font-semibold uppercase leading-tight tracking-[0.04em] text-bone ring-1 ring-white/15">
            El Purgatorio
          </span>
        </a>

        <ul className="hidden items-center gap-[clamp(1rem,2.4vw,2.5rem)] lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-gothic text-[1.3rem] font-semibold text-bone/85 transition-[color,text-shadow] duration-200 hover:text-[#fff3f1] hover:[text-shadow:0_0_12px_#ff2b3f]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="hidden font-cond text-[1.05rem] font-semibold uppercase tracking-[0.08em] text-bone ring-1 ring-blood/70 transition-[box-shadow,background-color] duration-200 hover:bg-blood/20 hover:shadow-[0_0_18px_#c1121f88] sm:inline-flex sm:h-10 sm:items-center sm:px-4"
        >
          Cómo llegar
        </a>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="grid h-11 w-11 place-items-center text-bone lg:hidden"
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          <List size={28} weight="light" />
        </button>
      </nav>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menú"
          className="fixed inset-0 z-50 flex flex-col bg-ink/97 px-6 pb-10 pt-5 backdrop-blur-md lg:hidden"
        >
          <div className="flex justify-end">
            <button type="button" onClick={() => setOpen(false)} className="grid h-11 w-11 place-items-center" aria-label="Cerrar menú">
              <X size={28} weight="light" />
            </button>
          </div>
          <ul className="mt-6 flex flex-1 flex-col justify-center gap-5 text-center">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="neon font-gothic text-[2.6rem] font-extrabold">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <img src="/img/gen/emblem.webp" alt="" className="mx-auto h-16 w-16 opacity-80" />
        </div>
      )}
    </header>
  );
}
