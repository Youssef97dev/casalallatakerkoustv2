import Image from "next/image";
import Link from "next/link";
import React from "react";
import { siteConfig } from "@/data/siteConfig";

const Content = () => {
  return (
    <article
      id="article-content"
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-casa-black font-cormorant font-normal"
    >
      {/* Article Header & Editorial Intro */}
      <header className="text-center mb-16">
        <span className="text-casa-scarlet uppercase tracking-[0.25em] text-xs sm:text-sm font-light block mb-3">
          Séjours de Charme &amp; Guide Agafay
        </span>
        <h1 className="font-cormorant italic font-normal text-3xl sm:text-4xl md:text-5xl text-casa-black leading-snug tracking-tight">
          Camp de Luxe à Agafay ou Hôtel Rural Casa Lalla Takerkoust : Où Dormir
          aux Portes du Désert ?
        </h1>
        <div className="w-12 h-px bg-casa-scarlet mx-auto mt-6 mb-4" />
        <p className="text-xs sm:text-sm text-casa-black/60 uppercase tracking-[0.2em] font-light">
          Rédigé par la rédaction de Casa Lalla Takerkoust • 10 min de lecture
        </p>
      </header>

      {/* Introduction (first 100 words requirement) */}
      <div className="mb-14">
        <p className="text-xl sm:text-2xl font-normal leading-relaxed text-casa-black/90">
          Lors de la préparation d&apos;un séjour au sud de Marrakech, réserver
          une tente dans un{" "}
          <span className="text-casa-scarlet italic font-normal">
            camp de luxe à Agafay
          </span>{" "}
          semble être l&apos;évidence pour vivre la magie des dunes. Pourtant,
          les voyageurs avertis partagent aujourd&apos;hui un secret
          d&apos;initiés : si beaucoup connaissent{" "}
          <span className="text-casa-scarlet italic font-normal">
            Casa Lalla Takerkoust
          </span>{" "}
          pour son emblématique restaurant au bord du lac et ses day-pass au
          coucher du soleil, le même domaine abrite également un{" "}
          <span className="text-casa-scarlet italic font-normal">
            Hôtel Rural Casa Lalla Takerkoust
          </span>{" "}
          de seulement 9 chambres face au lac Lalla Takerkoust et à
          l&apos;Atlas. Faut-il dormir sous la toile dans le désert aride ou
          poser ses valises dans un hôtel de charme les pieds dans l&apos;eau ?
        </p>
      </div>

      {/* Featured Images Grid 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
        <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-casa-scarlet/15 shadow-xs">
          <Image
            src="/images/boutique-hotel-lalla-takerkoust-lake-view.webp"
            alt="Façade de l'Hôtel Rural Casa Lalla Takerkoust surplombant le lac de Lalla Takerkoust"
            title="Hôtel Rural Casa Lalla Takerkoust au bord du lac"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center"
          />
          <div className="absolute bottom-0 inset-x-0 bg-casa-black/40 backdrop-blur-md p-4 text-casa-white text-base font-light italic tracking-wide">
            Hôtel Rural Casa Lalla : un havre de paix intime au bord de
            l&apos;eau
          </div>
        </div>
        <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-casa-scarlet/15 shadow-xs">
          <Image
            src="/images/casalalla-hotel-rural-lalla-takerkoust-poolside-loungers.webp"
            alt="Chaises longues noires au bord de la piscine avec des carreaux de sol traditionnels marocains au Casalalla Hotel Rural"
            title="Chaises Longues et Carreaux Traditionnels au Casalalla Hotel Rural"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center"
          />
          <div className="absolute bottom-0 inset-x-0 bg-casa-black/40 backdrop-blur-md p-4 text-casa-white text-base font-light italic tracking-wide">
            Élégance bohème, murs maçonnés et confort absolu dans 9 chambres
            uniques
          </div>
        </div>
      </div>

      {/* Internal Linking Silo Box - Links to French Guide 1 & Guide 2 */}
      <aside className="my-10 bg-casa-white/90 border-l-4 border-casa-scarlet p-6 rounded-r-2xl shadow-2xs font-cormorant space-y-3">
        <span className="text-xs uppercase tracking-[0.25em] text-casa-scarlet font-normal block">
          Complétez Votre Séjour Entre Désert &amp; Lac
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          <div>
            <h4 className="font-cormorant italic font-normal text-lg sm:text-xl text-casa-black">
              <Link
                href="/fr/blog/guide-kasbah-dif-agafay-casa-lalla-takerkoust"
                className="hover:text-casa-scarlet transition-colors underline decoration-casa-scarlet/30 underline-offset-4"
              >
                Séjour à la Kasbah d&apos;If ? Pourquoi Déjeuner à Casa Lalla
                &rarr;
              </Link>
            </h4>
            <p className="text-sm text-casa-black/70 mt-1 font-light">
              Découvrez comment associer la célèbre kasbah en pisé d&apos;Agafay
              à une journée au bord du lac.
            </p>
          </div>
          <div>
            <h4 className="font-cormorant italic font-normal text-lg sm:text-xl text-casa-black">
              <Link
                href="/fr/blog/camp-de-luxe-agafay-kasbah-dif-lac-takerkoust"
                className="hover:text-casa-scarlet transition-colors underline decoration-casa-scarlet/30 underline-offset-4"
              >
                L&apos;Itinéraire Idéal : Camp de Luxe, Kasbah &amp; Lac &rarr;
              </Link>
            </h4>
            <p className="text-sm text-casa-black/70 mt-1 font-light">
              Notre guide pas à pas pour combiner glamping dans les collines et
              détente au bord de l&apos;eau.
            </p>
          </div>
        </div>
      </aside>

      {/* Section 1: Inside the Rural Hotel */}
      <section className="my-14">
        <h2 className="font-cormorant italic font-normal text-2xl sm:text-3xl md:text-3.5xl text-casa-black mb-6 tracking-tight">
          Plus Qu&apos;un Restaurant au Bord de l&apos;Eau : L&apos;Hôtel Rural
          Casa Lalla Takerkoust
        </h2>

        <p className="text-lg sm:text-xl font-normal leading-relaxed text-casa-black/85 mb-6">
          Pour une large majorité d&apos;amoureux du Maroc,{" "}
          <strong className="text-casa-scarlet font-normal">
            Casa Lalla Takerkoust
          </strong>{" "}
          incarne le repaire bohème par excellence. On y vient depuis Marrakech
          pour partager un déjeuner de poissons grillés, siroter un cocktail en
          admirant les reflets dorés du soleil sur le barrage, ou vibrer lors
          d&apos;une session de jet-ski. Mais ce que beaucoup ignorent encore,
          c&apos;est qu&apos;au-delà des terrasses fleuries de bougainvilliers
          se révèle un véritable{" "}
          <strong className="text-casa-scarlet font-normal">
            hôtel de charme près de Marrakech
          </strong>{" "}
          : l&apos;
          <strong className="text-casa-scarlet font-normal">
            Hôtel Rural Casa Lalla Takerkoust
          </strong>
          .
        </p>

        <p className="text-lg sm:text-xl font-normal leading-relaxed text-casa-black/85 mb-6">
          Loin des structures hôtelières standardisées, l&apos;Hôtel Rural
          cultive une atmosphère intimiste avec seulement 9 chambres et suites
          pensées comme des cocons. Murs maçonnés traditionnels assurant une
          isolation thermique et acoustique parfaite, zelliges délicats,
          mobilier chiné et touches rétro-bohèmes créent une ambiance feutrée et
          chaleureuse. Alors que les toiles de tentes du désert claquent au gré
          des rafales de vent nocturnes, vos nuits à Casa Lalla se déroulent
          dans le silence absolu et la fraîcheur d&apos;une climatisation
          réversible parfaitement maîtrisée.
        </p>

        <p className="text-lg sm:text-xl font-normal leading-relaxed text-casa-black/85 mb-6">
          Au réveil, l&apos;expérience est saisissante de quiétude. Ouvrez vos
          portes sur des patios embaumant le jasmin, savourez votre thé à la
          menthe et un petit-déjeuner marocain au bord de la piscine privée
          réservée aux hôtes, tout en contemplant les sommets enneigés du Haut
          Atlas. À l&apos;heure du déjeuner, nul besoin de reprendre la piste :
          le{" "}
          <strong className="text-casa-scarlet font-normal">
            restaurant Casa Lalla Takerkoust
          </strong>{" "}
          vous attend à quelques pas de votre chambre.
        </p>
      </section>

      {/* Image Banner 1 */}
      <div className="relative h-80 sm:h-110 rounded-3xl overflow-hidden my-12 border border-casa-scarlet/15 shadow-sm">
        <Image
          src="/images/casalalla-hotel-rural-lalla-takerkoust-dining-courtyard-art.webp"
          alt="Vue depuis la salle à manger sur la cour ensoleillée avec une décoration murale saisissante au Casalalla Hotel Rural Lalla Takerkoust"
          title="Vue sur la Cour avec Art Mural au Casalalla Hotel Rural Lalla Takerkoust"
          fill
          sizes="(max-width: 1024px) 100vw, 850px"
          className="object-cover object-center"
        />
        <div className="absolute bottom-0 inset-x-0 bg-casa-black/40 backdrop-blur-md p-4 sm:p-6 text-casa-white text-base sm:text-lg font-light italic tracking-wide">
          Piscine privée et solarium ombragé réservés aux résidents de
          l&apos;Hôtel Rural
        </div>
      </div>

      {/* Section 2: Honest Comparison */}
      <section className="my-14">
        <h2 className="font-cormorant italic font-normal text-2xl sm:text-3xl md:text-3.5xl text-casa-black mb-6 tracking-tight">
          Camp de Luxe à Agafay vs Hôtel Rural au Lac : Le Comparatif Honnête
        </h2>

        <p className="text-lg sm:text-xl font-normal leading-relaxed text-casa-black/85 mb-6">
          Passer une nuit dans un{" "}
          <strong className="text-casa-scarlet font-normal">
            camp de luxe à Agafay
          </strong>{" "}
          constitue indéniablement une expérience visuelle mémorable. Le coucher
          de soleil sur les collines minérales, la balade à dos de dromadaire et
          le dîner autour d&apos;un feu de camp sous la voûte céleste ont tout
          de la carte postale. Cependant, programmer trois ou quatre nuits
          consécutives sous tente confronte rapidement le voyageur aux dures
          réalités du climat désertique.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-casa-white/80 p-6 rounded-2xl border border-casa-scarlet/15 shadow-2xs">
            <span className="text-xs uppercase tracking-[0.25em] text-casa-scarlet font-normal block mb-2">
              La Réalité des Camps d&apos;Agafay
            </span>
            <h3 className="font-cormorant italic font-normal text-xl sm:text-2xl text-casa-black mb-3">
              Le Glamping Sous la Toile en Milieu Aride
            </h3>
            <p className="text-base text-casa-black/85 leading-relaxed font-normal">
              Les tentes nomades sont féeriques entre 18h et 21h. Mais dès le
              milieu de matinée, la chaleur devient écrasante sous les toiles,
              même avec des climatisations d&apos;appoint. Les vents du désert
              font siffler les parois la nuit, et les activités sur place en
              journée sont très restreintes une fois l&apos;excursion quad
              achevée.
            </p>
          </div>

          <div className="bg-casa-white/80 p-6 rounded-2xl border border-casa-scarlet/15 shadow-2xs">
            <span className="text-xs uppercase tracking-[0.25em] text-casa-scarlet font-normal block mb-2">
              L&apos;Alternative de l&apos;Hôtel Rural
            </span>
            <h3 className="font-cormorant italic font-normal text-xl sm:text-2xl text-casa-black mb-3">
              La Fraîcheur et le Confort Maçonné au Lac
            </h3>
            <p className="text-base text-casa-black/85 leading-relaxed font-normal">
              À l&apos;Hôtel Rural Casa Lalla Takerkoust, la masse des murs
              garde les chambres naturellement tempérées et silencieuses. Le
              plan d&apos;eau du lac génère un microclimat avec 3 à 5°C de moins
              que dans les cuvettes rocailleuses. Vous profitez de jardins
              verdoyants, d&apos;une piscine résidente, de sports nautiques et
              d&apos;une carte gourmande variée midi et soir.
            </p>
          </div>
        </div>

        {/* Clean Responsive Tailwind Comparison Table */}
        <div className="my-10 overflow-x-auto rounded-2xl border border-casa-scarlet/20 bg-casa-white/95 shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-casa-scarlet text-casa-white">
                <th className="p-4 sm:p-5 text-sm sm:text-base font-normal uppercase tracking-widest border-b border-casa-scarlet/30">
                  Critères / Expérience
                </th>
                <th className="p-4 sm:p-5 text-sm sm:text-base font-normal uppercase tracking-widest border-b border-casa-scarlet/30">
                  Camp de Luxe Agafay (Glamping Sous Toile)
                </th>
                <th className="p-4 sm:p-5 text-sm sm:text-base font-normal uppercase tracking-widest border-b border-casa-scarlet/30 bg-casa-scarlet/90">
                  Casa Lalla Takerkoust (Hôtel Rural &amp; Restaurant)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-casa-scarlet/10 text-sm sm:text-base">
              <tr className="hover:bg-casa-background/40 transition-colors">
                <td className="p-4 sm:p-5 font-semibold text-casa-black">
                  Type d&apos;Hébergement
                </td>
                <td className="p-4 sm:p-5 text-casa-black/80">
                  Tentes de toile sur sol rocailleux ; soumises au vent, à la
                  poussière et aux bruits extérieurs.
                </td>
                <td className="p-4 sm:p-5 text-casa-black font-normal bg-casa-scarlet/5">
                  Chambres &amp; suites maçonnées de charme, décoration
                  marocaine authentique et rétro-bohème.
                </td>
              </tr>
              <tr className="hover:bg-casa-background/40 transition-colors">
                <td className="p-4 sm:p-5 font-semibold text-casa-black">
                  Climat &amp; Confort Thermique
                </td>
                <td className="p-4 sm:p-5 text-casa-black/80">
                  Chaleur étouffante dès 9h00 du matin, chutes de température
                  marquées la nuit, vent sur la toile.
                </td>
                <td className="p-4 sm:p-5 text-casa-black font-normal bg-casa-scarlet/5">
                  Climatisation réversible complète, brise d&apos;eau
                  rafraîchissante, jardins d&apos;ombre et acoustique paisible.
                </td>
              </tr>
              <tr className="hover:bg-casa-background/40 transition-colors">
                <td className="p-4 sm:p-5 font-semibold text-casa-black">
                  Restauration sur Place
                </td>
                <td className="p-4 sm:p-5 text-casa-black/80">
                  Menus uniques préétablis avec choix limité et
                  approvisionnement restreint en produits frais de mer.
                </td>
                <td className="p-4 sm:p-5 text-casa-black font-normal bg-casa-scarlet/5">
                  Carte gastronomique complète méditerranéenne &amp; marocaine,
                  poissons grillés, cocktails signature et grands crus.
                </td>
              </tr>
              <tr className="hover:bg-casa-background/40 transition-colors">
                <td className="p-4 sm:p-5 font-semibold text-casa-black">
                  Loisirs &amp; Activités
                </td>
                <td className="p-4 sm:p-5 text-casa-black/80">
                  Circuits quads et dromadaires dans les pistes ; après-midi
                  souvent monotone au camp.
                </td>
                <td className="p-4 sm:p-5 text-casa-black font-normal bg-casa-scarlet/5">
                  Accès direct aux pistes du désert ET aux activités nautiques
                  (jet-ski, bateau), piscine privée et day-beds.
                </td>
              </tr>
              <tr className="hover:bg-casa-background/40 transition-colors">
                <td className="p-4 sm:p-5 font-semibold text-casa-black">
                  Durée de Séjour Recommandée
                </td>
                <td className="p-4 sm:p-5 text-casa-black/80">
                  1 nuit (idéal pour le coucher de soleil et les photos).
                </td>
                <td className="p-4 sm:p-5 text-casa-black font-normal bg-casa-scarlet/5">
                  2 à 4 nuits (un véritable havre de villégiature ressourçant
                  aux portes de Marrakech).
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg sm:text-xl font-normal leading-relaxed text-casa-black/85 mt-6">
          La formule plébiscitée par nos voyageurs ? Passer{" "}
          <strong>une nuit</strong> en immersion glamping à Agafay ou dans la
          belle bâtisse de la{" "}
          <Link
            href="/fr/blog/guide-kasbah-dif-agafay-casa-lalla-takerkoust"
            className="text-casa-scarlet underline decoration-casa-scarlet/30 hover:decoration-casa-scarlet"
          >
            Kasbah d&apos;If
          </Link>
          , puis prolonger par <strong>deux ou trois nuits</strong> de quiétude
          à l&apos;Hôtel Rural Casa Lalla Takerkoust pour profiter du lac, de la
          piscine et de notre table gastronomique.
        </p>
      </section>

      {/* Grid Images 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
        <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-casa-scarlet/15 shadow-xs">
          <Image
            src="/images/casalalla-hotel-rural-lalla-takerkoust-swimming-pool.webp"
            alt="Piscine relaxante et cour intérieure avec chaises longues au Casalalla Hotel Rural à Lalla Takerkoust"
            title="Piscine et Cour au Casalalla Hotel Rural Lalla Takerkoust"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center"
          />
          <div className="absolute bottom-0 inset-x-0 bg-casa-black/40 backdrop-blur-md p-4 text-casa-white text-base font-light italic tracking-wide">
            Déjeuners au bord de l&apos;eau à deux pas de votre suite
          </div>
        </div>
        <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-casa-scarlet/15 shadow-xs">
          <Image
            src="/images/casalallatakerkoust-restaurant-lake-view-terrace.webp"
            alt="Lumière dorée du coucher de soleil illuminant les cours intérieures de l'Hôtel Rural Casa Lalla"
            title="Coucher de soleil à l'Hôtel Rural Casa Lalla"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center"
          />
          <div className="absolute bottom-0 inset-x-0 bg-casa-black/40 backdrop-blur-md p-4 text-casa-white text-base font-light italic tracking-wide">
            Atmosphère féerique lors du coucher de soleil sur le barrage
          </div>
        </div>
      </div>

      {/* Section 3: 24 Hours */}
      <section className="my-14">
        <h2 className="font-cormorant italic font-normal text-2xl sm:text-3xl md:text-3.5xl text-casa-black mb-6 tracking-tight">
          24 Heures sur Place : L&apos;Alliance Parfaite Entre Hôtel de Charme,
          Désert d&apos;Agafay et Gastronomie
        </h2>

        <p className="text-lg sm:text-xl font-normal leading-relaxed text-casa-black/85 mb-8">
          La singularité de Casa Lalla Takerkoust repose sur cette rare harmonie
          entre deux mondes. L&apos;après-midi, la terrasse s&apos;anime
          d&apos;une ambiance lounge festive et conviviale. Mais pour les
          résidents de l&apos;Hôtel Rural, le domaine redevient dès la tombée du
          jour un sanctuaire privé d&apos;un calme absolu. Voici une journée
          type :
        </p>

        <div className="space-y-6">
          <div className="bg-casa-white/80 p-6 rounded-2xl border border-casa-scarlet/15 shadow-2xs">
            <span className="text-xs uppercase tracking-[0.25em] text-casa-scarlet font-normal block mb-1">
              08h30 – Sérénité Matinale &amp; Échappée Désert
            </span>
            <h3 className="font-cormorant italic font-normal text-xl sm:text-2xl text-casa-black mb-2">
              Le Réveil Face aux Eaux Calmes
            </h3>
            <p className="text-base sm:text-lg font-normal text-casa-black/85 leading-relaxed">
              Tandis que Marrakech s&apos;agite, vous dégustez un jus
              d&apos;orange pressé, des msemens chauds, de l&apos;amlou
              artisanal et un café au bord de la piscine privée. À 10h00, votre
              guide de quad ou de buggy vous retrouve directement à
              l&apos;entrée pour vous guider à travers les reliefs sculptés du
              désert d&apos;Agafay, avant de revenir pile pour l&apos;heure du
              déjeuner.
            </p>
          </div>

          <div className="bg-casa-white/80 p-6 rounded-2xl border border-casa-scarlet/15 shadow-2xs">
            <span className="text-xs uppercase tracking-[0.25em] text-casa-scarlet font-normal block mb-1">
              13h00 – Gastronomie Festive au Bord de l&apos;Eau
            </span>
            <h3 className="font-cormorant italic font-normal text-xl sm:text-2xl text-casa-black mb-2">
              Votre Table Privilégiée au Restaurant
            </h3>
            <p className="text-base sm:text-lg font-normal text-casa-black/85 leading-relaxed">
              Rejoignez votre table réservée face au lac au{" "}
              <strong className="text-casa-scarlet font-normal">
                restaurant Casa Lalla Takerkoust
              </strong>
              . Dégustez nos poissons grillés aux herbes fraîches, nos tagines
              savoureux et nos salades méditerranéennes arrosées d&apos;un vin
              marocain bien frais. Prolongez ensuite sur nos lits de repos
              riverains ou partez pour un tour de jet-ski palpitant.
            </p>
          </div>

          <div className="bg-casa-white/80 p-6 rounded-2xl border border-casa-scarlet/15 shadow-2xs">
            <span className="text-xs uppercase tracking-[0.25em] text-casa-scarlet font-normal block mb-1">
              18h30 &amp; Nuit – Golden Hour et Silence Étoilé
            </span>
            <h3 className="font-cormorant italic font-normal text-xl sm:text-2xl text-casa-black mb-2">
              Cocktails au Coucher du Soleil et Douceur Rurale
            </h3>
            <p className="text-base sm:text-lg font-normal text-casa-black/85 leading-relaxed">
              Quand les visiteurs de la journée repartent vers la ville, le lac
              retrouve sa paix magistrale. Sirotez un cocktail signature pendant
              que l&apos;Atlas s&apos;empourpre, savourez un dîner intime aux
              chandelles, puis regagnez votre chambre à pied en quelques
              secondes, sans aucune route obscure ni piste périlleuse à
              emprunter.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: FAQs */}
      <section className="my-16">
        <h2 className="font-cormorant italic font-normal text-2xl sm:text-3xl md:text-3.5xl text-casa-black mb-6 tracking-tight">
          Questions Fréquentes (Hôtel Rural Casa Lalla Takerkoust &amp; Camp de
          Luxe Agafay)
        </h2>
        <div className="space-y-4">
          <div className="bg-casa-white/80 p-6 rounded-2xl border border-casa-scarlet/15 shadow-2xs">
            <h3 className="font-cormorant italic font-normal text-xl sm:text-2xl text-casa-scarlet mb-2">
              L&apos;établissement Casa Lalla Takerkoust dispose-t-il d&apos;un
              hôtel sur le même domaine que le restaurant ?
            </h3>
            <p className="text-base sm:text-lg font-normal text-casa-black/85 leading-relaxed">
              Oui, absolument. Casa Lalla Takerkoust réunit sur un même domaine
              idyllique au bord de l&apos;eau son célèbre restaurant
              méditerranéen-marocain et un Hôtel Rural de charme intimiste.
              L&apos;hôtel comprend 9 chambres d&apos;inspiration rétro-bohème,
              une oasis de piscine privée, ainsi que des jardins ombragés face
              au lac Lalla Takerkoust et aux sommets de l&apos;Atlas.
            </p>
          </div>

          <div className="bg-casa-white/80 p-6 rounded-2xl border border-casa-scarlet/15 shadow-2xs">
            <h3 className="font-cormorant italic font-normal text-xl sm:text-2xl text-casa-scarlet mb-2">
              Vaut-il mieux dormir dans un camp de luxe à Agafay ou à
              l&apos;Hôtel Rural Casa Lalla Takerkoust ?
            </h3>
            <p className="text-base sm:text-lg font-normal text-casa-black/85 leading-relaxed">
              Si une nuit sous la tente dans un camp de luxe à Agafay offre un
              dépaysement certain, l&apos;Hôtel Rural Casa Lalla Takerkoust
              garantit un niveau de confort très supérieur pour un séjour de
              plusieurs nuits : murs maçonnés isolants, climatisation
              réversible, brise fraîche du lac, piscine privée, sports nautiques
              et gastronomie à la carte au bord de l&apos;eau, loin de la
              chaleur étouffante des tentes en journée et des vents nocturnes du
              désert.
            </p>
          </div>

          <div className="bg-casa-white/80 p-6 rounded-2xl border border-casa-scarlet/15 shadow-2xs">
            <h3 className="font-cormorant italic font-normal text-xl sm:text-2xl text-casa-scarlet mb-2">
              À quelle distance se trouve l&apos;Hôtel Rural Casa Lalla
              Takerkoust des camps d&apos;Agafay et de la Kasbah d&apos;If ?
            </h3>
            <p className="text-base sm:text-lg font-normal text-casa-black/85 leading-relaxed">
              L&apos;Hôtel Rural Casa Lalla Takerkoust est situé à seulement 12
              à 15 kilomètres (environ 15 à 20 minutes en voiture ou en 4x4) des
              principaux camps de luxe d&apos;Agafay (tels qu&apos;Inara Camp,
              Scarabeo ou Terre des Étoiles) et de la Kasbah d&apos;If. Il se
              trouve au point de rencontre précis où le désert de pierres
              rejoint les rives du lac.
            </p>
          </div>

          <div className="bg-casa-white/80 p-6 rounded-2xl border border-casa-scarlet/15 shadow-2xs">
            <h3 className="font-cormorant italic font-normal text-xl sm:text-2xl text-casa-scarlet mb-2">
              Comment réserver une chambre à l&apos;Hôtel Rural ainsi
              qu&apos;une table au restaurant ?
            </h3>
            <p className="text-base sm:text-lg font-normal text-casa-black/85 leading-relaxed">
              Vous pouvez réserver directement votre séjour via notre{" "}
              <Link
                href="/fr/rural-hotel/booking"
                className="text-casa-scarlet underline decoration-casa-scarlet/30 hover:decoration-casa-scarlet"
              >
                page de réservation de l&apos;Hôtel Rural
              </Link>{" "}
              ou contacter notre conciergerie via WhatsApp (
              {siteConfig.phoneDisplay}). Lors de votre réservation de chambre,
              notre équipe réserve automatiquement vos tables privilégiées face
              au lac pour le déjeuner et le dîner.
            </p>
          </div>
        </div>
      </section>

      {/* Dual-Action Conversion CTA Section */}
      <section className="my-16 bg-casa-scarlet rounded-3xl p-8 sm:p-12 text-casa-white shadow-md text-center font-cormorant">
        <span className="uppercase text-xs font-light tracking-[0.25em] text-casa-white/80 border border-casa-white/20 px-4 py-1.5 rounded-full inline-block mb-4 backdrop-blur-md">
          Planifiez Votre Séjour &amp; Déjeuner
        </span>
        <h2 className="font-cormorant italic font-normal text-2xl sm:text-3xl md:text-4xl text-casa-white mb-4 tracking-tight">
          Vivez l&apos;Expérience Casa Lalla : Hôtel Rural &amp; Restaurant au
          Lac
        </h2>
        <p className="text-base sm:text-lg font-light text-casa-white/90 max-w-2xl mx-auto mb-8 leading-relaxed tracking-wider">
          Que vous souhaitiez réserver une chambre de charme rétro-bohème ou
          déjeuner au bord de l&apos;eau face aux sommets de l&apos;Atlas, notre
          conciergerie est à votre disposition.
        </p>

        {/* Primary CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/fr/rural-hotel/booking"
            className="w-full sm:w-auto px-8 py-3 bg-casa-background text-casa-scarlet font-normal text-sm tracking-widest uppercase rounded-full hover:bg-casa-white transition-colors duration-200"
          >
            Réserver à l&apos;Hôtel
          </Link>
          <Link
            href="/fr/reservation"
            className="w-full sm:w-auto px-8 py-3 bg-transparent border border-casa-white text-casa-white font-normal text-sm tracking-widest uppercase rounded-full hover:bg-casa-white hover:text-casa-scarlet transition-colors duration-200"
          >
            Réserver une Table
          </Link>
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3 bg-casa-black text-casa-white font-normal text-sm tracking-widest uppercase rounded-full hover:bg-casa-background hover:text-casa-black transition-colors duration-200"
          >
            Conciergerie WhatsApp
          </a>
        </div>

        {/* Silo Navigation Links */}
        <div className="mt-8 pt-6 border-t border-casa-white/20 flex flex-wrap justify-center gap-6 text-xs uppercase tracking-widest font-light text-casa-white/80">
          <Link
            href="/fr/blog/guide-kasbah-dif-agafay-casa-lalla-takerkoust"
            className="hover:text-casa-white transition-colors underline decoration-casa-white/30 underline-offset-4"
          >
            Guide Kasbah d&apos;If &rarr;
          </Link>
          <Link
            href="/fr/blog/camp-de-luxe-agafay-kasbah-dif-lac-takerkoust"
            className="hover:text-casa-white transition-colors underline decoration-casa-white/30 underline-offset-4"
          >
            Itinéraire Camp Agafay &amp; Lac &rarr;
          </Link>
          <Link
            href="/fr/rural-hotel"
            className="hover:text-casa-white transition-colors underline decoration-casa-white/30 underline-offset-4"
          >
            Découvrir l&apos;Hôtel Rural &rarr;
          </Link>
        </div>

        <p className="text-xs text-casa-white/70 mt-6 font-light tracking-wider">
          Barrage Lalla Takerkoust, Marrakech • Hôtel Ouvert Toute l&apos;Année
          • Restaurant Ouvert Tous les Jours 13h00 – 17h00
        </p>
      </section>
    </article>
  );
};

export default Content;
