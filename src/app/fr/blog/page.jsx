import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title: "Blog Voyage Lac Takerkoust & Agafay | Casa Lalla Marrakech",
  description:
    "Découvrez nos guides de voyage, conseils de restauration au bord du lac, excursions dans le désert d'Agafay et secrets d'initiés depuis Casa Lalla.",
  alternates: {
    canonical: "https://casalallatakerkoust.com/fr/blog/",
    languages: {
      en: "https://casalallatakerkoust.com/blog/",
      fr: "https://casalallatakerkoust.com/fr/blog/",
      "x-default": "https://casalallatakerkoust.com/blog/",
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
    title: "Blog Voyage Lac Takerkoust & Agafay | Casa Lalla Marrakech",
    description:
      "Guides de voyage, inspirations d'excursions et secrets locaux autour du lac Lalla Takerkoust et d'Agafay.",
    url: "https://casalallatakerkoust.com/fr/blog/",
    siteName: "Casa Lalla Takerkoust",
    locale: "fr_FR",
    type: "website",
  },
};

const page = () => {
  return <Loader />;
};

export default page;
