import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import React from "react";
import Hero from "./Hero";
import Content from "./Content";
import ButtonWtsp from "@/components/ButtonWtsp";

const Loader = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",

    name: "Activités & Expériences Day Club — Casa Lalla Takerkoust / Agafay",
    description:
      "Découvrez la journée parfaite à Marrakech. Day pass piscine bohème, quad dans le désert d'Agafay, jet ski sur le lac et sunset lounge DJ.",
    url: "https://casalallatakerkoust.com/fr/lalla-takerkoust-activities/", // <-- Hardcode exact URL

    mainEntity: {
      "@type": "Restaurant",
      name: "Casa Lalla Takerkoust",
      image: [
        "https://casalallatakerkoust.com/images/high-atlas-mountains-quad-marrakech.webp",
        "https://casalallatakerkoust.com/images/adrenaline-buggy-tour-marrakech-agafay-desert.webp",
        "https://casalallatakerkoust.com/images/quad-tour-agafay-desert-marrakech.webp",
        "https://casalallatakerkoust.com/images/quad-bike-tour-agafay-desert-adventure.webp",
        "https://casalallatakerkoust.com/images/luxury-tour-experience-casa-lalla-takerkoust.webp",
      ],
    },
  };
  return (
    <div className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar path={"/lalla-takerkoust-activities"} />
      <Hero />
      <Content />
      <Footer />
      <div className="fixed bottom-7 right-6 text-riad_primary z-50">
        <ButtonWtsp />
      </div>
    </div>
  );
};

export default Loader;
