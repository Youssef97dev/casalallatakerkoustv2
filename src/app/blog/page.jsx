import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title:
    "Lake Takerkoust & Agafay Travel Blog | Casa Lalla Marrakech",
  description:
    "Discover travel guides, lakeside dining tips, desert excursions, and local secrets for exploring Lake Lalla Takerkoust and the Agafay Desert from Casa Lalla.",
  alternates: {
    canonical: "https://casalallatakerkoust.com/blog/",
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
    title: "Lake Takerkoust & Agafay Travel Blog | Casa Lalla Marrakech",
    description:
      "Travel guides, day trip tips, and local secrets for Lake Lalla Takerkoust and Marrakech.",
    url: "https://casalallatakerkoust.com/blog/",
    siteName: "Casa Lalla Takerkoust",
    locale: "en_US",
    type: "website",
  },
};

const page = () => {
  return <Loader />;
};

export default page;
