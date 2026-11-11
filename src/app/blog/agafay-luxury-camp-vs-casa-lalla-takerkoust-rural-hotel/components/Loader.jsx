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
      "Agafay Luxury Camp vs. Casa Lalla Takerkoust Rural Hotel: Where Should You Stay Outside Marrakech?",
    description:
      "Comparing an Agafay luxury camp with the Casa Lalla Takerkoust Rural Hotel? Discover why staying overnight at our lakeside rural hotel & restaurant gives you the best of Agafay.",
    image: [
      "https://casalallatakerkoust.com/images/casalalla-hotel-rural-lalla-takerkoust-living-room-lounge.webp",
      "https://casalallatakerkoust.com/images/boutique-hotel-lalla-takerkoust-lake-view.webp",
      "https://casalallatakerkoust.com/images/casalalla-hotel-rural-lalla-takerkoust-poolside-loungers.webp",
      "https://casalallatakerkoust.com/images/casalalla-hotel-rural-lalla-takerkoust-dining-courtyard-art.webp",
      "https://casalallatakerkoust.com/images/casalalla-hotel-rural-lalla-takerkoust-swimming-pool.webp",
      "https://casalallatakerkoust.com/images/casalallatakerkoust-restaurant-lake-view-terrace.webp",
    ],
    datePublished: "2026-11-10",
    dateModified: "2026-11-10",
    author: {
      "@type": "LodgingBusiness",
      name: "Casa Lalla Takerkoust Rural Hotel",
      url: "https://casalallatakerkoust.com/rural-hotel/",
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
      "Agafay Luxury Camp",
      "Casa Lalla Takerkoust Rural Hotel",
      "Lalla Takerkoust Hotel",
      "Rural Hotel near Marrakech",
      "Where to Stay Agafay Desert",
      "Casa Lalla Takerkoust Restaurant and Hotel",
      "Kasbah d'If",
    ],
    about: [
      {
        "@type": "LodgingBusiness",
        name: "Casa Lalla Takerkoust Rural Hotel",
        description:
          "Intimate 9-room retro-bohemian rural hotel and swimming pool oasis overlooking Lake Lalla Takerkoust and the Atlas Mountains.",
        url: "https://casalallatakerkoust.com/rural-hotel/",
      },
      {
        "@type": "Restaurant",
        name: "Casa Lalla Takerkoust Restaurant",
        servesCuisine: ["Mediterranean", "Moroccan"],
        url: "https://casalallatakerkoust.com/",
      },
      {
        "@type": "Thing",
        name: "Agafay Luxury Camp",
      },
      {
        "@type": "Place",
        name: "Lake Lalla Takerkoust",
      },
    ],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://casalallatakerkoust.com/blog/agafay-luxury-camp-vs-casa-lalla-takerkoust-rural-hotel/",
    },
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": ["LodgingBusiness", "Restaurant"],
    "@id": "https://casalallatakerkoust.com/#rural-hotel-and-restaurant",
    name: "Casa Lalla Takerkoust Rural Hotel & Restaurant",
    alternateName: "Hôtel Rural Casa Lalla Takerkoust",
    description:
      "Intimate 9-room boutique rural hotel and iconic waterfront restaurant located at Barrage Lalla Takerkoust at the edge of the Agafay Desert.",
    url: "https://casalallatakerkoust.com/rural-hotel/",
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
        name: "Direct Panoramic Lake Views",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Swimming Pool Oasis & Sunbeds",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Climate-Controlled Solid Wall Rooms & Suites",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Full On-Site À La Carte Mediterranean & Moroccan Restaurant",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Direct Access to Agafay Quad Trails & Lake Water Sports",
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
        name: "Does Casa Lalla Takerkoust have a hotel on the same property as the restaurant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Casa Lalla Takerkoust is both a renowned waterfront Mediterranean-Moroccan restaurant and an authentic boutique Rural Hotel located on the exact same shoreline property. The hotel features 9 retro-bohemian rooms, a private swimming pool oasis, and peaceful garden courtyards overlooking Lake Lalla Takerkoust and the High Atlas Mountains.",
        },
      },
      {
        "@type": "Question",
        name: "Is it better to stay at an Agafay luxury camp or at the Casa Lalla Takerkoust Rural Hotel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "While an Agafay luxury camp offers a scenic 1-night desert glamping experience under canvas, the Casa Lalla Takerkoust Rural Hotel provides far greater comfort for multi-night getaways. Guests enjoy solid-wall acoustic privacy, modern climate control, lush shaded gardens, a private swimming pool, direct water sports, and full à la carte restaurant dining—free from the harsh daytime desert heat and nocturnal winds of canvas tents.",
        },
      },
      {
        "@type": "Question",
        name: "How close is the Casa Lalla Takerkoust Rural Hotel to the Agafay Desert camps and Kasbah d'If?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Casa Lalla Takerkoust is situated just 12 to 15 kilometers (a scenic 15-to-20-minute drive) from the Agafay Desert camps and Kasbah d'If. The property sits right at the geographical crossroads where the stone desert dunes meet Lake Lalla Takerkoust, allowing guests to explore Agafay quad trails by day and retreat to lakeside comfort by night.",
        },
      },
      {
        "@type": "Question",
        name: "How do I book a room at the Rural Hotel along with a lakeside restaurant table?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can inquire and book rooms directly through our Rural Hotel booking page (/rural-hotel/booking) or connect instantly with our reservation concierge on WhatsApp (+212 675 480 103). When reserving an overnight stay, our team automatically reserves your preferred lakeside lunch and dinner tables at the Casa Lalla Takerkoust restaurant.",
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
      {/* Navbar with direct reciprocal link to the French article */}
      <Navbar
        path={
          "/fr/blog/camp-de-luxe-agafay-vs-hotel-rural-casa-lalla-takerkoust/"
        }
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
