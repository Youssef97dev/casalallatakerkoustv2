import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title:
    "Agafay Luxury Camp & Kasbah d'If Guide: Why Add Lake Lalla Takerkoust to Your Trip",
  description:
    "Booking an Agafay luxury camp or staying at Kasbah d'If (Kasbah Dif)? Discover how to pair your desert glamping stay with lakeside dining & water sports at Casa Lalla Takerkoust.",
  keywords:
    "agafay luxury camp, kasbah dif, kasbah d'if, best luxury camp agafay desert, lalla takerkoust restaurant, agafay desert and lake itinerary, casa lalla takerkoust",
  alternates: {
    canonical:
      "https://casalallatakerkoust.com/blog/agafay-luxury-camp-kasbah-dif-lake-takerkoust-itinerary/",
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
      "Agafay Luxury Camp & Kasbah d'If Guide: Why Add Lake Lalla Takerkoust to Your Trip",
    description:
      "Booking an Agafay luxury camp or staying at Kasbah d'If (Kasbah Dif)? Discover how to pair your desert glamping stay with lakeside dining & water sports at Casa Lalla Takerkoust.",
    url: "https://casalallatakerkoust.com/blog/agafay-luxury-camp-kasbah-dif-lake-takerkoust-itinerary/",
    siteName: "Casa Lalla Takerkoust",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://casalallatakerkoust.com/images/agafay-desert-accommodation-hotel-rural-oasis.webp",
        width: 1200,
        height: 630,
        alt: "Agafay luxury camp and Kasbah d'If desert glamping retreat near Lake Lalla Takerkoust",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Agafay Luxury Camp & Kasbah d'If Guide: Why Add Lake Lalla Takerkoust to Your Trip",
    description:
      "Booking an Agafay luxury camp or staying at Kasbah d'If (Kasbah Dif)? Discover how to pair your desert glamping stay with lakeside dining & water sports at Casa Lalla Takerkoust.",
    images: [
      "https://casalallatakerkoust.com/images/agafay-desert-accommodation-hotel-rural-oasis.webp",
    ],
  },
};

const page = () => {
  return <Loader />;
};

export default page;
