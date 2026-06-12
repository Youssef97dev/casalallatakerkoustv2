import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title:
    "Contact Casa Lalla Takerkoust | Reservations & Information Ibiza Mykonos Style",
  description:
    "Contact Casa Lalla Takerkoust for restaurant reservations, private events, group bookings, and information. Enjoy lakeside dining, Agafay vibes, and unforgettable sunsets just outside Marrakech.",
  alternates: {
    canonical: "https://casalallatakerkoust.com/contact/",
  },
  openGraph: {
    title: "Contact Casa Lalla Takerkoust | Reservations & Information",
    description:
      "Book your table, organize a private event, or get in touch with Casa Lalla Takerkoust. Discover a unique lakeside restaurant experience near Marrakech.",
    url: "https://casalallatakerkoust.com/contact/",
    siteName: "Casa Lalla Takerkoust",
    type: "website",
  },
};

const page = () => {
  return <Loader />;
};

export default page;
