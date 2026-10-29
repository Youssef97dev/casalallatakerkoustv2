import PdfViewerClient from "./components/PdfClient";

export const metadata = {
  title:
    "La Carte du Restaurant | Casa Lalla Takerkoust près de Marrakech",
  description:
    "Découvrez la carte de Casa Lalla Takerkoust : cuisine marocaine et méditerranéenne raffinée, produits locaux frais, pastilla, couscous safrané et vue sur le lac.",
  alternates: {
    canonical: "https://casalallatakerkoust.com/fr/menu/",
    languages: {
      en: "https://casalallatakerkoust.com/menu/",
      fr: "https://casalallatakerkoust.com/fr/menu/",
      "x-default": "https://casalallatakerkoust.com/menu/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title:
      "La Carte du Restaurant | Casa Lalla Takerkoust près de Marrakech",
    description:
      "Explorez la carte du restaurant Casa Lalla Takerkoust près de Marrakech. Plats marocains raffinés, produits frais et ambiance au bord du lac de Takerkoust.",
    url: "https://casalallatakerkoust.com/fr/menu/",
    siteName: "Casa Lalla Takerkoust",
    locale: "fr_FR",
    alternateLocale: ["en_US"],
    type: "website",
  },
};

const page = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://casalallatakerkoust.com/fr/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "La Carte",
        item: "https://casalallatakerkoust.com/fr/menu/",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PdfViewerClient file="/menu/menu-casalalla-francais.pdf" />
    </>
  );
};

export default page;
