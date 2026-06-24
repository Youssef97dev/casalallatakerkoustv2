import Image from "next/image";

const Hero = () => {
  return (
    <div id="hero" className="relative w-full h-screen">
      <div className="w-full h-full hidden lg:block">
        <Image
          src="/images/pool-day-pass-agafay-lalla-takerkoust-marrakech.webp"
          alt="Transats bohèmes et piscine au day club du restaurant Casa Lalla près du désert d'Agafay, Marrakech"
          title="Day Pass Piscine Agafay et Lalla Takerkoust — Casa Lalla"
          width={1500}
          height={1500}
          className={`w-full h-full object-cover`}
        />
      </div>
      <div className="w-full h-full block lg:hidden">
        <Image
          src="/images/casa-lalla-takerkoust-lake-view-terrace.webp"
          alt="Terrasse panoramique avec vue sur le lac à Casa Lalla Takerkoust offrant une ambiance chic de Mykonos et un dîner de luxe près du désert d'Agafay"
          title="Terrasse de Luxe avec Vue sur le Lac et Ambiance Mykonos à Casa Lalla"
          width={1500}
          height={1500}
          className={`w-full h-full object-cover`}
        />
      </div>
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-[85%] bg-linear-to-b from-black/70 to-transparent"></div>

      <div className="absolute inset-0 w-full flex justify-center text-center items-center font-lora text-white text-[24px] leading-10 lg:text-[32px] italic lg:leading-15 px-2 lg:px-0">
        <h1>
          Une expérience culinaire raffinée au bord des eaux tranquilles de
          Lalla Takerkoust
        </h1>
      </div>

      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-white z-40">
        <a href="#our-philosophy">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 15l7 7 7-7"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;
