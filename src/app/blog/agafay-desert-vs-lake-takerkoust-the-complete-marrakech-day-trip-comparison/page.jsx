import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title: "Agafay Desert vs Lake Takerkoust | Casa Lalla | Day Trip Comparison",
  description: "Agafay Desert vs Lalla Takerkoust? Compare the best excursions from Marrakech and find out how to experience both stunning landscapes in one unforgettable day trip.",
  alternates: {
    canonical: "https://casalallatakerkoust.com/blog/agafay-desert-vs-lake-takerkoust-the-complete-marrakech-day-trip-comparison/",
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
    title: "Agafay Desert vs Lake Takerkoust | Casa Lalla | Day Trip Comparison",
    description: "Agafay Desert vs Lalla Takerkoust? Compare the best excursions from Marrakech and find out how to experience both stunning landscapes in one unforgettable day trip.",
    url: "https://casalallatakerkoust.com/blog/agafay-desert-vs-lake-takerkoust-the-complete-marrakech-day-trip-comparison/",
    siteName: "Casa Lalla Takerkoust",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://casalallatakerkoust.com/casalalla-takerkoust-agafay-vibes.jpg",
        width: 1200,
        height: 630,
        alt: "Agafay Desert vs Lake Takerkoust | Casa Lalla | Day Trip Comparison",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agafay Desert vs Lake Takerkoust | Casa Lalla | Day Trip Comparison",
    description: "Agafay Desert vs Lalla Takerkoust? Compare the best excursions from Marrakech and find out how to experience both stunning landscapes in one unforgettable day trip.",
    images: ["https://casalallatakerkoust.com/casalalla-takerkoust-agafay-vibes.jpg"],
  },
};

const page = () => {
  return <Loader />;
};

export default page;
