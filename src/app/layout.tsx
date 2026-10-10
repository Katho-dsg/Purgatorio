import type { Metadata, Viewport } from "next";
import "@fontsource/grenze-gotisch/latin-600.css";
import "@fontsource/grenze-gotisch/latin-800.css";
import "@fontsource/grenze/latin-400.css";
import "@fontsource/grenze/latin-400-italic.css";
import "@fontsource/grenze/latin-600.css";
import "@fontsource/saira-extra-condensed/latin-600.css";
import "@fontsource/mrs-saint-delafield/latin-400.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "El Purgatorio · Arte, café y algo más",
  description:
    "Café, cócteles y casa de cultura en una sección del Castillo del Mono Osorio, Bogotá. Siete pecados, siete cócteles, arte y talleres para todo público.",
  openGraph: {
    title: "El Purgatorio · Arte, café y algo más",
    description: "Café, cócteles y cultura dentro de un castillo en Bogotá.",
    images: ["/img/gen/hero.webp"],
    locale: "es_CO",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0607",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-CO">
      <body>{children}</body>
    </html>
  );
}
