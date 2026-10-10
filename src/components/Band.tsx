import { Star } from "./Star";

type Props = { left: string; right: string; children: React.ReactNode; className?: string };

// Banda negra de afiche: palabra, estrella, microtexto, estrella, palabra.
export function Band({ left, right, children, className = "" }: Props) {
  return (
    <div className={`ink relative z-10 ${className}`}>
      <div className="mx-auto grid max-w-[1400px] grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-5 sm:gap-8 sm:px-8 sm:py-6">
        <p className="label text-[clamp(1.6rem,3.4vw,2.8rem)]">{left}</p>
        <div className="flex items-center justify-center gap-4 sm:gap-8">
          <Star size={20} className="hidden sm:inline-block" />
          <p className="micro hidden max-w-[62ch] text-center text-ash-light md:block">{children}</p>
          <Star size={20} className="hidden sm:inline-block" />
          <Star size={16} className="sm:hidden" />
        </div>
        <p className="label text-right text-[clamp(1.6rem,3.4vw,2.8rem)]">{right}</p>
      </div>
    </div>
  );
}
