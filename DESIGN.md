# Design: El Purgatorio

Un pasillo de castillo convertido en casa de cultura: piedra, antorchas rojas, una puerta de luz negra al fondo. Referencia de energía: landing inmersiva tipo videojuego (dracula.com.co), traducida a rojo sangre, blanco hueso y neón UV.

## Color (tokens en `src/app/globals.css`, bloque `@theme`)

| Token | Valor | Uso |
|---|---|---|
| `ink` | `#0a0607` | Fondo de toda la página (tema único, oscuro) |
| `ink-2` | `#140b0d` | Superficies hundidas (tarjetas, miniaturas) |
| `stone` | `#2a2124` | Friso de piedra |
| `blood` | `#c1121f` | Acento principal, líneas, foco |
| `blood-deep` | `#5e0812` | Brumas, scrollbar |
| `bone` | `#f3ede6` | Texto |
| `bone-dim` | `#c9bcb4` | Texto secundario |
| `neon` | `#ff2b3f` | Halo de neón rojo |
| `uv` | `#5a46ff` | Halo de luz negra (sección pecados, puerta del hero) |

Cada pecado tiene su propio color de halo (`sins[].glow` en `src/data/menu.ts`); las pestañas de la galería también (rojo, UV, rosa, hueso).

## Tipografía (autohospedada con @fontsource)

- **Grenze Gotisch** 600/800: títulos, botones, navegación. Gótica moderna.
- **Grenze** 400/600 + itálica: texto corrido y descripciones de la carta.
- **Saira Extra Condensed** 600: nombres y precios de la carta, etiquetas; eco del wordmark del logo.
- **Mrs Saint Delafield**: el lema "Arte, café y algo más" y notas manuscritas.

## Componentes

- **Placa** (`.plaque` + `Plaque.tsx`): botón tallado de seis lados con doble filo interior y halo del color `--plaque-glow`.
- **Título ornamental** (`.ornate-title`): título con línea y rombo a cada lado; los adornos se ocultan bajo 640px.
- **Neón** (`.neon`, `.neon-uv`, `.ignite`): el título principal se enciende una sola vez al cargar.
- **Marco barroco** (`Frame.tsx`): marco generado con rosas y espinas; la foto ocupa la abertura.
- **Vitrina de pecados**: arco gótico con fundido y desenfoque entre cócteles.

## Movimiento

Un solo momento principal (el neón que se enciende) más atmósfera: antorchas que titilan, niebla, brasas en canvas y profundidad del pasillo con el cursor. Las secciones aparecen con fade, desplazamiento y desenfoque. Todo se apaga con `prefers-reduced-motion`.

## Imágenes

- `public/img/gen/`: generadas con GPT Image 2 vía Kie (`scripts/kie-image.mjs`); cada prompt queda junto al original en el scratchpad de generación.
- `public/img/fotos/`: fotos reales del lugar e Instagram, convertidas a WebP.
