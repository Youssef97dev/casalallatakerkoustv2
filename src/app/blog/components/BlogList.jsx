import Image from "next/image";
import Link from "next/link";
import React from "react";

const blogPosts = [
  {
    slug: "agafay-luxury-camp-vs-casa-lalla-takerkoust-rural-hotel",
    title:
      "Agafay Luxury Camp vs. Casa Lalla Takerkoust Rural Hotel: Where to Stay?",
    excerpt:
      "Comparing an Agafay luxury camp with the Casa Lalla Takerkoust Rural Hotel? Discover why staying overnight at our lakeside rural hotel & restaurant gives you the best of Agafay.",
    image: "/images/boutique-hotel-lalla-takerkoust-lake-view.webp",
    alt: "Casa Lalla Takerkoust Rural Hotel and restaurant overlooking Lake Takerkoust near Agafay Desert",
    badge: "Boutique Hotel",
    readTime: "10 min read",
  },
  {
    slug: "agafay-luxury-camp-kasbah-dif-lake-takerkoust-itinerary",
    title:
      "Agafay Luxury Camp & Kasbah d'If Guide: Why Add Lake Lalla Takerkoust to Your Trip",
    excerpt:
      "Booking an Agafay luxury camp or staying at Kasbah d'If (Kasbah Dif)? Discover how to pair your desert glamping stay with lakeside dining, day passes, and water sports at Casa Lalla Takerkoust.",
    image: "/images/agafay-desert-accommodation-hotel-rural-oasis.webp",
    alt: "Agafay luxury camp and glamping tents nestled in the Moroccan stone desert near Lake Lalla Takerkoust",
    badge: "Itinerary",
    readTime: "9 min read",
  },
  {
    slug: "kasbah-dif-agafay-guide-casa-lalla-takerkoust",
    title:
      "Staying at Kasbah d'If (Kasbah Dif)? Complete Your Trip with a Lakeside Escape at Casa Lalla",
    excerpt:
      "Planning a retreat at Kasbah d'If in the Agafay Desert? Discover why pairing your desert stay with lakeside lunch, day passes, and sunset cocktails at Casa Lalla Takerkoust is the ultimate Moroccan experience.",
    image: "/images/restaurant-lake-view-casa-lalla-takerkoust.webp",
    alt: "Casa Lalla Takerkoust terrace overlooking Lake Takerkoust near Kasbah Dif in Agafay",
    badge: "Featured Guide",
    readTime: "8 min read",
  },
  {
    slug: "best-restaurant-agafay-desert",
    title: "Best Restaurant near Agafay Desert: Dining & Desert Activities",
    excerpt:
      "Discover unforgettable open-air dining, sunset panoramas, and desert excursions where the rocky hills of Agafay meet the waters of Lake Lalla Takerkoust.",
    image: "/images/luxury-dining-takerkoust-mykonos-style.webp",
    alt: "Best restaurant near Agafay Desert with lake views at Casa Lalla Takerkoust",
    badge: "Gastronomy",
    readTime: "6 min read",
  },
  {
    slug: "agafay-desert-vs-lake-takerkoust-the-complete-marrakech-day-trip-comparison",
    title:
      "Agafay Desert vs Lake Takerkoust: The Complete Marrakech Day Trip Comparison",
    excerpt:
      "Deciding between rocky stone desert hills and a refreshing lakeside retreat? Here is everything you need to know to plan the perfect Marrakech day trip.",
    image: "/images/chic-desert-oasis-design-mykonos-inspiration.webp",
    alt: "Agafay Desert vs Lake Takerkoust day trip comparison",
    badge: "Travel Guide",
    readTime: "7 min read",
  },
  {
    slug: "lalla-takerkoust-day-trip-guide-lake-views-agafay-vibes-mediterranean-dining",
    title:
      "Lalla Takerkoust Day Trip Guide: Lake Views, Agafay Vibes & Mediterranean Dining",
    excerpt:
      "Escape the bustling Marrakech Medina for a serene lakeside getaway filled with water sports, desert buggy adventures, and refined Mediterranean cuisine.",
    image: "/images/agafay-desert-buggy-tour-marrakech.webp",
    alt: "Lalla Takerkoust day trip guide from Marrakech",
    badge: "Excursions",
    readTime: "6 min read",
  },
  {
    slug: "marrakech-beach-clubs-discover-the-ibiza-mykonos-experience-at-lake-takerkoust",
    title:
      "Marrakech Beach Clubs: Discover the Ibiza & Mykonos Experience at Lake Takerkoust",
    excerpt:
      "Trade enclosed city hotel pools for a sun-drenched lakeside lounge bar with bohemian aesthetics, deep house music, and barefoot luxury.",
    image: "/images/sunset-cocktails-lalla-takerkoust-lounge.webp",
    alt: "Marrakech beach clubs and daytime lake lounge at Casa Lalla",
    badge: "Beach Club",
    readTime: "5 min read",
  },
  {
    slug: "casa-lalla-takerkoust-marrakech-wedding",
    title:
      "The Ultimate Lakeside Wedding Venue in Marrakech: Casa Lalla Takerkoust",
    excerpt:
      "Say 'I do' against a panoramic backdrop of turquoise water and the snow-capped High Atlas Mountains in an intimate bohemian desert sanctuary.",
    image: "/images/destination-wedding-marrakech-lake-takerkoust.webp",
    alt: "Lakeside destination wedding venue in Marrakech",
    badge: "Weddings",
    readTime: "6 min read",
  },
];

const BlogList = () => {
  return (
    <section id="blogs" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 font-cormorant font-normal">
      <div className="text-center mb-16">
        <span className="text-casa-scarlet uppercase tracking-[0.25em] text-xs sm:text-sm font-normal block mb-3">
          Curated Travel Guides & Culinary Stories
        </span>
        <h2 className="font-cormorant font-normal text-3xl sm:text-4xl md:text-5xl text-casa-black tracking-wide">
          Discover Lake Takerkoust & Agafay Desert
        </h2>
        <div className="w-12 h-px bg-casa-scarlet mx-auto mt-6" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="group flex flex-col bg-casa-white/80 rounded-3xl overflow-hidden border border-casa-scarlet/15 shadow-xs hover:border-casa-scarlet/40 transition-all duration-300"
          >
            <Link
              href={`/blog/${post.slug}`}
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
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-sm sm:text-base font-normal text-casa-black/80 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-casa-scarlet/10 flex items-center justify-between">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs uppercase tracking-[0.2em] font-normal text-casa-scarlet group-hover:underline flex items-center gap-1.5"
                >
                  Read Article
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
