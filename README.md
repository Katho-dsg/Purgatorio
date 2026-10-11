# El Purgatorio · Landing

Landing de El Purgatorio (arte, café y algo más), en Next.js 16 + Tailwind CSS v4.

## Correr

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Datos del lugar

Edita `src/data/site.ts`: horario, Instagram y dirección (la dirección viene del afiche de Tarot: verifícala).

La carta está en `src/data/menu.ts` (tomada del PDF del menú).

## Imágenes generadas

`scripts/kie-image.mjs` genera imágenes con GPT Image 2 en Kie (necesita `KIE_API_KEY`):

```bash
NODE_USE_ENV_PROXY=1 node scripts/kie-image.mjs salida.png 16:9 2K prompt.txt
```
