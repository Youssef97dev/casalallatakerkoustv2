import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title:
    "Private Events & Destination Weddings | Casa Lalla Takerkoust Near Marrakech",
  description:
    "Host bespoke weddings, corporate retreats, and private celebrations at Casa Lalla Takerkoust. Exclusive lakeside venue hire with panoramic Atlas Mountain views.",
  alternates: {
    canonical: "https://casalallatakerkoust.com/private-events/",
    languages: {
      en: "https://casalallatakerkoust.com/private-events/",
      fr: "https://casalallatakerkoust.com/fr/private-events/",
      "x-default": "https://casalallatakerkoust.com/private-events/",
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
      "Private Events & Destination Weddings | Casa Lalla Takerkoust Near Marrakech",
    description:
      "Celebrate weddings and private events at Casa Lalla Takerkoust. A unique lakeside venue near Marrakech offering panoramic views, elegant dining, and unforgettable experiences.",
    url: "https://casalallatakerkoust.com/private-events/",
    siteName: "Casa Lalla Takerkoust",
    locale: "en_US",
    alternateLocale: ["fr_FR"],
    type: "website",
    images: [
      {
        url: "https://casalallatakerkoust.com/images/private-event-wedding-setup-casa-lalla.webp",
        width: 1200,
        height: 630,
        alt: "Private event and wedding celebration setup at Casa Lalla Takerkoust",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Private Events & Destination Weddings | Casa Lalla Takerkoust Near Marrakech",
    description:
      "Exclusive venue hire for weddings and private banquets by Lake Takerkoust near Marrakech.",
    images: [
      "https://casalallatakerkoust.com/images/private-event-wedding-setup-casa-lalla.webp",
    ],
  },
};

const page = () => {
  return <Loader />;
};

export default page;
