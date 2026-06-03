import React from "react";
import Image from "next/image";
import { BookingGallery } from "@/data/imageData";

const Gallery = () => {
  return (
    <section className="px-5 md:px-14 py-12 space-y-8 pt-28">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-5">
        {BookingGallery.map((img, index) => (
          <div key={index} className="flex flex-col">
            {/* Image */}
            <div className="relative w-full aspect-square ">
              <Image
                src={img.image}
                alt={img.altFr}
                title={img.titleFr}
                fill
                className={`object-cover aspect-square h-full ${img.class}`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
