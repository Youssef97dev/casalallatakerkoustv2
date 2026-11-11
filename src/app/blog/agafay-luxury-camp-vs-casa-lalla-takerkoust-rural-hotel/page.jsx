import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title:
    "Agafay Luxury Camp vs. Casa Lalla Takerkoust Rural Hotel: Where to Stay?",
  description:
    "Comparing an Agafay luxury camp with the Casa Lalla Takerkoust Rural Hotel? Discover why staying overnight at our lakeside rural hotel & restaurant gives you the best of Agafay.",
  keywords:
    "agafay luxury camp, casa lalla takerkoust rural hotel, lalla takerkoust hotel, rural hotel near marrakech, where to stay agafay desert, agafay glamping alternative, casa lalla takerkoust restaurant and hotel",
  alternates: {
    canonical:
      "https://casalallatakerkoust.com/blog/agafay-luxury-camp-vs-casa-lalla-takerkoust-rural-hotel/",
    languages: {
      en: "https://casalallatakerkoust.com/blog/agafay-luxury-camp-vs-casa-lalla-takerkoust-rural-hotel/",
      fr: "https://casalallatakerkoust.com/fr/blog/camp-de-luxe-agafay-vs-hotel-rural-casa-lalla-takerkoust/",
      "x-default":
        "https://casalallatakerkoust.com/blog/agafay-luxury-camp-vs-casa-lalla-takerkoust-rural-hotel/",
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
      "Agafay Luxury Camp vs. Casa Lalla Takerkoust Rural Hotel: Where to Stay?",
    description:
      "Comparing an Agafay luxury camp with the Casa Lalla Takerkoust Rural Hotel? Discover why staying overnight at our lakeside rural hotel & restaurant gives you the best of Agafay.",
    url: "https://casalallatakerkoust.com/blog/agafay-luxury-camp-vs-casa-lalla-takerkoust-rural-hotel/",
    siteName: "Casa Lalla Takerkoust",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://casalallatakerkoust.com/images/boutique-hotel-lalla-takerkoust-lake-view.webp",
        width: 1200,
        height: 630,
        alt: "Casa Lalla Takerkoust Rural Hotel and lakeside restaurant overlooking Lake Takerkoust near the Agafay Desert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Agafay Luxury Camp vs. Casa Lalla Takerkoust Rural Hotel: Where to Stay?",
    description:
      "Comparing an Agafay luxury camp with the Casa Lalla Takerkoust Rural Hotel? Discover why staying overnight at our lakeside rural hotel & restaurant gives you the best of Agafay.",
    images: [
      "https://casalallatakerkoust.com/images/boutique-hotel-lalla-takerkoust-lake-view.webp",
    ],
  },
};

const page = () => {
  return <Loader />;
};

export default page;
