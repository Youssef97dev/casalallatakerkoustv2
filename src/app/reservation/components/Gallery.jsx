import React from "react";
import Image from "next/image";
import { BookingGallery } from "@/data/imageData";

const Gallery = () => {
  return (
    <section className="px-5 md:px-14 py-12 space-y-8 pt-28">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-5">
        {BookingGallery.map((image, index) => (
          <div key={index} className="flex flex-col">
            {/* Image */}
            <div className="relative w-full aspect-square ">
              <Image
                src={image.image}
                alt={image.altEn}
                title={image.titleEn}
                width={800}
                height={800}
                className={`object-cover aspect-square h-full ${image.class}`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
