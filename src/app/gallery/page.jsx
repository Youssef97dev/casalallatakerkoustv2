import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title: "Photo Gallery | Casa Lalla Takerkoust | Ibiza Style Vibe",
  description:
    "Explore the Casa Lalla Takerkoust gallery. Discover our Ibiza-style restaurant and agafay vibes near Marrakech featuring stunning lake views and a vibrant atmosphere.",
  alternates: {
    canonical: "https://casalallatakerkoust.com/gallery/",
  },
  openGraph: {
    title: "Photo Gallery | Casa Lalla Takerkoust | Ibiza Style Vibe",
    description: "Visual journey through our oasis in the agafay desert.",
    url: "https://casalallatakerkoust.com/gallery/",
    siteName: "Casa Lalla Takerkoust",
    images: [
      "/images/romantic-night-dining-ambiance-casa-lalla-takerkoust.webp",
    ], // Add a preview image path here
  },
};

const page = () => {
  return <Loader />;
};

export default page;
