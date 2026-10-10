// Datos del lugar. Los campos en null son los que el dueño debe completar:
// la página los muestra como "por confirmar" hasta que tengan valor.
export const site = {
  name: "El Purgatorio",
  tagline: "Arte, café y algo más",
  // Tomado del afiche "Tarot en El Purgatorio". Verificar antes de publicar.
  place: "Castillo del Mono Osorio",
  address: "Cl. 74 #02-86, Bogotá",
  mapsQuery: "Castillo del Mono Osorio, Calle 74 #2-86, Bogotá",
  hours: null as string | null, // ej. "Martes a domingo, 11:00 a.m. a 10:00 p.m."
  instagram: null as string | null, // ej. "elpurgatorio.bog" (sin @)
  whatsapp: null as string | null, // ej. "573001234567" (con indicativo, sin +)
};

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapsQuery)}`;
export const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&output=embed`;
export const instagramUrl = site.instagram ? `https://instagram.com/${site.instagram}` : null;
export const whatsappUrl = site.whatsapp ? `https://wa.me/${site.whatsapp}` : null;
