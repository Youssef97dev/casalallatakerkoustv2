import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title:
    "Mariage & Événements à Agafay | Casa Lalla Takerkoust | Ibiza & Mykonos Style",
  description:
    "Organisez votre mariage ou événement privé à Casa Lalla Takerkoust, près de Marrakech. Profitez d’un lieu unique au bord du lac avec une ambiance Ibiza & Mykonos style, face au désert d’Agafay.",
  alternates: {
    canonical: "https://casalallatakerkoust.com/fr/private-events/",
  },
  openGraph: {
    title: "Mariage & Événements à Agafay | Casa Lalla | Ibiza & Mykonos Style",
    description:
      "Célébrez votre mariage ou événement privé à Casa Lalla Takerkoust. Un lieu exceptionnel près de Marrakech avec vue sur le lac et ambiance Ibiza & Mykonos style.",
    url: "https://casalallatakerkoust.com/fr/private-events/",
    siteName: "Casa Lalla Takerkoust",
    type: "website",
  },
};

const page = () => {
  return <Loader />;
};

export default page;
