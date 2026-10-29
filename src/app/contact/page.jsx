import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title:
    "Contact & Table Booking | Casa Lalla Takerkoust Near Marrakech",
  description:
    "Contact Casa Lalla Takerkoust for table reservations, group bookings, lake lunch inquiries, and customer service. Located by Lake Lalla Takerkoust near Marrakech.",
  alternates: {
    canonical: "https://casalallatakerkoust.com/contact/",
    languages: {
      en: "https://casalallatakerkoust.com/contact/",
      fr: "https://casalallatakerkoust.com/fr/contact/",
      "x-default": "https://casalallatakerkoust.com/contact/",
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
    title: "Contact & Table Booking | Casa Lalla Takerkoust Near Marrakech",
    description:
      "Book your table, organize a private event, or get in touch with Casa Lalla Takerkoust. Discover a unique lakeside restaurant experience near Marrakech.",
    url: "https://casalallatakerkoust.com/contact/",
    siteName: "Casa Lalla Takerkoust",
    locale: "en_US",
    alternateLocale: ["fr_FR"],
    type: "website",
  },
};

const page = () => {
  return <Loader />;
};

export default page;
