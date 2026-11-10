import Image from "next/image";
import Link from "next/link";
import React from "react";

const blogPostsFr = [
  {
    slug: "camp-de-luxe-agafay-kasbah-dif-lac-takerkoust",
    title:
      "Camp de Luxe Agafay & Kasbah d'If : L'Escapade Idéale au Lac Lalla Takerkoust",
    excerpt:
      "Vous réservez un camp de luxe à Agafay ou un séjour à la Kasbah d'If (Kasbah Dif) ? Complétez votre expérience désert par un déjeuner au bord de l'eau, day-pass et loisirs nautiques à Casa Lalla Takerkoust.",
    image: "/images/agafay-desert-accommodation-hotel-rural-oasis.webp",
    alt: "Camp de luxe dans le désert d'Agafay et tentes nomades près du lac Lalla Takerkoust",
    badge: "Itinéraire",
    readTime: "9 min de lecture",
  },
  {
    slug: "guide-kasbah-dif-agafay-casa-lalla-takerkoust",
    title:
      "Séjour à la Kasbah d'If (Kasbah Dif) : Escapade & Déjeuner au Bord du Lac à Casa Lalla",
    excerpt:
      "Vous séjournez ou visitez la Kasbah d'If dans le désert d'Agafay ? Découvrez pourquoi combiner le calme minéral du désert et un déjeuner les pieds dans l'eau à Casa Lalla Takerkoust est l'expérience parfaite.",
    image: "/images/restaurant-lake-view-casa-lalla-takerkoust.webp",
    alt: "Terrasse du restaurant Casa Lalla Takerkoust avec vue sur le lac près de la Kasbah Dif",
    badge: "Guide Vedette",
    readTime: "8 min de lecture",
  },
  {
    slug: "kasbah-dif-agafay-guide-casa-lalla-takerkoust",
    title:
      "Agafay vs Lac Takerkoust : Le Guide Comparatif Complet depuis Marrakech",
    excerpt:
      "Entre collines de pierres lunaires et fraîcheur du lac, découvrez toutes les clés pour réussir votre excursion à la journée depuis Marrakech.",
    image: "/images/chic-desert-oasis-design-mykonos-inspiration.webp",
    alt: "Comparatif Agafay et Lac Lalla Takerkoust",
    badge: "Escapade",
    readTime: "7 min de lecture",
  },
  {
    slug: "guide-kasbah-dif-agafay-casa-lalla-takerkoust",
    title:
      "Meilleur Restaurant près du Désert d'Agafay : Gastronomie & Vue Lac à Casa Lalla",
    excerpt:
      "Découvrez un déjeuner en plein air inoubliable, des panoramas féeriques au coucher du soleil et des activités exclusives entre désert et eau.",
    image: "/images/luxury-dining-takerkoust-mykonos-style.webp",
    alt: "Gastronomie raffinée face au lac près d'Agafay",
    badge: "Gastronomie",
    readTime: "6 min de lecture",
  },
];

const BlogList = () => {
  return (
    <section id="blogs" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 font-cormorant font-normal">
      <div className="text-center mb-16">
        <span className="text-casa-scarlet uppercase tracking-[0.25em] text-xs sm:text-sm font-normal block mb-3">
          Guides de Voyage & Inspirations Culinaires
        </span>
        <h2 className="font-cormorant font-normal text-3xl sm:text-4xl md:text-5xl text-casa-black tracking-wide">
          Explorez le Lac Lalla Takerkoust & Agafay
        </h2>
        <div className="w-12 h-px bg-casa-scarlet mx-auto mt-6" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPostsFr.map((post, idx) => (
          <article
            key={idx}
            className="group flex flex-col bg-casa-white/80 rounded-3xl overflow-hidden border border-casa-scarlet/15 shadow-xs hover:border-casa-scarlet/40 transition-all duration-300"
          >
            <Link
              href={`/fr/blog/${post.slug}`}
              className="relative h-60 w-full overflow-hidden block"
            >
              <Image
                src={post.image}
                alt={post.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-casa-scarlet text-casa-white text-[11px] uppercase tracking-[0.2em] font-normal px-3 py-1 rounded-full border border-casa-white/20">
                {post.badge}
              </div>
            </Link>

            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between font-cormorant">
              <div>
                <span className="text-xs text-casa-black/50 uppercase tracking-[0.2em] font-light block mb-2">
                  {post.readTime}
                </span>
                <h3 className="font-cormorant font-normal text-xl sm:text-2xl text-casa-black group-hover:text-casa-scarlet transition-colors leading-snug mb-3 tracking-wide">
                  <Link href={`/fr/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-sm sm:text-base font-normal text-casa-black/80 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-casa-scarlet/10 flex items-center justify-between">
                <Link
                  href={`/fr/blog/${post.slug}`}
                  className="text-xs uppercase tracking-[0.2em] font-normal text-casa-scarlet group-hover:underline flex items-center gap-1.5"
                >
                  Lire l&apos;article
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogList;
