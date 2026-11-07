import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title:
    "Séjour à la Kasbah d'If (Kasbah Dif) : Escapade & Déjeuner au Bord du Lac à Casa Lalla Takerkoust",
  description:
    "Vous séjournez ou visitez la Kasbah d'If (Kasbah Dif) à Agafay ? Découvrez Casa Lalla Takerkoust, le restaurant et day-pass incontournable au bord du lac à quelques minutes.",
  keywords:
    "kasbah dif, kasbah d'if, kasbah dif agafay, restaurant proche kasbah dif, barrage lalla takerkoust, casa lalla takerkoust, excursion agafay",
  alternates: {
    canonical:
      "https://casalallatakerkoust.com/fr/blog/guide-kasbah-dif-agafay-casa-lalla-takerkoust/",
    languages: {
      en: "https://casalallatakerkoust.com/blog/kasbah-dif-agafay-guide-casa-lalla-takerkoust/",
      fr: "https://casalallatakerkoust.com/fr/blog/guide-kasbah-dif-agafay-casa-lalla-takerkoust/",
      "x-default":
        "https://casalallatakerkoust.com/blog/kasbah-dif-agafay-guide-casa-lalla-takerkoust/",
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
      "Séjour à la Kasbah d'If (Kasbah Dif) : Escapade & Déjeuner au Bord du Lac à Casa Lalla Takerkoust",
    description:
      "Vous séjournez ou visitez la Kasbah d'If (Kasbah Dif) à Agafay ? Découvrez Casa Lalla Takerkoust, le restaurant et day-pass incontournable au bord du lac à quelques minutes.",
    url: "https://casalallatakerkoust.com/fr/blog/guide-kasbah-dif-agafay-casa-lalla-takerkoust/",
    siteName: "Casa Lalla Takerkoust",
    locale: "fr_FR",
    type: "article",
    images: [
      {
        url: "https://casalallatakerkoust.com/images/restaurant-lake-view-casa-lalla-takerkoust.webp",
        width: 1200,
        height: 630,
        alt: "Casa Lalla Takerkoust au bord du lac près de la Kasbah d'If Agafay",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Séjour à la Kasbah d'If (Kasbah Dif) : Escapade & Déjeuner au Bord du Lac à Casa Lalla Takerkoust",
    description:
      "Vous séjournez ou visitez la Kasbah d'If (Kasbah Dif) à Agafay ? Découvrez Casa Lalla Takerkoust, le restaurant et day-pass incontournable au bord du lac à quelques minutes.",
    images: [
      "https://casalallatakerkoust.com/images/restaurant-lake-view-casa-lalla-takerkoust.webp",
    ],
  },
};

const page = () => {
  return <Loader />;
};

export default page;
