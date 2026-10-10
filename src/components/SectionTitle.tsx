type Props = { children: React.ReactNode; id?: string; tone?: "red" | "uv"; className?: string };

export function SectionTitle({ children, id, tone = "red", className = "" }: Props) {
  return (
    <h2
      id={id}
      data-reveal
      className={`ornate-title font-gothic text-[clamp(2.6rem,6vw,4.5rem)] font-extrabold leading-[1.05] tracking-[-0.01em] ${
        tone === "uv" ? "neon-uv text-[#bdb4ff]" : "neon text-[#ff8a95]"
      } ${className}`}
    >
      <span className="text-[#fff3f1]">{children}</span>
    </h2>
  );
}
