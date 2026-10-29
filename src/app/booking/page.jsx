import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title:
    "Online Booking & Reservation | Casa Lalla Takerkoust Near Marrakech",
  description:
    "Reserve your table online at Casa Lalla Takerkoust. Lakeside lunch, panoramic Atlas Mountain views, sunset cocktails, and fine Moroccan dining.",
  alternates: {
    canonical: "https://casalallatakerkoust.com/booking/",
    languages: {
      en: "https://casalallatakerkoust.com/booking/",
      fr: "https://casalallatakerkoust.com/fr/booking/",
      "x-default": "https://casalallatakerkoust.com/booking/",
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
      "Online Booking & Reservation | Casa Lalla Takerkoust Near Marrakech",
    description:
      "Make your reservation at Casa Lalla Takerkoust and experience exceptional dining by the lake with stunning sunsets and a vibrant atmosphere near Marrakech.",
    url: "https://casalallatakerkoust.com/booking/",
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
