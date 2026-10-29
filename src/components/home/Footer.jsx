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

const Footer = ({ content }) => {
  const { footer, locale } = content;

  return (
    <footer className="py-16 sm:py-20 w-full flex flex-col justify-center items-center gap-6 border-t border-casa-scarlet/15 mt-10">
      {/* Brand Logo */}
      <div className="flex flex-col items-center">
        <Link href={locale === "fr" ? "/fr/" : "/"} aria-label={siteConfig.name}>
          <Image
            src="/casa-lalla-scarlet.png"
            alt={siteConfig.name}
            width={140}
            height={60}
            className="w-24 sm:w-28 h-auto object-contain"
          />
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left mt-4">
        {/* Left Section: Address & Hours from centralized single source of truth */}
        <div className="w-full flex flex-col items-center md:items-start justify-start gap-3 text-sm font-aktiv font-light text-casa-black/85">
          <p className="font-canela text-lg text-casa-scarlet font-normal">
            {footer.addressTitle}
          </p>
          <p>
            <Link
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-casa-scarlet transition-colors"
            >
              {footer.addressLine1}
            </Link>
          </p>
          <p>
            <Link
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-casa-scarlet transition-colors"
            >
              {footer.addressLine2}
            </Link>
          </p>
          <p className="pt-2 font-medium text-casa-black/90">
            {footer.hoursStatus}
          </p>
          <p>{footer.hoursTime}</p>
        </div>

        {/* Center Section: Navigation, Social Icons & Privacy Policy Link */}
        <div className="w-full flex flex-col items-center justify-between gap-6">
          <nav
            aria-label="Footer navigation"
            className="text-xs sm:text-sm font-aktiv font-light tracking-wider flex flex-wrap justify-center items-center gap-x-3 gap-y-2 text-casa-black/90"
          >
            {footer.navLinks.map((item, index) => (
              <React.Fragment key={index}>
                <Link
                  href={item.href}
                  className="hover:text-casa-scarlet transition-colors"
                >
                  {item.label}
                </Link>
                {index < footer.navLinks.length - 1 && (
                  <span className="opacity-30" aria-hidden="true">
                    |
                  </span>
                )}
              </React.Fragment>
            ))}
          </nav>

          <div className="w-12 h-0.5 bg-casa-scarlet mx-auto" aria-hidden="true" />

          {/* Social & TripAdvisor Icons */}
          <div className="flex justify-center items-center gap-5 text-xl text-casa-scarlet">
            <Link
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={footer.socialAria.instagram}
              className="hover:opacity-75 transition-opacity"
            >
              <FaInstagram />
            </Link>
            <Link
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={footer.socialAria.whatsapp}
              className="hover:opacity-75 transition-opacity"
            >
              <FaWhatsapp />
            </Link>
            <Link
              href={`mailto:${siteConfig.email}`}
              aria-label={footer.socialAria.email}
              className="hover:opacity-75 transition-opacity"
            >
              <FaMailBulk />
            </Link>
            <Link
              href={siteConfig.tripadvisorUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={footer.socialAria.tripadvisor}
              className="hover:opacity-75 transition-opacity text-2xl"
            >
              <FaTripadvisor />
            </Link>
            <Link
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={footer.socialAria.maps}
              className="hover:opacity-75 transition-opacity"
            >
              <FaMapMarkerAlt />
            </Link>
          </div>

          {/* Privacy Policy & Copyright */}
          <div className="flex flex-col items-center gap-2">
            <Link
              href={footer.privacyPolicyLink || footer.legalLink}
              className="text-xs font-light tracking-wider text-casa-scarlet hover:underline"
            >
              {footer.privacyPolicyLabel || footer.legalLabel}
            </Link>
            <p className="text-xs font-light tracking-wider text-casa-black/70">
              {footer.copyright}
            </p>
          </div>
        </div>

        {/* Right Section: Newsletter */}
        <div className="w-full hidden md:flex flex-col items-start justify-start gap-3">
          <h3 className="text-xl font-canela text-casa-black">
            {footer.newsletterTitle}
          </h3>
          <p className="text-xs sm:text-sm font-light text-casa-black/80">
            {footer.newsletterDesc}
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-full max-w-xs mt-2"
          >
            <label htmlFor={`footer-email-${locale}`} className="sr-only">
              {footer.newsletterPlaceholder}
            </label>
            <input
              id={`footer-email-${locale}`}
              type="email"
              placeholder={footer.newsletterPlaceholder}
              className="w-full bg-transparent border-b border-casa-scarlet/60 focus:outline-none focus:border-casa-scarlet py-2 text-sm text-casa-black placeholder:text-casa-black/50"
            />
            <button
              type="submit"
              className="mt-4 border-2 border-casa-scarlet text-casa-scarlet px-7 py-2 rounded-full text-xs tracking-widest font-medium hover:bg-casa-scarlet hover:text-casa-background transition-colors duration-200"
            >
              {footer.newsletterButton}
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
