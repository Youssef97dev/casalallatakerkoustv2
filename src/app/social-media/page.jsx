import React from "react";
import LinkTree from "./components/LinkTree";

export const metadata = {
  title: "Social Links & Contact | Casa Lalla Takerkoust",
  description:
    "Connect with Casa Lalla Takerkoust on Instagram, WhatsApp, and TripAdvisor, or explore our menu, lake activities, and reservations.",
  alternates: {
    canonical: "https://casalallatakerkoust.com/social-media/",
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
};

const page = () => {
  return (
    <div className="p-5 flex flex-col justify-center items-center pb-14 bg-casa-background-opacity h-screen">
      <LinkTree />
    </div>
  );
};

export default page;
