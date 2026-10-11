// Datos del lugar.
export const site = {
  name: "El Purgatorio",
  tagline: "Arte, café y algo más",
  // Tomado del afiche "Tarot en El Purgatorio". Verificar antes de publicar.
  place: "Castillo del Mono Osorio",
  address: "Cl. 74 #02-86, Bogotá",
  mapsQuery: "Castillo del Mono Osorio, Calle 74 #2-86, Bogotá",
  hours: [
    { days: "Martes a jueves", time: "1:00 p.m. – 9:00 p.m." },
    { days: "Viernes y sábados", time: "1:00 p.m. – 10:00 p.m." },
    { days: "Domingos", time: "12:00 p.m. – 6:00 p.m." },
  ],
  instagram: "elpurgatorio74", // sin @
};

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapsQuery)}`;
export const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&output=embed`;
export const instagramUrl = `https://www.instagram.com/${site.instagram}/`;
