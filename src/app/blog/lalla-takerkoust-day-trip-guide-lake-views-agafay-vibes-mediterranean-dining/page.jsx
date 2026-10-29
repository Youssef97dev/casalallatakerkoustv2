import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title: "Lalla Takerkoust Day Trip Guide | Lake Views & Agafay Dining | Casa Lalla",
  description: "Plan the perfect Lalla Takerkoust day trip from Marrakech. Discover aquatic adventures, Agafay desert activities, and Mediterranean dining with Atlas Mountain views.",
  alternates: {
    canonical: "https://casalallatakerkoust.com/blog/lalla-takerkoust-day-trip-guide-lake-views-agafay-vibes-mediterranean-dining/",
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
    title: "Lalla Takerkoust Day Trip Guide | Lake Views & Agafay Dining | Casa Lalla",
    description: "Plan the perfect Lalla Takerkoust day trip from Marrakech. Discover aquatic adventures, Agafay desert activities, and Mediterranean dining with Atlas Mountain views.",
    url: "https://casalallatakerkoust.com/blog/lalla-takerkoust-day-trip-guide-lake-views-agafay-vibes-mediterranean-dining/",
    siteName: "Casa Lalla Takerkoust",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://casalallatakerkoust.com/casalalla-takerkoust-agafay-vibes.jpg",
        width: 1200,
        height: 630,
        alt: "Lalla Takerkoust Day Trip Guide | Lake Views & Agafay Dining | Casa Lalla",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lalla Takerkoust Day Trip Guide | Lake Views & Agafay Dining | Casa Lalla",
    description: "Plan the perfect Lalla Takerkoust day trip from Marrakech. Discover aquatic adventures, Agafay desert activities, and Mediterranean dining with Atlas Mountain views.",
    images: ["https://casalallatakerkoust.com/casalalla-takerkoust-agafay-vibes.jpg"],
  },
};

const page = () => {
  return <Loader />;
};

export default page;
