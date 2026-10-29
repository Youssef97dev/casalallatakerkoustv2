import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title:
    "Lalla Takerkoust Activities | Jet Ski, Quad, Buggy & Day Pass Near Marrakech",
  description:
    "Experience thrilling outdoor activities at Lake Lalla Takerkoust: jet ski on the water, guided quad and buggy desert tours towards Agafay, and relaxing pool day passes.",
  alternates: {
    canonical: "https://casalallatakerkoust.com/lalla-takerkoust-activities/",
    languages: {
      en: "https://casalallatakerkoust.com/lalla-takerkoust-activities/",
      fr: "https://casalallatakerkoust.com/fr/lalla-takerkoust-activities/",
      "x-default":
        "https://casalallatakerkoust.com/lalla-takerkoust-activities/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title:
      "Lalla Takerkoust Activities | Jet Ski, Quad, Buggy & Day Pass Near Marrakech",
    description:
      "Experience thrilling outdoor activities near Marrakech: jet ski, quad biking, buggy tours, and day pass relaxation at Lake Lalla Takerkoust.",
    url: "https://casalallatakerkoust.com/lalla-takerkoust-activities/",
    siteName: "Casa Lalla Takerkoust",
    locale: "en_US",
    alternateLocale: ["fr_FR"],
    type: "website",
    images: [
      {
        url: "https://casalallatakerkoust.com/images/adrenaline-quad-biking-marrakech-desert.webp",
        width: 1200,
        height: 630,
        alt: "Quad biking and activities at Lake Lalla Takerkoust",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Lalla Takerkoust Activities | Jet Ski, Quad, Buggy & Day Pass Near Marrakech",
    description:
      "Lake and desert adventures near Marrakech: jet ski, quad tours, buggy excursions, and poolside relaxation.",
    images: [
      "https://casalallatakerkoust.com/images/adrenaline-quad-biking-marrakech-desert.webp",
    ],
  },
};

const page = () => {
  return <Loader />;
};

export default page;
