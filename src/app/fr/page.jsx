import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title:
    "Casa Lalla Takerkoust | Restaurant & Expériences au Lac de Takerkoust Style Ibiza Mykonos",
  description:
    "Découvrez Casa Lalla Takerkoust, restaurant et lieu d'expériences au bord du lac de Takerkoust près de Marrakech. Cuisine marocaine raffinée, activités et événements avec vue sur l'Atlas et le désert d'Agafay.",
  alternates: {
    canonical: "https://casalallatakerkoust.com/fr/",
  },
  openGraph: {
    title: "Casa Lalla Takerkoust | Restaurant & Expériences près de Marrakech",
    description:
      "Restaurant et destination unique au lac de Takerkoust. Profitez d’une cuisine marocaine, d’expériences outdoor et d’une vue exceptionnelle sur l’Atlas et l’Agafay.",
    url: "https://casalallatakerkoust.com/fr/",
    siteName: "Casa Lalla Takerkoust",
    type: "website",
  },
};

const page = () => {
  return <Loader />;
};

export default page;
