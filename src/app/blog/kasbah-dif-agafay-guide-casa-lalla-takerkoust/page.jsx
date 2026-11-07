import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title:
    "Staying at Kasbah d'If (Kasbah Dif)? Why You Must Visit Casa Lalla Takerkoust Nearby",
  description:
    "Planning a trip to Kasbah d'If (Kasbah Dif) in the Agafay Desert? Discover why Casa Lalla Takerkoust is the best nearby lakeside restaurant, day pass, and excursion spot.",
  keywords:
    "kasbah dif, kasbah d'if, kasbah dif agafay, restaurant near kasbah dif, lalla takerkoust, casa lalla takerkoust, agafay desert day trip",
  alternates: {
    canonical:
      "https://casalallatakerkoust.com/blog/kasbah-dif-agafay-guide-casa-lalla-takerkoust/",
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
      "Staying at Kasbah d'If (Kasbah Dif)? Why You Must Visit Casa Lalla Takerkoust Nearby",
    description:
      "Planning a trip to Kasbah d'If (Kasbah Dif) in the Agafay Desert? Discover why Casa Lalla Takerkoust is the best nearby lakeside restaurant, day pass, and excursion spot.",
    url: "https://casalallatakerkoust.com/blog/kasbah-dif-agafay-guide-casa-lalla-takerkoust/",
    siteName: "Casa Lalla Takerkoust",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://casalallatakerkoust.com/images/restaurant-lake-view-casa-lalla-takerkoust.webp",
        width: 1200,
        height: 630,
        alt: "Casa Lalla Takerkoust overlooking Lake Takerkoust near Kasbah d'If Agafay Desert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Staying at Kasbah d'If (Kasbah Dif)? Why You Must Visit Casa Lalla Takerkoust Nearby",
    description:
      "Planning a trip to Kasbah d'If (Kasbah Dif) in the Agafay Desert? Discover why Casa Lalla Takerkoust is the best nearby lakeside restaurant, day pass, and excursion spot.",
    images: [
      "https://casalallatakerkoust.com/images/restaurant-lake-view-casa-lalla-takerkoust.webp",
    ],
  },
};

const page = () => {
  return <Loader />;
};

export default page;
