import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative w-full h-[70vh] min-h-125 flex items-center justify-center font-cormorant"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://casalallatakerkoust.com/images/casa-lalla-takerkoust-day-club-entrance.webp"
          alt="Whitewashed entrance of Casa Lalla Takerkoust restaurant with green umbrellas, bougainvillea and set tables"
          title="Casa Lalla Takerkoust, lakeside restaurant and day club near Marrakech"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Overlay gradient using casa-black */}
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/30 to-black/50" />
      </div>

      {/* Hero Content with Kasbah d'If Cormorant Garamond Light - 400 Typography */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-casa-white flex flex-col items-center gap-5 mt-16 font-cormorant">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-casa-scarlet/60 backdrop-blur-xs text-xs uppercase tracking-[0.25em] font-light text-casa-white border border-casa-white/20">
          Agafay Desert & Lake Takerkoust Guide
        </div>
        <h1 className="font-cormorant italic font-normal text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl leading-tight text-casa-white tracking-tight max-w-3xl">
          Staying at Kasbah d&apos;If (Kasbah Dif)? Complete Your Trip with a
          Lakeside Escape at Casa Lalla Takerkoust
        </h1>
        <p className="font-cormorant font-normal text-lg sm:text-xl md:text-2xl text-casa-white/95 max-w-2xl leading-relaxed tracking-wide">
          The ultimate insider guide to pairing your Agafay stone desert retreat
          at Kasbah d&apos;If with chic waterfront dining, day passes, and
          sunset cocktails at Casa Lalla.
        </p>

        {/* Breadcrumbs */}
        <nav
          aria-label="Breadcrumb"
          className="mt-2 text-xs font-light text-casa-white/70 flex items-center gap-2 tracking-widest uppercase font-cormorant"
        >
          <Link href="/" className="hover:text-casa-white transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            href="/blog"
            className="hover:text-casa-white transition-colors"
          >
            Blog
          </Link>
          <span>/</span>
          <span className="text-casa-white/90">Kasbah d&apos;If Guide</span>
        </nav>
      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-casa-white z-20">
        <a href="#article-content" aria-label="Scroll to guide content">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 animate-bounce text-casa-white/80 hover:text-casa-white transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;
