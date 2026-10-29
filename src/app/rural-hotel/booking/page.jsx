import React from "react";
import FormBooking from "./components/FormBooking";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title:
    "Book a Room | Casa Lalla Rural Hotel Near Marrakech",
  description:
    "Book your stay at Casa Lalla Rural Hotel by Lake Takerkoust near Marrakech. Enjoy comfortable rooms, pool access, and tranquil Atlas views.",
  alternates: {
    canonical: "https://casalallatakerkoust.com/rural-hotel/booking/",
    languages: {
      en: "https://casalallatakerkoust.com/rural-hotel/booking/",
      fr: "https://casalallatakerkoust.com/fr/rural-hotel/booking/",
      "x-default": "https://casalallatakerkoust.com/rural-hotel/booking/",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

const page = () => {
  return (
    <div className="relative">
      <Navbar path={"/fr/rural-hotel/booking"} change={true} />
      <FormBooking />
      <Footer />
    </div>
  );
};

export default page;
