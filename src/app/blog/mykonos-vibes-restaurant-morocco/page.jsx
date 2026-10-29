import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title: "Experience Mykonos Vibes in Morocco | Lakeside Restaurant at Casa Lalla",
  description: "Transport yourself at Casa Lalla. Experience authentic Mykonos vibes at our premier lakeside restaurant in Morocco, featuring upscale waterfront dining and music.",
  alternates: {
    canonical: "https://casalallatakerkoust.com/blog/mykonos-vibes-restaurant-morocco/",
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
    title: "Experience Mykonos Vibes in Morocco | Lakeside Restaurant at Casa Lalla",
    description: "Transport yourself at Casa Lalla. Experience authentic Mykonos vibes at our premier lakeside restaurant in Morocco, featuring upscale waterfront dining and music.",
    url: "https://casalallatakerkoust.com/blog/mykonos-vibes-restaurant-morocco/",
    siteName: "Casa Lalla Takerkoust",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://casalallatakerkoust.com/casalalla-takerkoust-agafay-vibes.jpg",
        width: 1200,
        height: 630,
        alt: "Experience Mykonos Vibes in Morocco | Lakeside Restaurant at Casa Lalla",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Experience Mykonos Vibes in Morocco | Lakeside Restaurant at Casa Lalla",
    description: "Transport yourself at Casa Lalla. Experience authentic Mykonos vibes at our premier lakeside restaurant in Morocco, featuring upscale waterfront dining and music.",
    images: ["https://casalallatakerkoust.com/casalalla-takerkoust-agafay-vibes.jpg"],
  },
};

const page = () => {
  return <Loader />;
};

export default page;
