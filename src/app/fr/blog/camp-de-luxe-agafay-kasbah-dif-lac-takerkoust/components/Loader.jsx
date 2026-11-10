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
      "Camp de Luxe Agafay & Kasbah d'If : L'Escapade Idéale au Lac Lalla Takerkoust",
    description:
      "Vous réservez un camp de luxe à Agafay ou un séjour à la Kasbah d'If (Kasbah Dif) ? Complétez votre expérience désert par un déjeuner au bord de l'eau à Casa Lalla Takerkoust.",
    image: [
      "https://casalallatakerkoust.com/images/casalallatakerkoust-restaurant-lake-view-terrace.webp",
      "https://casalallatakerkoust.com/images/lalla-takerkoust-lake-sunset-agafay-desert.webp",
      "https://casalallatakerkoust.com/images/casalallatakerkoust-restaurant-arched-patio-dining.webp",
      "https://casalallatakerkoust.com/images/agafay-luxury-camp-poolside-lalla-takerkoust.webp",
      "https://casalallatakerkoust.com/images/kasbah-dif-rooftop-terrace-lake-views.webp",
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
    keywords: [
      "Camp de Luxe Agafay",
      "Kasbah d'If",
      "Kasbah Dif",
      "Casa Lalla Takerkoust",
    ],
    about: [
      {
        "@type": "Thing",
        name: "Camp de Luxe Agafay",
      },
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
      {
        "@type": "Place",
        name: "Lac Lalla Takerkoust",
      },
    ],
    datePublished: "2026-11-10",
    dateModified: "2026-11-10",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://casalallatakerkoust.com/fr/blog/camp-de-luxe-agafay-kasbah-dif-lac-takerkoust/",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "À quelle distance se trouve Casa Lalla Takerkoust de la Kasbah d'If et des principaux camps de luxe d'Agafay ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Casa Lalla Takerkoust est située à seulement 12 à 15 kilomètres (soit 15 à 20 minutes de route panoramique) de la Kasbah d'If (Kasbah Dif) et des grands camps de luxe d'Agafay, reliant directement le plateau minéral aux berges rafraîchissantes du lac Lalla Takerkoust.",
        },
      },
      {
        "@type": "Question",
        name: "Peut-on venir déjeuner et faire du jet-ski à Casa Lalla Takerkoust sans passer la nuit au lac ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, parfaitement. De nombreux voyageurs résidant en camp de luxe à Agafay ou à la Kasbah d'If viennent passer l'après-midi à Casa Lalla Takerkoust pour déjeuner au bord de l'eau (service de 13h00 à 17h00), profiter de la piscine et s'adonner au jet-ski avant de regagner leur camp sous les étoiles.",
        },
      },
      {
        "@type": "Question",
        name: "Quel est le meilleur moyen de transport pour relier un camp de luxe d'Agafay, la Kasbah Dif et le lac Lalla Takerkoust ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vous pouvez réserver un chauffeur privé en 4x4 ou SUV climatisé via votre conciergerie (15 à 20 minutes de trajet), ou opter pour une excitante randonnée guidée en quad ou buggy qui traverse les collines lunaires d'Agafay pour déboucher directement sur la terrasse de Casa Lalla Takerkoust.",
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
      <Navbar
        path={"/blog/agafay-luxury-camp-kasbah-dif-lake-takerkoust-itinerary/"}
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
