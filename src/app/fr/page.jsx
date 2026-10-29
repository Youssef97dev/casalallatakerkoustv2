import HomePage from "@/components/home/HomePage";
import { homeContentFr } from "@/content/home.fr";

export const metadata = {
  title: homeContentFr.meta.title,
  description: homeContentFr.meta.description,
  alternates: {
    canonical: homeContentFr.meta.canonical,
    languages: {
      en: "https://casalallatakerkoust.com/",
      fr: "https://casalallatakerkoust.com/fr/",
      "x-default": "https://casalallatakerkoust.com/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: homeContentFr.meta.ogTitle,
    description: homeContentFr.meta.ogDescription,
    url: "https://casalallatakerkoust.com/fr/",
    siteName: "Casa Lalla Takerkoust",
    locale: homeContentFr.meta.ogLocale,
    alternateLocale: [homeContentFr.meta.ogLocaleAlternate],
    type: "website",
    images: [
      {
        url: "https://casalallatakerkoust.com/casalalla-takerkoust-agafay-vibes.jpg",
        width: 1200,
        height: 630,
        alt: "Casa Lalla Takerkoust vue sur le lac près de Marrakech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homeContentFr.meta.ogTitle,
    description: homeContentFr.meta.ogDescription,
    images: [
      "https://casalallatakerkoust.com/casalalla-takerkoust-agafay-vibes.jpg",
    ],
  },
};

export default function HomeFr() {
  return <HomePage locale="fr" content={homeContentFr} />;
}
