import Image from "next/image";
import Link from "next/link";

const IMAGES_PER_PAGE = 20;

export default function Gallery({ images, currentPage, totalImages }) {
  const totalPages = Math.ceil(totalImages / IMAGES_PER_PAGE);

  return (
    <>
      <section id="gallery" className="px-0 md:px-14 py-12 pt-[1.5px] lg:pt-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[1.5px]">
          {images.map((image, index) => (
            <figure key={image.image} className="flex flex-col">
              <div className="relative w-full h-[65vh]">
                <Image
                  src={image.image}
                  alt={image.altFr}
                  title={image.titleFr}
                  width={800}
                  height={800}
                  priority={currentPage === 1 && index === 0}
                  loading={currentPage === 1 && index === 0 ? "eager" : "lazy"}
                  sizes="
                    (max-width:768px) 100vw,
                    (max-width:1024px) 50vw,
                    25vw
                  "
                  className={`object-cover lg:rounded-md ${image.class}`}
                />
              </div>

              <figcaption className="sr-only">{image.titleFr}</figcaption>
            </figure>
          ))}
        </div>

        {/* Pagination */}

        <nav className="flex justify-center gap-2 mt-10">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Link
              key={page}
              href={page === 1 ? "/fr/gallery" : `/fr/gallery/page/${page}`}
              className={`px-4 py-2 border rounded ${
                currentPage === page ? "font-bold" : ""
              }`}
            >
              {page}
            </Link>
          ))}
        </nav>
      </section>
    </>
  );
}
