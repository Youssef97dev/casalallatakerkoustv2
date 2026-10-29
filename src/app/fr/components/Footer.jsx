"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaWhatsapp,
  FaMailBulk,
  FaMapMarkerAlt,
  FaTripadvisor,
} from "react-icons/fa";
import { siteConfig } from "@/data/siteConfig";

const Footer = () => {
  return (
    <footer className="py-20 w-full flex flex-col justify-center items-center gap-6 border-t border-casa-scarlet/15 mt-10">
      {/* Logo */}
      <div className="flex flex-col items-center">
        <Link href="/fr/" aria-label={siteConfig.name}>
          <Image
            src="/casa-lalla-scarlet.png"
            alt={siteConfig.name}
            width={140}
            height={60}
            className="w-24 sm:w-28 h-auto object-contain"
          />
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left mt-2">
        {/* Left Section: Centralized Location & Hours */}
        <div className="w-full flex flex-col items-center md:items-start justify-start gap-3 text-sm font-aktiv font-light text-casa-black/85">
          <p className="font-canela text-lg text-casa-scarlet font-normal">
            Adresse
          </p>
          <p>
            <Link
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-casa-scarlet transition-colors"
            >
              {siteConfig.address.street}
            </Link>
          </p>
          <p>
            <Link
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-casa-scarlet transition-colors"
            >
              {siteConfig.address.locality} {siteConfig.address.postalCode},{" "}
              {siteConfig.address.countryFr}
            </Link>
          </p>
          <p className="pt-2 font-medium text-casa-black/90">
            {siteConfig.hours.daysFr}
          </p>
          <p>{`Horaires d’ouverture\u00A0: ${siteConfig.hours.formattedFr}`}</p>
        </div>

        {/* Center Section: Navigation, Social Icons & Privacy Policy */}
        <div className="w-full flex flex-col items-center justify-between gap-6">
          <nav
            aria-label="Navigation du pied de page"
            className="text-xs sm:text-sm font-aktiv font-light tracking-wider flex flex-wrap justify-center items-center gap-x-3 gap-y-2 text-casa-black/90"
          >
            <Link
              href="/fr/restaurant-casa-lalla"
              className="hover:text-casa-scarlet transition-colors"
            >
              RESTAURANT
            </Link>
            <span className="opacity-30" aria-hidden="true">
              |
            </span>
            <Link
              href="/fr/lalla-takerkoust-activities"
              className="hover:text-casa-scarlet transition-colors"
            >
              ACTIVITÉS
            </Link>
            <span className="opacity-30" aria-hidden="true">
              |
            </span>
            <Link
              href="/fr/reservation"
              className="hover:text-casa-scarlet transition-colors"
            >
              RÉSERVATION
            </Link>
            <span className="opacity-30" aria-hidden="true">
              |
            </span>
            <Link
              href="/fr/contact"
              className="hover:text-casa-scarlet transition-colors"
            >
              CONTACT
            </Link>
          </nav>

          <div className="w-12 h-0.5 bg-casa-scarlet mx-auto" aria-hidden="true" />

          {/* Social Icons with Single Primary TripAdvisor */}
          <div className="flex justify-center items-center gap-5 text-xl text-casa-scarlet">
            <Link
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Consulter la page Instagram de Casa Lalla"
              className="hover:opacity-75 transition-opacity"
            >
              <FaInstagram />
            </Link>
            <Link
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contacter Casa Lalla sur WhatsApp"
              className="hover:opacity-75 transition-opacity"
            >
              <FaWhatsapp />
            </Link>
            <Link
              href={`mailto:${siteConfig.email}`}
              aria-label="Envoyer un courriel à Casa Lalla"
              className="hover:opacity-75 transition-opacity"
            >
              <FaMailBulk />
            </Link>
            <Link
              href={siteConfig.tripadvisorUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Consulter nos avis voyageurs sur TripAdvisor"
              className="hover:opacity-75 transition-opacity text-2xl"
            >
              <FaTripadvisor />
            </Link>
            <Link
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Localiser Casa Lalla sur Google Maps"
              className="hover:opacity-75 transition-opacity"
            >
              <FaMapMarkerAlt />
            </Link>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Link
              href="/fr/politique-de-confidentialite"
              className="text-xs font-light tracking-wider text-casa-scarlet hover:underline"
            >
              Politique de Confidentialité
            </Link>
            <p className="text-xs font-light tracking-wider text-casa-black/70">
              © 2026, CASA LALLA TAKERKOUST
            </p>
          </div>
        </div>

        {/* Right Section: Newsletter */}
        <div className="w-full hidden md:flex flex-col items-start justify-start gap-3">
          <h3 className="text-xl font-canela text-casa-black">
            Restez informé
          </h3>
          <p className="text-xs sm:text-sm font-light text-casa-black/80">
            Inscrivez-vous pour recevoir la lettre d’information de Casa Lalla Takerkoust.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-full max-w-xs mt-2"
          >
            <label htmlFor="footer-email-fr" className="sr-only">
              Adresse e-mail
            </label>
            <input
              id="footer-email-fr"
              type="email"
              placeholder="Adresse e-mail"
              className="w-full bg-transparent border-b border-casa-scarlet/60 focus:outline-none focus:border-casa-scarlet py-2 text-sm text-casa-black placeholder:text-casa-black/50"
            />
            <button
              type="submit"
              className="mt-4 border-2 border-casa-scarlet text-casa-scarlet px-7 py-2 rounded-full text-xs tracking-widest font-medium hover:bg-casa-scarlet hover:text-casa-background transition-colors duration-200"
            >
              S’INSCRIRE
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
