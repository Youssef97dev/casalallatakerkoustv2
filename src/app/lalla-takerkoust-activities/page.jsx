import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title:
    "Lalla Takerkoust Activities | Quad Biking, Buggy Tours & Horse Riding Ibiza Mykonos Style",
  description:
    "Discover the best activities in Lalla Takerkoust near Marrakech. Enjoy quad biking, buggy tours, horse riding, lake adventures, and unforgettable outdoor experiences close to the Agafay Desert.",
  alternates: {
    canonical: "https://casalallatakerkoust.com/lalla-takerkoust-activities/",
  },
  openGraph: {
    title:
      "Lalla Takerkoust Activities | Quad Biking, Buggy Tours & Horse Riding",
    description:
      "Experience thrilling outdoor activities near Marrakech, including quad biking, buggy tours, horse riding, and adventures around Lalla Takerkoust Lake and the Agafay Desert.",
    url: "https://casalallatakerkoust.com/lalla-takerkoust-activities/",
    siteName: "Casa Lalla Takerkoust",
    type: "website",
  },
};

const page = () => {
  return <Loader />;
};

export default page;
