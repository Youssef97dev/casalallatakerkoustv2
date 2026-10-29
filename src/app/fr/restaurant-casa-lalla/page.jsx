import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title:
    "Restaurant Casa Lalla Takerkoust | Restaurant Vue Lac & Déjeuner près de Marrakech",
  description:
    "Découvrez le restaurant Casa Lalla au bord du lac de Takerkoust près de Marrakech. Cuisine marocaine et méditerranéenne raffinée, terrasse panoramique face à l’Atlas.",
  alternates: {
    canonical: "https://casalallatakerkoust.com/fr/restaurant-casa-lalla/",
    languages: {
      en: "https://casalallatakerkoust.com/restaurant-casa-lalla/",
      fr: "https://casalallatakerkoust.com/fr/restaurant-casa-lalla/",
      "x-default": "https://casalallatakerkoust.com/restaurant-casa-lalla/",
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
      "Restaurant Casa Lalla Takerkoust | Restaurant Vue Lac & Déjeuner près de Marrakech",
    description:
      "Profitez d’une table d’exception à Casa Lalla Takerkoust avec vue panoramique sur le lac, cuisine marocaine raffinée et coucher de soleil inoubliable face à l’Atlas.",
    url: "https://casalallatakerkoust.com/fr/restaurant-casa-lalla/",
    siteName: "Casa Lalla Takerkoust",
    locale: "fr_FR",
    alternateLocale: ["en_US"],
    type: "website",
    images: [
      {
        url: "https://casalallatakerkoust.com/images/restaurant-casa-lalla-takerkoust-terrace-lake-view.webp",
        width: 1200,
        height: 630,
        alt: "Terrasse du restaurant Casa Lalla avec vue sur le lac Takerkoust",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Restaurant Casa Lalla Takerkoust | Restaurant Vue Lac près de Marrakech",
    description:
      "Table gastronomique au lac de Takerkoust près de Marrakech. Cuisine marocaine raffinée et terrasse face au lac et à l’Atlas.",
    images: [
      "https://casalallatakerkoust.com/images/restaurant-casa-lalla-takerkoust-terrace-lake-view.webp",
    ],
  },
};

const page = () => {
  return <Loader />;
};

export default page;
