"use client";
import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Intro from "./Intro";
import About from "./About";
import OurSpaces from "./OurSpaces";
import AboutTwo from "./AboutTwo";
import Events from "./Events";
import Activities from "./Activities";
import MusicSection from "./MusicSection";
import InstagramSection from "./InstagramSection";
import Footer from "./Footer";
import ButtonWtsp from "./ButtonWtsp";

const HomePage = ({ locale, content }) => {
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  return (
    <div className="relative min-h-screen bg-casa-background text-casa-black font-aktiv antialiased selection:bg-casa-scarlet selection:text-white">
      {/* Synchronous inline script to enforce documentElement lang before first paint */}
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang = "${locale}";`,
        }}
      />

      {/* Structured Data (JSON-LD) for Localized Restaurant Entity */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(content.jsonLd),
        }}
      />

      <Navbar content={content} />
      <Hero content={content} />
      <Intro content={content} />
      <About content={content} />
      <OurSpaces content={content} />
      <AboutTwo content={content} />
      <Events content={content} />
      <Activities content={content} />
      <MusicSection content={content} />
      <InstagramSection content={content} />
      <Footer content={content} />

      {/* Floating WhatsApp Action Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <ButtonWtsp content={content} />
      </div>
    </div>
  );
};

export default HomePage;
