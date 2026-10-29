import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title:
    "Photo Gallery | Casa Lalla Takerkoust | Lakeside Restaurant & Retreat",
  description:
    "Explore the Casa Lalla Takerkoust photo gallery: stunning lake terrace views, Atlas Mountain panoramas, bohemian lounge decor, and refined dining moments.",
  alternates: {
    canonical: "https://casalallatakerkoust.com/gallery/",
    languages: {
      en: "https://casalallatakerkoust.com/gallery/",
      fr: "https://casalallatakerkoust.com/fr/gallery/",
      "x-default": "https://casalallatakerkoust.com/gallery/",
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
      "Photo Gallery | Casa Lalla Takerkoust | Lakeside Restaurant & Retreat",
    description:
      "Visual journey through Casa Lalla Takerkoust lakeside oasis near Marrakech.",
    url: "https://casalallatakerkoust.com/gallery/",
    siteName: "Casa Lalla Takerkoust",
    locale: "en_US",
    alternateLocale: ["fr_FR"],
    type: "website",
    images: [
      {
        url: "https://casalallatakerkoust.com/images/romantic-night-dining-ambiance-casa-lalla-takerkoust.webp",
        width: 1200,
        height: 630,
        alt: "Casa Lalla Takerkoust photo gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Photo Gallery | Casa Lalla Takerkoust",
    description: "Visual journey through Casa Lalla at Lake Lalla Takerkoust.",
    images: [
      "https://casalallatakerkoust.com/images/romantic-night-dining-ambiance-casa-lalla-takerkoust.webp",
    ],
  },
};

const page = () => {
  return <Loader />;
};

export default page;
