import Gallery from "./Gallery";
import gallery from "@/data/gallery.json";
import { IMAGES_PER_PAGE } from "@/lib/constants";

const Loader = () => {
  const page = 1;

  const images = gallery.slice(0, IMAGES_PER_PAGE);

  return (
    <div className="relative">
      <Gallery
        images={images}
        currentPage={page}
        totalImages={gallery.length}
      />
    </div>
  );
};

export default Loader;
