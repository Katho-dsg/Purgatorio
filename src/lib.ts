// Prefijo para archivos de /public cuando el sitio vive en una subruta (GitHub Pages: /Purgatorio).
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const asset = (path: string) => `${basePath}${path}`;
