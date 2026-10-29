"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Hero = ({ content }) => {
  const { hero } = content;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  // Slideshow interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % hero.slides.length);
    }, 5500);

    return () => clearInterval(interval);
  }, [hero.slides.length]);

  // Scroll listener for hero emblem animation
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative w-full h-screen overflow-hidden bg-casa-black"
    >
      {/* Background Slideshow */}
      {hero.slides.map((slide, index) => {
        const isActive = index === currentIndex;

        return (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
              isActive
                ? "opacity-100 z-10"
                : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Ken Burns subtle zoom */}
            <div
              className={`absolute inset-0 w-full h-full transition-transform duration-10000 ease-out ${
                isActive ? "scale-105" : "scale-100"
              }`}
            >
              {/* Mobile Image */}
              <div className="block lg:hidden absolute inset-0 w-full h-full">
                <Image
                  src={slide.mobileSrc}
                  alt={slide.mobileAlt}
                  title={slide.mobileTitle}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className={`object-cover ${slide.mobileClass}`}
                />
              </div>

              {/* Desktop Image */}
              <div className="hidden lg:block absolute inset-0 w-full h-full">
                <Image
                  src={slide.desktopSrc}
                  alt={slide.desktopAlt}
                  title={slide.desktopTitle}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className={`object-cover ${slide.desktopClass}`}
                />
              </div>
            </div>
          </div>
        );
      })}

      {/* Atmospheric Overlays */}
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/15 to-black/50 z-20 pointer-events-none" />

      {/* Centered Brand Emblem */}
      <div
        className={`fixed z-30 transition-all duration-700 ease-out pointer-events-none ${
          scrolled
            ? "top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-75 opacity-0"
            : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-100 opacity-100"
        }`}
      >
        <Image
          src="/casa-lalla-background.png"
          alt={hero.logoAlt}
          width={360}
          height={360}
          priority
          className="w-48 sm:w-64  h-auto object-contain drop-shadow-md"
        />
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white z-30">
        <a
          href="#intro"
          aria-label={hero.scrollDownAria}
          className="p-2 inline-flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 animate-bounce drop-shadow"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
