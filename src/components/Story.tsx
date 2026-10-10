import { asset } from "@/lib";
import { Star } from "./Star";

// "La que sostiene": la figura del logo contada en un afiche rojo.
export function Story() {
  return (
    <section id="historia" aria-labelledby="historia-title" className="blood printed overflow-hidden">
      <img
        src={asset("/img/v2/statue-dots.png")}
        alt=""
        aria-hidden
        loading="lazy"
        className="halftone pointer-events-none absolute left-1/2 top-[6%] z-0 w-[min(80vw,620px)] -translate-x-1/2 opacity-60 [mask-image:linear-gradient(#000_55%,transparent)]"
      />
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 pb-16 pt-14 sm:px-8 sm:pb-24 sm:pt-20">
        <div className="flex items-start justify-between gap-6">
          <div data-reveal>
            <p className="label text-[clamp(2.2rem,4vw,3.4rem)]">Sangre</p>
            <Star size={16} className="mt-3" />
          </div>
          <div data-reveal className="text-right">
            <p className="label text-[clamp(2.2rem,4vw,3.4rem)]">Hueso</p>
            <Star size={16} className="ml-auto mt-3" />
          </div>
        </div>

        <h2 id="historia-title" className="relative mx-auto mt-6 max-w-[980px] sm:mt-2">
          <span className="sr-only">La que sostiene</span>
          <img data-reveal src={asset("/img/v2/sostiene.webp")} alt="" className="relative z-10 mx-auto w-[min(92vw,900px)]" />
          <img
            src={asset("/img/v2/rose.webp")}
            alt=""
            aria-hidden
            className="pointer-events-none absolute -left-2 top-[4%] z-20 w-[16%] min-w-[64px] -rotate-6 sm:-left-6"
          />
        </h2>

        <div className="mt-10 grid gap-8 sm:mt-14 md:grid-cols-[1fr_minmax(0,1.4fr)_1fr] md:items-end md:gap-12">
          <div data-reveal>
            <p className="label text-[1.6rem]">Lo que no se cuenta</p>
            <p className="micro mt-3 text-bone/85">
              El dolor que se hereda, el que se calla, el que se sirve a la mesa con una sonrisa.
            </p>
          </div>
          <div data-reveal style={{ ["--reveal-delay" as string]: "120ms" }} className="space-y-4 text-center text-[clamp(1.1rem,1.4vw,1.3rem)] leading-relaxed">
            <p>
              Nuestra figura no es una musa. Es una mujer velada que carga en brazos lo que nadie le ayuda a sostener.
            </p>
            <p>No venimos a mirarla. Venimos a escucharla, con un café en la mano, entre las piedras de un castillo.</p>
          </div>
          <div data-reveal style={{ ["--reveal-delay" as string]: "240ms" }} className="md:text-right">
            <p className="display text-[clamp(4rem,7vw,6.5rem)]">VII</p>
            <p className="micro mt-2 text-bone/85">Siete pecados, siete cócteles. Ninguno se confiesa en voz alta.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
