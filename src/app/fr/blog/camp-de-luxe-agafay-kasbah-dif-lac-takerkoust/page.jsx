import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title:
    "Camp de Luxe Agafay & Kasbah d'If : L'Escapade Idéale au Lac Lalla Takerkoust",
  description:
    "Vous réservez un camp de luxe à Agafay ou un séjour à la Kasbah d'If (Kasbah Dif) ? Complétez votre expérience désert par un déjeuner au bord de l'eau à Casa Lalla Takerkoust.",
  keywords:
    "camp de luxe agafay, kasbah dif, kasbah d'if, meilleur camp agafay, restaurant lac lalla takerkoust, itinéraire désert agafay et lac, casa lalla takerkoust",
  alternates: {
    canonical:
      "https://casalallatakerkoust.com/fr/blog/camp-de-luxe-agafay-kasbah-dif-lac-takerkoust/",
    languages: {
      en: "https://casalallatakerkoust.com/blog/agafay-luxury-camp-kasbah-dif-lake-takerkoust-itinerary/",
      fr: "https://casalallatakerkoust.com/fr/blog/camp-de-luxe-agafay-kasbah-dif-lac-takerkoust/",
      "x-default":
        "https://casalallatakerkoust.com/blog/agafay-luxury-camp-kasbah-dif-lake-takerkoust-itinerary/",
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
      "Camp de Luxe Agafay & Kasbah d'If : L'Escapade Idéale au Lac Lalla Takerkoust",
    description:
      "Vous réservez un camp de luxe à Agafay ou un séjour à la Kasbah d'If (Kasbah Dif) ? Complétez votre expérience désert par un déjeuner au bord de l'eau à Casa Lalla Takerkoust.",
    url: "https://casalallatakerkoust.com/fr/blog/camp-de-luxe-agafay-kasbah-dif-lac-takerkoust/",
    siteName: "Casa Lalla Takerkoust",
    locale: "fr_FR",
    type: "article",
    images: [
      {
        url: "https://casalallatakerkoust.com/images/agafay-desert-accommodation-hotel-rural-oasis.webp",
        width: 1200,
        height: 630,
        alt: "Camp de luxe Agafay et Kasbah d'If au bord du lac Lalla Takerkoust",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Camp de Luxe Agafay & Kasbah d'If : L'Escapade Idéale au Lac Lalla Takerkoust",
    description:
      "Vous réservez un camp de luxe à Agafay ou un séjour à la Kasbah d'If (Kasbah Dif) ? Complétez votre expérience désert par un déjeuner au bord de l'eau à Casa Lalla Takerkoust.",
    images: [
      "https://casalallatakerkoust.com/images/agafay-desert-accommodation-hotel-rural-oasis.webp",
    ],
  },
};

const page = () => {
  return <Loader />;
};

export default page;
