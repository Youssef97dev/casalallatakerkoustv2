import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export const metadata = {
  title: "Politique de Confidentialité | Casa Lalla Takerkoust",
  description:
    "Politique de confidentialité de Casa Lalla Takerkoust : traitement des données personnelles pour les réservations, formulaires de contact et échanges WhatsApp en conformité avec la loi.",
  alternates: {
    canonical:
      "https://casalallatakerkoust.com/fr/politique-de-confidentialite/",
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
    title: "Politique de Confidentialité | Casa Lalla Takerkoust",
    description:
      "Politique de confidentialité et protection des données personnelles de Casa Lalla Takerkoust.",
    url: "https://casalallatakerkoust.com/fr/politique-de-confidentialite/",
    siteName: "Casa Lalla Takerkoust",
    locale: "fr_FR",
    alternateLocale: ["en_US"],
    type: "website",
  },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="min-h-screen bg-casa-background text-casa-black font-aktiv px-6 py-20 lg:py-28 max-w-4xl mx-auto">
      <div className="mb-10">
        <Link
          href="/fr/"
          className="text-xs uppercase tracking-widest text-casa-scarlet hover:underline inline-flex items-center gap-2 mb-6"
        >
          ← Retour à l’accueil
        </Link>
        <h1 className="font-canela text-3xl sm:text-4xl lg:text-5xl mb-4">
          Politique de Confidentialité
        </h1>
        <p className="text-sm font-light text-casa-black/70">
          Date d’effet : Octobre 2026
        </p>
      </div>

      <div className="space-y-8 text-sm sm:text-base leading-relaxed font-light">
        <section className="space-y-3">
          <h2 className="font-canela text-xl sm:text-2xl text-casa-scarlet">
            1. Engagement et Objet
          </h2>
          <p>
            À <strong>Casa Lalla Takerkoust</strong>, nous accordons la plus
            haute importance à la protection de la vie privée et à la
            confidentialité des données de nos hôtes. La présente Politique de
            Confidentialité détaille les modalités de collecte, d’utilisation
            et de protection de vos données personnelles lorsque vous consultez
            notre site internet, effectuez une demande de réservation de table
            ou échangez avec notre équipe via WhatsApp et courriel.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-canela text-xl sm:text-2xl text-casa-scarlet">
            2. Données Personnelles Collectées
          </h2>
          <p>
            Nous recueillons uniquement les informations indispensables au bon
            déroulement de nos prestations d’accueil et à la gestion de vos
            réservations :
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Coordonnées de contact :</strong> Nom, prénom, numéro de
              téléphone / WhatsApp, adresse électronique.
            </li>
            <li>
              <strong>Détails de réservation :</strong> Date souhaitée, heure
              d’arrivée, nombre de convives, préférences de table ou
              restrictions alimentaires éventuelles.
            </li>
            <li>
              <strong>Échanges directs :</strong> Messages transmis via nos
              formulaires de contact, par WhatsApp ou par e-mail.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-canela text-xl sm:text-2xl text-casa-scarlet">
            3. Finalités du Traitement
          </h2>
          <p>
            Les données personnelles recueillies sont utilisées exclusivement
            dans le cadre de nos activités d’hospitalité :
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>La confirmation, la gestion et le suivi de vos réservations de table et demandes d’événements privés.</li>
            <li>La transmission d’informations pratiques d’accès au lac de Lalla Takerkoust et de rappels de réservation.</li>
            <li>La réponse personnalisée à vos questions et l’accompagnement de votre expérience avant, pendant et après votre visite.</li>
            <li>Le respect des obligations légales, réglementaires et comptables en vigueur au Maroc.</li>
          </ul>
          <p className="pt-2">
            En aucun cas vos données ne font l’objet de vente, de location ou de
            cession à des tiers à des fins commerciales ou publicitaires.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-canela text-xl sm:text-2xl text-casa-scarlet">
            4. Cookies et Statistiques de Fréquentation
          </h2>
          <p>
            Notre site utilise des traceurs techniques et de mesure d’audience
            (Google Analytics) anonymisés afin d’analyser la navigation, d’optimiser
            les temps de chargement et d’améliorer l’expérience utilisateur. Ces
            cookies ne permettent pas d’identifier personnellement un visiteur.
            Vous pouvez à tout moment configurer votre navigateur pour refuser
            l’enregistrement des cookies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-canela text-xl sm:text-2xl text-casa-scarlet">
            5. Sécurité et Durée de Conservation
          </h2>
          <p>
            Casa Lalla met en œuvre toutes les mesures techniques et
            organisationnelles appropriées pour garantir la sécurité et la
            confidentialité de vos données personnelles, empêchant ainsi tout
            accès non autorisé, altération ou divulgation. Les données de
            réservation sont conservées pendant la durée strictement nécessaire à
            la relation commerciale et conformément aux délais légaux applicables.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-canela text-xl sm:text-2xl text-casa-scarlet">
            6. Vos Droits et Contact
          </h2>
          <p>
            Conformément à la loi marocaine n° 09-08 relative à la protection
            des personnes physiques à l’égard du traitement des données à
            caractère personnel (CNDP), vous disposez d’un droit d’accès, de
            rectification et d’opposition sur les données vous concernant. Pour
            exercer ces droits ou pour toute question, contactez-nous :
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Courriel :</strong>{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-casa-scarlet underline"
              >
                {siteConfig.email}
              </a>
            </li>
            <li>
              <strong>Téléphone / WhatsApp :</strong> {siteConfig.phoneDisplay}
            </li>
            <li>
              <strong>Adresse :</strong> {siteConfig.address.fr}
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
