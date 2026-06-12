import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title: "Agafay Weddings & Private Events | Ibiza Style Moroccan Restaurants",
  description:
    "Host your wedding or private event near Agafay Desert at Casa Lalla Takerkoust. Enjoy a unique lakeside venue near Marrakech with refined Moroccan cuisine and stunning sunset views.",
  alternates: {
    canonical: "https://casalallatakerkoust.com/private-events/",
  },
  openGraph: {
    title: "Agafay Weddings & Private Events | Casa Lalla Takerkoust",
    description:
      "Celebrate weddings and private events at Casa Lalla Takerkoust. A unique lakeside venue near Marrakech offering panoramic views, elegant dining, and unforgettable experiences.",
    url: "https://casalallatakerkoust.com/private-events/",
    siteName: "Casa Lalla Takerkoust",
    type: "website",
  },
};

const page = () => {
  return <Loader />;
};

export default page;
