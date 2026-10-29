import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title:
    "Réservation de Table & Day Pass | Casa Lalla Takerkoust Marrakech",
  description:
    "Réservez votre table ou votre day pass au restaurant Casa Lalla Takerkoust près de Marrakech. Déjeuner au bord du lac, vue sur l’Atlas et accueil chaleureux.",
  alternates: {
    canonical: "https://casalallatakerkoust.com/fr/reservation/",
    languages: {
      en: "https://casalallatakerkoust.com/reservation/",
      fr: "https://casalallatakerkoust.com/fr/reservation/",
      "x-default": "https://casalallatakerkoust.com/reservation/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title:
      "Réservation de Table & Day Pass | Casa Lalla Takerkoust Marrakech",
    description:
      "Réservez votre table à Casa Lalla Takerkoust : restaurant au bord du lac, cuisine marocaine raffinée et day pass détente près de Marrakech.",
    url: "https://casalallatakerkoust.com/fr/reservation/",
    siteName: "Casa Lalla Takerkoust",
    locale: "fr_FR",
    alternateLocale: ["en_US"],
    type: "website",
  },
};

const page = () => {
  return <Loader />;
};

export default page;
