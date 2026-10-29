import React from "react";
import Link from "next/link";

const AboutTwo = ({ content }) => {
  const { aboutTwo } = content;

  return (
    <section
      id="about_two"
      className="w-full max-w-5xl mx-auto px-5 sm:px-8 lg:px-16 py-16 sm:py-20 flex flex-col items-center text-center text-casa-black"
    >
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-canela leading-snug sm:leading-tight max-w-3xl">
        {aboutTwo.heading}
      </h2>

      <p className="mt-4 text-lg sm:text-xl lg:text-2xl font-canela italic text-casa-black/85 max-w-2xl leading-relaxed">
        {aboutTwo.subheading}
      </p>

      <div className="mt-6 text-sm sm:text-base font-aktiv font-light text-casa-black/80 max-w-3xl leading-relaxed sm:leading-loose">
        {aboutTwo.body}
      </div>

      <div className="w-12 h-0.5 bg-casa-scarlet my-8" aria-hidden="true" />

      <div>
        <Link
          href={aboutTwo.ctaLink}
          className="inline-block tracking-[0.2em] uppercase text-xs font-medium py-3 px-8 transition-all duration-300 ease-in-out border-2 border-casa-scarlet text-casa-scarlet rounded-full hover:bg-casa-scarlet hover:text-casa-background"
        >
          {aboutTwo.ctaLabel}
        </Link>
      </div>
    </section>
  );
};

export default AboutTwo;
