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
          Agafay Desert &amp; Lakeside Itinerary
        </span>
        <h1 className="font-cormorant italic font-normal text-3xl sm:text-4xl md:text-5xl text-casa-black leading-snug tracking-tight">
          Booking an Agafay Luxury Camp or Kasbah d&apos;If? Here Is How to
          Build the Ultimate Desert &amp; Lake Itinerary
        </h1>
        <div className="w-12 h-px bg-casa-scarlet mx-auto mt-6 mb-4" />
        <p className="text-xs sm:text-sm text-casa-black/60 uppercase tracking-[0.2em] font-light">
          Curated by Casa Lalla Takerkoust Editorial • 9 min read
        </p>
      </header>

      {/* Intro (first 100 words requirement) */}
      <div className="mb-14">
        <p className="text-xl sm:text-2xl font-normal leading-relaxed text-casa-black/90">
          Booking an overnight stay at a premier{" "}
          <span className="text-casa-scarlet italic font-normal">
            Agafay luxury camp
          </span>{" "}
          or reserving an exclusive suite inside the monolithic earthen walls of{" "}
          <span className="text-casa-scarlet italic font-normal">
            Kasbah d&apos;If
          </span>{" "}
          (frequently searched as{" "}
          <span className="text-casa-scarlet italic font-normal">
            Kasbah Dif
          </span>
          ) is undeniably one of Morocco&apos;s most sought-after adventures.
          Yet, many seasoned travelers discover an unwritten secret upon
          arrival: while the stone desert is intoxicating at sunrise and sublime
          beneath a canopy of shooting stars, midday inside a canvas tent or
          sunbaked courtyard can feel stifling, still, and dry. Less than ten
          minutes down the sun-drenched tracks, the arid lunar ridges yield to
          the expansive turquoise waters of Barrage Lalla Takerkoust—where{" "}
          <span className="text-casa-scarlet italic font-normal">
            Casa Lalla Takerkoust
          </span>{" "}
          welcomes discerning guests for shaded lakeside dining, refreshing
          cocktails, and watersports.
        </p>
      </div>

      {/* Featured Images Grid 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
        <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-casa-scarlet/15 shadow-xs">
          <Image
            src="https://casalallatakerkoust.com/images/lalla-takerkoust-lake-sunset-agafay-desert.webp"
            alt="Warm sunset glow over Agafay luxury camp dunes and lanterns in the desert near Marrakech"
            title="Agafay Luxury Camp Desert Sunset Ambiance"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-bottom"
          />
          <div className="absolute bottom-0 inset-x-0 bg-casa-black/40 backdrop-blur-md p-4 text-casa-white text-base font-light italic tracking-wide">
            Golden stillness across an Agafay luxury camp at dusk
          </div>
        </div>
        <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-casa-scarlet/15 shadow-xs">
          <Image
            src="https://casalallatakerkoust.com/images/casalallatakerkoust-restaurant-arched-patio-dining.webp"
            alt="Elegant arched outdoor dining patio framed by pink bougainvillea flowers at Casa Lalla Takerkoust restaurant."
            title="Beautiful Patio Dining at Casa Lalla Takerkoust"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-bottom"
          />
          <div className="absolute bottom-0 inset-x-0 bg-casa-black/40 backdrop-blur-md p-4 text-casa-white text-base font-light italic tracking-wide">
            Refreshing waterfront lunch and gentle breezes at Casa Lalla
          </div>
        </div>
      </div>

      {/* Related Guide Callout Box (Internal Linking Silo) */}
      <aside className="my-10 bg-casa-white/90 border-l-4 border-casa-scarlet p-6 rounded-r-2xl shadow-2xs font-cormorant">
        <span className="text-xs uppercase tracking-[0.25em] text-casa-scarlet font-normal block mb-1">
          Related In-Depth Guide
        </span>
        <h3 className="font-cormorant italic font-normal text-xl sm:text-2xl text-casa-black">
          <Link
            href="/blog/kasbah-dif-agafay-guide-casa-lalla-takerkoust"
            className="hover:text-casa-scarlet transition-colors underline decoration-casa-scarlet/30 underline-offset-4"
          >
            Staying at Kasbah d&apos;If (Kasbah Dif)? Why You Must Visit Casa
            Lalla Takerkoust Nearby &rarr;
          </Link>
        </h3>
        <p className="text-base text-casa-black/80 font-normal mt-2 leading-relaxed">
          Read our dedicated architectural profile on Kasbah d&apos;If, driving
          routes through the Agafay plateau, and how to organize seamless
          day-trip transfers to our lakefront restaurant.
        </p>
      </aside>

      {/* Section 1: Camp vs Kasbah d'If */}
      <section className="my-14">
        <h2 className="font-cormorant italic font-normal text-2xl sm:text-3xl md:text-3.5xl text-casa-black mb-5 tracking-tight">
          Agafay Luxury Camps vs. Kasbah d&apos;If: Choosing Your Desert Base
        </h2>
        <div className="space-y-5 text-lg sm:text-xl font-normal leading-relaxed text-casa-black/85">
          <p>
            When planning a journey beyond the bustling Medina walls of
            Marrakech, travelers seeking an authentic wilderness escape
            gravitate toward two distinct hospitality philosophies in the Agafay
            Desert: luxury glamping encampments and traditional stone fortress
            kasbahs like{" "}
            <a
              href="https://www.kasbahdif.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-casa-scarlet italic font-normal underline decoration-casa-scarlet/40 underline-offset-4 hover:decoration-casa-scarlet transition-all"
            >
              Kasbah d&apos;If
            </a>{" "}
            (frequently written as <em>Kasbah Dif</em>).
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="bg-casa-white/80 p-7 rounded-3xl border border-casa-scarlet/15 shadow-xs">
              <span className="text-casa-scarlet text-xs uppercase tracking-[0.2em] font-light block mb-2">
                Glamping Sanctuary
              </span>
              <h3 className="font-cormorant italic font-normal text-2xl text-casa-black mb-3">
                The Agafay Luxury Camp Experience
              </h3>
              <p className="text-base sm:text-lg text-casa-black/85 leading-relaxed font-normal">
                Staying at an <strong>Agafay luxury camp</strong>—whether tucked
                behind private ridges or perched on an undulating dune—delivers
                a nomadic chic ambiance. Think heavy white canvas tents adorned
                with handwoven Berber kilims, brass hurricane lamps, private
                wood decks, open-air fire pits, and infinity splash pools
                reflecting the vast open sky. It is designed for travelers who
                crave contemporary bohemian elegance, ambient deep-house music
                at dusk, and sleeping with only canvas between them and the
                desert wind.
              </p>
            </div>

            <div className="bg-casa-white/80 p-7 rounded-3xl border border-casa-scarlet/15 shadow-xs">
              <span className="text-casa-scarlet text-xs uppercase tracking-[0.2em] font-light block mb-2">
                Architectural Fortress
              </span>
              <h3 className="font-cormorant italic font-normal text-2xl text-casa-black mb-3">
                The Kasbah d&apos;If (Kasbah Dif) Experience
              </h3>
              <p className="text-base sm:text-lg text-casa-black/85 leading-relaxed font-normal">
                By contrast, <strong>Kasbah d&apos;If</strong> offers an
                architectural masterclass in ancient Moroccan earthcraft.
                Perched upon a high rocky outcrop with sweeping panoramic
                sightlines of the High Atlas Mountains, this secluded stone
                sanctuary provides deep thermal walls, shaded interior
                courtyards, hand-plastered tadelakt bathrooms, and unmatched
                tranquility. Kasbah Dif caters to lovers of timeless heritage,
                privacy, literature, and quiet meditation far away from the
                world.
              </p>
            </div>
          </div>
          <p className="pt-4">
            While their design aesthetics differ, both an Agafay luxury camp and
            Kasbah d&apos;If share one crucial geographic advantage: they rest
            right at the threshold of Lake Lalla Takerkoust. By understanding
            how to pair either desert sanctuary with the vibrant lakeside haven
            of Casa Lalla, travelers unlock the ultimate twenty-four-hour
            Moroccan itinerary.
          </p>
        </div>
      </section>

      {/* Section 2: Why Stay Needs a Lake Day + Responsive 3-Column Table */}
      <section className="my-16 bg-casa-white/80 rounded-3xl p-6 sm:p-10 border border-casa-scarlet/15 shadow-xs">
        <h2 className="font-cormorant italic font-normal text-2xl sm:text-3xl md:text-3.5xl text-casa-black mb-4 tracking-tight">
          Why Every Agafay Glamping &amp; Kasbah Dif Stay Needs a Lake Day at
          Casa Lalla Takerkoust
        </h2>
        <p className="text-lg sm:text-xl font-normal leading-relaxed text-casa-black/85 mb-8">
          The Agafay Desert is celebrated for its austere, lunar splendor. But
          because it is a stone desert rather than sand dunes, the afternoon sun
          radiates intensely off the chalky soil, transforming the midday hours
          (between 12:30 PM and 4:30 PM) into a quiet, sun-baked lull where
          outdoor activity is naturally curtailed. Retreating to an
          air-conditioned tent or indoor salon is one option—but descending the
          hill to Lake Lalla Takerkoust is where the real magic happens.
        </p>
        <p className="text-lg sm:text-xl font-normal leading-relaxed text-casa-black/85 mb-8">
          At Casa Lalla Takerkoust, a persistent mountain breeze cascades off
          the Atlas summits across the lake, lowering temperatures noticeably.
          Lush bougainvillea, olive groves, whitewashed terraces, and panoramic
          water views replace the dry dust with an invigorating Mediterranean
          feeling. Instead of choosing between desert and water, our guests
          seamlessly enjoy both.
        </p>

        {/* 3-Column Comparison Table in Cormorant Garamond */}
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-casa-scarlet/20">
                <th className="py-3 px-4 font-cormorant text-xs sm:text-sm uppercase tracking-widest text-casa-scarlet font-normal">
                  Dimension
                </th>
                <th className="py-3 px-4 font-cormorant text-xs sm:text-sm uppercase tracking-widest text-casa-black font-normal">
                  Agafay Luxury Camp
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
                  Atmosphere
                </td>
                <td className="py-4 px-4 text-casa-black/80 font-normal">
                  Bohemian glamping, candlelit dune paths, open sky romance
                </td>
                <td className="py-4 px-4 text-casa-black/80 font-normal">
                  Monastic serenity, ancient stone architecture, discreet luxury
                </td>
                <td className="py-4 px-4 text-casa-black/90 font-normal bg-casa-scarlet/5">
                  Lively waterfront dining, Ibiza-Mykonos day-club chic, breezy
                  relaxation
                </td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-normal text-casa-scarlet italic whitespace-nowrap">
                  Best Time of Day
                </td>
                <td className="py-4 px-4 text-casa-black/80 font-normal">
                  Sunrise, dusk &amp; midnight stargazing
                </td>
                <td className="py-4 px-4 text-casa-black/80 font-normal">
                  Quiet early mornings &amp; twilight reading
                </td>
                <td className="py-4 px-4 text-casa-black/90 font-normal bg-casa-scarlet/5">
                  Midday lunch (1:00–4:30 PM) &amp; golden hour cocktails
                </td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-normal text-casa-scarlet italic whitespace-nowrap">
                  Signature Experience
                </td>
                <td className="py-4 px-4 text-casa-black/80 font-normal">
                  Sleeping under canvas, fireside Berber storytelling &amp;
                  acoustic music
                </td>
                <td className="py-4 px-4 text-casa-black/80 font-normal">
                  Deep disconnection, authentic Moroccan craft, introspective
                  calm
                </td>
                <td className="py-4 px-4 text-casa-black/90 font-normal bg-casa-scarlet/5">
                  Fresh grilled lake fish, Mediterranean tapas, jet-skiing &amp;
                  pool daybeds
                </td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-normal text-casa-scarlet italic whitespace-nowrap">
                  Scenery
                </td>
                <td className="py-4 px-4 text-casa-black/80 font-normal">
                  Endless undulating chalk hills, moonlit canyons
                </td>
                <td className="py-4 px-4 text-casa-black/80 font-normal">
                  High rocky plateau dominating the southern desert horizon
                </td>
                <td className="py-4 px-4 text-casa-black/90 font-normal bg-casa-scarlet/5">
                  Turquoise reservoir waters meeting snow-capped High Atlas
                  peaks
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
            alt="Adventurous quad biking across rocky desert trails between Agafay luxury camp and Lake Takerkoust"
            title="Agafay Desert Quad Safari to Lake Takerkoust"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-bottom"
          />
          <div className="absolute bottom-0 inset-x-0 bg-casa-black/40 backdrop-blur-md p-4 text-casa-white text-base font-light italic tracking-wide">
            Morning quad adventure from the Agafay hills down to the lake
          </div>
        </div>
        <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-casa-scarlet/15 shadow-xs">
          <Image
            src="https://casalallatakerkoust.com/images/agafay-luxury-camp-poolside-lalla-takerkoust.webp"
            alt="Sun loungers and green vintage parasols by the swimming pool at a luxury camp near the Agafay Desert, overlooking the lake."
            title="Luxury Poolside Relaxing Near Agafay"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute bottom-0 inset-x-0 bg-casa-black/40 backdrop-blur-md p-4 text-casa-white text-base font-light italic tracking-wide">
            Poolside sunbeds and refreshing swims overlooking Lake Takerkoust
          </div>
        </div>
      </div>

      {/* Section 3: The Perfect 24-Hour Itinerary */}
      <section className="my-14">
        <h2 className="font-cormorant italic font-normal text-2xl sm:text-3xl md:text-3.5xl text-casa-black mb-6 tracking-tight">
          The Perfect 24-Hour Agafay &amp; Lalla Takerkoust Itinerary
        </h2>
        <p className="text-lg sm:text-xl font-normal leading-relaxed text-casa-black/85 mb-8">
          To help you maximize your time, our concierge team has designed the
          definitive 24-hour itinerary harmonizing desert glamping, kasbah
          heritage, and waterfront gastronomy:
        </p>

        <div className="space-y-8">
          {/* 10:00 AM */}
          <div className="relative pl-8 sm:pl-10 border-l-2 border-casa-scarlet/30">
            <div className="absolute -left-2.25 top-1 w-4 h-4 rounded-full bg-casa-scarlet" />
            <span className="text-xs uppercase tracking-[0.25em] text-casa-scarlet font-normal block mb-1">
              Morning • 10:00 AM
            </span>
            <h3 className="font-cormorant italic font-normal text-xl sm:text-2xl text-casa-black mb-2">
              Desert Wake-Up &amp; Guided Quad Safari
            </h3>
            <p className="text-base sm:text-lg text-casa-black/85 leading-relaxed font-normal">
              Awake to the golden dawn light breaking across the rocky ridges of
              your <strong>Agafay luxury camp</strong> or the terrace of{" "}
              <strong>Kasbah d&apos;If</strong>. After a traditional Moroccan
              breakfast of warm msemmen pastries, goat cheese, and spiced mint
              tea, don your sunglasses and scarf for a guided quad biking or
              dune buggy ride. Navigating through sculpted ravines and ancient
              dry riverbeds, your convoy trails southward toward the shimmering
              blue waters of Lake Lalla Takerkoust.
            </p>
          </div>

          {/* 1:00 PM */}
          <div className="relative pl-8 sm:pl-10 border-l-2 border-casa-scarlet/30">
            <div className="absolute -left-2.25 top-1 w-4 h-4 rounded-full bg-casa-scarlet" />
            <span className="text-xs uppercase tracking-[0.25em] text-casa-scarlet font-normal block mb-1">
              Midday • 1:00 PM
            </span>
            <h3 className="font-cormorant italic font-normal text-xl sm:text-2xl text-casa-black mb-2">
              Waterfront Lunch &amp; Chilled Rosé at Casa Lalla
            </h3>
            <p className="text-base sm:text-lg text-casa-black/85 leading-relaxed font-normal">
              Arrive at <strong>Casa Lalla Takerkoust</strong>, where
              whitewashed stonework and emerald garden parasols create an
              instant sanctuary from the midday heat. Take a seat on our
              panoramic open-air terrace facing the water. Indulge in freshly
              grilled catch of the day, tender slow-cooked beef shank tagines
              with caramelized prunes, vibrant Mediterranean mezze, and crisp
              chilled Gris de Guerrouane wine as soft lounge beats set the
              rhythm.
            </p>
          </div>

          {/* 3:30 PM */}
          <div className="relative pl-8 sm:pl-10 border-l-2 border-casa-scarlet/30">
            <div className="absolute -left-2.25 top-1 w-4 h-4 rounded-full bg-casa-scarlet" />
            <span className="text-xs uppercase tracking-[0.25em] text-casa-scarlet font-normal block mb-1">
              Afternoon • 3:30 PM
            </span>
            <h3 className="font-cormorant italic font-normal text-xl sm:text-2xl text-casa-black mb-2">
              Jet-Skiing, Hoverboarding &amp; Poolside Lounging
            </h3>
            <p className="text-base sm:text-lg text-casa-black/85 leading-relaxed font-normal">
              After lunch, trade desert dust for pure refreshment. Slip into
              Casa Lalla&apos;s swimming pool or reserve one of our private
              lakeside cabanas. For adventure enthusiasts, our water sports crew
              can launch private Yamaha jet-skis, organize flyboard sessions, or
              guide a serene private boat excursion across the mirror-like
              surface of Lake Lalla Takerkoust, flanked by the snow-capped High
              Atlas.
            </p>
          </div>

          {/* 5:30 PM */}
          <div className="relative pl-8 sm:pl-10 border-l-2 border-casa-scarlet/30">
            <div className="absolute -left-2.25 top-1 w-4 h-4 rounded-full bg-casa-scarlet" />
            <span className="text-xs uppercase tracking-[0.25em] text-casa-scarlet font-normal block mb-1">
              Golden Hour • 5:30 PM
            </span>
            <h3 className="font-cormorant italic font-normal text-xl sm:text-2xl text-casa-black mb-2">
              Lakeside Sunset Cocktails &amp; Evening Return to the Desert
            </h3>
            <p className="text-base sm:text-lg text-casa-black/85 leading-relaxed font-normal">
              As the afternoon fades into twilight, Lake Takerkoust displays an
              astounding palette of violet, gold, and burning terracotta. Savor
              a signature cocktail—such as our house spiced pomegranate
              spritz—as the sky catches fire over the water. Then, take the
              short 15-minute chauffeur transfer back up the trails to your
              Agafay luxury camp or Kasbah d&apos;If, arriving just in time for
              candlelit dinners, fireside acoustic melodies, and stargazing.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Single Image */}
      <div className="relative h-80 sm:h-110 rounded-3xl overflow-hidden border border-casa-scarlet/15 shadow-xs my-14">
        <Image
          src="https://casalallatakerkoust.com/images/kasbah-dif-rooftop-terrace-lake-views.webp"
          alt="Golden hour cocktails and bohemian waterfront lounge at Casa Lalla Takerkoust overlooking the Atlas Mountains"
          title="Golden Hour Sunset at Casa Lalla Takerkoust"
          fill
          sizes="100vw"
          className="object-cover object-bottom"
        />
        <div className="absolute bottom-0 inset-x-0 bg-casa-black/40 backdrop-blur-md p-5 text-casa-white text-base sm:text-lg font-light italic tracking-wide">
          Golden hour magic: sunset cocktails on the breezy waterfront terrace
          at Casa Lalla Takerkoust
        </div>
      </div>

      {/* Section 4: FAQs */}
      <section className="my-16">
        <h2 className="font-cormorant italic font-normal text-2xl sm:text-3xl md:text-3.5xl text-casa-black mb-6 tracking-tight">
          Frequently Asked Questions (Agafay Luxury Camps, Kasbah Dif &amp; Lake
          Takerkoust)
        </h2>
        <div className="space-y-4">
          <div className="bg-casa-white/80 p-6 rounded-2xl border border-casa-scarlet/15 shadow-2xs">
            <h3 className="font-cormorant italic font-normal text-xl sm:text-2xl text-casa-scarlet mb-2">
              How close is Casa Lalla Takerkoust to Kasbah d&apos;If and the
              main Agafay luxury camps?
            </h3>
            <p className="text-base sm:text-lg font-normal text-casa-black/85 leading-relaxed">
              Casa Lalla Takerkoust is situated just 12 to 15 kilometers (a
              scenic 15 to 20 minute drive) from Kasbah d&apos;If (Kasbah Dif)
              and the primary Agafay luxury camps such as Inara Camp, Scarabeo,
              and Terre des Étoiles. The route follows well-maintained paved
              roads and compacted gravel trails connecting the rocky desert
              plateau directly to the refreshing shoreline of Barrage Lalla
              Takerkoust.
            </p>
          </div>

          <div className="bg-casa-white/80 p-6 rounded-2xl border border-casa-scarlet/15 shadow-2xs">
            <h3 className="font-cormorant italic font-normal text-xl sm:text-2xl text-casa-scarlet mb-2">
              Can we visit Casa Lalla Takerkoust for lunch and jet-skiing
              without staying overnight at the lake?
            </h3>
            <p className="text-base sm:text-lg font-normal text-casa-black/85 leading-relaxed">
              Yes, absolutely. A significant portion of our daytime guests are
              travelers staying overnight at an Agafay luxury camp or Kasbah
              d&apos;If who wish to experience the lake for the afternoon. You
              can book an outdoor lunch table (open daily from 1:00 PM to 5:00
              PM), enjoy our pool daybeds, and participate in water activities
              before heading back to your desert accommodation for the evening.
            </p>
          </div>

          <div className="bg-casa-white/80 p-6 rounded-2xl border border-casa-scarlet/15 shadow-2xs">
            <h3 className="font-cormorant italic font-normal text-xl sm:text-2xl text-casa-scarlet mb-2">
              What is the best way to travel between an Agafay luxury camp,
              Kasbah Dif, and Lake Lalla Takerkoust?
            </h3>
            <p className="text-base sm:text-lg font-normal text-casa-black/85 leading-relaxed">
              The two premier options are:
              <br />
              <strong>1. Private Air-Conditioned SUV Transfer:</strong> Arranged
              conveniently through your camp or Kasbah Dif concierge (or via
              Casa Lalla), taking just 15 to 20 minutes door-to-door.
              <br />
              <strong>2. Guided Quad or Buggy Tour:</strong> For thrill-seekers,
              an off-road safari guide can lead you across the undulating lunar
              ridges, finishing at Casa Lalla right in time for lunch.
            </p>
          </div>
        </div>
      </section>

      {/* Minimalist CTA Card using exact globals.css colors */}
      <section className="my-16 bg-casa-scarlet rounded-3xl p-8 sm:p-12 text-casa-white shadow-md text-center font-cormorant">
        <span className="uppercase text-xs font-light tracking-[0.25em] text-casa-white/80 border border-casa-white/20 px-4 py-1.5 rounded-full inline-block mb-4 backdrop-blur-md">
          Plan Your Desert &amp; Lake Itinerary
        </span>
        <h2 className="font-cormorant italic font-normal text-2xl sm:text-3xl md:text-4xl text-casa-white mb-4 tracking-tight">
          Reserve Your Lake View Table at Casa Lalla Takerkoust
        </h2>
        <p className="text-base sm:text-lg font-light text-casa-white/90 max-w-xl mx-auto mb-8 leading-relaxed tracking-wider">
          Whether you are based at an Agafay luxury camp or staying at Kasbah
          d&apos;If, complete your Moroccan journey with waterfront dining,
          panoramic Atlas views, and poolside day passes at Casa Lalla.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/reservation"
            className="w-full sm:w-auto px-8 py-3 bg-casa-background text-casa-scarlet font-normal text-sm tracking-widest uppercase rounded-full hover:bg-casa-white transition-colors duration-200"
          >
            Book Your Table
          </Link>
          <Link
            href="/blog/kasbah-dif-agafay-guide-casa-lalla-takerkoust"
            className="w-full sm:w-auto px-8 py-3 bg-transparent border border-casa-white text-casa-white font-normal text-sm tracking-widest uppercase rounded-full hover:bg-casa-white hover:text-casa-scarlet transition-colors duration-200"
          >
            Kasbah d&apos;If Guide
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
          Open daily from 12:30 PM to 7:30 PM • Barrage Lalla Takerkoust,
          Marrakech
        </p>
      </section>
    </article>
  );
};

export default Content;
