import BackgroundSlideshow from "./components/BackgroundSlideshow";
import LinkTree from "./components/LinkTree";

export const metadata = {
  metadataBase: new URL("https://casalallatakerkoust.com"),
  title: "Casa Lalla Takerkoust — liens utiles",
  description:
    "Adresse, menu et Instagram de Casa Lalla Takerkoust, restaurant et day club au bord du lac, à 40 minutes de Marrakech.",
  alternates: {
    canonical: "/linktree/",
  },
  openGraph: {
    type: "website",
    url: "/linktree/",
    siteName: "Casa Lalla Takerkoust",
    title: "Casa Lalla Takerkoust",
    description:
      "Restaurant et day club au bord du lac Takerkoust. Adresse, menu et réservations.",
    locale: "fr_FR",
    images: [
      {
        url: "/menu/metadata-image.jpeg", // 1200 × 630
        width: 1200,
        height: 630,
        alt: "Terrasse de Casa Lalla face au lac Takerkoust",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Casa Lalla Takerkoust",
    description:
      "Restaurant et day club au bord du lac Takerkoust, près de Marrakech.",
    images: ["/menu/metadata-image.jpeg"],
  },
};

const page = () => {
  return (
    <main className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden p-5">
      <BackgroundSlideshow />
      <LinkTree />
    </main>
  );
};

export default page;
