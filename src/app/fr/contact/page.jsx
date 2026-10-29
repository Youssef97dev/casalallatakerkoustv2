import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title:
    "Contact & Réservation de Table | Casa Lalla Takerkoust Marrakech",
  description:
    "Contactez Casa Lalla Takerkoust près de Marrakech pour vos réservations de table, événements de groupe ou informations. Restaurant au bord du lac de Takerkoust.",
  alternates: {
    canonical: "https://casalallatakerkoust.com/fr/contact/",
    languages: {
      en: "https://casalallatakerkoust.com/contact/",
      fr: "https://casalallatakerkoust.com/fr/contact/",
      "x-default": "https://casalallatakerkoust.com/contact/",
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
      "Contact & Réservation de Table | Casa Lalla Takerkoust Marrakech",
    description:
      "Réservez votre table ou contactez l’équipe de Casa Lalla Takerkoust au bord du lac de Takerkoust près de Marrakech.",
    url: "https://casalallatakerkoust.com/fr/contact/",
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
