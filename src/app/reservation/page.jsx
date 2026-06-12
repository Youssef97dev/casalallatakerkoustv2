import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title:
    "Agafay Wedding Venue & Private Events | Casa Lalla Takerkoust Near Marrakech",
  description:
    "Host your wedding or private event at Casa Lalla Takerkoust, a unique lakeside venue near Marrakech. Enjoy breathtaking Agafay Desert views, elegant dining, and unforgettable celebrations by the lake.",
  alternates: {
    canonical: "https://casalallatakerkoust.com/reservation/",
  },
  openGraph: {
    title: "Agafay Wedding Venue & Private Events | Casa Lalla Takerkoust",
    description:
      "Plan your wedding or private event at Casa Lalla Takerkoust. A stunning lakeside venue near Marrakech offering panoramic views, refined cuisine, and exclusive experiences.",
    url: "https://casalallatakerkoust.com/reservation/",
    siteName: "Casa Lalla Takerkoust",
    type: "website",
  },
};

const page = () => {
  return <Loader />;
};

export default page;
