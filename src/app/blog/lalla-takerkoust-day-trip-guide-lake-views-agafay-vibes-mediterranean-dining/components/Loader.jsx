import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Hero from "./Hero";
import Content from "./Content";
import ButtonWtsp from "@/components/ButtonWtsp";

const Loader = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Lalla Takerkoust Day Trip Guide: Lake Views, Agafay Vibes & Mediterranean Dining",
    description:
      "Plan the perfect Lalla Takerkoust day trip from Marrakech. Discover aquatic adventures, Agafay desert activities, and Mediterranean dining with Atlas Mountain views.",
    image: [
      "/images/agafay-desert-buggy-tour-marrakech.webp",
      "/images/lalla-takerkoust-lake-weather-marrakech.webp",
      "/images/luxury-trip-from-mamounia-the-lake.webp",
      "/images/restaurant-lake-view-casa-lalla-takerkoust.webp",
    ],
    author: {
      "@type": "Restaurant",
      name: "Casa Lalla Takerkoust",
    },
    publisher: {
      "@type": "Restaurant",
      name: "Casa Lalla Takerkoust",
      logo: {
        "@type": "ImageObject",
        url: "/casa-lalla-scarlet.png",
      },
    },
    datePublished: "2026-04-02",
    dateModified: "2026-04-02",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://casalallatakerkoust.com/blog/lalla-takerkoust-day-trip-guide-lake-views-agafay-vibes-mediterranean-dining",
    },
  };
  return (
    <div className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <Navbar path={"#"} />
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
