import React from "react";
import Container from "./components/Container";

export const metadata = {
  title:
    "Hôtel Rural au Bord du Lac | Casa Lalla Takerkoust Marrakech",
  description:
    "Séjournez à l’Hôtel Rural Casa Lalla au bord du lac de Takerkoust près de Marrakech. Chambres de charme, piscine, quiétude absolue et vue sur les sommets de l’Atlas.",
  alternates: {
    canonical: "https://casalallatakerkoust.com/fr/rural-hotel/",
    languages: {
      en: "https://casalallatakerkoust.com/rural-hotel/",
      fr: "https://casalallatakerkoust.com/fr/rural-hotel/",
      "x-default": "https://casalallatakerkoust.com/rural-hotel/",
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
      "Hôtel Rural au Bord du Lac | Casa Lalla Takerkoust Marrakech",
    description:
      "Hôtel de charme et séjour paisible au bord du lac de Takerkoust près de Marrakech. Piscine, chambres confortables et vue sur l’Atlas.",
    url: "https://casalallatakerkoust.com/fr/rural-hotel/",
    siteName: "Casa Lalla Takerkoust",
    locale: "fr_FR",
    alternateLocale: ["en_US"],
    type: "website",
    images: [
      {
        url: "https://casalallatakerkoust.com/images/agafay-desert-accommodation-hotel-rural-oasis.webp",
        width: 1200,
        height: 630,
        alt: "Hôtel rural Casa Lalla au lac de Takerkoust",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hôtel Rural au Lac de Takerkoust | Casa Lalla Marrakech",
    description: "Séjour ressourçant au bord du lac de Takerkoust face à l’Atlas.",
    images: [
      "https://casalallatakerkoust.com/images/agafay-desert-accommodation-hotel-rural-oasis.webp",
    ],
  },
};

const page = () => {
  return <Container />;
};

export default page;
