import React from "react";
import FormBooking from "./components/FormBooking";
import Navbar from "@/app/fr/components/Navbar";
import Footer from "@/app/fr/components/Footer";

export const metadata = {
  title:
    "Réserver une Chambre | Hôtel Rural Casa Lalla Marrakech",
  description:
    "Réservez votre séjour à l’Hôtel Rural Casa Lalla au bord du lac de Takerkoust près de Marrakech. Chambres confortables, piscine et calme face à l’Atlas.",
  alternates: {
    canonical: "https://casalallatakerkoust.com/fr/rural-hotel/booking/",
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
      <Navbar path={"/rural-hotel/booking"} change={true} />
      <FormBooking />
      <Footer />
    </div>
  );
};

export default page;
