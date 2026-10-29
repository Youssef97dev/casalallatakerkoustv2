import HomePage from "@/components/home/HomePage";
import { homeContentEn } from "@/content/home.en";

export const metadata = {
  title: homeContentEn.meta.title,
  description: homeContentEn.meta.description,
  alternates: {
    canonical: homeContentEn.meta.canonical,
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
    title: homeContentEn.meta.ogTitle,
    description: homeContentEn.meta.ogDescription,
    url: "https://casalallatakerkoust.com/",
    siteName: "Casa Lalla Takerkoust",
    locale: homeContentEn.meta.ogLocale,
    alternateLocale: [homeContentEn.meta.ogLocaleAlternate],
    type: "website",
    images: [
      {
        url: "https://casalallatakerkoust.com/casalalla-takerkoust-agafay-vibes.jpg",
        width: 1200,
        height: 630,
        alt: "Casa Lalla Takerkoust Lake View Near Marrakech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homeContentEn.meta.ogTitle,
    description: homeContentEn.meta.ogDescription,
    images: [
      "https://casalallatakerkoust.com/casalalla-takerkoust-agafay-vibes.jpg",
    ],
  },
};

export default function Home() {
  return <HomePage locale="en" content={homeContentEn} />;
}
