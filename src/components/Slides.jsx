"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
  {
    id: 1,
    src: "/images/hotel-marrakech-vue-montagnes-atlas.webp",
    alt: "Snow-capped Atlas Mountains serving as a breathtaking backdrop for guests relaxing at Casa Lalla Hotel Rural.",
    title: "Atlas Mountains View Hotel",
  },
  {
    id: 2,
    src: "/images/hotel-de-charme-marrakech-chambre-retro-boheme.webp",
    alt: "Spacious retro-bohemian guest room blending vintage Moroccan warmth and understated elegance at Casa Lalla Hotel Rural.",
    title: "Boutique Hotel Room",
  },
  {
    id: 3,
    src: "/images/hotel-vue-lac-lalla-takerkoust-marrakech.webp",
    alt: "Exterior of Casa Lalla Hotel Rural overlooking the shimmering waters of Lake Lalla Takerkoust.",
    title: "Lake View Boutique Hotel",
  },
  {
    id: 4,
    src: "/images/piscine-oasis-hotel-rural-lalla-takerkoust.webp",
    alt: "Serene swimming pool oasis surrounded by nature and plush sunbeds at Casa Lalla Hotel Rural near Marrakech.",
    title: "Tranquil lake view",
  },
  {
    id: 5,
    src: "/images/hebergement-proche-desert-agafay-oasis.webp",
    alt: "Casa Lalla rural hotel located at the crossroads where the golden Agafay Desert meets Lake Takerkoust.",
    title: "Agafay Desert Accommodation Oasis",
  },
];

export default function SingleImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-2xl bg-gray-900 aspect-video">
      {/* Slide Track */}
      <div
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img) => (
          <div key={img.id} className="min-w-full h-full relative shrink-0">
            <Image
              src={img.src}
              alt={img.alt}
              title={img.title}
              className="w-full h-full object-cover"
              height={1000}
              width={1000}
            />
            {/* Optional Caption Overlay */}
            <div className="absolute bottom-12 left-0 right-0 text-center text-white/90 bg-black/30 backdrop-blur-xs py-2 px-4 w-max mx-auto rounded-full text-[10px] lg:text-sm">
              {img.title}
            </div>
          </div>
        ))}
      </div>

      {/* Left Navigation Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all focus:outline-none hover:scale-110"
        aria-label="Previous image"
      >
        &#8592;
      </button>

      {/* Right Navigation Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all focus:outline-none hover:scale-110"
        aria-label="Next image"
      >
        &#8594;
      </button>

      {/* Bottom Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "w-8 bg-white"
                : "w-2.5 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
