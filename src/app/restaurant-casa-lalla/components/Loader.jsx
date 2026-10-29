import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
      "Lakeside restaurant and day retreat offering refined Moroccan and Mediterranean dining with panoramic Atlas Mountain views at Lake Lalla Takerkoust near Marrakech.",
    url: "https://casalallatakerkoust.com/restaurant-casa-lalla/",
    telephone: siteConfig.phone,
    menu: "https://casalallatakerkoust.com/menu/",
    acceptsReservations: "True",
    servesCuisine: ["Moroccan", "Mediterranean"],
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
      <Navbar path={"/fr/restaurant-casa-lalla"} />
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
