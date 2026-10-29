import React from "react";
import Image from "next/image";

const Intro = ({ content }) => {
  const { intro } = content;

  return (
    <section
      id="intro"
      className="w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-16 pt-16 sm:pt-24 pb-16 flex flex-col items-center"
    >
      <div className="max-w-4xl text-center space-y-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-canela font-thin text-casa-black leading-tight sm:leading-snug">
          {intro.headline}
        </h1>

        <p className="text-base sm:text-lg lg:text-xl font-lora italic text-casa-black/90 leading-relaxed max-w-3xl mx-auto">
          {intro.body}
        </p>
      </div>

      <div className="w-full max-w-4xl mt-12 sm:mt-16 overflow-hidden rounded-lg shadow-xs">
        <Image
          src={intro.image.src}
          alt={intro.image.alt}
          title={intro.image.title}
          loading="lazy"
          width={1200}
          height={680}
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="w-full h-auto object-cover opacity-90 transition-transform duration-700 hover:scale-102"
        />
      </div>
    </section>
  );
};

export default Intro;
