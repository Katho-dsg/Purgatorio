import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-14">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-5 px-4 text-center sm:px-8">
        <img src="/img/gen/emblem.webp" alt="" aria-hidden width={88} height={88} className="h-[88px] w-[88px] drop-shadow-[0_0_18px_#c1121f88]" />
        <p className="bg-ink px-3 py-0.5 font-cond text-[1.8rem] font-semibold uppercase tracking-[0.04em] text-bone ring-1 ring-white/15">El Purgatorio</p>
        <p className="font-script text-[2rem] leading-none text-bone/85">{site.tagline}</p>
        <p className="font-cond text-[1rem] uppercase tracking-[0.12em] text-bone-dim">
          {site.place} · {site.address}
        </p>
        <p className="text-[0.95rem] text-bone-dim/80">© El Purgatorio, Bogotá</p>
      </div>
    </footer>
  );
}
