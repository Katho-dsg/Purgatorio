import { instagramUrl, site } from "@/data/site";
import { asset } from "@/lib";
import { Star } from "./Star";

const events = [
  { src: asset("/img/fotos/tarot.webp"), alt: "Afiche de Tarot en El Purgatorio", tag: "Oráculo", title: "Tarot en el castillo", text: "Noches de lectura con el Oráculo de cristal.", span: "md:col-span-5 md:row-span-2" },
  { src: asset("/img/fotos/fuego.webp"), alt: "Artista girando fuego en la noche", tag: "Patio", title: "Noches de fuego", text: "Performance, música y fuego en el patio.", span: "md:col-span-7" },
  { src: asset("/img/fotos/incomodate.webp"), alt: "Afiche del taller de dibujo ciego Incomódate", tag: "Taller", title: "Incomódate", text: "Dibujo ciego: belleza en lo imperfecto.", span: "md:col-span-3" },
  { src: asset("/img/fotos/ecos.webp"), alt: "Afiche Ecos de un amor después de la muerte", tag: "Kit", title: "Ecos de un amor", text: "Calaveras para pintar en pareja o en familia.", span: "md:col-span-4" },
];

export function Events() {
  return (
    <section id="eventos" aria-labelledby="eventos-title" className="ink relative pb-[calc(11.4vw+4rem)] pt-20 sm:pt-28">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
        <div className="grid items-end gap-6 md:grid-cols-[1fr_auto]">
          <h2 id="eventos-title" data-reveal className="display text-[clamp(3.8rem,10vw,9rem)]">
            Así se vive
            <br />
            <span className="text-blood">el castillo</span>
          </h2>
          <p data-reveal className="max-w-[34ch] text-[1.1rem] text-bone/85 md:pb-3 md:text-right">
            Talleres, lecturas y noches de arte para todo público. Las nuevas fechas se anuncian en Instagram.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:auto-rows-[minmax(16rem,auto)] md:grid-cols-12">
          {events.map((e, k) => (
            <article key={e.title} data-reveal style={{ ["--reveal-delay" as string]: `${k * 90}ms` }} className={`group relative min-h-[24rem] ${e.span}`}>
              <div className="duo absolute inset-0">
                <img src={e.src} alt={e.alt} loading="lazy" className="h-full w-full object-cover group-hover:scale-[1.03]" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/20 to-transparent" />
              <p className="label absolute left-4 top-4 bg-ink px-2 py-1 text-[1rem] tracking-[0.06em] text-bone">{e.tag}</p>
              <Star size={14} className="absolute right-4 top-5 text-bone" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="display text-[clamp(2.4rem,3.4vw,3.2rem)] text-bone">{e.title}</h3>
                <p className="mt-2 max-w-[34ch] text-[1.02rem] leading-snug text-bone/90">{e.text}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="label mt-8 text-center text-[1.15rem] tracking-[0.06em] text-ash-light">
          Próximas fechas en{" "}
          <a href={instagramUrl} target="_blank" rel="noreferrer" className="text-bone underline decoration-blood underline-offset-4">
            @{site.instagram}
          </a>
        </p>
      </div>
    </section>
  );
}
