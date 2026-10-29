import localFont from "next/font/local";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

// Configure the local font
const aktivGrotesk = localFont({
  src: [
    {
      path: "./fonts/AktivGrotesk-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/AktivGrotesk-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/AktivGrotesk-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/AktivGrotesk-LightItalic.woff",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/AktivGrotesk-Thin.woff",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/AktivGrotesk-ThinItalic.woff",
      weight: "200",
      style: "italic",
    },
    {
      path: "./fonts/AktivGrotesk-Hairline.woff",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/AktivGrotesk-HairlineItalic.woff",
      weight: "100",
      style: "italic",
    },
  ],
  variable: "--font-aktiv", // This creates a CSS variable for Tailwind
  display: "swap",
});
const canela = localFont({
  src: [
    {
      path: "./fonts/Canela-Thin.woff",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/Canela-ThinItalic.woff",
      weight: "100",
      style: "italic",
    },
  ],
  variable: "--font-canela", // This creates a CSS variable for Tailwind
  display: "swap",
});
const lora = localFont({
  src: [
    {
      path: "./fonts/Lora-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Lora-Italic.woff",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-lora", // This creates a CSS variable for Tailwind
  display: "swap",
});

export const metadata = {
  title: {
    default: "Casa Lalla Takerkoust",
    template: "%s | Where the Atlas meets the water",
  },
  description:
    "Casalalla Restaurant is a must-visit dining destination near Marrakech, located by the stunning barrage Lalla Takerkoust. This culinary gem offers an exceptional experience with a delightful blend of Moroccan cuisine and international dishes, all prepared with fresh, local ingredients. Enjoy breathtaking views of Lalla Takerkoust Lake and the Atlas Mountains, making it the perfect backdrop for a memorable meal.",
  keywords: [
    "luxury restaurant in marrakech",
    "alchool medina marrakech",
    "best moroccan restaurant marrakech",
    "top restaurant marocain marrakech",
  ],
  openGraph: {
    title: "Casa Lalla Takerkoust",
    description:
      "Casalalla Restaurant is a must-visit dining destination near Marrakech, located by the stunning barrage Lalla Takerkoust. This culinary gem offers an exceptional experience with a delightful blend of Moroccan cuisine and international dishes, all prepared with fresh, local ingredients. Enjoy breathtaking views of Lalla Takerkoust Lake and the Atlas Mountains, making it the perfect backdrop for a memorable meal.",
    url: "https://casalallatakerkoust.com/",
    siteName: "Casa Lalla Takerkoust",
    images: [
      {
        url: "https://casalallatakerkoust.com/casalalla-takerkoust-agafay-vibes.jpg",
        width: 1200,
        height: 630,
        alt: "Casa Lalla Takerkoust",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  metadataBase: new URL("https://casalallatakerkoust.com"),
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${aktivGrotesk.variable} ${canela.variable} ${lora.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>{children}</body>
      <GoogleAnalytics gaId="G-1GSVC5EJ1N" />
    </html>
  );
}
