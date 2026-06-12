import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title:
    "Réservation Restaurant Agafay | Casa Lalla Takerkoust | Ibiza & Mykonos Style",
  description:
    "Réservez votre table ou votre événement privé à Casa Lalla Takerkoust près de Marrakech. Profitez d’un restaurant au bord du lac avec une ambiance Ibiza & Mykonos style face au désert d’Agafay.",
  alternates: {
    canonical: "https://casalallatakerkoust.com/fr/reservation/",
  },
  openGraph: {
    title: "Réservation Restaurant Agafay | Casa Lalla | Ibiza & Mykonos Style",
    description:
      "Réservez votre expérience à Casa Lalla Takerkoust : restaurant au bord du lac, événements privés et ambiance Ibiza & Mykonos style près de Marrakech.",
    url: "https://casalallatakerkoust.com/fr/reservation/",
    siteName: "Casa Lalla Takerkoust",
    type: "website",
  },
};

const page = () => {
  return <Loader />;
};

export default page;
