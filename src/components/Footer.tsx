import { instagramUrl, site } from "@/data/site";
import { asset } from "@/lib";
import { Band } from "./Band";

export function Footer() {
  return (
    <footer className="ink relative overflow-hidden">
      <div className="blood printed">
        <div className="relative z-10 mx-auto flex max-w-[1400px] flex-col items-center px-4 pb-10 pt-14 sm:px-8">
          <img src={asset("/img/v2/purgatorio.webp")} alt="El Purgatorio" className="w-[min(92vw,960px)]" />
          <p className="label mt-2 text-[1.4rem] tracking-[0.06em]">{site.tagline}</p>
          <a href={instagramUrl} target="_blank" rel="noreferrer" className="label mt-3 text-[1.2rem] tracking-[0.06em] underline decoration-bone/60 underline-offset-4 hover:decoration-bone">
            @{site.instagram}
          </a>
        </div>
      </div>
      <Band left="Arte" right="Café">
        {site.place} · {site.address}. Un espacio para todo público.
      </Band>
    </footer>
  );
}
