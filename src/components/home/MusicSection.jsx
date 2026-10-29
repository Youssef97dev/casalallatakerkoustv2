import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

const MusicSection = ({ content }) => {
  const { music } = content;

  return (
    <section
      id="music"
      aria-label={music.sectionAria}
      className="w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-24"
    >
      <div className="bg-[#EDE5D9] rounded-xl p-8 sm:p-12 lg:p-16 shadow-xs flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
        {/* Editorial Storytelling */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 sm:space-y-5">
          <div className="w-12 h-0.5 bg-casa-scarlet" aria-hidden="true" />

          <h2 className="font-canela text-2xl sm:text-3xl lg:text-4xl text-casa-black leading-snug">
            {music.heading}
          </h2>

          <p className="font-lora italic text-lg sm:text-xl text-casa-scarlet">
            {music.subheading}
          </p>

          <p className="font-aktiv font-light text-sm sm:text-base text-casa-black/85 leading-relaxed">
            {music.description}
          </p>

          <div className="pt-2">
            <Link
              href="https://open.spotify.com/playlist/5Qgw5WwwBuGvLiQ3WmkgXH"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-casa-scarlet hover:text-casa-black transition-colors"
            >
              <span>{music.listenOnSpotify}</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Curated Spotify Embed */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-md bg-casa-black/5 p-1 border border-casa-scarlet/10">
            <iframe
              title={music.iframeTitle}
              src={siteConfig.spotifyPlaylistUrl}
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-xl border-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
