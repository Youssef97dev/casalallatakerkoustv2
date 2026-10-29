/**
 * Shared site configuration for Casa Lalla Takerkoust
 * Single source of truth for business contact info, hours, coordinates, social channels, and legal data.
 */
export const siteConfig = {
  name: "Casa Lalla Takerkoust",
  taglines: {
    en: "Where the Atlas meets the water",
    fr: "Là où l’Atlas rencontre l’eau",
  },
  phone: "+212675480103",
  phoneDisplay: "+212 675 480 103",
  whatsappNumber: "+212675480103",
  whatsappUrl: "https://wa.me/212675480103",
  email: "reservations@casalallatakerkoust.com",
  instagramUrl: "https://www.instagram.com/casa.lalla.takerkoust/",
  mapsUrl: "https://maps.app.goo.gl/n6jVMNXSKJzRcuMv7",
  // Single official primary TripAdvisor link
  tripadvisorUrl:
    "https://www.tripadvisor.com/Restaurant_Review-g293734-d25381207-Reviews-Casa_Lalla_Takerkoust-Marrakech_Marrakech_Safi.html",
  spotifyPlaylistUrl:
    "https://open.spotify.com/embed/playlist/5Qgw5WwwBuGvLiQ3WmkgXH?utm_source=generator",
  geo: {
    latitude: 31.352234464303265,
    longitude: -8.131036157671632,
  },
  address: {
    street: "Barrage Lalla Takerkoust",
    locality: "Marrakech",
    region: "Marrakech-Safi",
    postalCode: "40000",
    countryEn: "Morocco",
    countryFr: "Maroc",
    en: "Barrage Lalla Takerkoust, Marrakech 40000, Morocco",
    fr: "Barrage Lalla Takerkoust, Marrakech 40000, Maroc",
  },
  // Unified single source of truth for operating hours across all pages
  hours: {
    opens: "13:00",
    closes: "17:00",
    daysEn: "Open everyday",
    daysFr: "Ouvert tous les jours",
    formattedEn: "1:00 PM – 5:00 PM",
    formattedFr: "13h00 – 17h00",
  },
  urls: {
    en: "https://casalallatakerkoust.com/",
    fr: "https://casalallatakerkoust.com/fr/",
  },
  // Legal entities and Moroccan regulatory placeholders (Loi 09-08 CNDP)
  legal: {
    companyName: "CASA LALLA TAKERKOUST",
    rc: "Marrakech n° [Enregistrement en cours / Placeholder]",
    ice: "[Identifiant Commun de l’Entreprise - Placeholder]",
    ifNumber: "[Identifiant Fiscal - Placeholder]",
    capital: "[Capital Social en MAD - Placeholder]",
    headquarters: "Barrage Lalla Takerkoust, 40000 Marrakech, Maroc",
    publicationDirector: "Direction Casa Lalla Takerkoust",
    hostingProvider:
      "Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA",
  },
};
