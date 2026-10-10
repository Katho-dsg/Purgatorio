# Design: El Purgatorio

Afiche editorial gótico. La página se lee como una serie de afiches impresos: papel hueso con tramado, paneles rojo sangre, bandas negras y bordes de papel rasgado. Referencias del cliente: el afiche "Broken / Hollo Prayer" (serif alta, estatua en bitmap, papel y rojo) y el espécimen "Dark Reborn" (blackletter ornamental, etiquetas en las esquinas, bandas "GOTHIC ✦ SCRIPT", encapuchados rojos, concreto con grafiti y barrotes).

## Color (tokens en `src/app/globals.css`, bloque `@theme`)

| Token | Valor | Uso |
|---|---|---|
| `paper` | `#ece8e1` | Afiches claros, con textura de papel (`--paper-url`) |
| `ink` | `#0e0b0b` | Texto sobre papel, bandas y secciones oscuras |
| `blood` | `#c1121f` | Acento único: palabras resaltadas, paneles, botón principal |
| `blood-dark` | `#5c0910` | Panel rasgado del hero |
| `bone` | `#f1ece4` | Texto sobre oscuro y rojo |
| `ash` / `ash-light` | `#5f5754` / `#bdb2ac` | Texto secundario sobre papel / sobre oscuro |

## Tipografía (autohospedada con @fontsource)

- **Noto Serif Display** al 62.5% de ancho, peso 300–420, en mayúsculas (`.display`): la serif alta de "BROKEN". Títulos, nombres de la carta.
- **Saira Extra Condensed** 700 (`.label`): etiquetas de esquina, navegación, precios, botones.
- **Source Serif 4** (`.micro` y texto corrido): microtextos en versalitas espaciadas y párrafos.
- **Lettering blackletter** generado como imagen (`public/img/v2/sostiene.webp`, `pecados.webp`, `purgatorio.webp`) para los títulos ornamentales; el texto real queda en `sr-only`.

## Recursos visuales

- **Tramado (halftone)**: `scripts/halftone.py` convierte fotos e imágenes en puntos a 45°; se guardan como PNG de 4 a 6 colores con transparencia. La estatua del hero lleva relleno de papel dentro de su silueta para quedar por delante del panel rojo.
- **Duotono rojo** (`.duo`): fotos en escala de grises multiplicadas sobre rojo; vuelven a color al tocar o pasar el cursor.
- **Borde rasgado** (`.torn`): máscara generada que se pinta con `currentColor`.
- **Estrella de cuatro puntas** (`.star`) y **banda negra** (`Band.tsx`).
- Imágenes generadas con GPT Image 2 vía Kie (`scripts/kie-image.mjs`): estatua velada, sala de encapuchados, muro de concreto, papel, borde rasgado, rosa, lettering.

## Movimiento

Un momento principal: al cargar, las letras de PURGATORIO suben desde una línea de corte y la estatua se revela como una impresión. Las secciones aparecen con fade y desplazamiento. Todo se apaga con `prefers-reduced-motion`.
