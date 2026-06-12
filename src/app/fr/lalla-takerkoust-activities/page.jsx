import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title:
    "Activités Quad, Buggy & Cheval | Casa Lalla Takerkoust | Ambiance Ibiza & Mykonos",
  description:
    "Vivez des activités inoubliables à Lalla Takerkoust : quad, buggy et balade à cheval dans les Agafay vibes. Profitez ensuite d’une ambiance Ibiza & Mykonos style unique au bord du lac près de Marrakech.",
  alternates: {
    canonical:
      "https://casalallatakerkoust.com/fr/lalla-takerkoust-activities/",
  },
  openGraph: {
    title:
      "Activités Quad, Buggy & Cheval | Casa Lalla | Ibiza & Mykonos Style",
    description:
      "Découvrez les meilleures activités à Lalla Takerkoust : quad, buggy et cheval dans le désert d’Agafay, puis détente dans une ambiance Ibiza & Mykonos style au bord du lac.",
    url: "https://casalallatakerkoust.com/fr/lalla-takerkoust-activities/",
    siteName: "Casa Lalla Takerkoust",
    type: "website",
  },
};

const page = () => {
  return <Loader />;
};

export default page;
