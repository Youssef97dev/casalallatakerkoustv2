import Gallery from "./Gallery";
import gallery from "@/data/gallery.json";
import { IMAGES_PER_PAGE } from "@/lib/constants";

const Loader = () => {
  const page = 1;

  const images = gallery.slice(0, IMAGES_PER_PAGE);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Casa Lalla Takerkoust Gallery | Luxury Retreat, Pool & Atlas Mountain Views",
    description:
      "Browse photos of Casa Lalla Takerkoust, a luxury retreat near Marrakech. Discover elegant rooms, swimming pool, Atlas Mountain landscapes, Lalla Takerkoust Lake, outdoor experiences, dining areas, and authentic Moroccan hospitality.",
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
