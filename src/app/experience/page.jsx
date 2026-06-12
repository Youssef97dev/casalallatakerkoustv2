import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title:
    "Experiences at Casa Lalla Takerkoust | Agafay Desert & Lake Activities Ibiza Mykonos Style",
  description:
    "Enjoy unforgettable experiences at Casa Lalla Takerkoust including quad biking, jet skiing, horseback riding, hiking, and Agafay Desert adventures near Marrakech.",
  alternates: {
    canonical: "https://casalallatakerkoust.com/experience/",
  },
  openGraph: {
    title:
      "Experiences at Casa Lalla Takerkoust | Agafay Desert & Lake Activities",
    description:
      "Discover adventure and relaxation near Marrakech with unique experiences around Lalla Takerkoust Lake and the Agafay Desert.",
    url: "https://casalallatakerkoust.com/experience/",
    siteName: "Casa Lalla Takerkoust",
    type: "website",
  },
};

const page = () => {
  return <Loader />;
};

export default page;
