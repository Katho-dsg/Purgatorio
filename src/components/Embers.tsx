"use client";

import { useEffect, useRef } from "react";

type P = { x: number; y: number; vx: number; vy: number; life: number; max: number; r: number; uv: boolean };

// Brasas que suben desde las antorchas y algunas motas de luz negra desde la puerta del fondo.
export function Embers() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let w = 0, h = 0, raf = 0, visible = true;
    const ps: P[] = [];

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const spawn = (): P => {
      const uv = Math.random() < 0.18;
      const src = uv ? 0.5 : Math.random() < 0.5 ? 0.16 : 0.84;
      return {
        x: w * src + (Math.random() - 0.5) * w * (uv ? 0.08 : 0.05),
        y: h * (uv ? 0.62 : 0.48) + Math.random() * 20,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -(0.25 + Math.random() * 0.7),
        life: 0,
        max: 220 + Math.random() * 260,
        r: 0.6 + Math.random() * 1.6,
        uv,
      };
    };

    const count = window.innerWidth < 640 ? 34 : 70;
    const frame = () => {
      raf = requestAnimationFrame(frame);
      if (!visible) return;
      ctx.clearRect(0, 0, w, h);
      while (ps.length < count) ps.push(spawn());
      ctx.globalCompositeOperation = "lighter";
      for (let i = ps.length - 1; i >= 0; i--) {
        const p = ps[i];
        p.life++;
        p.vx += (Math.random() - 0.5) * 0.04;
        p.x += p.vx;
        p.y += p.vy;
        const t = p.life / p.max;
        if (t >= 1 || p.y < -10) {
          ps.splice(i, 1);
          continue;
        }
        const a = Math.sin(Math.PI * t) * 0.9;
        ctx.fillStyle = p.uv ? `rgba(140,120,255,${a})` : `rgba(255,${80 + Math.floor(70 * (1 - t))},50,${a})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.uv ? "#7c6cff" : "#ff3b2f";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(canvas);
    frame();
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  return <canvas ref={ref} aria-hidden className="pointer-events-none absolute inset-0 -z-[5] h-full w-full" />;
}
