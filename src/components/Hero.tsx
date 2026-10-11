import { ArrowDownRight } from "@phosphor-icons/react/dist/ssr";
import { asset } from "@/lib";
import { site } from "@/data/site";
import { Star } from "./Star";

const word = "Purgatorio".split("");

// Afiche de entrada: papel, el nombre en serif alta y la mujer velada impresa en tramado.
export function Hero() {
  return (
    <section id="inicio" className="paper relative isolate flex min-h-[100svh] flex-col overflow-hidden pt-[56px]">
      <div className="relative mx-auto w-full max-w-[1400px] px-4 sm:px-8">
        <div className="relative flex items-start justify-between pt-5 sm:pt-7">
          <Star size={22} className="mt-1" />
          <p className="label text-center text-[clamp(0.95rem,1.25vw,1.2rem)] leading-tight tracking-[0.04em]">
            Lo que nadie dice
            <br />
            lo guardan las piedras del castillo
          </p>
          <Star size={22} className="mt-1" />
        </div>

        <h1 className="relative mt-3 sm:mt-4" aria-label="El Purgatorio">
          <span aria-hidden className="label absolute -top-1 left-0 text-[clamp(1.1rem,2vw,1.8rem)] text-blood sm:top-1">
            El
          </span>
          <span aria-hidden className="display block overflow-hidden whitespace-nowrap text-center text-[clamp(4rem,17.6vw,15.8rem)]">
            {word.map((ch, i) => (
              <span key={i} className={`rise ${i >= 5 ? "text-blood" : ""}`} style={{ ["--i" as string]: i }}>
                {ch}
              </span>
            ))}
          </span>
        </h1>

        <div className="pointer-events-none absolute inset-x-4 top-[calc(100%+2rem)] z-20 hidden justify-between sm:inset-x-8 md:flex">
          <div className="pointer-events-auto max-w-[15rem]">
            <p className="label text-[clamp(2rem,3vw,2.9rem)] text-blood">
              Arte, café
              <br />y algo más
            </p>
          </div>
          <div className="pointer-events-auto max-w-[15rem] text-right">
            <p className="label text-[1.05rem] tracking-[0.03em]">Una sección del</p>
            <p className="label mt-1 text-[clamp(2rem,3vw,2.9rem)] text-blood">
              Castillo del
              <br />
              Mono Osorio
            </p>
            <p className="label mt-3 text-[1.05rem] tracking-[0.03em]">{site.address}</p>
          </div>
        </div>
      </div>

      {/* Muñeco enjaulado impreso en tramado, por delante del panel rojo */}
      <div className="relative z-10 mx-auto -mt-[clamp(1.5rem,5vw,4.5rem)] flex w-full flex-1 justify-center">
        <img
          src={asset("/img/v2/doll.png")}
          alt="Muñeco tatuado con un 666 en la panza, encerrado en una jaula de alambre"
          width={1200}
          height={1800}
          fetchPriority="high"
          className="develop pointer-events-none absolute top-0 w-[min(92vw,560px)] md:w-[min(34vw,520px)]"
        />
        <Star size={44} className="absolute top-[-1.5rem] text-blood" />
      </div>

      {/* Panel rojo rasgado: sin z-index propio, para que el texto quede sobre la estatua */}
      <div className="relative mt-[clamp(14rem,30vw,20rem)] md:mt-[calc(min(51vw,780px)-9vw)]">
        <div aria-hidden className="torn text-blood-dark" />
        <div aria-hidden className="printed absolute inset-x-0 bottom-0 top-[calc(100vw*174/1536-1px)] overflow-hidden bg-blood-dark">
          <img
            src={asset("/img/v2/doll-red.png")}
            alt=""
            className="halftone-light pointer-events-none absolute bottom-0 left-[-6%] hidden w-[26vw] max-w-[380px] opacity-60 md:block"
          />
          <img
            src={asset("/img/v2/doll-red.png")}
            alt=""
            className="halftone-light pointer-events-none absolute bottom-0 right-[-6%] hidden w-[26vw] max-w-[380px] -scale-x-100 opacity-60 md:block"
          />
        </div>
        <div className="relative z-20 mx-auto flex max-w-[1400px] flex-col gap-6 px-4 pb-7 pt-4 sm:px-8 md:flex-row md:items-end md:justify-between md:pb-9">
          <p className="display text-[clamp(3.2rem,8vw,7.5rem)] font-[300] text-bone [text-shadow:0_2px_30px_#0008]">
            Entre la piedra
            <br />y la luz negra
          </p>
          <div className="flex flex-wrap gap-3 md:flex-col md:items-end">
            <a href="#carta" className="btn bg-bone text-ink hover:bg-blood hover:text-white">
              <ArrowDownRight size={22} weight="bold" aria-hidden />
              Ver la carta
            </a>
            <a href="#pecados" className="btn btn-ghost text-bone">
              Siete pecados
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
