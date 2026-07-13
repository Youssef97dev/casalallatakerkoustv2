import Image from "next/image";
import React from "react";

const Content = () => {
  return (
    <section
      id="events"
      className="grid grid-cols-1 gap-3 pt-32 pb-12 text-center"
    >
      <h2 className="font-canela text-[35px] leading-10.5 text-casa-black mx-8 lg:mx-56">
        {
          "Hôtel de Charme Lalla Takerkoust : L'Oasis entre Lac et Désert d'Agafay"
        }
      </h2>
      <h3 className="mt-4 font-canela italic text-[25px] leading-6.25 text-casa-black">
        {
          "9 Chambres Rétro-Bohèmes où les Montagnes de l'Atlas Rencontrent le Désert"
        }
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-8 px-3 lg:px-14 10 mt-8">
        <div className="w-full flex flex-col justify-start items-start gap-24">
          <Image
            src="/images/boutique-hotel-lalla-takerkoust-lake-view.webp"
            alt="Extérieur du Casa Lalla Hotel Rural surplombant les eaux scintillantes du lac Lalla Takerkoust."
            title="Hôtel de Charme avec Vue sur le Lac — Casa Lalla"
            loading="lazy"
            width={500}
            height={500}
            className="object-cover w-full h-125"
          />
          <Image
            src="/images/patio-sofas-lounge-boutique-hotel-marrakech.webp"
            alt="Canapés de patio confortables à l'ombre, parfaits pour une évasion paisible l'après-midi."
            title="Lounge de Patio Ombragé et Confortable"
            loading="lazy"
            width={500}
            height={500}
            className="object-cover w-full h-125"
          />
          <Image
            src="/images/retro-bohemian-room-boutique-hotel-agafay.webp"
            alt="Chambre d'hôtes spacieuse au style rétro-bohème alliant chaleur vintage et élégance discrète."
            title="Chambre d'Hôtes Rétro-Bohème — Région Agafay"
            loading="lazy"
            width={500}
            height={500}
            className="object-cover w-full h-125"
          />
        </div>
        <div className="w-full flex flex-col justify-start items-center text-left gap-10">
          <p className="text-[15px] leading-[25.5px] font-light text-casa-black">
            À quelques pas des eaux scintillantes du lac Lalla Takerkoust, le
            Casa Lalla Hotel Rural offre une évasion paisible et design, unique
            dans la région. Idéalement situé au carrefour géographique exact où
            les sommets enneigés de {"l'Atlas"} rencontrent les dunes dorées du
            désert {"d'Agafay"}, {"c'est"} votre refuge au décor
            cinématographique, situé à seulement quelques minutes de route du
            centre de Marrakech.
          </p>
          <p className="text-[15px] leading-[25.5px] font-light text-casa-black">
            Nous avons délaissé les standards classiques des resorts pour
            privilégier {"l'âme et l'authenticité"}. Notre domaine intimiste
            abrite exactement 9 chambres {"d'hôtes"} soigneusement agencées,
            mêlant la chaleur du style marocain vintage à une élégance
            rétro-bohème discrète. Ici, les matinées commencent en douceur avec
            un petit-déjeuner gourmand servi au bord de la piscine. Aux heures
            chaudes de la journée, installez-vous sur un transat moelleux ou
            lovez-vous dans les canapés ombragés de notre patio —
            {"l'environnement"} parfait pour lire, se détendre et déconnecter.
          </p>
          <h2 className=" font-canela italic text-[25px] leading-6.25 text-casa-black">
            Une Transition en Douceur : De la Piscine au Dîner Coucher de Soleil
          </h2>
          <div className="text-[15px] leading-[25.5px] font-light text-casa-black">
            <p className="text-[15px] leading-[25.5px] font-light text-casa-black">
              Casa Lalla Takerkoust {"n'est"} pas {"qu'un"} simple lieu où
              dormir — {"c'est"} une véritable invitation à vivre {"l'art"} de
              vivre méditerranéen au Maroc. Lorsque le soir tombe,{" "}
              {"l'atmosphère"} évolue tout naturellement. Vous avez le choix
              entre le confort paisible de notre hôtel pour un repas intimiste,
              ou {"l'ambiance"} vibrante de notre restaurant situé à quelques
              pas pour une expérience culinaire signature et des cocktails au
              coucher du soleil face au lac.
            </p>
            <ul className="list-disc list-inside mt-5 pl-8 space-y-3">
              <li>
                <strong>Hôtel de Charme Intimiste :</strong> Seulement 9
                chambres au design rétro-bohème garantissant calme, intimité et
                sérénité.
              </li>
              <li>
                <strong>Emplacement Géographique Privilégié :</strong> Le point
                de départ idéal situé entre les dunes du désert {"d'Agafay"} et
                le lac Lalla Takerkoust.
              </li>
              <li>
                <strong>Oasis avec Piscine :</strong> Accès réservé aux clients
                à notre piscine tranquille, nos transats premium et nos salons
                de patio ombragés.
              </li>
              <li>
                <strong>Petit-Déjeuner Gourmand :</strong> Un petit-déjeuner
                frais et complet servi chaque matin au bord de la piscine.
              </li>
              <li>
                <strong>Accès au Restaurant & Lounge :</strong> À quelques pas
                seulement de {"l'expérience"} culinaire principale de Casa Lalla
                et du lounge coucher de soleil.
              </li>
              <li>
                <strong>Vue Panoramique Exceptionnelle :</strong> Une vue
                imprenable et dégagée sur {"l'eau"}, le désert et les sommets
                enneigés des montagnes de {"l'Atlas"}.
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-24">
          <Image
            src="/images/sunset-golden-hour-hotel-rural-lalla-takerkoust.webp"
            alt="La chaude lumière de fin de journée baignant les cours tranquilles du Casa Lalla Hotel Rural."
            title="Coucher de Soleil à l'Hôtel Casa Lalla"
            loading="lazy"
            width={500}
            height={500}
            className="object-cover w-full h-125"
          />
          <Image
            src="/images/vintage-moroccan-decor-room-marrakech-getaway.webp"
            alt="Chambre soigneusement décorée avec des touches marocaines vintage et des textures douces pour un séjour relaxant."
            title="Décoration Marocaine Vintage — Casa Lalla"
            loading="lazy"
            width={500}
            height={500}
            className="object-cover w-full h-125"
          />
          <Image
            src="/images/atlas-mountains-view-hotel-getaway-marrakech.webp"
            alt="Les montagnes enneigées de l'Atlas en toile de fond du paisible hôtel rural Casa Lalla."
            title="Hôtel Vue Montagnes de l'Atlas Près de Marrakech"
            loading="lazy"
            width={500}
            height={500}
            className="object-cover w-full h-125"
          />
        </div>
      </div>
    </section>
  );
};

export default Content;
