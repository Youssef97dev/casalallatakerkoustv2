"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/**
 * Full-screen background slideshow with a slow crossfade + gentle zoom.
 * Put your photos in /public/linktree/ and list them below (or pass `images`).
 */
const DEFAULT_IMAGES = [
  "/menu/image-3.jpeg",
  "/menu/image-5.jpeg",
  "/menu/image-6.jpeg",
  "/menu/image-8.jpeg",
  "https://purehouseonthelake.com/_next/image?url=%2Fimages%2Fagafay-desert-luxury-icon.webp&w=384&q=75",
  "https://purehouseonthelake.com/_next/image?url=%2Fimages%2Fagafay-desert-signature-experience.webp&w=384&q=75",
  "/menu/image-9.jpeg",
  "/menu/image-10.jpeg",
  "/menu/image-11.jpeg",
  "/menu/image-12.jpeg",
  "/menu/image-15.jpeg",
  "/menu/image-16.jpeg",
  "/menu/image-17.jpeg",
  "/menu/image-18.jpeg",
];

const BackgroundSlideshow = ({ images = DEFAULT_IMAGES, interval = 4000 }) => {
  const [index, setIndex] = useState(0);
  // Start "false" on both server and client render -> no mismatch.
  // Flip it after mount, once we can safely read matchMedia.
  const [allowZoom, setAllowZoom] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setAllowZoom(!mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (images.length < 2) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      interval
    );
    return () => clearInterval(id);
  }, [images.length, interval]);

  return (
    <div
      className="absolute inset-0 z-0 overflow-hidden bg-casa-black"
      suppressHydrationWarning
    >
      {images.map((src, i) => (
        <div
          key={src}
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            opacity: i === index ? 1 : 0,
            transition: "opacity 2000ms ease-in-out",
          }}
          suppressHydrationWarning
        >
          <Image
            src={src}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover transition-transform duration-4000 ease-out ${
              allowZoom && i === index ? "scale-110" : "scale-100"
            }`}
          />
        </div>
      ))}
    </div>
  );
};

export default BackgroundSlideshow;
