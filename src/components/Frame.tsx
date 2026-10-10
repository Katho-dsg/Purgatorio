import { asset } from "@/lib";
type Props = { src: string; alt: string; className?: string; glow?: string; loading?: "lazy" | "eager" };

// Marco barroco generado (rosas y espinas) con la foto asomando por la abertura.
export function Frame({ src, alt, className = "", glow, loading = "lazy" }: Props) {
  return (
    <div
      className={`relative aspect-[1086/1448] ${className}`}
      style={glow ? { filter: `drop-shadow(0 0 22px ${glow})` } : undefined}
    >
      <img
        src={src}
        alt={alt}
        loading={loading}
        className="absolute left-[19.5%] right-[19.5%] top-[24.5%] bottom-[23%] h-[52.5%] w-[61%] object-cover"
      />
      <img src={asset("/img/gen/frame.webp")} alt="" aria-hidden loading={loading} className="pointer-events-none absolute inset-0 h-full w-full" />
    </div>
  );
}
