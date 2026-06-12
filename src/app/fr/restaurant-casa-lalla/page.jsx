import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title:
    "Restaurant Casa Lalla Takerkoust | Meilleur Restaurant près de Marrakech avec Vue Lac",
  description:
    "Découvrez Casa Lalla Takerkoust, restaurant au bord du lac près de Marrakech. Cuisine marocaine raffinée, terrasse panoramique et ambiance unique entre lac et désert d’Agafay.",
  alternates: {
    canonical: "https://casalallatakerkoust.com/fr/restaurant-casa-lalla/",
  },
  openGraph: {
    title:
      "Restaurant Casa Lalla Takerkoust | Vue Lac & Cuisine Marocaine près de Marrakech",
    description:
      "Profitez d’un restaurant unique à Casa Lalla Takerkoust avec vue sur le lac, cuisine marocaine raffinée et ambiance exceptionnelle près de Marrakech et du désert d’Agafay.",
    url: "https://casalallatakerkoust.com/fr/restaurant-casa-lalla/",
    siteName: "Casa Lalla Takerkoust",
    type: "website",
  },
};

const page = () => {
  return <Loader />;
};

export default page;
