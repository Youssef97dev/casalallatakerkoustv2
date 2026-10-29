import React from "react";
import Image from "next/image";
import Link from "next/link";

const InstagramSection = ({ content }) => {
  const { instagram } = content;

  return (
    <section className="py-16 sm:py-20 text-center">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 mb-10">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-canela text-casa-black leading-snug">
          {instagram.heading}
        </h2>

        <p className="text-sm sm:text-base font-aktiv font-light mt-4 text-casa-black/85">
          {instagram.subheading}{" "}
          <Link
            href={instagram.handleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-casa-scarlet font-medium hover:underline"
          >
            {instagram.handle}
          </Link>
        </p>

        <div className="w-12 h-0.5 bg-casa-scarlet mx-auto mt-6" aria-hidden="true" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 max-w-7xl mx-auto px-4 sm:px-6">
        {instagram.items.map((image, index) => (
          <Link
            key={index}
            href={image.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-square overflow-hidden rounded-xs bg-black/10"
            aria-label={`${instagram.handle} post ${index + 1}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              title={image.title}
              loading="lazy"
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-108"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default InstagramSection;
