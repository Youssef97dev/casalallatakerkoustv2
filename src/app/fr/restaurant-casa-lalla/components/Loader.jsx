import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Hero from "./Hero";
import Content from "./Content";
import ButtonWtsp from "@/components/ButtonWtsp";
import { siteConfig } from "@/data/siteConfig";

const Loader = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "LocalBusiness"],
    name: "Restaurant Casa Lalla Takerkoust",
    description:
      "Restaurant d’exception au bord du lac de Takerkoust près de Marrakech, offrant une cuisine marocaine et méditerranéenne raffinée face aux sommets de l’Atlas.",
    url: "https://casalallatakerkoust.com/fr/restaurant-casa-lalla/",
    telephone: siteConfig.phone,
    menu: "https://casalallatakerkoust.com/fr/menu/",
    acceptsReservations: "True",
    servesCuisine: ["Marocaine", "Méditerranéenne"],
    priceRange: "$$$",
    image: [
      "https://casalallatakerkoust.com/images/restaurant-casa-lalla-takerkoust-terrace-lake-view.webp",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: "MA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: siteConfig.hours.opens,
        closes: siteConfig.hours.closes,
      },
    ],
    sameAs: [
      siteConfig.instagramUrl,
      siteConfig.mapsUrl,
      siteConfig.tripadvisorUrl,
    ],
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
