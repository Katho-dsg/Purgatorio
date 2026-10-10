import type { ComponentProps, CSSProperties } from "react";

type Props = ComponentProps<"a"> & { glow?: string; size?: "md" | "sm" };

// Botón con forma de placa tallada; el halo vive en el contenedor porque el clip-path lo recortaría.
export function Plaque({ glow, size = "md", className = "", style, children, ...rest }: Props) {
  const vars = glow ? ({ "--plaque-glow": glow } as CSSProperties) : undefined;
  return (
    <span className="plaque-wrap" style={vars}>
      <a className={`plaque ${size === "sm" ? "plaque-sm" : ""} ${className}`} style={{ ...vars, ...style }} {...rest}>
        {children}
      </a>
    </span>
  );
}
