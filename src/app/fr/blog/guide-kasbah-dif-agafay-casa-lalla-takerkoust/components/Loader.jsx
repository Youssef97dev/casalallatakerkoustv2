import Footer from "@/app/fr/components/Footer";
import Navbar from "@/app/fr/components/Navbar";
import React from "react";
import Hero from "./Hero";
import Content from "./Content";
import ButtonWtsp from "@/components/ButtonWtsp";

const Loader = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Séjour à la Kasbah d'If (Kasbah Dif) : Escapade & Déjeuner au Bord du Lac à Casa Lalla Takerkoust",
    description:
      "Vous séjournez ou visitez la Kasbah d'If (Kasbah Dif) à Agafay ? Découvrez Casa Lalla Takerkoust, le restaurant et day-pass incontournable au bord du lac à quelques minutes.",
    image: [
      "https://casalallatakerkoust.com/images/restaurant-lake-view-casa-lalla-takerkoust.webp",
      "https://casalallatakerkoust.com/images/chic-desert-oasis-design-mykonos-inspiration.webp",
      "https://casalallatakerkoust.com/images/luxury-dining-takerkoust-mykonos-style.webp",
      "https://casalallatakerkoust.com/images/sunset-cocktails-lalla-takerkoust-lounge.webp",
    ],
    inLanguage: "fr-FR",
    author: {
      "@type": "Restaurant",
      name: "Casa Lalla Takerkoust",
      url: "https://casalallatakerkoust.com/fr/",
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
        url: "https://casalallatakerkoust.com/fr/",
      },
    ],
    datePublished: "2026-11-07",
    dateModified: "2026-11-07",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://casalallatakerkoust.com/fr/blog/guide-kasbah-dif-agafay-casa-lalla-takerkoust/",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "À quelle distance se trouve Casa Lalla Takerkoust de la Kasbah d'If (Kasbah Dif) ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Casa Lalla Takerkoust est située à environ 12 à 15 kilomètres de la Kasbah d'If (Kasbah Dif), soit un court trajet panoramique de 15 à 20 minutes reliant le désert d'Agafay aux berges du lac Lalla Takerkoust.",
        },
      },
      {
        "@type": "Question",
        name: "Peut-on venir déjeuner ou passer la journée (day pass) à Casa Lalla Takerkoust lors d'un séjour dans le désert d'Agafay ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, de nombreux voyageurs séjournant à la Kasbah d'If rejoignent Casa Lalla pour le déjeuner (13h00 à 17h00), pour un day-pass piscine ou pour des activités nautiques avant de retourner au désert d'Agafay en soirée.",
        },
      },
      {
        "@type": "Question",
        name: "Peut-on réserver une excursion en quad reliant le lac et les pistes du désert d'Agafay près de la Kasbah d'If ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, des circuits guidés en quad ou buggy peuvent être facilement programmés entre les rives du lac Lalla Takerkoust et les pistes désertiques autour de la Kasbah d'If.",
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
      {/* French Navbar with direct reciprocal link to the English article */}
      <Navbar path={"/blog/kasbah-dif-agafay-guide-casa-lalla-takerkoust/"} />
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
