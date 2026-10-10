"use client";

import { useEffect } from "react";

// Marca como visibles los elementos [data-reveal] cuando entran en pantalla.
export function RevealObserver() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          // Lo que ya quedó arriba (saltos con anclas) también se muestra.
          if (e.isIntersecting || e.boundingClientRect.top < 0) {
            e.target.setAttribute("data-shown", "");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
