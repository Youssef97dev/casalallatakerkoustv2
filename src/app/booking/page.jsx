import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title:
    "Book a Table at Casa Lalla Takerkoust | Restaurant Reservations Ibiza Mykonos Style",
  description:
    "Reserve your table at Casa Lalla Takerkoust and enjoy lakeside dining, sunset views, signature cocktails, and a unique restaurant experience near Marrakech and Agafay Desert.",
  alternates: {
    canonical: "https://casalallatakerkoust.com/booking/",
  },
  openGraph: {
    title:
      "Book a Table at Casa Lalla Takerkoust | Reservations Near Marrakech",
    description:
      "Make your reservation at Casa Lalla Takerkoust and experience exceptional dining by the lake with stunning sunsets and a vibrant atmosphere near Marrakech.",
    url: "https://casalallatakerkoust.com/booking/",
    siteName: "Casa Lalla Takerkoust",
    type: "website",
  },
};

const page = () => {
  return <Loader />;
};

export default page;
