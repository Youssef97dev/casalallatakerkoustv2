import Image from "next/image";

const Hero = () => {
  return (
    <div id="hero" className="relative w-full h-[65vh] min-h-[480px] flex items-center justify-center font-cormorant">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/high-atlas-mountains-quad-marrakech.webp"
          alt="Sports nautiques, excursions en quad et détente au bord du lac Lalla Takerkoust"
          title="Blog de voyage Casa Lalla Takerkoust"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-casa-black/80 via-casa-black/50 to-casa-black/85" />
      </div>

      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-casa-white flex flex-col items-center gap-5 mt-12 font-cormorant">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-casa-scarlet text-xs uppercase tracking-[0.25em] font-normal text-casa-white border border-casa-white/20">
          Guides & Inspirations
        </div>
        <h1 className="font-cormorant font-normal text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl leading-snug text-casa-white tracking-wide">
          Le Blog Casa Lalla Takerkoust
        </h1>
        <p className="font-cormorant font-light text-base sm:text-lg md:text-xl text-casa-white/90 max-w-xl leading-relaxed tracking-wider">
          Itinéraires exclusifs, gastronomie au bord de l&apos;eau, excursions dans le désert d&apos;Agafay et secrets de la région de Marrakech.
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-casa-white z-20">
        <a href="#blogs" aria-label="Découvrir les articles">
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
