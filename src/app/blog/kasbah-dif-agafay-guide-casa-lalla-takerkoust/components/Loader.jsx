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
      "Staying at Kasbah d'If (Kasbah Dif)? Why You Must Visit Casa Lalla Takerkoust Nearby",
    description:
      "Planning a trip to Kasbah d'If (Kasbah Dif) in the Agafay Desert? Discover why Casa Lalla Takerkoust is the best nearby lakeside restaurant, day pass, and excursion spot.",
    image: [
      "https://casalallatakerkoust.com/images/restaurant-lake-view-casa-lalla-takerkoust.webp",
      "https://casalallatakerkoust.com/images/chic-desert-oasis-design-mykonos-inspiration.webp",
      "https://casalallatakerkoust.com/images/luxury-dining-takerkoust-mykonos-style.webp",
      "https://casalallatakerkoust.com/images/sunset-cocktails-lalla-takerkoust-lounge.webp",
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
    about: [
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
    ],
    datePublished: "2026-11-07",
    dateModified: "2026-11-07",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://casalallatakerkoust.com/blog/kasbah-dif-agafay-guide-casa-lalla-takerkoust/",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How far is Casa Lalla Takerkoust from Kasbah d'If (Kasbah Dif)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Casa Lalla Takerkoust is situated approximately 12 to 15 kilometers from Kasbah d'If (Kasbah Dif), translating to a scenic 15 to 20 minute drive connecting the Agafay Desert plateau to the shores of Lake Lalla Takerkoust.",
        },
      },
      {
        "@type": "Question",
        name: "Can I visit Casa Lalla Takerkoust for lunch or a day pass while staying in the Agafay Desert?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, travelers staying in Agafay desert lodges like Kasbah d'If can visit Casa Lalla Takerkoust for lunch (1:00 PM – 5:00 PM), pool day passes, craft cocktails, and water activities before returning to the desert for the evening.",
        },
      },
      {
        "@type": "Question",
        name: "Can I book quad biking from the lake toward the Agafay desert trails near Kasbah Dif?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, guided quad biking and buggy tours can be arranged between the Lake Lalla Takerkoust shoreline and the Agafay Desert trails surrounding Kasbah d'If.",
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
      <Navbar path={"/fr/blog/guide-kasbah-dif-agafay-casa-lalla-takerkoust/"} />
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
