import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title:
    "Experiences & Day Pass | Casa Lalla Takerkoust Near Marrakech",
  description:
    "Enjoy unforgettable experiences at Casa Lalla Takerkoust: quad biking, jet skiing on the lake, horseback riding, and pool day pass near Marrakech and the Agafay Desert.",
  alternates: {
    canonical: "https://casalallatakerkoust.com/experience/",
    languages: {
      en: "https://casalallatakerkoust.com/experience/",
      fr: "https://casalallatakerkoust.com/fr/lalla-takerkoust-activities/",
      "x-default": "https://casalallatakerkoust.com/experience/",
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
      "Experiences & Day Pass | Casa Lalla Takerkoust Near Marrakech",
    description:
      "Discover adventure and relaxation near Marrakech with unique experiences around Lalla Takerkoust Lake and the Agafay Desert.",
    url: "https://casalallatakerkoust.com/experience/",
    siteName: "Casa Lalla Takerkoust",
    locale: "en_US",
    alternateLocale: ["fr_FR"],
    type: "website",
    images: [
      {
        url: "https://casalallatakerkoust.com/images/adrenaline-quad-biking-marrakech-desert.webp",
        width: 1200,
        height: 630,
        alt: "Experiences at Casa Lalla Takerkoust",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Experiences & Day Pass | Casa Lalla Takerkoust",
    description:
      "Lake adventures, jet ski, quad tours and day passes at Lake Takerkoust near Marrakech.",
    images: [
      "https://casalallatakerkoust.com/images/adrenaline-quad-biking-marrakech-desert.webp",
    ],
  },
};

const page = () => {
  return <Loader />;
};

export default page;
