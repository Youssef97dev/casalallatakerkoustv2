import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title:
    "Réservation Restaurant | Casa Lalla Takerkoust | Ibiza & Mykonos Style près de Marrakech",
  description:
    "Réservez votre table à Casa Lalla Takerkoust près de Marrakech. Profitez d’un restaurant au bord du lac avec ambiance Ibiza & Mykonos style, cocktails, coucher de soleil et expérience festive face à l’Agafay.",
  alternates: {
    canonical: "https://casalallatakerkoust.com/fr/booking/",
  },
  openGraph: {
    title:
      "Réservation Restaurant | Casa Lalla Takerkoust | Ibiza & Mykonos Style",
    description:
      "Réservez votre expérience à Casa Lalla Takerkoust : cocktails, coucher de soleil et ambiance festive Ibiza & Mykonos style au bord du lac près de Marrakech.",
    url: "https://casalallatakerkoust.com/fr/booking/",
    siteName: "Casa Lalla Takerkoust",
    type: "website",
  },
};

const page = () => {
  return <Loader />;
};

export default page;
