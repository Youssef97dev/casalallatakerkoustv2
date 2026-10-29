import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title: "Casa Lalla Takerkoust | Ibiza-Style Festive Dining Near Marrakech",
  description: "Discover Casa Lalla Takerkoust, the ultimate Ibiza-style festive dining experience near Marrakech. Enjoy vibrant energy, curated DJ sets, and stunning lake views.",
  alternates: {
    canonical: "https://casalallatakerkoust.com/blog/ibiza-style-festive-marrakech/",
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
    title: "Casa Lalla Takerkoust | Ibiza-Style Festive Dining Near Marrakech",
    description: "Discover Casa Lalla Takerkoust, the ultimate Ibiza-style festive dining experience near Marrakech. Enjoy vibrant energy, curated DJ sets, and stunning lake views.",
    url: "https://casalallatakerkoust.com/blog/ibiza-style-festive-marrakech/",
    siteName: "Casa Lalla Takerkoust",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://casalallatakerkoust.com/casalalla-takerkoust-agafay-vibes.jpg",
        width: 1200,
        height: 630,
        alt: "Casa Lalla Takerkoust | Ibiza-Style Festive Dining Near Marrakech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Casa Lalla Takerkoust | Ibiza-Style Festive Dining Near Marrakech",
    description: "Discover Casa Lalla Takerkoust, the ultimate Ibiza-style festive dining experience near Marrakech. Enjoy vibrant energy, curated DJ sets, and stunning lake views.",
    images: ["https://casalallatakerkoust.com/casalalla-takerkoust-agafay-vibes.jpg"],
  },
};

const page = () => {
  return <Loader />;
};

export default page;
