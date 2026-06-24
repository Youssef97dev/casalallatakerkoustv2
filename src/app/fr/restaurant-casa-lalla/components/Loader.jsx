import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Hero from "./Hero";
import Content from "./Content";
import ButtonWtsp from "@/components/ButtonWtsp";

const Loader = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",

    // ENGLISH STRINGS (See below for French)
    name: "Notre Histoire — Casa Lalla Takerkoust & Oasis d'Agafay",
    description:
      "Découvrez la vision derrière Casa Lalla, un restaurant et day club d'inspiration Mykonos alliant l'esthétique méditerranéenne à la beauté sauvage du lac Lalla Takerkoust et du désert d'Agafay.",

    url: "https://casalallatakerkoust.com/restaurant-casa-lalla/", // <-- Update to your exact routing path

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
      servesCuisine: ["Mediterranean", "International", "Moroccan Fusion"],
      priceRange: "$$$",

      // THE KNOWLEDGE GRAPH ANCHOR:
      // This silently tells Google that this restaurant is backed by an established hospitality group, instantly boosting its domain authority.
      parentOrganization: {
        "@type": "Organization",
        name: "Casa Lalla Takerkoust",
        url: "https://casalallatakerkoust.com/",
      },

      // SEMANTIC KEYWORD INJECTION:
      // This array tells Google exactly what conceptual topics your brand is an authority on, outside of just "food."
      knowsAbout: [
        "Ibiza Style Pool Club",
        "Agafay Desert Dining Experience",
        "Lake Lalla Takerkoust Activities",
        "Boho Lifestyle",
      ],
    },
  };
  return (
    <div className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar path={"/restaurant-casa-lalla"} />
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
