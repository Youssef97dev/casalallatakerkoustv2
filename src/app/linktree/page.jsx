//import BackgroundSlideshow from "./components/BackgroundSlideshow";
//import LinkTree from "./components/LinkTree";

import BrochureContainer from "./components/BrochureContainer";

export const metadata = {
  metadataBase: new URL("https://casalallatakerkoust.com"),
  title: "Brochure Pure House On The Lake — Villa de luxe près de Marrakech",
  description:
    "Découvrez la brochure de Pure House On The Lake, villa privée de luxe au bord du lac Takerkoust, aux portes du désert d'Agafay, à 40 minutes de Marrakech.",
  alternates: {
    canonical: "/linktree/",
  },
  robots: {
    index: false, // optional: remove this line if you want the page indexed
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "/linktree/",
    siteName: "Pure House On The Lake",
    title: "Pure House On The Lake — Brochure",
    description:
      "Villa privée de luxe près du lac Takerkoust et du désert d'Agafay, à 40 minutes de Marrakech. Découvrez la brochure.",
    locale: "fr_FR",
    images: [
      {
        url: "/images/purehouse-on-the-lake-brochure.webp", // 1200 × 630
        width: 1200,
        height: 630,
        alt: "Brochure de la villa Pure House On The Lake, près de Marrakech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pure House On The Lake — Brochure",
    description:
      "Villa privée de luxe près du lac Takerkoust et du désert d'Agafay, à 40 minutes de Marrakech.",
    images: ["/images/purehouse-on-the-lake-brochure.webp"],
  },
};

const page = () => {
  return (
    <>
      {/*<main className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden p-5">
      <BackgroundSlideshow />
      <LinkTree />
    </main>*/}
      <BrochureContainer />
    </>
  );
};

export default page;
