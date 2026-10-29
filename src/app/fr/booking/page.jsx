import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title:
    "Réservation en Ligne | Restaurant Casa Lalla Takerkoust Marrakech",
  description:
    "Réservez votre table en ligne à Casa Lalla Takerkoust près de Marrakech. Déjeuner au bord du lac, cocktails au coucher de soleil et vue panoramique sur l’Atlas.",
  alternates: {
    canonical: "https://casalallatakerkoust.com/fr/booking/",
    languages: {
      en: "https://casalallatakerkoust.com/booking/",
      fr: "https://casalallatakerkoust.com/fr/booking/",
      "x-default": "https://casalallatakerkoust.com/booking/",
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
      "Réservation en Ligne | Restaurant Casa Lalla Takerkoust Marrakech",
    description:
      "Réservez votre expérience à Casa Lalla Takerkoust : cocktails, coucher de soleil et ambiance festive au bord du lac près de Marrakech.",
    url: "https://casalallatakerkoust.com/fr/booking/",
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
