import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Hero from "./Hero";
import Content from "./Content";
import ButtonWtsp from "@/components/ButtonWtsp";

const Container = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "",
    description: "",
    image: ["", "", "", ""],
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
    datePublished: "2026-07-31",
    dateModified: "2026-07-31",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://casalallatakerkoust.com/blog/casa-lalla-takerkoust-marrakech-wedding",
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

export default Container;
