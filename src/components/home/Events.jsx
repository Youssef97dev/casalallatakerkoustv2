import React from "react";
import Image from "next/image";
import Link from "next/link";

const Events = ({ content }) => {
  const { events } = content;

  return (
    <section className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12 lg:py-20">
      <div className="relative flex flex-col-reverse lg:flex-row items-center justify-center gap-8 lg:gap-0 min-h-auto lg:min-h-187.5">
        {/* Content Box */}
        <div className="z-20 w-full lg:w-[48%] bg-[#EDE5D9] p-6 sm:p-10 lg:p-12 lg:-mr-16 rounded-md shadow-xs flex flex-col justify-center items-start gap-5">
          <h2 className="font-canela text-2xl sm:text-3xl text-casa-black leading-snug">
            {events.heading}
          </h2>

          <div className="font-aktiv font-light text-sm sm:text-base leading-relaxed text-casa-black/85 space-y-4">
            <p>{events.paragraph1}</p>
            <p>{events.paragraph2}</p>
          </div>

          <Link
            href={events.ctaLink}
            aria-label={events.ctaAria}
            className="font-canela italic text-lg text-casa-scarlet hover:text-casa-scarlet-opacity group relative inline-block no-underline mt-2"
          >
            <span className="relative z-10">{events.ctaLabel}</span>
            <span
              className="absolute left-0 -bottom-1 h-0.5 w-full origin-left scale-x-0 bg-casa-scarlet transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus:scale-x-100"
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* Image Box */}
        <div className="z-10 w-full lg:w-[52%] h-80 sm:h-96 lg:h-155 relative rounded-md overflow-hidden shadow-xs">
          <Image
            src={events.image.src}
            alt={events.image.alt}
            title={events.image.title}
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Events;
