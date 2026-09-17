"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/**
 * Full-screen background slideshow with a slow crossfade + gentle zoom.
 * Put your photos in /public/linktree/ and list them below (or pass `images`).
 */
const DEFAULT_IMAGES = [
  "/menu/image-9.jpeg",
  "/menu/image-10.jpeg",
  "/menu/image-11.jpeg",
  "/menu/image-12.jpeg",
  "/menu/image-13.jpeg",
  "/menu/image-15.jpeg",
  "/menu/image-16.jpeg",
];

const BackgroundSlideshow = ({ images = DEFAULT_IMAGES, interval = 6000 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      interval
    );
    return () => clearInterval(id);
  }, [images.length, interval]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-casa-black">
      {images.map((src, i) => (
        <div
          key={src}
          aria-hidden="true"
          className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover transition-transform duration-7000 ease-out will-change-transform ${
              i === index ? "scale-110" : "scale-100"
            }`}
          />
        </div>
      ))}

      {/* Readability layer: darker at the edges, lighter in the middle */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/35 to-black/75" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.55)_100%)]" />
    </div>
  );
};

export default BackgroundSlideshow;
