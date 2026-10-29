import React from "react";
import Container from "./components/Container";

export const metadata = {
  title:
    "Rural Hotel & Lakeside Lodge | Casa Lalla Takerkoust Near Marrakech",
  description:
    "Stay at Casa Lalla Rural Hotel by Lake Takerkoust near Marrakech. Tranquil accommodation, swimming pool, authentic hospitality, and breathtaking Atlas Mountain views.",
  alternates: {
    canonical: "https://casalallatakerkoust.com/rural-hotel/",
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
      "Rural Hotel & Lakeside Lodge | Casa Lalla Takerkoust Near Marrakech",
    description:
      "Stay at Casa Lalla Rural Hotel by Lake Takerkoust near Marrakech. Tranquil lodge rooms, pool, and stunning Atlas views.",
    url: "https://casalallatakerkoust.com/rural-hotel/",
    siteName: "Casa Lalla Takerkoust",
    locale: "en_US",
    alternateLocale: ["fr_FR"],
    type: "website",
    images: [
      {
        url: "https://casalallatakerkoust.com/images/agafay-desert-accommodation-hotel-rural-oasis.webp",
        width: 1200,
        height: 630,
        alt: "Casa Lalla Hotel Rural near Lake Takerkoust",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rural Hotel & Lakeside Lodge | Casa Lalla Takerkoust",
    description: "Peaceful accommodation by Lake Takerkoust near Marrakech.",
    images: [
      "https://casalallatakerkoust.com/images/agafay-desert-accommodation-hotel-rural-oasis.webp",
    ],
  },
};

const page = () => {
  return <Container />;
};

export default page;
