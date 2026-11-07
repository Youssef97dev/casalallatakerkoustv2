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
          Luxury Agafay & Lake Takerkoust Guide
        </span>
        <h1 className="font-cormorant italic font-normal text-3xl sm:text-4xl md:text-5xl text-casa-black leading-snug tracking-tight">
          Staying at Kasbah d&apos;If (Agafay)? Complete Your Trip with a
          Lakeside Escape at Casa Lalla Takerkoust
        </h1>
        <div className="w-12 h-px bg-casa-scarlet mx-auto mt-6 mb-4" />
        <p className="text-xs sm:text-sm text-casa-black/60 uppercase tracking-[0.2em] font-light">
          Published by Casa Lalla Takerkoust Editorial • 8 min read
        </p>
      </header>

      {/* Intro (first 100 words requirement) */}
      <div className="mb-14">
        <p className="text-xl sm:text-2xl font-normal leading-relaxed text-casa-black/90">
          If you are planning an unforgettable desert retreat at{" "}
          <span className="text-casa-scarlet italic font-normal">
            Kasbah d&apos;If
          </span>{" "}
          (also widely known as{" "}
          <span className="text-casa-scarlet italic font-normal">
            Kasbah Dif
          </span>
          ), you have already made an inspired choice. Perched like a tranquil,
          mineral fortress amidst the undulating stone hills of the Agafay
          Desert, Kasbah d&apos;If offers travelers absolute silence, raw
          earthen architecture, and expansive panoramas of the snow-capped High
          Atlas Mountains. Yet, just minutes away where the arid desert tracks
          meet the turquoise waters of the lake,{" "}
          <span className="text-casa-scarlet italic font-normal">
            Casa Lalla Takerkoust
          </span>{" "}
          opens its doors as the ultimate waterfront lunch, day-pass, and
          golden-hour sunset companion. Combining both destinations transforms a
          simple desert stay into Morocco&apos;s most balanced luxury
          experience.
        </p>
      </div>

      {/* Featured Images Grid 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
        <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-casa-scarlet/15 shadow-xs">
          <Image
            src="https://casalallatakerkoust.com/images/chic-desert-oasis-design-mykonos-inspiration.webp"
            alt="Casa Lalla Takerkoust luxury bohemian terrace facing Agafay / Lalla Takerkoust"
            title="Casa Lalla Takerkoust Chic Lakeside Oasis"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute bottom-0 inset-x-0 bg-casa-black/40 backdrop-blur-[1.5px] p-4 text-casa-white text-base font-light italic tracking-wide">
            Refined bohemian lounging at Casa Lalla Takerkoust overlooking the
            water
          </div>
        </div>
        <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-casa-scarlet/15 shadow-xs">
          <Image
            src="https://casalallatakerkoust.com/images/luxury-dining-takerkoust-mykonos-style.webp"
            alt="Lakeside gastronomy and open-air restaurant at Casa Lalla Takerkoust near Kasbah Dif in Agafay"
            title="Luxury Dining at Casa Lalla Lake Takerkoust"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute bottom-0 inset-x-0 bg-casa-black/40 backdrop-blur-[1.5px] p-4 text-casa-white text-base font-light italic tracking-wide">
            Fresh Mediterranean dining on the breezy lakefront terrace
          </div>
        </div>
      </div>

      {/* Section 1: Kasbah d'If Overview with Outbound Link */}
      <section className="my-14">
        <h2 className="font-cormorant italic font-normal text-2xl sm:text-3xl md:text-3.5xl text-casa-black mb-5 tracking-tight">
          What to Expect at Kasbah d&apos;If in the Agafay Desert
        </h2>
        <div className="space-y-5 text-lg sm:text-xl font-normal leading-relaxed text-casa-black/85">
          <p>
            The Agafay Desert is celebrated for its dramatic lunar
            landscapes—vast expanses of sun-baked white stone plateau where time
            seems to stand completely still. Within this serene wilderness lies{" "}
            <a
              href="https://www.kasbahdif.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-casa-scarlet italic font-normal underline decoration-casa-scarlet/40 underline-offset-4 hover:decoration-casa-scarlet transition-all"
            >
              Kasbah d&apos;If
            </a>{" "}
            (frequently searched as Kasbah Dif), a secluded haven designed for
            those seeking digital disconnection, intimate Berber-inspired
            architecture, and contemplative evenings beneath star-studded desert
            skies.
          </p>
          <p>
            At Kasbah d&apos;If, life moves to the slow rhythm of the Moroccan
            desert. Guests spend quiet mornings absorbing the sweeping vistas
            toward the Atlas range, reading by secluded courtyards, or walking
            along solitary desert ridges. The ambiance is intentionally calm,
            meditative, and austere. However, after twenty-four or forty-eight
            hours wrapped in the arid heat and dry stillness of the mineral
            desert, most travelers yearn for a refreshing contrast: the soothing
            sight and sound of water, a vibrant culinary scene, chilled rosé,
            and lively daytime energy. That is precisely where Lake Lalla
            Takerkoust and Casa Lalla enter the itinerary.
          </p>
        </div>
      </section>

      {/* Section 2: Desert Meets Water & Comparison Table */}
      <section className="my-16 bg-casa-white/80 rounded-3xl p-6 sm:p-10 border border-casa-scarlet/15 shadow-xs">
        <h2 className="font-cormorant italic font-normal text-2xl sm:text-3xl md:text-3.5xl text-casa-black mb-4 tracking-tight">
          Desert Meets Water: Why Pair Kasbah Dif with Casa Lalla Takerkoust?
        </h2>
        <p className="text-lg sm:text-xl font-normal leading-relaxed text-casa-black/85 mb-8">
          The geographical magic of the Marrakech countryside lies in its sheer
          diversity within short distances. While Kasbah Dif immerses you in the
          dry majesty of the Agafay plateaus, Casa Lalla sits just a short drive
          away at the edge of the historic Lalla Takerkoust reservoir. Instead
          of choosing between the two, discerning travelers pair them for a
          harmonized, multi-sensory retreat that balances introspective desert
          peace with festive lakeside gastronomy.
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
                  Setting & Landscape
                </td>
                <td className="py-4 px-4 text-casa-black/80 font-light">
                  Rolling stone dunes, arid Agafay plateau, mineral stillness
                </td>
                <td className="py-4 px-4 text-casa-scarlet italic font-normal">
                  Waterfront panorama, shimmering blue reservoir, reflections of
                  the High Atlas
                </td>
              </tr>
              <tr className="hover:bg-casa-background/50 transition-colors">
                <td className="py-4 px-4 font-normal text-casa-black">
                  Atmosphere & Vibe
                </td>
                <td className="py-4 px-4 text-casa-black/80 font-light">
                  Peaceful sanctuary, contemplative retreat, deep silence
                </td>
                <td className="py-4 px-4 text-casa-scarlet italic font-normal">
                  Chic boho-luxe day club, soulful music, festive lunches,
                  sunset vibes
                </td>
              </tr>
              <tr className="hover:bg-casa-background/50 transition-colors">
                <td className="py-4 px-4 font-normal text-casa-black">
                  Culinary Program
                </td>
                <td className="py-4 px-4 text-casa-black/80 font-light">
                  Intimate lodge dining with traditional Moroccan staples
                </td>
                <td className="py-4 px-4 text-casa-scarlet italic font-normal">
                  Refined Mediterranean & Moroccan fusion, fresh grilled fish,
                  tapas & signature mixology
                </td>
              </tr>
              <tr className="hover:bg-casa-background/50 transition-colors">
                <td className="py-4 px-4 font-normal text-casa-black">
                  Activities & Excursions
                </td>
                <td className="py-4 px-4 text-casa-black/80 font-light">
                  Stargazing, desert walking, peaceful relaxation
                </td>
                <td className="py-4 px-4 text-casa-scarlet italic font-normal">
                  Jet ski, kayak, paddleboard, quad/buggy desert-lake crossings,
                  pool day pass
                </td>
              </tr>
              <tr className="hover:bg-casa-background/50 transition-colors">
                <td className="py-4 px-4 font-normal text-casa-black">
                  Best Time to Visit
                </td>
                <td className="py-4 px-4 text-casa-black/80 font-light">
                  Late afternoon check-in, overnight stargazing, tranquil
                  sunrise
                </td>
                <td className="py-4 px-4 text-casa-scarlet italic font-normal">
                  Long sun-drenched lunch (1:00 PM – 5:00 PM), pool relaxation,
                  golden-hour drinks
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 3: What to Do at Casa Lalla */}
      <section className="my-16">
        <h2 className="font-cormorant italic font-normal text-2xl sm:text-3xl md:text-3.5xl text-casa-black mb-6 tracking-tight">
          What to Do at Casa Lalla Takerkoust During Your Agafay Stay
        </h2>
        <p className="text-lg sm:text-xl font-normal leading-relaxed text-casa-black/85 mb-8">
          Whether you drive over for a three-hour gourmet lunch or book a full
          daytime escape with a lake-view sunbed, Casa Lalla Takerkoust provides
          a rich tapestry of gastronomic, aquatic, and aesthetic pleasures.
        </p>

        <div className="space-y-6">
          {/* Subsection 1: Gastronomy */}
          <div className="bg-casa-white/70 p-6 sm:p-8 rounded-2xl border border-casa-scarlet/15">
            <h3 className="font-cormorant italic font-normal text-xl sm:text-2xl text-casa-scarlet mb-3 tracking-tight">
              1. Mediterranean & Moroccan Gastronomy Overlooking the Water
            </h3>
            <p className="text-base sm:text-lg font-normal leading-relaxed text-casa-black/85">
              Dining at Casa Lalla is an unhurried sensory celebration. Our
              chefs craft a vibrant dialogue between fresh Mediterranean coastal
              classics and rich Moroccan culinary heritage. Feast on freshly
              caught grilled sea bass, garlic prawns, and Spanish-style tapas
              alongside slow-cooked aromatic tagines simmered with seasonal
              regional produce. Paired with a chilled Moroccan gris or an
              artisanal cocktail infused with fresh rosemary and citrus, your
              meal is elevated by continuous cooling lake breezes and
              unobstructed mountain horizons.
            </p>
          </div>

          {/* Subsection 2: Activities & Adventures */}
          <div className="bg-casa-white/70 p-6 sm:p-8 rounded-2xl border border-casa-scarlet/15">
            <h3 className="font-cormorant italic font-normal text-xl sm:text-2xl text-casa-scarlet mb-3 tracking-tight">
              2. Activities & Adventures: Connecting Desert Trails to Lakeside
              Thrills
            </h3>
            <p className="text-base sm:text-lg font-normal leading-relaxed text-casa-black/85">
              One of the most thrilling ways to experience both environments is
              by booking an off-road buggy or quad excursion that traverses the
              undulating trails between Kasbah Dif and Lake Lalla Takerkoust.
              Ride across the lunar tracks of Agafay in the morning, feel the
              adrenaline of climbing stone canyons, and arrive triumphantly at
              the water&apos;s edge. Once at the lake, switch gears: rent a jet
              ski to carve across the freshwater reservoir, glide peacefully on
              a stand-up paddleboard, or simply lounge on a comfortable daybed
              soaking in the sunshine.
            </p>
          </div>

          {/* Subsection 3: Golden Hour */}
          <div className="bg-casa-white/70 p-6 sm:p-8 rounded-2xl border border-casa-scarlet/15">
            <h3 className="font-cormorant italic font-normal text-xl sm:text-2xl text-casa-scarlet mb-3 tracking-tight">
              3. The Golden Hour: Sunset Dining & Deep House Melodies
            </h3>
            <p className="text-base sm:text-lg font-normal leading-relaxed text-casa-black/85">
              As afternoon softens into evening, the light across Lake
              Takerkoust undergoes an extraordinary transformation. The jagged
              silhouette of the High Atlas blushes in shades of amber, violet,
              and rose, casting glowing reflections across the surface of the
              lake. To the subtle soundtrack of organic deep house curated by
              our resident selectors, guests gather on the outdoor terraces to
              toast the sunset. It is an essential ritual before driving back to
              your desert lodge at Kasbah d&apos;If or returning into Marrakech.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Images Grid 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
        <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-casa-scarlet/15 shadow-xs">
          <Image
            src="https://casalallatakerkoust.com/images/high-atlas-mountains-quad-marrakech.webp"
            alt="Quad biking across Agafay desert trails toward Casa Lalla Takerkoust and Kasbah d'If"
            title="Agafay Desert Quad Tour to Lake Takerkoust"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute bottom-0 inset-x-0 bg-casa-black/40 backdrop-blur-[1.5px] p-4 text-casa-white text-base font-light italic tracking-wide">
            Quad and buggy tours connecting Kasbah Dif desert trails to Casa
            Lalla lakefront
          </div>
        </div>
        <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-casa-scarlet/15 shadow-xs">
          <Image
            src="https://casalallatakerkoust.com/images/sunset-cocktails-lalla-takerkoust-lounge.webp"
            alt="Golden hour cocktails on the lakeside terrace at Casa Lalla Takerkoust near Agafay"
            title="Lakeside Sunset Cocktails at Casa Lalla"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute bottom-0 inset-x-0 bg-casa-black/40 backdrop-blur-[1.5px] p-4 text-casa-white text-base font-light italic tracking-wide">
            The golden hour sunset ritual facing the snow-capped High Atlas
            Mountains
          </div>
        </div>
      </div>

      {/* Section 4: Logistics & Directions */}
      <section className="my-14">
        <h2 className="font-cormorant italic font-normal text-2xl sm:text-3xl md:text-3.5xl text-casa-black mb-5 tracking-tight">
          How to Get from Kasbah Dif to Casa Lalla Takerkoust
        </h2>
        <div className="space-y-4 text-base sm:text-lg font-normal leading-relaxed text-casa-black/85">
          <p>
            Reaching Casa Lalla Takerkoust from Kasbah d&apos;If (Kasbah Dif) is
            straightforward and remarkably quick:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-casa-black/85 font-normal">
            <li>
              <span className="italic font-normal text-casa-black">
                By Car or Private Driver:
              </span>{" "}
              The drive takes approximately 15 to 20 minutes via the paved and
              packed-gravel scenic routes that lead down from the central Agafay
              plateau toward the Barrage de Lalla Takerkoust. Our dedicated
              parking area accommodates private vehicles and driver transfers
              comfortably.
            </li>
            <li>
              <span className="italic font-normal text-casa-black">
                Via Desert Quad or Buggy Transfer:
              </span>{" "}
              For an adventurous entrance, organized quad safari tours can
              arrange a guided crossing through the desert ridges, delivering
              you straight to our lakeside terrace just in time for your
              reserved lunch.
            </li>
            <li>
              <span className="italic font-normal text-casa-black">
                From Marrakech City Center:
              </span>{" "}
              Both Kasbah d&apos;If and Casa Lalla are situated just 35 to 45
              minutes southwest of Marrakech, making a loop excursion (Medina →
              Kasbah Dif / Agafay trails → Casa Lalla lunch → Lake activities →
              Medina) the premier day-trip itinerary for international visitors.
            </li>
          </ul>
        </div>
      </section>

      {/* Section 5: FAQs */}
      <section className="my-16">
        <h2 className="font-cormorant italic font-normal text-2xl sm:text-3xl md:text-3.5xl text-casa-black mb-6 tracking-tight">
          Frequently Asked Questions (Kasbah d&apos;If & Lalla Takerkoust)
        </h2>
        <div className="space-y-4">
          <div className="bg-casa-white/80 p-6 rounded-2xl border border-casa-scarlet/15 shadow-2xs">
            <h3 className="font-cormorant italic font-normal text-xl sm:text-2xl text-casa-scarlet mb-2">
              How far is Casa Lalla Takerkoust from Kasbah d&apos;If (Kasbah
              Dif)?
            </h3>
            <p className="text-base sm:text-lg font-normal text-casa-black/85 leading-relaxed">
              Casa Lalla Takerkoust is situated approximately 12 to 15
              kilometers from Kasbah d&apos;If, translating to a scenic 15 to 20
              minute drive through the transition zone where the stone hills of
              Agafay meet the fertile valleys bordering the Lalla Takerkoust
              reservoir.
            </p>
          </div>

          <div className="bg-casa-white/80 p-6 rounded-2xl border border-casa-scarlet/15 shadow-2xs">
            <h3 className="font-cormorant italic font-normal text-xl sm:text-2xl text-casa-scarlet mb-2">
              Can I visit Casa Lalla Takerkoust for lunch or a day pass while
              staying in the Agafay Desert?
            </h3>
            <p className="text-base sm:text-lg font-normal text-casa-black/85 leading-relaxed">
              Yes, absolutely. Many travelers staying in Agafay desert camps or
              lodges such as Kasbah Dif visit Casa Lalla Takerkoust as day
              guests. You can reserve an outdoor table for a leisurely lunch
              between 1:00 PM and 5:00 PM, enjoy our swimming pool and daybeds,
              and participate in water sports before returning to your desert
              accommodation for the evening. Prior reservation is strongly
              recommended, especially on weekends.
            </p>
          </div>

          <div className="bg-casa-white/80 p-6 rounded-2xl border border-casa-scarlet/15 shadow-2xs">
            <h3 className="font-cormorant italic font-normal text-xl sm:text-2xl text-casa-scarlet mb-2">
              Can I book quad biking from the lake toward the Agafay desert
              trails near Kasbah Dif?
            </h3>
            <p className="text-base sm:text-lg font-normal text-casa-black/85 leading-relaxed">
              Yes. Guided quad and buggy excursions can be seamlessly
              coordinated from Casa Lalla Takerkoust into the rugged terrain of
              Agafay surrounding Kasbah d&apos;If, or vice-versa. Our concierge
              team can help you schedule your equipment and certified desert
              guides alongside your restaurant reservation.
            </p>
          </div>
        </div>
      </section>

      {/* Minimalist CTA Card using exact globals.css colors */}
      <section className="my-16 bg-casa-scarlet rounded-3xl p-8 sm:p-12 text-casa-white shadow-md text-center font-cormorant">
        <span className="uppercase text-xs font-light tracking-[0.25em] text-casa-white/80 border border-casa-white/20 px-4 py-1.5 rounded-full inline-block mb-4">
          Complete Your Agafay Desert Experience
        </span>
        <h2 className="font-cormorant italic font-normal text-2xl sm:text-3xl md:text-4xl text-casa-white mb-4 tracking-tight">
          Reserve Your Lake View Table at Casa Lalla Takerkoust
        </h2>
        <p className="text-base sm:text-lg font-light text-casa-white/90 max-w-xl mx-auto mb-8 leading-relaxed tracking-wider">
          Escape the desert heat for an afternoon of refreshing lake breezes,
          gourmet Mediterranean and Moroccan dishes, craft cocktails, and
          panoramic Atlas Mountain vistas.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/reservation"
            className="w-full sm:w-auto px-8 py-3 bg-casa-background text-casa-scarlet font-normal text-sm tracking-widest uppercase rounded-full hover:bg-casa-white transition-colors duration-200"
          >
            Book Your Table
          </Link>
          <Link
            href="/menu"
            className="w-full sm:w-auto px-8 py-3 bg-transparent border border-casa-white text-casa-white font-normal text-sm tracking-widest uppercase rounded-full hover:bg-casa-white hover:text-casa-scarlet transition-colors duration-200"
          >
            View Our Menus
          </Link>
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3 bg-casa-black text-casa-white font-normal text-sm tracking-widest uppercase rounded-full hover:bg-casa-background hover:text-casa-black transition-colors duration-200"
          >
            WhatsApp Concierge
          </a>
        </div>
        <p className="text-xs text-casa-white/70 mt-6 font-light tracking-wider">
          Open daily from 1:00 PM to 5:00 PM • Barrage Lalla Takerkoust,
          Marrakech
        </p>
      </section>
    </article>
  );
};

export default Content;
