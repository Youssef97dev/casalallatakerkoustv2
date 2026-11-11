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
          Boutique Stays &amp; Agafay Guide
        </span>
        <h1 className="font-cormorant italic font-normal text-3xl sm:text-4xl md:text-5xl text-casa-black leading-snug tracking-tight">
          Agafay Luxury Camp vs. Casa Lalla Takerkoust Rural Hotel: Where Should
          You Stay Outside Marrakech?
        </h1>
        <div className="w-12 h-px bg-casa-scarlet mx-auto mt-6 mb-4" />
        <p className="text-xs sm:text-sm text-casa-black/60 uppercase tracking-[0.2em] font-light">
          Curated by Casa Lalla Takerkoust Editorial • 10 min read
        </p>
      </header>

      {/* Intro (First 100 Words Requirement) */}
      <div className="mb-14">
        <p className="text-xl sm:text-2xl font-normal leading-relaxed text-casa-black/90">
          When planning an unforgettable escape south of Marrakech, reserving an{" "}
          <span className="text-casa-scarlet italic font-normal">
            Agafay luxury camp
          </span>{" "}
          often sits at the top of every traveler&apos;s itinerary. Yet many
          seasoned Moroccan adventurers hold an insider secret: while thousands
          flock to{" "}
          <span className="text-casa-scarlet italic font-normal">
            Casa Lalla Takerkoust
          </span>{" "}
          solely for its iconic waterfront restaurant and golden-hour sunset day
          passes, the exact same property is also an intimate, 9-room{" "}
          <span className="text-casa-scarlet italic font-normal">
            Casa Lalla Takerkoust Rural Hotel
          </span>{" "}
          (Hôtel Rural) overlooking Lake Lalla Takerkoust and the snow-capped
          High Atlas Mountains. Should you sleep under canvas in the arid stone
          desert, or book a boutique suite where the desert dunes meet the
          refreshing water?
        </p>
      </div>

      {/* Featured Images Grid 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
        <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-casa-scarlet/15 shadow-xs">
          <Image
            src="https://casalallatakerkoust.com/images/boutique-hotel-lalla-takerkoust-lake-view.webp"
            alt="Casa Lalla Takerkoust Rural Hotel exterior with direct panoramic views of Lake Lalla Takerkoust"
            title="Casa Lalla Takerkoust Rural Hotel & Lakeside Oasis"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-bottom"
          />
          <div className="absolute bottom-0 inset-x-0 bg-casa-black/40 backdrop-blur-md p-4 text-casa-white text-base font-light italic tracking-wide">
            Casa Lalla Takerkoust Rural Hotel: peaceful suites right by the
            water
          </div>
        </div>
        <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-casa-scarlet/15 shadow-xs">
          <Image
            src="https://casalallatakerkoust.com/images/casalalla-hotel-rural-lalla-takerkoust-poolside-loungers.webp"
            alt="Black sun loungers next to the swimming pool with traditional Moroccan floor tiles at Casalalla Hotel Rural"
            title="Poolside Loungers and Traditional Tiles at Casalalla Hotel Rural"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute bottom-0 inset-x-0 bg-casa-black/40 backdrop-blur-md p-4 text-casa-white text-base font-light italic tracking-wide">
            Architectural comfort and vintage warmth in our 9 boutique rooms
          </div>
        </div>
      </div>

      {/* Internal Linking Silo Box - Links to Guide 1 & Guide 2 */}
      <aside className="my-10 bg-casa-white/90 border-l-4 border-casa-scarlet p-6 rounded-r-2xl shadow-2xs font-cormorant space-y-3">
        <span className="text-xs uppercase tracking-[0.25em] text-casa-scarlet font-normal block">
          Complete Your Agafay &amp; Lake Experience
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          <div>
            <h4 className="font-cormorant italic font-normal text-lg sm:text-xl text-casa-black">
              <Link
                href="/blog/kasbah-dif-agafay-guide-casa-lalla-takerkoust"
                className="hover:text-casa-scarlet transition-colors underline decoration-casa-scarlet/30 underline-offset-4"
              >
                Staying at Kasbah d&apos;If? Why Visit Casa Lalla Nearby &rarr;
              </Link>
            </h4>
            <p className="text-sm text-casa-black/70 mt-1 font-light">
              Explore how our neighboring stone kasbah pairs with lakeside lunch
              and day passes.
            </p>
          </div>
          <div>
            <h4 className="font-cormorant italic font-normal text-lg sm:text-xl text-casa-black">
              <Link
                href="/blog/agafay-luxury-camp-kasbah-dif-lake-takerkoust-itinerary"
                className="hover:text-casa-scarlet transition-colors underline decoration-casa-scarlet/30 underline-offset-4"
              >
                The Ultimate Agafay Camp &amp; Lake Itinerary &rarr;
              </Link>
            </h4>
            <p className="text-sm text-casa-black/70 mt-1 font-light">
              How to seamlessly combine desert glamping, Kasbah d&apos;If, and
              waterfront dining.
            </p>
          </div>
        </div>
      </aside>

      {/* Section 1: Inside the Rural Hotel */}
      <section className="my-14">
        <h2 className="font-cormorant italic font-normal text-2xl sm:text-3xl md:text-3.5xl text-casa-black mb-6 tracking-tight">
          More Than a Waterfront Restaurant: Inside the Casa Lalla Takerkoust
          Rural Hotel
        </h2>

        <p className="text-lg sm:text-xl font-normal leading-relaxed text-casa-black/85 mb-6">
          To many travelers,{" "}
          <strong className="text-casa-scarlet font-normal">
            Casa Lalla Takerkoust
          </strong>{" "}
          is famous as the chic Mediterranean sanctuary where Marrakech&apos;s
          discerning crowd escapes for leisurely grilled fish lunches, crisp
          rosé, and jet-ski excursions across the shimmering blue reservoir.
          What remains a cherished secret among frequent visitors, however, is
          that tucked behind our whitewashed bougainvillea-covered archways lies
          an authentic, peaceful{" "}
          <strong className="text-casa-scarlet font-normal">
            lakeside hotel near Marrakech
          </strong>
          : the{" "}
          <strong className="text-casa-scarlet font-normal">
            Casa Lalla Takerkoust Rural Hotel
          </strong>
          .
        </p>

        <p className="text-lg sm:text-xl font-normal leading-relaxed text-casa-black/85 mb-6">
          Instead of impersonal mega-resorts or sterile desert lodges, Casa
          Lalla features just 9 individually curated rooms and suites. Each room
          blends vintage Moroccan craftsmanship, handcrafted zellij tiles, and
          organic linen textures with understated retro-bohemian sophistication.
          Because these suites are built with thick, solid masonry walls, they
          provide natural thermal insulation and complete acoustic serenity.
          While desert canvas flaps loudly in midnight gusts, rooms at Casa
          Lalla stay cool, quiet, and climate-controlled.
        </p>

        <p className="text-lg sm:text-xl font-normal leading-relaxed text-casa-black/85 mb-6">
          Waking up at the Rural Hotel is an experience of pure stillness. You
          step out onto private courtyards enveloped in jasmine, take your
          morning tea beside our private swimming pool oasis, and look straight
          across the still water at the snow-crested Atlas ridge. When lunchtime
          arrives, there is no need to hire an expensive driver or travel on
          dusty desert tracks: the renowned{" "}
          <strong className="text-casa-scarlet font-normal">
            Casa Lalla Takerkoust restaurant
          </strong>{" "}
          is already your living room.
        </p>
      </section>

      {/* Image Banner 1 */}
      <div className="relative h-80 sm:h-110 rounded-3xl overflow-hidden my-12 border border-casa-scarlet/15 shadow-sm">
        <Image
          src="https://casalallatakerkoust.com/images/casalalla-hotel-rural-lalla-takerkoust-dining-courtyard-art.webp"
          alt="View from the dining area into the sunny courtyard featuring striking wall art at Casalalla Hotel Rural Lalla Takerkoust"
          title="Courtyard View with Wall Art at Casalalla Hotel Rural Lalla Takerkoust"
          fill
          sizes="(max-width: 1024px) 100vw, 850px"
          className="object-cover object-bottom"
        />
        <div className="absolute bottom-0 inset-x-0 bg-casa-black/40 backdrop-blur-md p-4 sm:p-6 text-casa-white text-base sm:text-lg font-light italic tracking-wide">
          Private swimming pool and garden sunbeds exclusively for Rural Hotel
          guests
        </div>
      </div>

      {/* Section 2: Honest Comparison */}
      <section className="my-14">
        <h2 className="font-cormorant italic font-normal text-2xl sm:text-3xl md:text-3.5xl text-casa-black mb-6 tracking-tight">
          Agafay Luxury Camp vs. Casa Lalla Takerkoust Rural Hotel: The Honest
          Comparison
        </h2>

        <p className="text-lg sm:text-xl font-normal leading-relaxed text-casa-black/85 mb-6">
          Sleeping overnight in an{" "}
          <strong className="text-casa-scarlet font-normal">
            Agafay luxury camp
          </strong>{" "}
          has rightfully become a bucket-list spectacle. Golden hour across the
          lunar dunes, camel treks at sunset, and dining around an open fire
          under a sky ablaze with stars are unforgettable memories. However,
          many guests book three or four consecutive nights in a desert tent
          without realizing the physical realities of glamping in a stone
          desert.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-casa-white/80 p-6 rounded-2xl border border-casa-scarlet/15 shadow-2xs">
            <span className="text-xs uppercase tracking-[0.25em] text-casa-scarlet font-normal block mb-2">
              The Reality of Agafay Luxury Camps
            </span>
            <h3 className="font-cormorant italic font-normal text-xl sm:text-2xl text-casa-black mb-3">
              Canvas Glamping in the Arid Dunes
            </h3>
            <p className="text-base text-casa-black/85 leading-relaxed font-normal">
              Canvas tents are magical from 6:00 PM to 9:00 PM. But when midday
              temperatures rise, even air-conditioned tents struggle to remain
              cool under direct desert sun. Desert winds can whip fine dust
              through canvas zips at night, and daytime camp activities are
              strictly limited. Beyond quad excursions, guests often find
              themselves confined to small communal pool areas with minimal
              breeze.
            </p>
          </div>

          <div className="bg-casa-white/80 p-6 rounded-2xl border border-casa-scarlet/15 shadow-2xs">
            <span className="text-xs uppercase tracking-[0.25em] text-casa-scarlet font-normal block mb-2">
              The Casa Lalla Rural Hotel Alternative
            </span>
            <h3 className="font-cormorant italic font-normal text-xl sm:text-2xl text-casa-black mb-3">
              Lakeside Architectural Serenity
            </h3>
            <p className="text-base text-casa-black/85 leading-relaxed font-normal">
              At Casa Lalla Takerkoust Rural Hotel, solid walls keep your room
              whisper-quiet and naturally temperate. The vast water surface of
              Lake Lalla Takerkoust generates a refreshing microclimate 3–5°C
              cooler than the stone desert. You enjoy lush green gardens, direct
              lake access for water sports, a private resident pool, and a
              vibrant à la carte restaurant just steps from your bed.
            </p>
          </div>
        </div>

        {/* Clean Responsive Tailwind Comparison Table */}
        <div className="my-10 overflow-x-auto rounded-2xl border border-casa-scarlet/20 bg-casa-white/95 shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-casa-scarlet text-casa-white">
                <th className="p-4 sm:p-5 text-sm sm:text-base font-normal uppercase tracking-widest border-b border-casa-scarlet/30">
                  Feature / Criteria
                </th>
                <th className="p-4 sm:p-5 text-sm sm:text-base font-normal uppercase tracking-widest border-b border-casa-scarlet/30">
                  Agafay Luxury Camp (Canvas Glamping)
                </th>
                <th className="p-4 sm:p-5 text-sm sm:text-base font-normal uppercase tracking-widest border-b border-casa-scarlet/30 bg-casa-scarlet/90">
                  Casa Lalla Takerkoust (Rural Hotel &amp; Restaurant)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-casa-scarlet/10 text-sm sm:text-base">
              <tr className="hover:bg-casa-background/40 transition-colors">
                <td className="p-4 sm:p-5 font-semibold text-casa-black">
                  Accommodation Style
                </td>
                <td className="p-4 sm:p-5 text-casa-black/80">
                  Canvas nomad tents on gravel dunes; exposed to wind, dust, and
                  exterior noise.
                </td>
                <td className="p-4 sm:p-5 text-casa-black font-normal bg-casa-scarlet/5">
                  Solid boutique masonry rooms &amp; suites with handcrafted
                  Moroccan and retro-bohemian design.
                </td>
              </tr>
              <tr className="hover:bg-casa-background/40 transition-colors">
                <td className="p-4 sm:p-5 font-semibold text-casa-black">
                  Climate &amp; Comfort
                </td>
                <td className="p-4 sm:p-5 text-casa-black/80">
                  Intense midday heat, noticeable nighttime temperature drops,
                  wind rattling canvas walls.
                </td>
                <td className="p-4 sm:p-5 text-casa-black font-normal bg-casa-scarlet/5">
                  Full climate control, natural lake breezes, shaded jasmine
                  gardens, and peaceful night acoustics.
                </td>
              </tr>
              <tr className="hover:bg-casa-background/40 transition-colors">
                <td className="p-4 sm:p-5 font-semibold text-casa-black">
                  Dining On Site
                </td>
                <td className="p-4 sm:p-5 text-casa-black/80">
                  Fixed communal set menus with limited culinary flexibility or
                  seafood availability.
                </td>
                <td className="p-4 sm:p-5 text-casa-black font-normal bg-casa-scarlet/5">
                  Full à la carte Mediterranean &amp; Moroccan waterfront
                  dining, fresh grilled fish, artisan cocktails, and fine wines.
                </td>
              </tr>
              <tr className="hover:bg-casa-background/40 transition-colors">
                <td className="p-4 sm:p-5 font-semibold text-casa-black">
                  Daytime Activities
                </td>
                <td className="p-4 sm:p-5 text-casa-black/80">
                  Limited to desert quad/camel rides; midday requires remaining
                  in shaded camp areas.
                </td>
                <td className="p-4 sm:p-5 text-casa-black font-normal bg-casa-scarlet/5">
                  Direct access to both Agafay off-road trails AND lake
                  jet-skis, boat tours, daybeds, and pool lounging.
                </td>
              </tr>
              <tr className="hover:bg-casa-background/40 transition-colors">
                <td className="p-4 sm:p-5 font-semibold text-casa-black">
                  Ideal Length of Stay
                </td>
                <td className="p-4 sm:p-5 text-casa-black/80">
                  1 night (sufficient for photos, sunset, and starry sky).
                </td>
                <td className="p-4 sm:p-5 text-casa-black font-normal bg-casa-scarlet/5">
                  2 to 4 nights (ideal restorative countryside basecamp outside
                  Marrakech).
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg sm:text-xl font-normal leading-relaxed text-casa-black/85 mt-6">
          For many travelers, the ultimate Moroccan itinerary does not force an
          either/or choice: they spend <strong>one night</strong> at an Agafay
          luxury camp or our historic earthen neighbor{" "}
          <Link
            href="/blog/kasbah-dif-agafay-guide-casa-lalla-takerkoust"
            className="text-casa-scarlet underline decoration-casa-scarlet/30 hover:decoration-casa-scarlet"
          >
            Kasbah d&apos;If
          </Link>
          , followed by <strong>two to three relaxing nights</strong> at Casa
          Lalla Takerkoust Rural Hotel to recharge with swimming, fresh dining,
          and lake breezes.
        </p>
      </section>

      {/* Grid Images 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
        <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-casa-scarlet/15 shadow-xs">
          <Image
            src="https://casalallatakerkoust.com/images/casalalla-hotel-rural-lalla-takerkoust-swimming-pool.webp"
            alt="Relaxing swimming pool and courtyard area with lounge chairs at Casalalla Hotel Rural in Lalla Takerkoust"
            title="Swimming Pool and Courtyard at Casalalla Hotel Rural Lalla Takerkoust"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-bottom"
          />
          <div className="absolute bottom-0 inset-x-0 bg-casa-black/40 backdrop-blur-md p-4 text-casa-white text-base font-light italic tracking-wide">
            À la carte waterfront dining just a short stroll from your suite
          </div>
        </div>
        <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-casa-scarlet/15 shadow-xs">
          <Image
            src="https://casalallatakerkoust.com/images/casalallatakerkoust-restaurant-lake-view-terrace.webp"
            alt="Golden hour sunlight warming the courtyards of Casa Lalla Takerkoust Rural Hotel"
            title="Golden Hour Tranquility at Casa Lalla Hotel"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-bottom"
          />
          <div className="absolute bottom-0 inset-x-0 bg-casa-black/40 backdrop-blur-md p-4 text-casa-white text-base font-light italic tracking-wide">
            Golden hour sunset serenity across our tranquil garden courtyards
          </div>
        </div>
      </div>

      {/* Section 3: 24 Hours at Casa Lalla */}
      <section className="my-14">
        <h2 className="font-cormorant italic font-normal text-2xl sm:text-3xl md:text-3.5xl text-casa-black mb-6 tracking-tight">
          One Destination, Two Worlds: How the Rural Hotel &amp; Restaurant Work
          Together
        </h2>

        <p className="text-lg sm:text-xl font-normal leading-relaxed text-casa-black/85 mb-8">
          The true magic of Casa Lalla Takerkoust lies in its duality. During
          the afternoon, the property pulses with vibrant lounge music, festive
          gatherings, and open-air celebration. Yet for overnight guests of the
          Rural Hotel, the grounds transform into an exclusive, serene
          sanctuary. Here is how a seamless 24-hour stay unfolds:
        </p>

        <div className="space-y-6">
          <div className="bg-casa-white/80 p-6 rounded-2xl border border-casa-scarlet/15 shadow-2xs">
            <span className="text-xs uppercase tracking-[0.25em] text-casa-scarlet font-normal block mb-1">
              08:30 AM – Morning Stillness &amp; Desert Adventure
            </span>
            <h3 className="font-cormorant italic font-normal text-xl sm:text-2xl text-casa-black mb-2">
              Wake Up to Mirror-Like Waters
            </h3>
            <p className="text-base sm:text-lg font-normal text-casa-black/85 leading-relaxed">
              While day-trippers from Marrakech are still stuck in city traffic,
              you wake to total calm. Freshly squeezed Moroccan orange juice,
              warm msemen, amlou, eggs, and artisan coffee are served privately
              beside the pool or on your suite terrace. By 10:00 AM, a guided
              quad or buggy guide meets you at our front entrance to take you
              directly into the rugged ridges of the Agafay Desert—returning
              right as the sun reaches its zenith.
            </p>
          </div>

          <div className="bg-casa-white/80 p-6 rounded-2xl border border-casa-scarlet/15 shadow-2xs">
            <span className="text-xs uppercase tracking-[0.25em] text-casa-scarlet font-normal block mb-1">
              01:00 PM – Vibrant Waterfront Gastronomy
            </span>
            <h3 className="font-cormorant italic font-normal text-xl sm:text-2xl text-casa-black mb-2">
              The Best Table in the House
            </h3>
            <p className="text-base sm:text-lg font-normal text-casa-black/85 leading-relaxed">
              Stroll from your room straight to your reserved prime table at the{" "}
              <strong className="text-casa-scarlet font-normal">
                Casa Lalla Takerkoust restaurant
              </strong>
              . Savor Mediterranean sea bass grilled over open embers, fragrant
              lamb tagines with caramelized figs, crisp salads, and refreshing
              cocktails. Afterward, retire to our plush waterfront daybeds or
              take a high-speed jet-ski tour across the expanse of Lake Lalla
              Takerkoust.
            </p>
          </div>

          <div className="bg-casa-white/80 p-6 rounded-2xl border border-casa-scarlet/15 shadow-2xs">
            <span className="text-xs uppercase tracking-[0.25em] text-casa-scarlet font-normal block mb-1">
              06:30 PM &amp; Beyond – Golden Hour to Starlit Silence
            </span>
            <h3 className="font-cormorant italic font-normal text-xl sm:text-2xl text-casa-black mb-2">
              Sunset Cocktails and Intimate Countryside Sleep
            </h3>
            <p className="text-base sm:text-lg font-normal text-casa-black/85 leading-relaxed">
              As the afternoon guests begin their drive back to Marrakech, the
              lake falls into deep golden stillness. Sip a sunset spritz as the
              Atlas peaks blush rose-pink, followed by a romantic candlelit
              dinner under the stars. When you are ready to sleep, your room is
              just steps away—no navigating unlit desert tracks or bumpy gravel
              roads in the dark.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: FAQs */}
      <section className="my-16">
        <h2 className="font-cormorant italic font-normal text-2xl sm:text-3xl md:text-3.5xl text-casa-black mb-6 tracking-tight">
          Frequently Asked Questions (Casa Lalla Takerkoust Rural Hotel &amp;
          Agafay Luxury Camps)
        </h2>
        <div className="space-y-4">
          <div className="bg-casa-white/80 p-6 rounded-2xl border border-casa-scarlet/15 shadow-2xs">
            <h3 className="font-cormorant italic font-normal text-xl sm:text-2xl text-casa-scarlet mb-2">
              Does Casa Lalla Takerkoust have a hotel on the same property as
              the restaurant?
            </h3>
            <p className="text-base sm:text-lg font-normal text-casa-black/85 leading-relaxed">
              Yes. Casa Lalla Takerkoust is both a renowned waterfront
              Mediterranean-Moroccan restaurant and an authentic boutique Rural
              Hotel located on the exact same shoreline property. The hotel
              features 9 retro-bohemian rooms and suites, a private swimming
              pool oasis, and peaceful garden courtyards overlooking Lake Lalla
              Takerkoust and the High Atlas Mountains.
            </p>
          </div>

          <div className="bg-casa-white/80 p-6 rounded-2xl border border-casa-scarlet/15 shadow-2xs">
            <h3 className="font-cormorant italic font-normal text-xl sm:text-2xl text-casa-scarlet mb-2">
              Is it better to stay at an Agafay luxury camp or at the Casa Lalla
              Takerkoust Rural Hotel?
            </h3>
            <p className="text-base sm:text-lg font-normal text-casa-black/85 leading-relaxed">
              While an Agafay luxury camp offers a scenic 1-night desert
              glamping experience under canvas, the Casa Lalla Takerkoust Rural
              Hotel provides far greater comfort for multi-night getaways.
              Guests enjoy solid-wall acoustic privacy, modern climate control,
              lush shaded gardens, a private swimming pool, direct water sports,
              and full à la carte restaurant dining—free from the harsh daytime
              desert heat and nocturnal winds of canvas tents. Many guests spend
              one night glamping in Agafay followed by 2–3 relaxing nights at
              Casa Lalla.
            </p>
          </div>

          <div className="bg-casa-white/80 p-6 rounded-2xl border border-casa-scarlet/15 shadow-2xs">
            <h3 className="font-cormorant italic font-normal text-xl sm:text-2xl text-casa-scarlet mb-2">
              How close is the Casa Lalla Takerkoust Rural Hotel to the Agafay
              Desert camps and Kasbah d&apos;If?
            </h3>
            <p className="text-base sm:text-lg font-normal text-casa-black/85 leading-relaxed">
              Casa Lalla Takerkoust is situated just 12 to 15 kilometers (a
              scenic 15-to-20-minute drive) from the primary Agafay Desert camps
              (such as Inara Camp, Scarabeo, and Terre des Étoiles) and our
              neighboring heritage property Kasbah d&apos;If. The property sits
              right at the geographical crossroads where the stone desert dunes
              meet Lake Lalla Takerkoust.
            </p>
          </div>

          <div className="bg-casa-white/80 p-6 rounded-2xl border border-casa-scarlet/15 shadow-2xs">
            <h3 className="font-cormorant italic font-normal text-xl sm:text-2xl text-casa-scarlet mb-2">
              How do I book a room at the Rural Hotel along with a lakeside
              restaurant table?
            </h3>
            <p className="text-base sm:text-lg font-normal text-casa-black/85 leading-relaxed">
              You can inquire and book rooms directly through our{" "}
              <Link
                href="/rural-hotel/booking"
                className="text-casa-scarlet underline decoration-casa-scarlet/30 hover:decoration-casa-scarlet"
              >
                Rural Hotel booking page
              </Link>{" "}
              or connect instantly with our reservation concierge on WhatsApp (
              {siteConfig.phoneDisplay}). When reserving an overnight stay, our
              hospitality team automatically secures your preferred lakeside
              lunch and dinner tables at the Casa Lalla Takerkoust restaurant.
            </p>
          </div>
        </div>
      </section>

      {/* Dual-Action Conversion CTA Section */}
      <section className="my-16 bg-casa-scarlet rounded-3xl p-8 sm:p-12 text-casa-white shadow-md text-center font-cormorant">
        <span className="uppercase text-xs font-light tracking-[0.25em] text-casa-white/80 border border-casa-white/20 px-4 py-1.5 rounded-full inline-block mb-4 backdrop-blur-md">
          Plan Your Stay &amp; Dining
        </span>
        <h2 className="font-cormorant italic font-normal text-2xl sm:text-3xl md:text-4xl text-casa-white mb-4 tracking-tight">
          Experience Casa Lalla Takerkoust: Rural Hotel &amp; Lakeside Dining
        </h2>
        <p className="text-base sm:text-lg font-light text-casa-white/90 max-w-2xl mx-auto mb-8 leading-relaxed tracking-wider">
          Whether you are looking to reserve an overnight stay in our 9
          retro-bohemian rooms or join us for a sun-drenched waterfront lunch
          and sunset cocktails, our concierge is at your service.
        </p>

        {/* Primary CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/rural-hotel/booking"
            className="w-full sm:w-auto px-8 py-3 bg-casa-background text-casa-scarlet font-normal text-sm tracking-widest uppercase rounded-full hover:bg-casa-white transition-colors duration-200"
          >
            Book Hotel Stay
          </Link>
          <Link
            href="/reservation"
            className="w-full sm:w-auto px-8 py-3 bg-transparent border border-casa-white text-casa-white font-normal text-sm tracking-widest uppercase rounded-full hover:bg-casa-white hover:text-casa-scarlet transition-colors duration-200"
          >
            Reserve a Table
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

        {/* Silo Navigation Links */}
        <div className="mt-8 pt-6 border-t border-casa-white/20 flex flex-wrap justify-center gap-6 text-xs uppercase tracking-widest font-light text-casa-white/80">
          <Link
            href="/blog/kasbah-dif-agafay-guide-casa-lalla-takerkoust"
            className="hover:text-casa-white transition-colors underline decoration-casa-white/30 underline-offset-4"
          >
            Kasbah d&apos;If Guide &rarr;
          </Link>
          <Link
            href="/blog/agafay-luxury-camp-kasbah-dif-lake-takerkoust-itinerary"
            className="hover:text-casa-white transition-colors underline decoration-casa-white/30 underline-offset-4"
          >
            Agafay &amp; Lake Itinerary &rarr;
          </Link>
          <Link
            href="/rural-hotel"
            className="hover:text-casa-white transition-colors underline decoration-casa-white/30 underline-offset-4"
          >
            Explore the Rural Hotel &rarr;
          </Link>
        </div>

        <p className="text-xs text-casa-white/70 mt-6 font-light tracking-wider">
          Barrage Lalla Takerkoust, Marrakech • Hotel Open Year-Round •
          Restaurant Open Daily 1:00 PM – 5:00 PM
        </p>
      </section>
    </article>
  );
};

export default Content;
