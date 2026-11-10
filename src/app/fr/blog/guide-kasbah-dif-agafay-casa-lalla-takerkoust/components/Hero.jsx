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
          alt="Entrée blanchie à la chaux du restaurant Casa Lalla Takerkoust avec parasols verts, bougainvillées et tables dressées"
          title="Casa Lalla Takerkoust, restaurant et day club au bord du lac près de Marrakech"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Overlay gradient using casa-black */}
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/30 to-black/50" />
      </div>

      {/* Hero Content with Cormorant Garamond Light - 400 Typography */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-casa-white flex flex-col items-center gap-5 mt-16 font-cormorant">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-casa-scarlet/60 backdrop-blur-md text-xs uppercase tracking-[0.25em] font-light text-casa-white border border-casa-white/20 shadow-xs">
          Guide Désert d&apos;Agafay & Lac Lalla Takerkoust
        </div>
        <h1 className="font-cormorant italic font-normal text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl leading-tight text-casa-white tracking-tight max-w-3xl">
          Séjour à la Kasbah d&apos;If (Kasbah Dif) : Escapade & Déjeuner au
          Bord du Lac à Casa Lalla Takerkoust
        </h1>
        <p className="font-cormorant font-normal text-lg sm:text-xl md:text-2xl text-casa-white/95 max-w-2xl leading-relaxed tracking-wide">
          Le guide incontournable pour associer la sérénité minérale de la
          Kasbah d&apos;If aux plaisirs de la table, aux activités nautiques et
          au coucher de soleil à Casa Lalla.
        </p>

        {/* Breadcrumbs */}
        <nav
          aria-label="Fil d'Ariane"
          className="mt-2 text-xs font-light text-casa-white/70 flex items-center gap-2 tracking-widest uppercase font-cormorant"
        >
          <Link href="/fr" className="hover:text-casa-white transition-colors">
            Accueil
          </Link>
          <span>/</span>
          <Link
            href="/fr/blog"
            className="hover:text-casa-white transition-colors"
          >
            Blog
          </Link>
          <span>/</span>
          <span className="text-casa-white/90">Guide Kasbah d&apos;If</span>
        </nav>
      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-casa-white z-20">
        <a href="#article-content" aria-label="Découvrir l'article">
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
