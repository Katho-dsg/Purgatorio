import { asset } from "@/lib";
// Friso de piedra con inscripción, en el borde entre el pasillo y la historia.
const words = ["Memento mori", "Arte, café y algo más", "Entre la piedra y la luz negra", "Lo que no se dice también pesa"];

export function StoneBand() {
  const line = [...words, ...words];
  return (
    <div aria-hidden className="relative z-10 -mt-px">
      <div
        className="relative h-[86px] overflow-hidden bg-stone sm:h-[96px]"
        style={{
          backgroundImage: `linear-gradient(#0a0607aa, #0a0607cc), url(${asset("/img/gen/wall.webp")})`,
          backgroundSize: "cover, 900px auto",
          backgroundPosition: "center",
          clipPath: "polygon(0 0, 100% 0, 100% 72%, 53.5% 72%, 50% 100%, 46.5% 72%, 0 72%)",
        }}
      >
        <div className="absolute inset-x-0 top-[14px] flex h-[34px] items-center overflow-hidden border-y border-blood/50 shadow-[inset_0_0_14px_#c1121f55]">
          <div className="marquee flex w-max shrink-0 gap-10 whitespace-nowrap pr-10">
            {line.map((w, i) => (
              <span key={i} className="neon font-gothic text-[1.15rem] font-semibold tracking-[0.04em] text-[#ffb0b7]">
                {w}
                <span className="ml-10 inline-block h-1.5 w-1.5 rotate-45 bg-blood align-middle" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
