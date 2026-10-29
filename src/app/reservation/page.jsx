import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title:
    "Table Reservation & Day Pass | Casa Lalla Takerkoust Near Marrakech",
  description:
    "Reserve your dining table or day pass at Casa Lalla Takerkoust. Experience lakeside lunch, panoramic Atlas Mountain views, and authentic Moroccan hospitality.",
  alternates: {
    canonical: "https://casalallatakerkoust.com/reservation/",
    languages: {
      en: "https://casalallatakerkoust.com/reservation/",
      fr: "https://casalallatakerkoust.com/fr/reservation/",
      "x-default": "https://casalallatakerkoust.com/reservation/",
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
      "Table Reservation & Day Pass | Casa Lalla Takerkoust Near Marrakech",
    description:
      "Book your table at Casa Lalla Takerkoust. A stunning lakeside dining venue near Marrakech offering panoramic views, refined cuisine, and relaxing day passes.",
    url: "https://casalallatakerkoust.com/reservation/",
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
