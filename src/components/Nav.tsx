"use client";

import { useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { mapsUrl } from "@/data/site";
import { asset } from "@/lib";
import { Star } from "./Star";

const links = [
  { href: "#historia", label: "La que sostiene" },
  { href: "#galeria", label: "El castillo" },
  { href: "#pecados", label: "Siete pecados" },
  { href: "#carta", label: "La carta" },
  { href: "#visita", label: "Visítanos" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

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
    <header className="ink fixed inset-x-0 top-0 z-40 shadow-[0_1px_0_#ffffff14]">
      <nav aria-label="Principal" className="mx-auto flex h-14 max-w-[1400px] items-center justify-between gap-6 px-4 sm:px-8">
        <a href="#inicio" className="flex items-center gap-2.5" aria-label="El Purgatorio, inicio">
          <img src={asset("/img/gen/emblem.webp")} alt="" width={30} height={30} className="h-[30px] w-[30px]" />
          <span className="label text-[1.45rem] tracking-[0.02em]">El Purgatorio</span>
        </a>

        <ul className="hidden items-center gap-5 lg:flex xl:gap-7">
          {links.map((l, i) => (
            <li key={l.href} className="flex items-center gap-5 xl:gap-7">
              {i > 0 && <Star size={9} className="text-blood" />}
              <a href={l.href} className="label text-[1.12rem] tracking-[0.04em] text-bone/80 transition-colors duration-200 hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href={mapsUrl} target="_blank" rel="noreferrer" className="label hidden h-9 items-center bg-blood px-4 text-[1.05rem] tracking-[0.06em] text-white transition-colors duration-200 hover:bg-bone hover:text-ink sm:inline-flex">
          Cómo llegar
        </a>

        <button type="button" onClick={() => setOpen(true)} className="grid h-11 w-11 place-items-center lg:hidden" aria-label="Abrir menú" aria-expanded={open}>
          <List size={28} weight="light" />
        </button>
      </nav>

      {open && (
        <div role="dialog" aria-modal="true" aria-label="Menú" className="blood printed fixed inset-0 z-50 flex flex-col px-6 pb-10 pt-3 lg:hidden">
          <div className="relative z-10 flex justify-end">
            <button type="button" onClick={() => setOpen(false)} className="grid h-11 w-11 place-items-center" aria-label="Cerrar menú">
              <X size={28} weight="light" />
            </button>
          </div>
          <ul className="relative z-10 mt-4 flex flex-1 flex-col justify-center gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="display block text-[3.6rem] font-[300]">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={mapsUrl} target="_blank" rel="noreferrer" className="btn relative z-10 justify-center bg-bone text-ink">
            Cómo llegar
          </a>
        </div>
      )}
    </header>
  );
}
