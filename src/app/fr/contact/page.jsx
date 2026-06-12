import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title:
    "Contact & Réservation | Casa Lalla Takerkoust | Ibiza & Mykonos Style",
  description:
    "Contactez Casa Lalla Takerkoust près de Marrakech pour vos réservations, événements privés ou demandes d'information. Restaurant au bord du lac avec ambiance Ibiza & Mykonos style face à l’Agafay.",
  alternates: {
    canonical: "https://casalallatakerkoust.com/fr/contact/",
  },
  openGraph: {
    title:
      "Contact & Réservation | Casa Lalla Takerkoust | Ibiza & Mykonos Style",
    description:
      "Réservez votre table ou contactez Casa Lalla Takerkoust. Un restaurant unique au bord du lac avec ambiance Ibiza & Mykonos style près de Marrakech et de l’Agafay.",
    url: "https://casalallatakerkoust.com/fr/contact/",
    siteName: "Casa Lalla Takerkoust",
    type: "website",
  },
};

const page = () => {
  return <Loader />;
};

export default page;
