import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title:
    "Camp de Luxe Agafay ou Hôtel Rural Casa Lalla Takerkoust : Où Dormir ?",
  description:
    "Vous hésitez entre un camp de luxe à Agafay et l'Hôtel Rural Casa Lalla Takerkoust ? Découvrez le confort d'un hôtel de charme et restaurant au bord du lac aux portes d'Agafay.",
  keywords:
    "camp de luxe agafay, hôtel rural casa lalla takerkoust, hôtel lac lalla takerkoust, où dormir désert agafay, hôtel charme marrakech lac, restaurant et hôtel casa lalla takerkoust",
  alternates: {
    canonical:
      "https://casalallatakerkoust.com/fr/blog/camp-de-luxe-agafay-vs-hotel-rural-casa-lalla-takerkoust/",
    languages: {
      en: "https://casalallatakerkoust.com/blog/agafay-luxury-camp-vs-casa-lalla-takerkoust-rural-hotel/",
      fr: "https://casalallatakerkoust.com/fr/blog/camp-de-luxe-agafay-vs-hotel-rural-casa-lalla-takerkoust/",
      "x-default":
        "https://casalallatakerkoust.com/blog/agafay-luxury-camp-vs-casa-lalla-takerkoust-rural-hotel/",
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
      "Camp de Luxe Agafay ou Hôtel Rural Casa Lalla Takerkoust : Où Dormir ?",
    description:
      "Vous hésitez entre un camp de luxe à Agafay et l'Hôtel Rural Casa Lalla Takerkoust ? Découvrez le confort d'un hôtel de charme et restaurant au bord du lac aux portes d'Agafay.",
    url: "https://casalallatakerkoust.com/fr/blog/camp-de-luxe-agafay-vs-hotel-rural-casa-lalla-takerkoust/",
    siteName: "Casa Lalla Takerkoust",
    locale: "fr_FR",
    type: "article",
    images: [
      {
        url: "https://casalallatakerkoust.com/images/boutique-hotel-lalla-takerkoust-lake-view.webp",
        width: 1200,
        height: 630,
        alt: "Hôtel Rural Casa Lalla Takerkoust et restaurant au bord du lac de Lalla Takerkoust près du désert d'Agafay",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Camp de Luxe Agafay ou Hôtel Rural Casa Lalla Takerkoust : Où Dormir ?",
    description:
      "Vous hésitez entre un camp de luxe à Agafay et l'Hôtel Rural Casa Lalla Takerkoust ? Découvrez le confort d'un hôtel de charme et restaurant au bord du lac aux portes d'Agafay.",
    images: [
      "https://casalallatakerkoust.com/images/boutique-hotel-lalla-takerkoust-lake-view.webp",
    ],
  },
};

const page = () => {
  return <Loader />;
};

export default page;
