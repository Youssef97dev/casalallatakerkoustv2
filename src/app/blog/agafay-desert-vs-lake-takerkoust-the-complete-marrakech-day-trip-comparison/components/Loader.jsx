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
      "Agafay Desert vs Lake Takerkoust: The Complete Marrakech Day Trip Comparison",
    description:
      "Compare Agafay Desert and Lake Takerkoust near Marrakech. Discover the best activities, landscapes, dining experiences, and travel tips for planning the perfect day trip.",
    image: [
      "/images/chic-desert-oasis-design-mykonos-inspiration.webp",
      "/images/luxury-dining-takerkoust-mykonos-style.webp",
      "/images/restaurants-marocain-marrakech-garden.webp",
      "/images/restaurants-marocain-marrakech-show.webp",
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
        "https://casalallatakerkoust.com/blog/agafay-desert-vs-lake-takerkoust-the-complete-marrakech-day-trip-comparison",
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
