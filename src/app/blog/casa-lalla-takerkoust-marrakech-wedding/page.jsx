import React from "react";
import Container from "./components/Container";

export const metadata = {
  title: "Lakeside Wedding Venue in Marrakech: Casa Lalla Takerkoust",
  description: "Celebrate your dream sunset wedding at Casa Lalla Takerkoust. Exceptional Mediterranean cuisine, panoramic Atlas Mountain views, and tailored private hire in Marrakech.",
  alternates: {
    canonical: "https://casalallatakerkoust.com/blog/casa-lalla-takerkoust-marrakech-wedding/",
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
    title: "Lakeside Wedding Venue in Marrakech: Casa Lalla Takerkoust",
    description: "Celebrate your dream sunset wedding at Casa Lalla Takerkoust. Exceptional Mediterranean cuisine, panoramic Atlas Mountain views, and tailored private hire in Marrakech.",
    url: "https://casalallatakerkoust.com/blog/casa-lalla-takerkoust-marrakech-wedding/",
    siteName: "Casa Lalla Takerkoust",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://casalallatakerkoust.com/casalalla-takerkoust-agafay-vibes.jpg",
        width: 1200,
        height: 630,
        alt: "Lakeside Wedding Venue in Marrakech: Casa Lalla Takerkoust",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lakeside Wedding Venue in Marrakech: Casa Lalla Takerkoust",
    description: "Celebrate your dream sunset wedding at Casa Lalla Takerkoust. Exceptional Mediterranean cuisine, panoramic Atlas Mountain views, and tailored private hire in Marrakech.",
    images: ["https://casalallatakerkoust.com/casalalla-takerkoust-agafay-vibes.jpg"],
  },
};

const page = () => {
  return <Container />;
};

export default page;
