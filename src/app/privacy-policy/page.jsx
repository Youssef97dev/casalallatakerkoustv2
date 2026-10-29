import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export const metadata = {
  title: "Privacy Policy | Casa Lalla Takerkoust",
  description:
    "Privacy Policy for Casa Lalla Takerkoust: learn how we handle guest data from reservations, contact inquiries, and WhatsApp communication in full compliance with data protection laws.",
  alternates: {
    canonical: "https://casalallatakerkoust.com/privacy-policy/",
    languages: {
      en: "https://casalallatakerkoust.com/privacy-policy/",
      fr: "https://casalallatakerkoust.com/fr/politique-de-confidentialite/",
      "x-default": "https://casalallatakerkoust.com/privacy-policy/",
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
    title: "Privacy Policy | Casa Lalla Takerkoust",
    description:
      "Privacy Policy for Casa Lalla Takerkoust: booking management, guest communications, and data protection.",
    url: "https://casalallatakerkoust.com/privacy-policy/",
    siteName: "Casa Lalla Takerkoust",
    locale: "en_US",
    alternateLocale: ["fr_FR"],
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-casa-background text-casa-black font-aktiv px-6 py-20 lg:py-28 max-w-4xl mx-auto">
      <div className="mb-10">
        <Link
          href="/"
          className="text-xs uppercase tracking-widest text-casa-scarlet hover:underline inline-flex items-center gap-2 mb-6"
        >
          ← Back to Homepage
        </Link>
        <h1 className="font-canela text-3xl sm:text-4xl lg:text-5xl mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm font-light text-casa-black/70">
          Effective Date: October 2026
        </p>
      </div>

      <div className="space-y-8 text-sm sm:text-base leading-relaxed font-light">
        <section className="space-y-3">
          <h2 className="font-canela text-xl sm:text-2xl text-casa-scarlet">
            1. Introduction & Commitment
          </h2>
          <p>
            At <strong>Casa Lalla Takerkoust</strong>, we are committed to
            protecting the privacy and confidentiality of our guests. This
            Privacy Policy explains how we collect, process, and safeguard your
            personal information when you visit our website, submit a table
            reservation, or contact our team via WhatsApp and email.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-canela text-xl sm:text-2xl text-casa-scarlet">
            2. Information We Collect
          </h2>
          <p>
            We collect personal data strictly required to deliver our luxury
            hospitality services and manage guest reservations:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Contact Details:</strong> Full name, telephone number,
              WhatsApp contact, and email address.
            </li>
            <li>
              <strong>Reservation Details:</strong> Requested date, arrival time,
              party size, special culinary preferences, and dietary restrictions.
            </li>
            <li>
              <strong>Direct Communications:</strong> Message contents exchanged
              via WhatsApp, email, or our inquiry forms.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-canela text-xl sm:text-2xl text-casa-scarlet">
            3. How We Use Your Data
          </h2>
          <p>
            Your information is used solely for legitimate hospitality purposes:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Confirming and managing your table reservations and private event requests.</li>
            <li>Sending booking reminders, arrival directions to Lake Lalla Takerkoust, and personalized service updates.</li>
            <li>Answering direct inquiries and providing guest assistance before, during, and after your visit.</li>
            <li>Ensuring health, safety, and allergen compliance during dining.</li>
          </ul>
          <p className="pt-2">
            We do <strong>not</strong> sell, rent, or commercialize your personal
            data to any third-party marketing companies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-canela text-xl sm:text-2xl text-casa-scarlet">
            4. Cookies & Web Analytics
          </h2>
          <p>
            Our website uses minimal, non-invasive performance cookies (such as
            Google Analytics) solely to understand general traffic trends,
            popular pages, and technical performance. These analytics do not
            identify individual users and are used solely to improve our digital
            experience. You can adjust your browser settings at any time to
            decline cookies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-canela text-xl sm:text-2xl text-casa-scarlet">
            5. Data Security & Retention
          </h2>
          <p>
            We implement industry-standard administrative, organizational, and
            technical measures to protect your personal data against unauthorized
            access, loss, alteration, or disclosure. Reservation records are
            retained only as long as necessary to complete your booking and
            satisfy legal accounting obligations under Moroccan law.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-canela text-xl sm:text-2xl text-casa-scarlet">
            6. Your Rights & Contact Information
          </h2>
          <p>
            Under Moroccan Law n° 09-08 and applicable international privacy
            standards, you possess the right to access, rectify, or request the
            deletion of your personal data at any time. To exercise these rights
            or ask questions regarding this policy, please contact our team:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Email:</strong>{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-casa-scarlet underline"
              >
                {siteConfig.email}
              </a>
            </li>
            <li>
              <strong>WhatsApp / Telephone:</strong> {siteConfig.phoneDisplay}
            </li>
            <li>
              <strong>Address:</strong> {siteConfig.address.en}
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
