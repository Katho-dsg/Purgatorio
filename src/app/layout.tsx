import type { CSSProperties } from "react";
import type { Metadata, Viewport } from "next";
import "@fontsource-variable/noto-serif-display/wdth.css";
import "@fontsource-variable/source-serif-4/opsz.css";
import "@fontsource-variable/source-serif-4/opsz-italic.css";
import "@fontsource/saira-extra-condensed/latin-700.css";
import "./globals.css";
import { asset } from "@/lib";

export const metadata: Metadata = {
  metadataBase: new URL("https://katho-dsg.github.io/Purgatorio/"),
  title: "El Purgatorio · Arte, café y algo más",
  description:
    "Café, cócteles y casa de cultura en una sección del Castillo del Mono Osorio, Bogotá. Siete pecados, siete cócteles, arte y talleres para todo público.",
  openGraph: {
    title: "El Purgatorio · Arte, café y algo más",
    description: "Café, cócteles y cultura dentro de un castillo en Bogotá.",
    images: ["img/v2/og.jpg"],
    locale: "es_CO",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0e0b0b",
};

const surfaces = {
  "--paper-url": `url(${asset("/img/v2/paper.webp")})`,
  "--torn-url": `url(${asset("/img/v2/torn.webp")})`,
} as CSSProperties;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-CO">
      <body style={surfaces}>{children}</body>
    </html>
  );
}
