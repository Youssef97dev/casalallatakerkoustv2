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
          Itinéraire Désert d&apos;Agafay &amp; Lac Takerkoust
        </span>
        <h1 className="font-cormorant italic font-normal text-3xl sm:text-4xl md:text-5xl text-casa-black leading-snug tracking-tight">
          Camp de Luxe à Agafay ou Kasbah d&apos;If : L&apos;Itinéraire Parfait
          Entre Désert et Lac Lalla Takerkoust
        </h1>
        <div className="w-12 h-px bg-casa-scarlet mx-auto mt-6 mb-4" />
        <p className="text-xs sm:text-sm text-casa-black/60 uppercase tracking-[0.2em] font-light">
          Publié par la rédaction de Casa Lalla Takerkoust • Lecture 9 min
        </p>
      </header>

      {/* Intro (first 100 words requirement) */}
      <div className="mb-14">
        <p className="text-xl sm:text-2xl font-normal leading-relaxed text-casa-black/90">
          Réserver une nuitée dans un{" "}
          <span className="text-casa-scarlet italic font-normal">
            camp de luxe à Agafay
          </span>{" "}
          ou s&apos;offrir une retraite exclusive au sein de la minérale{" "}
          <span className="text-casa-scarlet italic font-normal">
            Kasbah d&apos;If
          </span>{" "}
          (couramment orthographiée{" "}
          <span className="text-casa-scarlet italic font-normal">
            Kasbah Dif
          </span>
          ) constitue l&apos;un des plus beaux voyages que le Maroc puisse
          offrir. Pourtant, nombre de voyageurs découvrent un secret bien gardé
          : si le désert de pierre est féerique aux premières lueurs de
          l&apos;aube et sous la voûte céleste, les heures de mi-journée sous la
          toile d&apos;une tente ou sur une colline aride peuvent s&apos;avérer
          écrasantes de chaleur. À moins de dix minutes de piste sablonneuse, le
          désert rejoint les eaux turquoise du lac de barrage, où{" "}
          <span className="text-casa-scarlet italic font-normal">
            Casa Lalla Takerkoust
          </span>{" "}
          ouvre sa terrasse ombragée pour un déjeuner au bord de l&apos;eau, un
          day-pass détente et des loisirs nautiques inoubliables.
        </p>
      </div>

      {/* Featured Images Grid 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
        <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-casa-scarlet/15 shadow-xs">
          <Image
            src="https://casalallatakerkoust.com/images/lalla-takerkoust-lake-sunset-agafay-desert.webp"
            alt="Superbe coucher de soleil doré se reflétant sur les eaux calmes du lac Lalla Takerkoust près du paysage du désert d'Agafay."
            title="Coucher de Soleil sur le Lac Lalla Takerkoust"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-bottom"
          />
          <div className="absolute bottom-0 inset-x-0 bg-casa-black/40 backdrop-blur-md p-4 text-casa-white text-base font-light italic tracking-wide">
            La sérénité d&apos;un camp de luxe à Agafay au coucher du soleil
          </div>
        </div>
        <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-casa-scarlet/15 shadow-xs">
          <Image
            src="https://casalallatakerkoust.com/images/casalallatakerkoust-restaurant-arched-patio-dining.webp"
            alt="Élégant patio de salle à manger extérieur voûté, encadré de bougainvilliers roses au restaurant Casa Lalla Takerkoust."
            title="Magnifique Patio de Restauration à Casa Lalla Takerkoust"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-bottom"
          />
          <div className="absolute bottom-0 inset-x-0 bg-casa-black/40 backdrop-blur-md p-4 text-casa-white text-base font-light italic tracking-wide">
            Fraîcheur et brise bienfaisante sur la terrasse de Casa Lalla
          </div>
        </div>
      </div>

      {/* Related Guide Callout Box (Internal Linking Silo) */}
      <aside className="my-10 bg-casa-white/90 border-l-4 border-casa-scarlet p-6 rounded-r-2xl shadow-2xs font-cormorant">
        <span className="text-xs uppercase tracking-[0.25em] text-casa-scarlet font-normal block mb-1">
          Guide Vedette Recommandé
        </span>
        <h3 className="font-cormorant italic font-normal text-xl sm:text-2xl text-casa-black">
          <Link
            href="/fr/blog/guide-kasbah-dif-agafay-casa-lalla-takerkoust"
            className="hover:text-casa-scarlet transition-colors underline decoration-casa-scarlet/30 underline-offset-4"
          >
            Séjour à la Kasbah d&apos;If (Kasbah Dif) : Escapade &amp; Déjeuner
            au Bord du Lac à Casa Lalla &rarr;
          </Link>
        </h3>
        <p className="text-base text-casa-black/80 font-normal mt-2 leading-relaxed">
          Consultez notre guide architectural dédié à la Kasbah d&apos;If, les
          itinéraires d&apos;accès depuis Marrakech et les conseils pour
          réserver votre journée les pieds dans l&apos;eau à Casa Lalla
          Takerkoust.
        </p>
      </aside>

      {/* Section 1: Camp de Luxe vs Kasbah d'If */}
      <section className="my-14">
        <h2 className="font-cormorant italic font-normal text-2xl sm:text-3xl md:text-3.5xl text-casa-black mb-5 tracking-tight">
          Camp de Luxe à Agafay vs Kasbah d&apos;If : Deux Façons de Vivre le
          Désert
        </h2>
        <div className="space-y-5 text-lg sm:text-xl font-normal leading-relaxed text-casa-black/85">
          <p>
            À moins de 45 minutes des remparts de Marrakech, le désert
            d&apos;Agafay déploie ses ondulations minérales. Deux philosophies
            d&apos;hospitalité d&apos;exception s&apos;y côtoient pour
            accueillir les voyageurs exigeants : les prestigieux campements
            glamping et les kasbahs en terre crue, dont l&apos;emblématique{" "}
            <a
              href="https://www.kasbahdif.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-casa-scarlet italic font-normal underline decoration-casa-scarlet/40 underline-offset-4 hover:decoration-casa-scarlet transition-all"
            >
              Kasbah d&apos;If
            </a>{" "}
            (ou <em>Kasbah Dif</em>).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="bg-casa-white/80 p-7 rounded-3xl border border-casa-scarlet/15 shadow-xs">
              <span className="text-casa-scarlet text-xs uppercase tracking-[0.2em] font-light block mb-2">
                Esprit Nomade Chic
              </span>
              <h3 className="font-cormorant italic font-normal text-2xl text-casa-black mb-3">
                L&apos;Expérience en Camp de Luxe à Agafay
              </h3>
              <p className="text-base sm:text-lg text-casa-black/85 leading-relaxed font-normal">
                Séjourner dans un <strong>camp de luxe à Agafay</strong>,
                c&apos;est goûter au raffinement bohème contemporain. De grandes
                tentes en toile blanche décorées de tapis berbères faits main,
                des lanternes de cuivre ciselé, des bassins privatifs face aux
                collines lunaires et des feux de camp crépitants sous la voie
                lactée. Ce mode de séjour séduit les couples et voyageurs en
                quête d&apos;une communion poétique avec les éléments naturels.
              </p>
            </div>

            <div className="bg-casa-white/80 p-7 rounded-3xl border border-casa-scarlet/15 shadow-xs">
              <span className="text-casa-scarlet text-xs uppercase tracking-[0.2em] font-light block mb-2">
                Forteresse Minérale
              </span>
              <h3 className="font-cormorant italic font-normal text-2xl text-casa-black mb-3">
                L&apos;Expérience Kasbah d&apos;If (Kasbah Dif)
              </h3>
              <p className="text-base sm:text-lg text-casa-black/85 leading-relaxed font-normal">
                À l&apos;opposé du nomadisme textile, la{" "}
                <strong>Kasbah d&apos;If</strong> incarne la noblesse tellurique
                des bâtisses traditionnelles du Sud marocain. Dressée sur un
                promontoire rocheux face à la barrière magistrale du Haut Atlas,
                cette maison d&apos;hôtes confidentielle offre une fraîcheur
                thermique remarquable, des patios intimes propices à la lecture
                et un silence quasi monacal à l&apos;abri de toute agitation.
              </p>
            </div>
          </div>

          <p className="pt-4">
            Bien que leurs atmosphères diffèrent, ces deux joyaux partagent un
            atout géographique majeur : ils se trouvent sur le pas de porte du
            lac Lalla Takerkoust. En associant votre camp de luxe ou la Kasbah
            Dif aux plaisirs aquatiques et gastronomiques de Casa Lalla, vous
            composez l&apos;escapade la plus équilibrée du Maroc.
          </p>
        </div>
      </section>

      {/* Section 2: Pourquoi combiner avec Casa Lalla + Tableau Comparatif 3 Colonnes */}
      <section className="my-16 bg-casa-white/80 rounded-3xl p-6 sm:p-10 border border-casa-scarlet/15 shadow-xs">
        <h2 className="font-cormorant italic font-normal text-2xl sm:text-3xl md:text-3.5xl text-casa-black mb-4 tracking-tight">
          Pourquoi Combiner Votre Bivouac de Luxe ou la Kasbah Dif avec Casa
          Lalla Takerkoust ?
        </h2>
        <p className="text-lg sm:text-xl font-normal leading-relaxed text-casa-black/85 mb-8">
          Le désert d&apos;Agafay est réputé pour sa pureté austère. Composé de
          roche calcaire et de pierraille plutôt que de sable fin, le sol
          emmagasine la chaleur du soleil zénithal. Entre 12h30 et 16h30, la
          luminosité intense et l&apos;air sec invitent naturellement à chercher
          un havre ombragé. Plutôt que de rester confiné dans une chambre ou
          sous une tente, descendre quelques kilomètres vers le lac transforme
          radicalement votre journée.
        </p>
        <p className="text-lg sm:text-xl font-normal leading-relaxed text-casa-black/85 mb-8">
          À Casa Lalla Takerkoust, la brise venue des sommets de l&apos;Atlas
          glisse sur le plan d&apos;eau et tempère l&apos;atmosphère. Sous les
          parasols vert émeraude et les oliviers séculaires, vous savourez une
          cuisine méditerranéenne aux accents solaires, un vin gris bien frais
          et une vue panoramique imprenable sur les eaux turquoise du barrage.
        </p>

        {/* Tableau Comparatif Minimaliste en Cormorant */}
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-casa-scarlet/20">
                <th className="py-3 px-4 font-cormorant text-xs sm:text-sm uppercase tracking-widest text-casa-scarlet font-normal">
                  Critères
                </th>
                <th className="py-3 px-4 font-cormorant text-xs sm:text-sm uppercase tracking-widest text-casa-black font-normal">
                  Camp de Luxe Agafay
                </th>
                <th className="py-3 px-4 font-cormorant text-xs sm:text-sm uppercase tracking-widest text-casa-black font-normal">
                  Kasbah d&apos;If (Kasbah Dif)
                </th>
                <th className="py-3 px-4 font-cormorant text-xs sm:text-sm uppercase tracking-widest text-casa-scarlet font-normal">
                  Casa Lalla Takerkoust
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-casa-scarlet/10 text-base sm:text-lg">
              <tr>
                <td className="py-4 px-4 font-normal text-casa-scarlet italic whitespace-nowrap">
                  Ambiance
                </td>
                <td className="py-4 px-4 text-casa-black/80 font-normal">
                  Glamping nomade chic, chemins aux lanternes, romance à ciel
                  ouvert
                </td>
                <td className="py-4 px-4 text-casa-black/80 font-normal">
                  Sérénité minérale, architecture en terre, discrétion absolue
                </td>
                <td className="py-4 px-4 text-casa-black/90 font-normal bg-casa-scarlet/5">
                  Déjeuner festif au bord de l&apos;eau, esprit Mykonos-Ibiza,
                  détente estivale
                </td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-normal text-casa-scarlet italic whitespace-nowrap">
                  Meilleur Moment
                </td>
                <td className="py-4 px-4 text-casa-black/80 font-normal">
                  Lever du soleil, crépuscule et observation des étoiles
                </td>
                <td className="py-4 px-4 text-casa-black/80 font-normal">
                  Matinée paisible et lecture au crépuscule
                </td>
                <td className="py-4 px-4 text-casa-black/90 font-normal bg-casa-scarlet/5">
                  Déjeuner ensoleillé (13h–16h30) et cocktails au coucher du
                  soleil
                </td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-normal text-casa-scarlet italic whitespace-nowrap">
                  Expérience Signature
                </td>
                <td className="py-4 px-4 text-casa-black/80 font-normal">
                  Dormir sous la toile, chants berbères autour du feu de camp
                </td>
                <td className="py-4 px-4 text-casa-black/80 font-normal">
                  Déconnexion digitale, artisanat d&apos;art marocain,
                  méditation
                </td>
                <td className="py-4 px-4 text-casa-black/90 font-normal bg-casa-scarlet/5">
                  Poissons grillés, tapas méditerranéennes, jet-ski &amp;
                  transats piscine
                </td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-normal text-casa-scarlet italic whitespace-nowrap">
                  Paysage
                </td>
                <td className="py-4 px-4 text-casa-black/80 font-normal">
                  Collines de craie ondulées, canyons aux teintes lunaires
                </td>
                <td className="py-4 px-4 text-casa-black/80 font-normal">
                  Plateau rocheux élevé dominant l&apos;horizon méridional
                </td>
                <td className="py-4 px-4 text-casa-black/90 font-normal bg-casa-scarlet/5">
                  Eaux miroitantes du barrage adossées aux neiges du Haut Atlas
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Featured Images Grid 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
        <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-casa-scarlet/15 shadow-xs">
          <Image
            src="https://casalallatakerkoust.com/images/agafay-desert-buggy-tour-marrakech.webp"
            alt="Excursion en quad à travers les pistes du désert d'Agafay vers le lac Lalla Takerkoust"
            title="Randonnée en quad du désert au lac"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-bottom"
          />
          <div className="absolute bottom-0 inset-x-0 bg-casa-black/40 backdrop-blur-md p-4 text-casa-white text-base font-light italic tracking-wide">
            Aventure matinale en quad reliant les pistes du désert au lac
          </div>
        </div>
        <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-casa-scarlet/15 shadow-xs">
          <Image
            src="https://casalallatakerkoust.com/images/agafay-luxury-camp-poolside-lalla-takerkoust.webp"
            alt="Chaises longues et parasols verts vintage au bord de la piscine d'un camp de luxe près du désert d'Agafay, surplombant le lac."
            title="Détente Luxueuse au Bord de la Piscine près d'Agafay"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute bottom-0 inset-x-0 bg-casa-black/40 backdrop-blur-md p-4 text-casa-white text-base font-light italic tracking-wide">
            Day-pass piscine et baignade rafraîchissante face au plan d&apos;eau
          </div>
        </div>
      </div>

      {/* Section 3: L'Itinéraire Idéal en 24h */}
      <section className="my-14">
        <h2 className="font-cormorant italic font-normal text-2xl sm:text-3xl md:text-3.5xl text-casa-black mb-6 tracking-tight">
          L&apos;Itinéraire Idéal en 24h : Du Désert d&apos;Agafay aux Rives du
          Lac
        </h2>
        <p className="text-lg sm:text-xl font-normal leading-relaxed text-casa-black/85 mb-8">
          Pour tirer le meilleur parti de votre séjour, notre équipe a élaboré
          le programme parfait alliant glamping dans le désert, authenticité de
          la kasbah et art de vivre au bord du lac :
        </p>

        <div className="space-y-8">
          {/* 10h00 */}
          <div className="relative pl-8 sm:pl-10 border-l-2 border-casa-scarlet/30">
            <div className="absolute -left-2.25 top-1 w-4 h-4 rounded-full bg-casa-scarlet" />
            <span className="text-xs uppercase tracking-[0.25em] text-casa-scarlet font-normal block mb-1">
              Matin • 10h00
            </span>
            <h3 className="font-cormorant italic font-normal text-xl sm:text-2xl text-casa-black mb-2">
              Réveil au Désert &amp; Randonnée Guidée en Quad
            </h3>
            <p className="text-base sm:text-lg text-casa-black/85 leading-relaxed font-normal">
              Après un réveil magique face aux crêtes illuminées de votre{" "}
              <strong>camp de luxe à Agafay</strong> ou sur la terrasse de la{" "}
              <strong>Kasbah d&apos;If</strong>, savourez un petit-déjeuner
              marocain composé de msemmens tièdes, de miel de montagne et de thé
              à la menthe fraîche. Enfilez vos lunettes et chèche pour une
              excursion guidée en quad ou buggy. Sillonnant les collines de
              pierre et les oueds asséchés, votre groupe trace sa route vers le
              sud en direction des eaux miroitantes du lac Lalla Takerkoust.
            </p>
          </div>

          {/* 13h00 */}
          <div className="relative pl-8 sm:pl-10 border-l-2 border-casa-scarlet/30">
            <div className="absolute -left-2.25 top-1 w-4 h-4 rounded-full bg-casa-scarlet" />
            <span className="text-xs uppercase tracking-[0.25em] text-casa-scarlet font-normal block mb-1">
              Midi • 13h00
            </span>
            <h3 className="font-cormorant italic font-normal text-xl sm:text-2xl text-casa-black mb-2">
              Déjeuner Méditerranéen &amp; Rosé Frais à Casa Lalla
            </h3>
            <p className="text-base sm:text-lg text-casa-black/85 leading-relaxed font-normal">
              Arrivez à <strong>Casa Lalla Takerkoust</strong>, où la pierre
              blanchie à la chaux et la végétation luxuriante offrent un
              contraste salvateur après la poussière du désert. Installez-vous
              sur notre terrasse panoramique surplombant le lac. Partagez des
              poissons grillés du jour, une souris d&apos;agneau confite aux
              pruneaux, des mezze méditerranéens colorés et un vin rosé gris
              marocain bien frais, au rythme d&apos;une douce ambiance musicale
              lounge.
            </p>
          </div>

          {/* 15h30 */}
          <div className="relative pl-8 sm:pl-10 border-l-2 border-casa-scarlet/30">
            <div className="absolute -left-2.25 top-1 w-4 h-4 rounded-full bg-casa-scarlet" />
            <span className="text-xs uppercase tracking-[0.25em] text-casa-scarlet font-normal block mb-1">
              Après-midi • 15h30
            </span>
            <h3 className="font-cormorant italic font-normal text-xl sm:text-2xl text-casa-black mb-2">
              Sensations Nautiques : Jet-Ski, Bateau Privé &amp; Piscine
            </h3>
            <p className="text-base sm:text-lg text-casa-black/85 leading-relaxed font-normal">
              Après le repas, place au rafraîchissement. Détendez-vous sur les
              bains de soleil de notre piscine ou profitez de nos cabanas
              privées. Pour les amateurs de sensations fortes, notre base
              nautique met à votre disposition des jet-skis Yamaha pour fendre
              les eaux du lac, des sessions d&apos;hoverboard ou une promenade
              privée en bateau au pied des cimes enneigées du Haut Atlas.
            </p>
          </div>

          {/* 17h30 */}
          <div className="relative pl-8 sm:pl-10 border-l-2 border-casa-scarlet/30">
            <div className="absolute -left-2.25 top-1 w-4 h-4 rounded-full bg-casa-scarlet" />
            <span className="text-xs uppercase tracking-[0.25em] text-casa-scarlet font-normal block mb-1">
              Golden Hour • 17h30
            </span>
            <h3 className="font-cormorant italic font-normal text-xl sm:text-2xl text-casa-black mb-2">
              Cocktails au Coucher du Soleil &amp; Retour au Désert
            </h3>
            <p className="text-base sm:text-lg text-casa-black/85 leading-relaxed font-normal">
              Lorsque le jour décline, le ciel au-dessus du barrage
              s&apos;embrase de nuances pourpres, orangées et dorées. Dégustez
              un cocktail signature face au miroir d&apos;eau avant
              d&apos;emprunter le court trajet de retour vers votre camp de luxe
              d&apos;Agafay ou la Kasbah d&apos;If, arrivant juste à temps pour
              le dîner aux chandelles et la magie du ciel étoilé.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Single Image */}
      <div className="relative h-80 sm:h-110 rounded-3xl overflow-hidden border border-casa-scarlet/15 shadow-xs my-14">
        <Image
          src="https://casalallatakerkoust.com/images/kasbah-dif-rooftop-terrace-lake-views.webp"
          alt="Ambiance coucher de soleil et terrasse bohème chic au bord du lac Lalla Takerkoust face à l'Atlas"
          title="Coucher de soleil féerique à Casa Lalla Takerkoust"
          fill
          sizes="100vw"
          className="object-cover object-bottom"
        />
        <div className="absolute bottom-0 inset-x-0 bg-casa-black/40 backdrop-blur-md p-5 text-casa-white text-base sm:text-lg font-light italic tracking-wide">
          Magie de la golden hour : cocktails face au soleil couchant sur la
          terrasse panoramique de Casa Lalla Takerkoust
        </div>
      </div>

      {/* Section 4: FAQs */}
      <section className="my-16">
        <h2 className="font-cormorant italic font-normal text-2xl sm:text-3xl md:text-3.5xl text-casa-black mb-6 tracking-tight">
          Questions Fréquentes (Camp de Luxe Agafay, Kasbah Dif &amp; Lac
          Takerkoust)
        </h2>
        <div className="space-y-4">
          <div className="bg-casa-white/80 p-6 rounded-2xl border border-casa-scarlet/15 shadow-2xs">
            <h3 className="font-cormorant italic font-normal text-xl sm:text-2xl text-casa-scarlet mb-2">
              À quelle distance se trouve Casa Lalla Takerkoust de la Kasbah
              d&apos;If et des principaux camps de luxe d&apos;Agafay ?
            </h3>
            <p className="text-base sm:text-lg font-normal text-casa-black/85 leading-relaxed">
              Casa Lalla Takerkoust est située à seulement 12 à 15 kilomètres
              (environ 15 à 20 minutes de route) de la Kasbah d&apos;If (Kasbah
              Dif) et des camps de luxe les plus réputés d&apos;Agafay (tels que
              Inara Camp, Scarabeo Camp ou Terre des Étoiles). L&apos;itinéraire
              emprunte des routes goudronnées et des pistes carrossables faciles
              reliant le désert au lac.
            </p>
          </div>

          <div className="bg-casa-white/80 p-6 rounded-2xl border border-casa-scarlet/15 shadow-2xs">
            <h3 className="font-cormorant italic font-normal text-xl sm:text-2xl text-casa-scarlet mb-2">
              Peut-on venir déjeuner et faire du jet-ski à Casa Lalla Takerkoust
              sans passer la nuit au lac ?
            </h3>
            <p className="text-base sm:text-lg font-normal text-casa-black/85 leading-relaxed">
              Absolument. Une large part de nos convives séjournent en camp de
              luxe à Agafay ou à la Kasbah d&apos;If et viennent passer la
              journée à Casa Lalla Takerkoust. Vous pouvez réserver votre table
              pour le déjeuner (de 13h00 à 17h00), accéder aux transats de la
              piscine et pratiquer le jet-ski avant de regagner votre
              hébergement pour la soirée.
            </p>
          </div>

          <div className="bg-casa-white/80 p-6 rounded-2xl border border-casa-scarlet/15 shadow-2xs">
            <h3 className="font-cormorant italic font-normal text-xl sm:text-2xl text-casa-scarlet mb-2">
              Quel est le meilleur moyen de transport pour relier un camp de
              luxe d&apos;Agafay, la Kasbah Dif et le lac Lalla Takerkoust ?
            </h3>
            <p className="text-base sm:text-lg font-normal text-casa-black/85 leading-relaxed">
              Deux options privilégiées s&apos;offrent à vous :
              <br />
              <strong>1. Chauffeur Privé en 4x4 / SUV :</strong> Organisé
              simplement via la conciergerie de votre camp ou de Kasbah Dif (ou
              par Casa Lalla), assurant un transfert direct et climatisé en 15 à
              20 minutes.
              <br />
              <strong>2. Circuit Guidé en Quad ou Buggy :</strong> Pour les
              esprits aventuriers, une traversée des collines désertiques
              encadrée par un guide vous mène directement jusqu&apos;à notre
              terrasse.
            </p>
          </div>
        </div>
      </section>

      {/* Minimalist CTA Card using exact globals.css colors */}
      <section className="my-16 bg-casa-scarlet rounded-3xl p-8 sm:p-12 text-casa-white shadow-md text-center font-cormorant">
        <span className="uppercase text-xs font-light tracking-[0.25em] text-casa-white/80 border border-casa-white/20 px-4 py-1.5 rounded-full inline-block mb-4 backdrop-blur-md">
          Composez Votre Évasion Désert &amp; Lac
        </span>
        <h2 className="font-cormorant italic font-normal text-2xl sm:text-3xl md:text-4xl text-casa-white mb-4 tracking-tight">
          Réservez Votre Table Vue Lac à Casa Lalla Takerkoust
        </h2>
        <p className="text-base sm:text-lg font-light text-casa-white/90 max-w-xl mx-auto mb-8 leading-relaxed tracking-wider">
          Que vous logiez dans un camp de luxe à Agafay ou à la Kasbah
          d&apos;If, sublimez votre parenthèse marocaine par un déjeuner au bord
          de l&apos;eau, des panoramas grandioses sur l&apos;Atlas et un
          day-pass piscine à Casa Lalla.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/fr/reservation"
            className="w-full sm:w-auto px-8 py-3 bg-casa-background text-casa-scarlet font-normal text-sm tracking-widest uppercase rounded-full hover:bg-casa-white transition-colors duration-200"
          >
            Réserver Votre Table
          </Link>
          <Link
            href="/fr/blog/guide-kasbah-dif-agafay-casa-lalla-takerkoust"
            className="w-full sm:w-auto px-8 py-3 bg-transparent border border-casa-white text-casa-white font-normal text-sm tracking-widest uppercase rounded-full hover:bg-casa-white hover:text-casa-scarlet transition-colors duration-200"
          >
            Guide Kasbah d&apos;If
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
        <p className="text-xs text-casa-white/70 mt-6 font-light tracking-wider">
          Ouvert tous les jours de 13h00 à 17h00 • Barrage Lalla Takerkoust,
          Marrakech
        </p>
      </section>
    </article>
  );
};

export default Content;
