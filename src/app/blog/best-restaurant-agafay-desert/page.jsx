import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title: "Best Restaurant near Agafay Desert: Dining & Lake Views | Casa Lalla",
  description: "Looking for the best restaurant near the Agafay Desert? Casa Lalla offers unforgettable open-air dining, sunset views, and exclusive lake activities in Morocco.",
  alternates: {
    canonical: "https://casalallatakerkoust.com/blog/best-restaurant-agafay-desert/",
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
    title: "Best Restaurant near Agafay Desert: Dining & Lake Views | Casa Lalla",
    description: "Looking for the best restaurant near the Agafay Desert? Casa Lalla offers unforgettable open-air dining, sunset views, and exclusive lake activities in Morocco.",
    url: "https://casalallatakerkoust.com/blog/best-restaurant-agafay-desert/",
    siteName: "Casa Lalla Takerkoust",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://casalallatakerkoust.com/casalalla-takerkoust-agafay-vibes.jpg",
        width: 1200,
        height: 630,
        alt: "Best Restaurant near Agafay Desert: Dining & Lake Views | Casa Lalla",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Restaurant near Agafay Desert: Dining & Lake Views | Casa Lalla",
    description: "Looking for the best restaurant near the Agafay Desert? Casa Lalla offers unforgettable open-air dining, sunset views, and exclusive lake activities in Morocco.",
    images: ["https://casalallatakerkoust.com/casalalla-takerkoust-agafay-vibes.jpg"],
  },
};

const page = () => {
  return <Loader />;
};

export default page;
