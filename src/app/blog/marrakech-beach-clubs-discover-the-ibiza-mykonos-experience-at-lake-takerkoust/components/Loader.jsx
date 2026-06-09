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
      "Marrakech Beach Clubs: Discover the Ibiza & Mykonos Experience at Lake Takerkoust",
    description:
      "Looking for Ibiza style beach clubs in Marrakech? Experience barefoot luxury, curated music, and a boho chic Mykonos style restaurant at Casa Lalla Takerkoust.",
    image: [
      "/images/agafay-desert-marrakech-restaurants.webp",
      "/images/high-atlas-mountains-snow-peaks-marrakech.webp",
      "/images/elegant-table-setting-mediterranean-luxe.webp",
      "/images/meilleur-restaurant-ibiza.webp",
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
        "https://casalallatakerkoust.com/blog/marrakech-beach-clubs-discover-the-ibiza-mykonos-experience-at-lake-takerkoust",
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
