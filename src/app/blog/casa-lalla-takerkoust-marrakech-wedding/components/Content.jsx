import Image from "next/image";
import React from "react";

const Content = () => {
  return (
    <section
      id="blog" // Changed ID to be more keyword-relevant than just "blog"
      className="grid grid-cols-1 gap-3 pt-32 pb-12 text-center"
      aria-labelledby="main-heading"
    >
      <header>
        <h1
          id="main-heading"
          className="font-canela text-[35px] leading-10.5 text-casa-black mx-8 lg:mx-56"
        >
          The Ultimate Lakeside Wedding Venue in Marrakech: Casa Lalla
          Takerkoust
        </h1>
        <h2 className="mt-4 font-canela italic text-[25px] leading-6.25 text-casa-black">
          Exceptional Mediterranean Dining & Sunset Wedding Receptions
        </h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-8 px-3 lg:px-14 mt-8">
        {/* Left Images Column */}
        <div className="w-full flex flex-col justify-start items-start gap-24">
          <Image
            src="/images/agafay-lakeside-destination-wedding-couple-sunset.webp"
            alt="Bride and groom sunset portrait during golden hour at Casa Lalla Takerkoust destination wedding venue near Agafay"
            title="Sunset Destination Wedding Portrait at Casa Lalla Takerkoust"
            width={500}
            height={500}
            priority // Added priority if this loads above the fold
            className="object-cover w-full h-full aspect-3/4 rounded-md"
          />
          <Image
            src="/images/ibiza-style-poolside-wedding-cocktail-reception-marrakech.webp"
            alt="Ibiza-style poolside lounge and cocktail hour reception at Casa Lalla Takerkoust venue near Marrakech"
            title="Poolside Wedding Cocktail Reception at Casa Lalla Takerkoust"
            width={500}
            height={500}
            loading="lazy"
            className="object-cover w-full h-full aspect-3/4 rounded-md"
          />
        </div>

        {/* Center Content Column */}
        <article className="w-full flex flex-col justify-start items-start text-left gap-10">
          <p className="text-[15px] leading-[25.5px] font-light text-casa-black">
            Nestled just 30 minutes outside the vibrant city center, Casa Lalla
            Takerkoust has emerged as one of the most romantic lakeside wedding
            venues near Marrakech. Blending effortless Ibiza and Mykonos
            boho-chic aesthetic with warm Moroccan hospitality, this premier
            Agafay Desert destination wedding venue offers a sun-drenched
            sanctuary where golden light reflects across the sparkling waters of
            Lake Lalla Takerkoust.
          </p>
          <p className="text-[15px] leading-[25.5px] font-light text-casa-black">
            Couples seeking an unforgettable outdoor wedding reception in
            Morocco can exchange vows on the panoramic open-air terrace, framed
            by whitewashed architecture, lush gardens, and sweeping backdrops of
            the snow-capped Atlas Mountains. Whether you are planning an
            intimate gathering or an exclusive venue privatization, a Casa Lalla
            Takerkoust wedding provides the perfect synthesis of luxury,
            serenity, and photogenic beauty for your dream celebration.
          </p>

          <p className="text-[15px] leading-[25.5px] font-light text-casa-black mt-4">
            Beyond its dreamy aesthetic, hosting your event at the Casa Lalla
            Takerkoust restaurant guarantees a world-class culinary celebration
            tailored to your vision. Consistently ranked among the top luxury
            dining spots near Marrakech, the restaurant crafts bespoke wedding
            menus that harmoniously combine authentic Moroccan cuisine with
            modern Mediterranean flavors—ranging from fresh seafood and
            farm-to-table delicacies to signature saffron-infused dishes. As
            golden hour fades into dusk, guests seamlessly transition from a
            stylish poolside lounge setting to a romantic sunset wedding dinner
            under the starlit skies. Complete with artisanal signature
            cocktails, vibrant atmosphere, and impecable service, a Casa Lalla
            Takerkoust restaurant wedding transforms your special day into an
            extraordinary destination experience your guests will treasure
            forever.
          </p>
        </article>

        {/* Right Images Column */}
        <div className="w-full flex flex-col justify-start items-start gap-24">
          <Image
            src="/images/boho-chic-wedding-reception-table-casa-lalla-takerkoust.webp"
            alt="Boho-chic wedding reception table decor with Mykonos style aesthetics at Casa Lalla Takerkoust restaurant"
            title="Boho-Chic Wedding Reception Decor at Casa Lalla Takerkoust"
            width={500}
            height={500}
            loading="lazy"
            className="object-cover w-full h-full aspect-3/4 rounded-md"
          />
          <Image
            src="/images/luxury-moroccan-mediterranean-wedding-catering-marrakech.webp"
            alt="Gourmet Moroccan and Mediterranean wedding menu dishes served at Casa Lalla Takerkoust restaurant"
            title="Moroccan-Mediterranean Wedding Catering at Casa Lalla Takerkoust"
            width={500}
            height={500}
            loading="lazy"
            className="object-cover w-full h-full aspect-3/4 rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Content;
