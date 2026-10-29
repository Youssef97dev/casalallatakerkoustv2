import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Page Not Found | Casa Lalla Takerkoust",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-casa-background text-casa-black font-aktiv flex flex-col items-center justify-center px-6 py-20 text-center">
      <div className="max-w-xl mx-auto space-y-6">
        <Link href="/" className="inline-block mb-4">
          <Image
            src="/casa-lalla-scarlet.png"
            alt="Casa Lalla Takerkoust"
            width={140}
            height={60}
            className="w-28 h-auto object-contain mx-auto"
          />
        </Link>

        <p className="text-xs uppercase tracking-widest text-casa-scarlet font-medium">
          Error 404 • Page Not Found / Page Introuvable
        </p>

        <h1 className="font-canela text-3xl sm:text-4xl lg:text-5xl text-casa-black">
          Lost by the Lake?
        </h1>

        <p className="text-sm sm:text-base font-light text-casa-black/80 leading-relaxed max-w-md mx-auto">
          The page you are looking for may have moved or no longer exists. Let us
          guide you back to our lakeside sanctuary.
        </p>

        <p className="font-lora italic text-xs sm:text-sm text-casa-black/70">
          La page que vous recherchez n’existe pas ou a été déplacée.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="border-2 border-casa-scarlet text-casa-scarlet hover:bg-casa-scarlet hover:text-casa-background px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-medium transition-colors"
          >
            Homepage (EN)
          </Link>
          <Link
            href="/fr/"
            className="border-2 border-casa-scarlet text-casa-scarlet hover:bg-casa-scarlet hover:text-casa-background px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-medium transition-colors"
          >
            Accueil (FR)
          </Link>
        </div>
      </div>
    </main>
  );
}
