import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title: "Marrakech Beach Clubs & Lakeside Day Club | Casa Lalla Takerkoust",
  description: "Looking for Ibiza-style beach clubs near Marrakech? Experience barefoot luxury, curated music, and a boho-chic Mykonos-style restaurant at Casa Lalla Takerkoust.",
  alternates: {
    canonical: "https://casalallatakerkoust.com/blog/marrakech-beach-clubs-discover-the-ibiza-mykonos-experience-at-lake-takerkoust/",
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
    title: "Marrakech Beach Clubs & Lakeside Day Club | Casa Lalla Takerkoust",
    description: "Looking for Ibiza-style beach clubs near Marrakech? Experience barefoot luxury, curated music, and a boho-chic Mykonos-style restaurant at Casa Lalla Takerkoust.",
    url: "https://casalallatakerkoust.com/blog/marrakech-beach-clubs-discover-the-ibiza-mykonos-experience-at-lake-takerkoust/",
    siteName: "Casa Lalla Takerkoust",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://casalallatakerkoust.com/casalalla-takerkoust-agafay-vibes.jpg",
        width: 1200,
        height: 630,
        alt: "Marrakech Beach Clubs & Lakeside Day Club | Casa Lalla Takerkoust",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marrakech Beach Clubs & Lakeside Day Club | Casa Lalla Takerkoust",
    description: "Looking for Ibiza-style beach clubs near Marrakech? Experience barefoot luxury, curated music, and a boho-chic Mykonos-style restaurant at Casa Lalla Takerkoust.",
    images: ["https://casalallatakerkoust.com/casalalla-takerkoust-agafay-vibes.jpg"],
  },
};

const page = () => {
  return <Loader />;
};

export default page;
