"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/**
 * Full-screen background slideshow with a slow crossfade + gentle zoom.
 * Put your photos in /public/linktree/ and list them below (or pass `images`).
 */
const DEFAULT_IMAGES = [
  "/menu/image-1.jpeg",
  "/menu/image-2.jpeg",
  "/menu/image-3.jpeg",
  "/menu/image-4.jpeg",
  "/menu/image-5.jpeg",
  "/menu/image-6.jpeg",
  "/menu/image-7.jpeg",
  "/menu/image-8.jpeg",
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
  const [allowZoom, setAllowZoom] = useState(true);

  // The slideshow ALWAYS runs. Only the Ken Burns zoom respects reduced motion.
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
    <div className="absolute inset-0 z-0 overflow-hidden bg-casa-black">
      {images.map((src, i) => (
        <div
          key={src}
          aria-hidden="true"
          style={{
            opacity: i === index ? 1 : 0,
            transition: "opacity 2000ms ease-in-out",
            transform: "translateZ(0)",
          }}
          className="absolute inset-0"
        >
          <Image
            src={src}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            style={{
              transform: allowZoom
                ? i === index
                  ? "scale(1.12) translateZ(0)"
                  : "scale(1) translateZ(0)"
                : "translateZ(0)",
              transition: allowZoom ? "transform 7000ms ease-out" : "none",
            }}
            className="object-cover"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/35 to-black/75" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.55)_100%)]" />
    </div>
  );
};

export default BackgroundSlideshow;
