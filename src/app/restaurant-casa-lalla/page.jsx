import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title:
    "Restaurant Casa Lalla Takerkoust | Best Dining Near Marrakech & Agafay Desert",
  description:
    "Discover Casa Lalla Takerkoust, a lakeside restaurant near Marrakech offering refined cuisine, sunset views, and a unique terrace experience between Lake Takerkoust and the Agafay Desert.",
  alternates: {
    canonical: "https://casalallatakerkoust.com/restaurant-casa-lalla/",
  },
  openGraph: {
    title: "Restaurant Casa Lalla Takerkoust | Lakeside Dining Near Marrakech",
    description:
      "Enjoy a unique dining experience at Casa Lalla Takerkoust with lake views, sunset terrace, and refined cuisine near Marrakech and the Agafay Desert.",
    url: "https://casalallatakerkoust.com/restaurant-casa-lalla/",
    siteName: "Casa Lalla Takerkoust",
    type: "website",
  },
};

const page = () => {
  return <Loader />;
};

export default page;
