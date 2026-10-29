import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title:
    "Événements Privés & Mariages au Lac | Casa Lalla Takerkoust Marrakech",
  description:
    "Organisez votre mariage, séminaire ou réception privée au bord du lac de Lalla Takerkoust près de Marrakech. Privatisation exclusive avec vue sur l’Atlas et le désert.",
  alternates: {
    canonical: "https://casalallatakerkoust.com/fr/private-events/",
    languages: {
      en: "https://casalallatakerkoust.com/private-events/",
      fr: "https://casalallatakerkoust.com/fr/private-events/",
      "x-default": "https://casalallatakerkoust.com/private-events/",
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
      "Événements Privés & Mariages au Lac | Casa Lalla Takerkoust Marrakech",
    description:
      "Célébrez votre mariage ou événement privé à Casa Lalla Takerkoust. Un lieu exceptionnel au bord du lac près de Marrakech avec vue panoramique sur l’Atlas.",
    url: "https://casalallatakerkoust.com/fr/private-events/",
    siteName: "Casa Lalla Takerkoust",
    locale: "fr_FR",
    alternateLocale: ["en_US"],
    type: "website",
    images: [
      {
        url: "https://casalallatakerkoust.com/images/private-event-wedding-setup-casa-lalla.webp",
        width: 1200,
        height: 630,
        alt: "Réceptions et mariages d'exception à Casa Lalla Takerkoust",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Événements Privés & Mariages à Casa Lalla Takerkoust près de Marrakech",
    description:
      "Privatisation exclusive pour mariages et réceptions au lac de Takerkoust.",
    images: [
      "https://casalallatakerkoust.com/images/private-event-wedding-setup-casa-lalla.webp",
    ],
  },
};

const page = () => {
  return <Loader />;
};

export default page;
