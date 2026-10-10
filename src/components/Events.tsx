import { asset } from "@/lib";
import { instagramUrl, site } from "@/data/site";
import { SectionTitle } from "./SectionTitle";

const events = [
  {
    src: asset("/img/fotos/tarot.webp"),
    alt: "Afiche de Tarot en El Purgatorio, con un castillo y una luna",
    title: "Tarot en el castillo",
    text: "Noches de lectura con el Oráculo de cristal.",
    span: "md:col-span-5 md:row-span-2",
  },
  {
    src: asset("/img/fotos/fuego.webp"),
    alt: "Artista girando fuego en la noche",
    title: "Noches de fuego",
    text: "Performance, música y fuego en el patio.",
    span: "md:col-span-7",
  },
  {
    src: asset("/img/fotos/incomodate.webp"),
    alt: "Afiche del taller de dibujo ciego Incomódate",
    title: "Incomódate",
    text: "Taller de dibujo ciego: belleza en lo imperfecto.",
    span: "md:col-span-3",
  },
  {
    src: asset("/img/fotos/ecos.webp"),
    alt: "Afiche Ecos de un amor después de la muerte, con calaveras para pintar",
    title: "Ecos de un amor",
    text: "Kits para pintar calaveras, para ir en pareja o en familia.",
    span: "md:col-span-4",
  },
];

export function Events() {
  return (
    <section id="eventos" aria-labelledby="eventos-title" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
        <SectionTitle id="eventos-title">Así se vive el castillo</SectionTitle>
        <p data-reveal className="mx-auto mt-5 max-w-[50ch] text-center text-[1.2rem] text-bone/85">
          Talleres, lecturas y noches de arte para todo público. Las nuevas fechas se anuncian en nuestro Instagram.
        </p>

        <div className="mt-14 grid gap-5 md:auto-rows-[minmax(15rem,auto)] md:grid-cols-12">
          {events.map((e, k) => (
            <article
              key={e.title}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${k * 90}ms` }}
              className={`group relative min-h-[22rem] overflow-hidden rounded-[6px] bg-ink-2 shadow-[0_0_0_1px_#ffffff14] ${e.span}`}
            >
              <img
                src={e.src}
                alt={e.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-gothic text-[2rem] font-extrabold leading-none text-[#fff3f1] [text-shadow:0_0_14px_#c1121f]">{e.title}</h3>
                <p className="mt-2 max-w-[36ch] text-[1.08rem] leading-snug text-bone/90">{e.text}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center font-cond text-[1.15rem] uppercase tracking-[0.08em] text-bone-dim">
          {instagramUrl ? (
            <>
              Próximas fechas en{" "}
              <a href={instagramUrl} target="_blank" rel="noreferrer" className="text-bone underline decoration-blood underline-offset-4 hover:text-white">
                @{site.instagram}
              </a>
            </>
          ) : (
            <span className="text-[#ff8a95]">[Instagram por confirmar]</span>
          )}
        </p>
      </div>
    </section>
  );
}
