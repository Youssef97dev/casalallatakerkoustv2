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
      "Camp de Luxe à Agafay ou Hôtel Rural Casa Lalla Takerkoust : Où Dormir aux Portes du Désert ?",
    description:
      "Vous hésitez entre un camp de luxe à Agafay et l'Hôtel Rural Casa Lalla Takerkoust ? Découvrez le confort d'un hôtel de charme et restaurant au bord du lac aux portes d'Agafay.",
    image: [
      "https://casalallatakerkoust.com/images/casalalla-hotel-rural-lalla-takerkoust-living-room-lounge.webp",
      "https://casalallatakerkoust.com/images/boutique-hotel-lalla-takerkoust-lake-view.webp",
      "https://casalallatakerkoust.com/images/casalalla-hotel-rural-lalla-takerkoust-poolside-loungers.webp",
      "https://casalallatakerkoust.com/images/casalalla-hotel-rural-lalla-takerkoust-dining-courtyard-art.webp",
      "https://casalallatakerkoust.com/images/casalalla-hotel-rural-lalla-takerkoust-swimming-pool.webp",
      "https://casalallatakerkoust.com/images/casalallatakerkoust-restaurant-lake-view-terrace.webp",
    ],
    inLanguage: "fr-FR",
    datePublished: "2026-11-10",
    dateModified: "2026-11-10",
    author: {
      "@type": "LodgingBusiness",
      name: "Hôtel Rural Casa Lalla Takerkoust",
      url: "https://casalallatakerkoust.com/fr/rural-hotel/",
    },
    publisher: {
      "@type": "Organization",
      name: "Casa Lalla Takerkoust",
      logo: {
        "@type": "ImageObject",
        url: "https://casalallatakerkoust.com/casa-lalla-scarlet.png",
      },
    },
    keywords: [
      "Camp de Luxe Agafay",
      "Hôtel Rural Casa Lalla Takerkoust",
      "Hôtel Lac Lalla Takerkoust",
      "Où Dormir Désert Agafay",
      "Hôtel Charme Marrakech Lac",
      "Restaurant et Hôtel Casa Lalla Takerkoust",
      "Kasbah d'If",
    ],
    about: [
      {
        "@type": "LodgingBusiness",
        name: "Hôtel Rural Casa Lalla Takerkoust",
        description:
          "Hôtel rural de charme intimiste de 9 chambres rétro-bohèmes et oasis de piscine privée face au lac de Lalla Takerkoust et à l'Atlas.",
        url: "https://casalallatakerkoust.com/fr/rural-hotel/",
      },
      {
        "@type": "Restaurant",
        name: "Restaurant Casa Lalla Takerkoust",
        servesCuisine: ["Méditerranéenne", "Marocaine"],
        url: "https://casalallatakerkoust.com/fr/",
      },
      {
        "@type": "Thing",
        name: "Camp de Luxe Agafay",
      },
      {
        "@type": "Place",
        name: "Lac Lalla Takerkoust",
      },
    ],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://casalallatakerkoust.com/fr/blog/camp-de-luxe-agafay-vs-hotel-rural-casa-lalla-takerkoust/",
    },
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": ["LodgingBusiness", "Restaurant"],
    "@id": "https://casalallatakerkoust.com/fr/#rural-hotel-and-restaurant",
    name: "Hôtel Rural & Restaurant Casa Lalla Takerkoust",
    description:
      "Hôtel rural de charme de 9 chambres et restaurant emblématique au bord du lac Lalla Takerkoust, aux portes du désert d'Agafay.",
    url: "https://casalallatakerkoust.com/fr/rural-hotel/",
    telephone: "+212675480103",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Barrage Lalla Takerkoust",
      addressLocality: "Marrakech",
      postalCode: "40000",
      addressCountry: "MA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 31.352234,
      longitude: -8.131036,
    },
    priceRange: "$$$",
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Vue Panoramique Directe sur le Lac",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Piscine Oasis & Transats Privés",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Chambres Maçonnées ClimatObject-Coveratisées",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Restaurant Gastronomique Méditerranéen & Marocain sur Place",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Accès Direct aux Pistes d'Agafay et Activités Nautiques",
        value: true,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "L'établissement Casa Lalla Takerkoust dispose-t-il d'un hôtel sur le même domaine que le restaurant ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, absolument. Casa Lalla Takerkoust réunit sur un même domaine idyllique au bord de l'eau son célèbre restaurant méditerranéen-marocain et un Hôtel Rural de charme intimiste. L'hôtel comprend 9 chambres d'inspiration rétro-bohème, une oasis de piscine privée, ainsi que des jardins ombragés face au lac Lalla Takerkoust et aux sommets de l'Atlas.",
        },
      },
      {
        "@type": "Question",
        name: "Vaut-il mieux dormir dans un camp de luxe à Agafay ou à l'Hôtel Rural Casa Lalla Takerkoust ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si une nuit sous la tente dans un camp de luxe à Agafay offre un dépaysement certain, l'Hôtel Rural Casa Lalla Takerkoust garantit un niveau de confort très supérieur pour un séjour de plusieurs nuits : murs maçonnés isolants, climatisation réversible, brise fraîche du lac, piscine privée, sports nautiques et gastronomie à la carte au bord de l'eau, loin de la chaleur étouffante des tentes en journée et des vents nocturnes du désert.",
        },
      },
      {
        "@type": "Question",
        name: "À quelle distance se trouve l'Hôtel Rural Casa Lalla Takerkoust des camps d'Agafay et de la Kasbah d'If ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "L'Hôtel Rural Casa Lalla Takerkoust est situé à seulement 12 à 15 kilomètres (environ 15 à 20 minutes en voiture ou en 4x4) des principaux camps de luxe d'Agafay et de la Kasbah d'If. Il se trouve au point de rencontre précis où le désert de pierres rejoint les rives du lac.",
        },
      },
      {
        "@type": "Question",
        name: "Comment réserver une chambre à l'Hôtel Rural ainsi qu'une table au restaurant ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vous pouvez réserver directement votre séjour via notre page de réservation de l'Hôtel Rural (/fr/rural-hotel/booking) ou contacter notre conciergerie via WhatsApp (+212 675 480 103). Lors de votre réservation de chambre, notre équipe réserve automatiquement vos tables privilégiées face au lac pour le déjeuner et le dîner.",
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
          __html: JSON.stringify(businessSchema),
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
        path={"/blog/agafay-luxury-camp-vs-casa-lalla-takerkoust-rural-hotel/"}
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
