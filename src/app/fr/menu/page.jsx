import PdfViewerClient from "./components/PdfClient";

export const metadata = {
  title:
    "La Carte | Casa Lalla Takerkoust | Restaurant Marocain & Ibiza Style près de Marrakech",
  description:
    "Découvrez la carte de Casa Lalla Takerkoust, restaurant marocain près de Marrakech. Cuisine raffinée à base de produits frais locaux, avec vue sur le lac de Takerkoust et l’Atlas, dans une ambiance Ibiza style unique.",
  alternates: {
    canonical: "https://casalallatakerkoust.com/fr/menu/",
  },
  openGraph: {
    title: "La Carte | Casa Lalla Takerkoust | Ibiza Style & Cuisine Marocaine",
    description:
      "Explorez la carte du restaurant Casa Lalla Takerkoust près de Marrakech. Plats marocains raffinés, produits frais et ambiance Ibiza style au bord du lac de Takerkoust.",
    url: "https://casalallatakerkoust.com/fr/menu/",
    siteName: "Casa Lalla Takerkoust",
    type: "website",
  },
};

const page = () => {
  return <PdfViewerClient file="/menu/menu-casalalla-francais.pdf" />;
};

export default page;
