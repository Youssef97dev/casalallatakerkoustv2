import Gallery from "./Gallery";
import gallery from "@/data/gallery.json";
import { IMAGES_PER_PAGE } from "@/lib/constants";

const Loader = () => {
  const page = 1;

  const images = gallery.slice(0, IMAGES_PER_PAGE);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Photos de Casa Lalla Takerkoust | Séjour d’Exception près du Lac et de Marrakech",
    description:
      "Parcourez les photos de Casa Lalla Takerkoust et découvrez un hébergement de charme au cœur de la nature marocaine. Piscine, vue sur le lac Lalla Takerkoust, montagnes de l’Atlas, activités de plein air et cadre idéal pour un séjour près de Marrakech.",
    image: gallery.map((img) => img.image),
  };

  return (
    <div className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Gallery
        images={images}
        currentPage={page}
        totalImages={gallery.length}
      />
    </div>
  );
};

export default Loader;
