import PdfViewerClient from "./components/PdfClient";

export const metadata = {
  title:
    "Menu & Dining Carte | Casa Lalla Takerkoust Restaurant Near Marrakech",
  description:
    "Explore the Casa Lalla Takerkoust menu featuring refined Moroccan and Mediterranean cuisine, fresh local ingredients, pastilla, tagines, and sunset cocktails by the lake.",
  alternates: {
    canonical: "https://casalallatakerkoust.com/menu/",
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
      "Menu & Dining Carte | Casa Lalla Takerkoust Restaurant Near Marrakech",
    description:
      "Discover the Casa Lalla Takerkoust menu with authentic Moroccan dishes, fresh ingredients, and lakeside dining experience near Marrakech and the Agafay Desert.",
    url: "https://casalallatakerkoust.com/menu/",
    siteName: "Casa Lalla Takerkoust",
    locale: "en_US",
    alternateLocale: ["fr_FR"],
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
        name: "Home",
        item: "https://casalallatakerkoust.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Menu",
        item: "https://casalallatakerkoust.com/menu/",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PdfViewerClient file="/menu/menu-casalalla-anglais-sans-prix.pdf" />
    </>
  );
};

export default page;
