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
          Itinéraire de Luxe Désert d&apos;Agafay & Lac Lalla Takerkoust
        </span>
        <h1 className="font-cormorant italic font-normal text-3xl sm:text-4xl md:text-5xl text-casa-black leading-snug tracking-tight">
          Séjour à la Kasbah d&apos;If (Agafay) : Pourquoi Échapper au Désert
          pour un Déjeuner au Bord du Lac à Casa Lalla Takerkoust
        </h1>
        <div className="w-12 h-px bg-casa-scarlet mx-auto mt-6 mb-4" />
        <p className="text-xs sm:text-sm text-casa-black/60 uppercase tracking-[0.2em] font-light">
          Publié par la rédaction de Casa Lalla Takerkoust • Lecture 8 min
        </p>
      </header>

      {/* Intro (first 100 words requirement) */}
      <div className="mb-14">
        <p className="text-xl sm:text-2xl font-normal leading-relaxed text-casa-black/90">
          Si vous prévoyez une parenthèse enchantée à la{" "}
          <span className="text-casa-scarlet italic font-normal">
            Kasbah d&apos;If
          </span>{" "}
          (couramment orthographiée{" "}
          <span className="text-casa-scarlet italic font-normal">
            Kasbah Dif
          </span>
          ), votre séjour s&apos;annonce déjà sous le signe de l&apos;exception.
          Véritable forteresse de pisé et de pierre brute dominant le plateau
          minéral d&apos;Agafay, la Kasbah d&apos;If séduit par son calme absolu
          et ses panoramas magistraux sur le Haut Atlas enneigé. Pourtant, à
          seulement quelques minutes de piste, là où la poussière ocre du désert
          cède la place à l&apos;eau miroitante du barrage,{" "}
          <span className="text-casa-scarlet italic font-normal">
            Casa Lalla Takerkoust
          </span>{" "}
          s&apos;impose comme l&apos;escale incontournable pour un déjeuner en
          terrasse, un day-pass rafraîchissant ou un cocktail face au soleil
          couchant.
        </p>
      </div>

      {/* Featured Images Grid 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
        <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-casa-scarlet/15 shadow-xs">
          <Image
            src="https://casalallatakerkoust.com/images/casa-lalla-takerkoust-lake-view-bohemian-lounging.webp"
            alt="Table élégante aux fleurs blanches sous un parasol vert avec vue sur le lac Takerkoust près de Marrakech"
            title="Déjeuner face au lac à Casa Lalla Takerkoust"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute bottom-0 inset-x-0 bg-casa-black/40 backdrop-blur-md p-4 text-casa-white text-base font-light italic tracking-wide">
            L&apos;élégance bohème chic de Casa Lalla face aux eaux calmes du
            lac
          </div>
        </div>
        <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-casa-scarlet/15 shadow-xs">
          <Image
            src="https://casalallatakerkoust.com/images/casa-lalla-takerkoust-grilled-fish-restaurant.webp"
            alt="Déjeuner gastronomique en plein air à Casa Lalla Takerkoust proche de la Kasbah Dif à Agafay"
            title="Gastronomie raffinée au lac Lalla Takerkoust"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-bottom"
          />
          <div className="absolute bottom-0 inset-x-0 bg-casa-black/40 backdrop-blur-md p-4 text-casa-white text-base font-light italic tracking-wide">
            Déjeuner méditerranéen aux saveurs fraîches sur notre terrasse
            panoramique
          </div>
        </div>
      </div>

      {/* Guide Connexe Callout Box (Internal Linking Silo) */}
      <aside className="my-10 bg-casa-white/90 border-l-4 border-casa-scarlet p-6 rounded-r-2xl shadow-2xs font-cormorant">
        <span className="text-xs uppercase tracking-[0.25em] text-casa-scarlet font-normal block mb-1">
          Guide Recommandé
        </span>
        <h3 className="font-cormorant italic font-normal text-xl sm:text-2xl text-casa-black">
          <Link
            href="/fr/blog/camp-de-luxe-agafay-kasbah-dif-lac-takerkoust"
            className="hover:text-casa-scarlet transition-colors underline decoration-casa-scarlet/30 underline-offset-4"
          >
            Camp de Luxe à Agafay ou Kasbah d&apos;If : L&apos;Itinéraire Parfait
            Entre Désert et Lac Lalla Takerkoust &rarr;
          </Link>
        </h3>
        <p className="text-base text-casa-black/80 font-normal mt-2 leading-relaxed">
          Vous hésitez entre bivouac de luxe glamping et retraite minérale à la
          Kasbah d&apos;If ? Découvrez notre itinéraire complet en 24h associant
          quad, déjeuner au bord de l&apos;eau et sensations nautiques à Casa
          Lalla.
        </p>
      </aside>

      {/* Section 1: Kasbah d'If Overview with Outbound Link */}
      <section className="my-14">
        <h2 className="font-cormorant italic font-normal text-2xl sm:text-3xl md:text-3.5xl text-casa-black mb-5 tracking-tight">
          L&apos;Expérience Kasbah d&apos;If dans le Désert d&apos;Agafay
        </h2>
        <div className="space-y-5 text-lg sm:text-xl font-normal leading-relaxed text-casa-black/85">
          <p>
            Le désert d&apos;Agafay ne ressemble à aucun autre. Loin des dunes
            de sable de Merzouga ou de Zagora, il dévoile une étendue ondulée de
            collines de calcaire blanc et de roches sculptées par les vents du
            Sud. C&apos;est au cœur de cet environnement d&apos;une beauté brute
            et presque lunaire que s&apos;érige{" "}
            <a
              href="https://www.kasbahdif.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-casa-scarlet italic font-normal underline decoration-casa-scarlet/40 underline-offset-4 hover:decoration-casa-scarlet transition-all"
            >
              la Kasbah d&apos;If
            </a>{" "}
            (ou Kasbah Dif), un havre de paix pensé pour les voyageurs en quête
            de recueillement, de silence et de déconnexion totale à l&apos;abri
            de l&apos;effervescence de Marrakech.
          </p>
          <p>
            Ici, l&apos;atmosphère invite à la méditation et à
            l&apos;observation contemplative des crêtes de l&apos;Atlas. On y
            savoure la chaleur enveloppante du désert de pierres, le thé à la
            menthe servi dans la cour ombragée et la voûte céleste qui
            s&apos;illumine de milliers d&apos;étoiles à la nuit tombée.
            Néanmoins, après une journée ou deux passées dans l&apos;aridité
            minérale d&apos;Agafay, une envie naturelle se fait sentir : celle
            de retrouver la fraîcheur bienfaisante de l&apos;eau, une cuisine
            marine délicate, des cocktails de créateurs et l&apos;ambiance
            enivrante d&apos;une table festive au bord d&apos;un lac.
          </p>
        </div>
      </section>

      {/* Section 2: Desert Meets Water & Comparison Table */}
      <section className="my-16 bg-casa-white/80 rounded-3xl p-6 sm:p-10 border border-casa-scarlet/15 shadow-xs">
        <h2 className="font-cormorant italic font-normal text-2xl sm:text-3xl md:text-3.5xl text-casa-black mb-4 tracking-tight">
          Du Désert au Lac : Pourquoi Combiner la Kasbah Dif et Casa Lalla
          Takerkoust ?
        </h2>
        <p className="text-lg sm:text-xl font-normal leading-relaxed text-casa-black/85 mb-8">
          La magie secrète de la région de Marrakech réside dans ses contrastes
          géographiques spectaculaires à moins d&apos;une heure de la ville
          rouge. Là où la Kasbah Dif offre une immersion austère et poétique
          dans la roche désertique, Casa Lalla Takerkoust déploie une oasis
          hédoniste baignée par la brise du lac. Plutôt que de choisir entre
          désert et rivage, les voyageurs avertis unissent ces deux univers
          complémentaires pour un séjour équilibré entre sérénité absolue et
          plaisirs gourmands.
        </p>

        {/* Minimalist Comparison Table in Cormorant Garamond */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-casa-scarlet/20">
                <th className="py-3 px-4 font-cormorant text-xs sm:text-sm uppercase tracking-widest text-casa-scarlet font-normal">
                  Dimension
                </th>
                <th className="py-3 px-4 font-cormorant text-xs sm:text-sm uppercase tracking-widest text-casa-black font-normal">
                  Kasbah d&apos;If (Kasbah Dif)
                </th>
                <th className="py-3 px-4 font-cormorant text-xs sm:text-sm uppercase tracking-widest text-casa-scarlet font-normal">
                  Casa Lalla Takerkoust
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-casa-scarlet/10 text-base sm:text-lg font-normal">
              <tr className="hover:bg-casa-background/50 transition-colors">
                <td className="py-4 px-4 font-normal text-casa-black">
                  Cadre & Paysage
                </td>
                <td className="py-4 px-4 text-casa-black/80 font-light">
                  Collines lunaires d&apos;Agafay, silence minéral, immensité
                  désertique
                </td>
                <td className="py-4 px-4 text-casa-scarlet italic font-normal">
                  Panorama lacustre, miroir d&apos;eau scintillant, reflets
                  majestueux du Haut Atlas
                </td>
              </tr>
              <tr className="hover:bg-casa-background/50 transition-colors">
                <td className="py-4 px-4 font-normal text-casa-black">
                  Ambiance & Atmosphère
                </td>
                <td className="py-4 px-4 text-casa-black/80 font-light">
                  Refuge intimiste, calme méditatif, déconnexion profonde
                </td>
                <td className="py-4 px-4 text-casa-scarlet italic font-normal">
                  Esprit day-club bohème chic, musique organique, déjeuners
                  festifs et élégants
                </td>
              </tr>
              <tr className="hover:bg-casa-background/50 transition-colors">
                <td className="py-4 px-4 font-normal text-casa-black">
                  Expérience Culinaire
                </td>
                <td className="py-4 px-4 text-casa-black/80 font-light">
                  Table d&apos;hôtes traditionnelle et plats marocains familiaux
                </td>
                <td className="py-4 px-4 text-casa-scarlet italic font-normal">
                  Fusion méditerranéenne & marocaine raffinée, poissons grillés,
                  tapas & mixologie
                </td>
              </tr>
              <tr className="hover:bg-casa-background/50 transition-colors">
                <td className="py-4 px-4 font-normal text-casa-black">
                  Activités & Loisirs
                </td>
                <td className="py-4 px-4 text-casa-black/80 font-light">
                  Observation des étoiles, balades dans le désert, repos
                  contemplatif
                </td>
                <td className="py-4 px-4 text-casa-scarlet italic font-normal">
                  Jet-ski, kayak, paddle, excursions en quad reliant désert et
                  lac, transats piscine
                </td>
              </tr>
              <tr className="hover:bg-casa-background/50 transition-colors">
                <td className="py-4 px-4 font-normal text-casa-black">
                  Moment Idéal
                </td>
                <td className="py-4 px-4 text-casa-black/80 font-light">
                  Arrivée en fin de journée, nuit étoilée, lever de soleil
                  paisible
                </td>
                <td className="py-4 px-4 text-casa-scarlet italic font-normal">
                  Long déjeuner ensoleillé (13h00 – 17h00), détente au bord de
                  l&apos;eau, apéritif au coucher du soleil
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 3: What to Do at Casa Lalla */}
      <section className="my-16">
        <h2 className="font-cormorant italic font-normal text-2xl sm:text-3xl md:text-3.5xl text-casa-black mb-6 tracking-tight">
          Déjeuner, Day Pass et Activités Nautiques à Casa Lalla Takerkoust
        </h2>
        <p className="text-lg sm:text-xl font-normal leading-relaxed text-casa-black/85 mb-8">
          Que vous veniez pour une parenthèse gourmande de quelques heures ou
          pour une journée entière les pieds dans l&apos;eau, Casa Lalla
          Takerkoust a conçu une collection d&apos;expériences sensorielles pour
          sublimer votre séjour dans le désert.
        </p>

        <div className="space-y-6">
          {/* Subsection 1: Gastronomy */}
          <div className="bg-casa-white/70 p-6 sm:p-8 rounded-2xl border border-casa-scarlet/15">
            <h3 className="font-cormorant italic font-normal text-xl sm:text-2xl text-casa-scarlet mb-3 tracking-tight">
              1. Gastronomie Méditerranéenne et Saveurs Marocaines Face au Lac
            </h3>
            <p className="text-base sm:text-lg font-normal leading-relaxed text-casa-black/85">
              À Casa Lalla, la gastronomie est une célébration du partage et de
              la fraîcheur. Notre carte rend hommage aux rivages de la
              Méditerranée tout en célébrant le terroir marocain le plus
              authentique. Laissez-vous séduire par un loup de mer grillé à la
              perfection, des gambas à l&apos;ail, des tapas espagnoles
              savoureuses, ou par nos tajines signatures mijotés pendant de
              longues heures. Accompagné d&apos;un vin gris marocain bien frais
              ou d&apos;un cocktail artisanal aux arômes de romarin et
              d&apos;agrumes, votre repas s&apos;étire doucement au rythme de la
              brise lacustre.
            </p>
          </div>

          {/* Subsection 2: Activities & Adventures */}
          <div className="bg-casa-white/70 p-6 sm:p-8 rounded-2xl border border-casa-scarlet/15">
            <h3 className="font-cormorant italic font-normal text-xl sm:text-2xl text-casa-scarlet mb-3 tracking-tight">
              2. Du Quad en Plein Désert aux Sensations Nautiques sur le Lac
            </h3>
            <p className="text-base sm:text-lg font-normal leading-relaxed text-casa-black/85">
              L&apos;une des expériences les plus exaltantes consiste à réserver
              un raid guidé en quad ou en buggy depuis les pistes rocheuses
              entourant la Kasbah Dif jusqu&apos;aux rives verdoyantes de Lalla
              Takerkoust. Après une matinée d&apos;adrénaline à dévaler les
              collines d&apos;Agafay, l&apos;arrivée sur la terrasse de Casa
              Lalla ressemble à la découverte d&apos;un mirage. Sur place,
              prolongez l&apos;aventure sur l&apos;eau : vibrez au guidon
              d&apos;un jet-ski fendant le plan d&apos;eau miroitant, savourez
              le calme d&apos;une session de stand-up paddle, ou détendez-vous
              simplement au bord de la piscine avec un day pass exclusif.
            </p>
          </div>

          {/* Subsection 3: Golden Hour */}
          <div className="bg-casa-white/70 p-6 sm:p-8 rounded-2xl border border-casa-scarlet/15">
            <h3 className="font-cormorant italic font-normal text-xl sm:text-2xl text-casa-scarlet mb-3 tracking-tight">
              3. Le Rituel du Coucher de Soleil Face aux Cimes de l&apos;Atlas
            </h3>
            <p className="text-base sm:text-lg font-normal leading-relaxed text-casa-black/85">
              Lorsque le jour décline, le ciel du barrage de Lalla Takerkoust
              s&apos;embrase d&apos;ocres flamboyants, de teintes dorées et de
              nuances pourpres qui se reflètent avec intensité sur l&apos;eau.
              Bercé par des sélections musicales deep house chaleureuses et
              feutrées, l&apos;apéritif au coucher du soleil à Casa Lalla est un
              moment suspendu dans le temps. C&apos;est la transition parfaite
              avant de regagner la quiétude nocturne de votre chambre à la
              Kasbah d&apos;If.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Images Grid 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
        <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-casa-scarlet/15 shadow-xs">
          <Image
            src="/images/high-atlas-mountains-quad-marrakech.webp"
            alt="Excursion en quad dans le désert d'Agafay reliant la Kasbah d'If à Casa Lalla Takerkoust"
            title="Raid Quad Agafay vers le lac Lalla Takerkoust"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute bottom-0 inset-x-0 bg-casa-black/40 backdrop-blur-md p-4 text-casa-white text-base font-light italic tracking-wide">
            Excursions en quad reliant directement les pistes de la Kasbah Dif
            aux rives du lac
          </div>
        </div>
        <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-casa-scarlet/15 shadow-xs">
          <Image
            src="/images/sunset-cocktails-lalla-takerkoust-lounge.webp"
            alt="Cocktail au coucher du soleil sur la terrasse de Casa Lalla Takerkoust face à l'Atlas et Agafay"
            title="Coucher de soleil féerique à Casa Lalla"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute bottom-0 inset-x-0 bg-casa-black/40 backdrop-blur-md p-4 text-casa-white text-base font-light italic tracking-wide">
            L&apos;heure dorée à Casa Lalla, face aux sommets enneigés de
            l&apos;Atlas
          </div>
        </div>
      </div>

      {/* Section 4: Logistics & Directions */}
      <section className="my-14">
        <h2 className="font-cormorant italic font-normal text-2xl sm:text-3xl md:text-3.5xl text-casa-black mb-5 tracking-tight">
          Comment Rejoindre Casa Lalla Takerkoust depuis la Kasbah Dif ?
        </h2>
        <div className="space-y-4 text-base sm:text-lg font-normal leading-relaxed text-casa-black/85">
          <p>
            Rejoindre Casa Lalla Takerkoust depuis la Kasbah d&apos;If (Kasbah
            Dif) est particulièrement simple et rapide :
          </p>
          <ul className="list-disc pl-5 space-y-2 text-casa-black/85 font-normal">
            <li>
              <span className="italic font-normal text-casa-black">
                En voiture ou avec chauffeur privé :
              </span>{" "}
              Le trajet ne demande qu&apos;environ 15 à 20 minutes en empruntant
              les voies pittoresques reliant le plateau d&apos;Agafay à la
              cuvette du barrage. Notre parking privé accueille aisément votre
              véhicule ou votre chauffeur.
            </li>
            <li>
              <span className="italic font-normal text-casa-black">
                Par les pistes en quad ou buggy :
              </span>{" "}
              Pour les amateurs de sensations fortes, des circuits guidés
              permettent de faire la traversée hors des sentiers battus, pour
              arriver directement au restaurant à l&apos;heure du déjeuner.
            </li>
            <li>
              <span className="italic font-normal text-casa-black">
                Depuis le centre de Marrakech :
              </span>{" "}
              Les deux établissements se situent à environ 40 minutes au
              sud-ouest de Marrakech, ce qui en fait le circuit d&apos;une
              journée idéal : matinée dans les pistes d&apos;Agafay et à Kasbah
              Dif, déjeuner au bord de l&apos;eau à Casa Lalla, après-midi
              nautique, puis retour paisible vers la médina.
            </li>
          </ul>
        </div>
      </section>

      {/* Section 5: FAQs */}
      <section className="my-16">
        <h2 className="font-cormorant italic font-normal text-2xl sm:text-3xl md:text-3.5xl text-casa-black mb-6 tracking-tight">
          Questions Fréquentes (FAQ : Kasbah d&apos;If & Lac Lalla Takerkoust)
        </h2>
        <div className="space-y-4">
          <div className="bg-casa-white/80 p-6 rounded-2xl border border-casa-scarlet/15 shadow-2xs">
            <h3 className="font-cormorant italic font-normal text-xl sm:text-2xl text-casa-scarlet mb-2">
              À quelle distance se trouve Casa Lalla Takerkoust de la Kasbah
              d&apos;If (Kasbah Dif) ?
            </h3>
            <p className="text-base sm:text-lg font-normal text-casa-black/85 leading-relaxed">
              Casa Lalla Takerkoust est située à environ 12 à 15 kilomètres de
              la Kasbah d&apos;If, soit un court trajet panoramique de 15 à 20
              minutes reliant le cœur du désert d&apos;Agafay aux rives
              apaisantes du lac de barrage Lalla Takerkoust.
            </p>
          </div>

          <div className="bg-casa-white/80 p-6 rounded-2xl border border-casa-scarlet/15 shadow-2xs">
            <h3 className="font-cormorant italic font-normal text-xl sm:text-2xl text-casa-scarlet mb-2">
              Peut-on venir déjeuner ou passer la journée (day pass) à Casa
              Lalla Takerkoust lors d&apos;un séjour dans le désert
              d&apos;Agafay ?
            </h3>
            <p className="text-base sm:text-lg font-normal text-casa-black/85 leading-relaxed">
              Absolument. De nombreux voyageurs séjournant dans les camps ou
              écolodges d&apos;Agafay comme la Kasbah Dif rejoignent Casa Lalla
              pour le déjeuner (service de 13h00 à 17h00), pour se détendre au
              bord de la piscine avec un day-pass, ou pour s&apos;adonner aux
              activités nautiques avant de retourner au désert pour la soirée.
              Il est vivement recommandé de réserver à l&apos;avance.
            </p>
          </div>

          <div className="bg-casa-white/80 p-6 rounded-2xl border border-casa-scarlet/15 shadow-2xs">
            <h3 className="font-cormorant italic font-normal text-xl sm:text-2xl text-casa-scarlet mb-2">
              Peut-on réserver une excursion en quad reliant le lac et les
              pistes du désert d&apos;Agafay près de la Kasbah d&apos;If ?
            </h3>
            <p className="text-base sm:text-lg font-normal text-casa-black/85 leading-relaxed">
              Oui. Des excursions accompagnées en quad ou en buggy peuvent être
              organisées directement au départ ou à destination de Casa Lalla,
              traversant les crêtes spectaculaires d&apos;Agafay entourant la
              Kasbah d&apos;If. Notre équipe conciergerie se tient à votre
              entière disposition pour planifier votre activité en harmonie avec
              votre réservation de table.
            </p>
          </div>
        </div>
      </section>

      {/* Minimalist CTA Card using exact globals.css colors */}
      <section className="my-16 bg-casa-scarlet rounded-3xl p-8 sm:p-12 text-casa-white shadow-md text-center font-cormorant">
        <span className="uppercase text-xs font-light tracking-[0.25em] text-casa-white/80 border border-casa-white/20 px-4 py-1.5 rounded-full inline-block mb-4">
          Sublimez Votre Escapade à Agafay
        </span>
        <h2 className="font-cormorant italic font-normal text-2xl sm:text-3xl md:text-4xl text-casa-white mb-4 tracking-tight">
          Réservez Votre Table avec Vue sur le Lac à Casa Lalla Takerkoust
        </h2>
        <p className="text-base sm:text-lg font-light text-casa-white/90 max-w-xl mx-auto mb-8 leading-relaxed tracking-wider">
          Offrez-vous une pause rafraîchissante au bord de l&apos;eau :
          gastronomie méditerranéenne et marocaine raffinée, cocktails
          signature, transats piscine et panorama grandiose sur les cimes de
          l&apos;Atlas.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/fr/reservation"
            className="w-full sm:w-auto px-8 py-3 bg-casa-background text-casa-scarlet font-normal text-sm tracking-widest uppercase rounded-full hover:bg-casa-white transition-colors duration-200"
          >
            Réserver Votre Table
          </Link>
          <Link
            href="/fr/menu"
            className="w-full sm:w-auto px-8 py-3 bg-transparent border border-casa-white text-casa-white font-normal text-sm tracking-widest uppercase rounded-full hover:bg-casa-white hover:text-casa-scarlet transition-colors duration-200"
          >
            Découvrir Nos Cartes
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
