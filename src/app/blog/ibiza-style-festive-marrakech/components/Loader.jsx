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
      "Casa Lalla Takerkoust: Ibiza-Style Festive Dining Near Marrakech",
    description:
      "Discover Casa Lalla Takerkoust, the ultimate Ibiza-style festive dining experience near Marrakech. Enjoy vibrant energy, exclusive menus, and stunning lake views.",
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
        "https://casalallatakerkoust.com/blog/ibiza-style-festive-marrakech",
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
