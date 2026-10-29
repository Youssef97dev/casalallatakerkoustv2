import React from "react";
import Image from "next/image";
import Link from "next/link";

const OurSpaces = ({ content }) => {
  const { spaces } = content;

  return (
    <section className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20 text-center">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-canela text-casa-black mb-10 sm:mb-14">
        {spaces.heading}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {spaces.items.map((space, index) => (
          <Link
            key={index}
            href={space.link}
            className="group relative overflow-hidden rounded-md shadow-sm aspect-4/5 flex flex-col justify-end"
          >
            {/* Background Image */}
            <Image
              src={space.image}
              alt={space.alt}
              title={space.titleAttr}
              loading="lazy"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/25 to-black/10 transition-opacity duration-500 group-hover:from-black/80" />

            {/* Card Title */}
            <div className="relative z-10 p-6 sm:p-8 flex items-center justify-center h-full">
              <h3 className="font-canela text-2xl sm:text-3xl lg:text-4xl text-casa-background italic font-light tracking-wide text-center">
                {space.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default OurSpaces;
