import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";

function Content() {
  return (
    <section
      id="contact"
      className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-5 px-3 lg:px-40 pt-24"
    >
      <div className="w-full flex flex-col justify-start items-center gap-5">
        <h2 className="text-[35px] leading-10.5 font-canela text-casa-black">
          Réservez en ligne
        </h2>
        <Link
          href="/fr/reservation"
          className="tracking-[0.2em] mt-2 uppercase text-[11px] font-medium py-3 px-5 transition-all duration-300 ease-in-out border-2 border-casa-scarlet text-casa-scarlet rounded-full hover:bg-casa-scarlet hover:text-casa-background"
        >
          Réservez ici
        </Link>
        <p className="font-light text-[15px] leading-[25.5px] text-casa-black">
          Service client |{" "}
          <Link
            href={siteConfig.whatsappUrl}
            target="_blank"
            className="text-casa-scarlet underline underline-offset-4"
          >
            {siteConfig.phoneDisplay}
          </Link>
        </p>
        <p className="font-light text-[15px] leading-[25.5px] text-casa-black">
          Adresse e-mail |{" "}
          <Link
            href={`mailto:${siteConfig.email}`}
            className="text-casa-scarlet underline underline-offset-4"
          >
            {siteConfig.email}
          </Link>
        </p>
      </div>
      <div className="w-full flex flex-col justify-start items-center gap-5">
        <h2 className="text-[35px] leading-10.5 font-canela text-casa-black">
          Notre emplacement
        </h2>
        <Link
          href={siteConfig.mapsUrl}
          target="_blank"
          className="text-[15px] leading-[25.5px] font-light text-casa-scarlet underline underline-offset-4 text-center"
        >
          {siteConfig.address.fr}
        </Link>
        <p className="text-[15px] leading-[25.5px] font-light text-casa-black text-center">
          {siteConfig.hours.daysFr} <br />
          {`Horaires d’ouverture\u00A0: ${siteConfig.hours.formattedFr}`}
        </p>
        <Link href={siteConfig.mapsUrl} target="_blank">
          <Image
            src="/map-casa-lalla.png"
            alt="Emplacement de Casa Lalla Takerkoust"
            width={500}
            height={500}
            className="object-cover w-100 rounded-md shadow-xs"
          />
        </Link>
      </div>
    </section>
  );
}

export default Content;
