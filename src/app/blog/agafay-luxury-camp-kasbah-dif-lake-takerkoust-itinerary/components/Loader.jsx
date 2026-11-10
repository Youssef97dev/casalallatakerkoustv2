import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Hero from "./Hero";
import Content from "./Content";
import ButtonWtsp from "@/components/ButtonWtsp";

const Loader = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Agafay Luxury Camp & Kasbah d'If Guide: Why Add Lake Lalla Takerkoust to Your Trip",
    description:
      "Booking an Agafay luxury camp or staying at Kasbah d'If (Kasbah Dif)? Discover how to pair your desert glamping stay with lakeside dining & water sports at Casa Lalla Takerkoust.",
    image: [
      "https://casalallatakerkoust.com/images/casalallatakerkoust-restaurant-lake-view-terrace.webp",
      "https://casalallatakerkoust.com/images/lalla-takerkoust-lake-sunset-agafay-desert.webp",
      "https://casalallatakerkoust.com/images/casalallatakerkoust-restaurant-arched-patio-dining.webp",
      "https://casalallatakerkoust.com/images/agafay-luxury-camp-poolside-lalla-takerkoust.webp",
      "https://casalallatakerkoust.com/images/kasbah-dif-rooftop-terrace-lake-views.webp",
    ],
    author: {
      "@type": "Restaurant",
      name: "Casa Lalla Takerkoust",
      url: "https://casalallatakerkoust.com/",
    },
    publisher: {
      "@type": "Restaurant",
      name: "Casa Lalla Takerkoust",
      logo: {
        "@type": "ImageObject",
        url: "https://casalallatakerkoust.com/casa-lalla-scarlet.png",
      },
    },
    keywords: [
      "Agafay Luxury Camp",
      "Kasbah d'If",
      "Kasbah Dif",
      "Casa Lalla Takerkoust",
    ],
    about: [
      {
        "@type": "Thing",
        name: "Agafay Luxury Camp",
      },
      {
        "@type": "Thing",
        name: "Kasbah d'If",
        sameAs: "https://www.kasbahdif.com",
      },
      {
        "@type": "Restaurant",
        name: "Casa Lalla Takerkoust",
        url: "https://casalallatakerkoust.com/",
      },
      {
        "@type": "Place",
        name: "Lake Lalla Takerkoust",
      },
    ],
    datePublished: "2026-11-10",
    dateModified: "2026-11-10",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://casalallatakerkoust.com/blog/agafay-luxury-camp-kasbah-dif-lake-takerkoust-itinerary/",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How close is Casa Lalla Takerkoust to Kasbah d'If and the main Agafay luxury camps?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Casa Lalla Takerkoust is situated just 12 to 15 kilometers (a scenic 15 to 20 minute drive) from Kasbah d'If (Kasbah Dif) and the primary Agafay luxury camps, connecting the rocky desert plateau directly to the refreshing waterfront of Lake Lalla Takerkoust.",
        },
      },
      {
        "@type": "Question",
        name: "Can we visit Casa Lalla Takerkoust for lunch and jet-skiing without staying overnight at the lake?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, travelers staying in an Agafay luxury camp or at Kasbah d'If can easily visit Casa Lalla Takerkoust as day guests for lakeside lunch (1:00 PM – 5:00 PM), pool day passes, signature cocktails, and thrilling water sports such as jet-skiing before returning to the desert for dinner under the stars.",
        },
      },
      {
        "@type": "Question",
        name: "What is the best way to travel between an Agafay luxury camp, Kasbah Dif, and Lake Lalla Takerkoust?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Guests can travel comfortably via private chauffeur transfers arranged through their desert camp concierge (around 15-20 minutes on scenic trails), or embark on an adventurous guided quad or buggy safari that traverses the Agafay dunes and pulls up right to the shores of Casa Lalla Takerkoust.",
        },
      },
    ],
  };

  return (
    <div className="relative bg-casa-background min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      {/* Navbar with direct reciprocal link to the French article */}
      <Navbar
        path={"/fr/blog/camp-de-luxe-agafay-kasbah-dif-lac-takerkoust/"}
      />
      <Hero />
      <Content />
      <Footer />
      <div className="fixed bottom-7 right-6 text-casa-scarlet z-50">
        <ButtonWtsp />
      </div>
    </div>
  );
};

export default Loader;
