import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title:
    "Activités Lalla Takerkoust | Jet Ski, Quad, Buggy & Day Pass près de Marrakech",
  description:
    "Vivez des activités inoubliables au lac de Lalla Takerkoust : jet ski sur le lac, randonnées guidées en quad et buggy vers le désert d’Agafay et day pass détente.",
  alternates: {
    canonical:
      "https://casalallatakerkoust.com/fr/lalla-takerkoust-activities/",
    languages: {
      en: "https://casalallatakerkoust.com/lalla-takerkoust-activities/",
      fr: "https://casalallatakerkoust.com/fr/lalla-takerkoust-activities/",
      "x-default":
        "https://casalallatakerkoust.com/lalla-takerkoust-activities/",
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
      "Activités Lalla Takerkoust | Jet Ski, Quad, Buggy & Day Pass près de Marrakech",
    description:
      "Découvrez les meilleures activités à Lalla Takerkoust : jet ski, quad et buggy vers le désert d’Agafay, balades et journée détente au bord du lac.",
    url: "https://casalallatakerkoust.com/fr/lalla-takerkoust-activities/",
    siteName: "Casa Lalla Takerkoust",
    locale: "fr_FR",
    alternateLocale: ["en_US"],
    type: "website",
    images: [
      {
        url: "https://casalallatakerkoust.com/images/adrenaline-quad-biking-marrakech-desert.webp",
        width: 1200,
        height: 630,
        alt: "Activités nautiques et quad à Lalla Takerkoust",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Activités Lalla Takerkoust | Jet Ski, Quad & Buggy près de Marrakech",
    description:
      "Aventures de plein air au lac de Takerkoust et Agafay : jet ski, quad, buggy et détente au bord de l'eau.",
    images: [
      "https://casalallatakerkoust.com/images/adrenaline-quad-biking-marrakech-desert.webp",
    ],
  },
};

const page = () => {
  return <Loader />;
};

export default page;
