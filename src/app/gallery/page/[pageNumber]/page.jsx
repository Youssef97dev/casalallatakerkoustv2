import gallery from "@/data/gallery.json";
import Gallery from "../../components/Gallery";
import { IMAGES_PER_PAGE } from "@/lib/constants";

export function generateStaticParams() {
  const totalPages = Math.ceil(gallery.length / IMAGES_PER_PAGE);

  return Array.from({ length: totalPages - 1 }, (_, index) => ({
    pageNumber: String(index + 2),
  }));
}

export async function generateMetadata({ params }) {
  const { pageNumber } = await params;
  return {
    title: `Photo Gallery - Page ${pageNumber} | Casa Lalla Takerkoust`,
    description: `Explore page ${pageNumber} of the Casa Lalla Takerkoust photo gallery: lakeside dining, bohemian decor, and Atlas Mountain vistas.`,
    alternates: {
      canonical: `https://casalallatakerkoust.com/gallery/page/${pageNumber}/`,
      languages: {
        en: `https://casalallatakerkoust.com/gallery/page/${pageNumber}/`,
        fr: `https://casalallatakerkoust.com/fr/gallery/page/${pageNumber}/`,
        "x-default": `https://casalallatakerkoust.com/gallery/page/${pageNumber}/`,
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
  };
}

export default async function Page({ params }) {
  const { pageNumber } = await params;

  const page = Number(pageNumber);

  const start = (page - 1) * IMAGES_PER_PAGE;
  const end = start + IMAGES_PER_PAGE;

  const images = gallery.slice(start, end);

  return (
    <Gallery images={images} currentPage={page} totalImages={gallery.length} />
  );
}
