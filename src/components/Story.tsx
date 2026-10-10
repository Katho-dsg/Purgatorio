import { asset } from "@/lib";
// "La que sostiene": la historia de la figura del logo, bajo la luna roja.
export function Story() {
  return (
    <section id="historia" className="relative isolate -mt-[30px] overflow-hidden pb-28 pt-36 sm:pb-36 sm:pt-44">
      <img
        src={asset("/img/gen/moon.webp")}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_center] opacity-90"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#0a0607f2_0%,#0a0607c0_38%,#0a060722_70%),linear-gradient(#0a0607_0%,transparent_22%,transparent_78%,#0a0607_100%)]" />
      {/* Humo que se mueve lento en las esquinas. */}
      <div aria-hidden className="fog absolute -left-24 top-10 -z-10 h-72 w-96 rounded-full bg-[radial-gradient(closest-side,#3a2f4a99,transparent)] blur-2xl" />
      <div aria-hidden className="fog absolute -bottom-10 left-1/4 -z-10 h-64 w-[34rem] rounded-full bg-[radial-gradient(closest-side,#5e081266,transparent)] blur-3xl [animation-duration:40s]" />

      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-4 sm:px-8 lg:grid-cols-[minmax(0,40rem)_1fr]">
        <div>
          <h2 data-reveal className="neon font-gothic text-[clamp(2.8rem,6.5vw,5.2rem)] font-extrabold leading-[0.98]">
            La que sostiene
          </h2>
          <div className="mt-8 space-y-5 text-[clamp(1.15rem,1.5vw,1.35rem)] leading-relaxed text-bone/90">
            <p data-reveal style={{ ["--reveal-delay" as string]: "80ms" }}>
              Nuestra figura no es una musa. Es una mujer velada que carga en brazos lo que nadie le ayuda a sostener.
            </p>
            <p data-reveal style={{ ["--reveal-delay" as string]: "160ms" }}>
              En El Purgatorio el arte habla de ese dolor que no se cuenta: el que se hereda, el que se calla, el que se
              sirve a la mesa con una sonrisa.
            </p>
            <p data-reveal style={{ ["--reveal-delay" as string]: "240ms" }}>
              No venimos a mirarla. Venimos a escucharla, con un café en la mano, entre las piedras de un castillo.
            </p>
          </div>
          <p data-reveal className="mt-10 font-script text-[2.4rem] leading-none text-[#ff8a95]" style={{ ["--reveal-delay" as string]: "320ms" }}>
            Un lugar para todos
          </p>
        </div>
        <div aria-hidden className="hidden lg:block" />
      </div>
    </section>
  );
}
