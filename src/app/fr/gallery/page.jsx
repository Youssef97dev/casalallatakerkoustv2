import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title:
    "Galerie Photos | Casa Lalla Takerkoust | Restaurant au Bord du Lac",
  description:
    "Découvrez la galerie photos de Casa Lalla Takerkoust : vues sur le lac et l’Atlas, terrasse du restaurant, moments de détente et ambiance bohème chic près de Marrakech.",
  alternates: {
    canonical: "https://casalallatakerkoust.com/fr/gallery/",
    languages: {
      en: "https://casalallatakerkoust.com/gallery/",
      fr: "https://casalallatakerkoust.com/fr/gallery/",
      "x-default": "https://casalallatakerkoust.com/gallery/",
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
      "Galerie Photos | Casa Lalla Takerkoust | Restaurant au Bord du Lac",
    description:
      "Immersion visuelle dans notre oasis au bord du lac de Takerkoust près de Marrakech.",
    url: "https://casalallatakerkoust.com/fr/gallery/",
    siteName: "Casa Lalla Takerkoust",
    locale: "fr_FR",
    alternateLocale: ["en_US"],
    type: "website",
    images: [
      {
        url: "https://casalallatakerkoust.com/images/romantic-night-dining-ambiance-casa-lalla-takerkoust.webp",
        width: 1200,
        height: 630,
        alt: "Galerie photos de Casa Lalla Takerkoust",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Galerie Photos | Casa Lalla Takerkoust",
    description: "Immersion visuelle à Casa Lalla au lac de Takerkoust.",
    images: [
      "https://casalallatakerkoust.com/images/romantic-night-dining-ambiance-casa-lalla-takerkoust.webp",
    ],
  },
};

const page = () => {
  return <Loader />;
};

export default page;
