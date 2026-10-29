import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title:
    "Restaurant Casa Lalla Takerkoust | Lakeside Dining & Lake Lunch Near Marrakech",
  description:
    "Discover Casa Lalla Takerkoust, premier lakeside restaurant near Marrakech offering refined Moroccan & Mediterranean dining, sunset lake views, and Agafay desert vibes.",
  alternates: {
    canonical: "https://casalallatakerkoust.com/restaurant-casa-lalla/",
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
      "Restaurant Casa Lalla Takerkoust | Lakeside Dining & Lake Lunch Near Marrakech",
    description:
      "Enjoy exceptional lakeside dining at Casa Lalla Takerkoust with panoramic lake views, sunset terrace, and fine Moroccan cuisine near Marrakech.",
    url: "https://casalallatakerkoust.com/restaurant-casa-lalla/",
    siteName: "Casa Lalla Takerkoust",
    locale: "en_US",
    alternateLocale: ["fr_FR"],
    type: "website",
    images: [
      {
        url: "https://casalallatakerkoust.com/images/restaurant-casa-lalla-takerkoust-terrace-lake-view.webp",
        width: 1200,
        height: 630,
        alt: "Restaurant Casa Lalla Takerkoust lake terrace dining",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Restaurant Casa Lalla Takerkoust | Lakeside Dining & Lake Lunch Near Marrakech",
    description:
      "Fine dining by Lake Takerkoust near Marrakech. Enjoy refined Moroccan cuisine and sunset lake views.",
    images: [
      "https://casalallatakerkoust.com/images/restaurant-casa-lalla-takerkoust-terrace-lake-view.webp",
    ],
  },
};

const page = () => {
  return <Loader />;
};

export default page;
