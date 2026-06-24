import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Hero from "./Hero";
import Content from "./Content";
import ButtonWtsp from "@/components/ButtonWtsp";

const Loader = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EventVenue",

    // ENGLISH STRINGS (See below for French replacements)
    name: "Casa Lalla — Private Event Venue & Pool Club Marrakech",
    description:
      "Exclusive venue rental for private parties, weddings, birthdays, and corporate retreats at Lake Lalla Takerkoust. Mykonos-style boho pool club located 10 minutes from the Agafay Desert.",

    url: "https://casalallatakerkoust.com/private-events/", // <-- Update to exact page URL
    image: [
      "https://casalallatakerkoust.com/images/mykonos-style-architecture-marrakech-lake.webp",
      "https://casalallatakerkoust.com/images/ibiza-mykonos-style-restaurants.webp",
      "https://casalallatakerkoust.com/images/boho-chic-interior-design-marrakech-lake.webp",
    ],

    // THE 3 "SECRET WEAPON" PROPERTIES:

    maximumAttendeeCapacity: 300, // <-- CHANGE THIS to your actual max standing/sitting capacity. Event planners search specifically by capacity!

    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Swimming Pool",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Sunset Lake View",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "DJ / Sound System Setup",
        value: true,
      },
    ],

    address: {
      "@type": "PostalAddress",
      streetAddress: "Lac Lalla Takerkoust",
      addressLocality: "Lalla Takerkoust",
      addressRegion: "Marrakech-Safi",
      postalCode: "40000",
      addressCountry: "MA",
    },

    geo: {
      "@type": "GeoCoordinates",
      latitude: "31.352206977509468", // <-- Put Casa Lalla's exact Google Maps Lat/Long here
      longitude: "-8.130993242328366",
    },

    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+212675480103", // <-- Put the specific phone number of your Events Manager
      contactType: "Event Booking & Privatization",
      availableLanguage: ["English", "French"],
    },
  };
  return (
    <div className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar path={"/fr/private-events"} />
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
