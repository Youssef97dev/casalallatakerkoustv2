import Image from "next/image";
import React from "react";

const Content = () => {
  return (
    <section
      id="events"
      className="grid grid-cols-1 gap-3 pt-32 pb-12 text-center"
    >
      <h2 className="font-canela text-[35px] leading-10.5 text-casa-black mx-8 lg:mx-56">
        Boutique Hotel Lalla Takerkoust: The Agafay Lake Oasis
      </h2>
      <h3 className="mt-4 font-canela italic text-[25px] leading-6.25 text-casa-black">
        9 Retro-Bohemian Rooms Where the Atlas Mountains Meet the Desert
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-8 px-3 lg:px-14 10 mt-8">
        <div className="w-full flex flex-col justify-start items-start gap-24">
          <Image
            src="/menu/im-1.jpeg"
            alt="Panoramic lake view terrace at Casa Lalla Takerkoust, a luxury Mykonos-style day club near Marrakech"
            title="Casa Lalla Takerkoust Luxury Lake View Terrace"
            loading="lazy"
            width={500}
            height={500}
            className="object-cover w-full h-125"
          />
          <Image
            src="/menu/im-2.jpeg"
            alt="Exclusive dining experience in the Agafay Desert featuring luxury Ibiza vibes and premium Marrakech restaurant service"
            title="Exclusive Agafay Desert Restaurant & Luxury Dining"
            loading="lazy"
            width={500}
            height={500}
            className="object-cover w-full h-125"
          />
          <Image
            src="/menu/im-3.jpeg"
            alt="Chic Ibiza and Mykonos style restaurant setting offering a VIP luxury day club experience near the Agafay Desert"
            title="Ibiza & Mykonos Style Luxury Restaurant Near Agafay"
            loading="lazy"
            width={500}
            height={500}
            className="object-cover w-full h-125"
          />
        </div>
        <div className="w-full flex flex-col justify-start items-center text-left gap-10">
          <p className="text-[15px] leading-[25.5px] font-light text-casa-black">
            Just steps from the shimmering waters of Lake Lalla Takerkoust, Casa
            Lalla Hotel Rural offers a serene, design-forward escape unlike
            anything else in the region. Perfectly positioned at the exact
            geographical crossroads where the snow-capped peaks of the Atlas
            Mountains meet the golden dunes of the Agafay Desert, this is your
            cinematic retreat located just a short drive from the center of
            Marrakech.
          </p>
          <p className="text-[15px] leading-[25.5px] font-light text-casa-black">
            We have traded generic resort layouts for authentic soul and
            character. Our boutique property features exactly 9 thoughtfully
            designed rooms, each blending vintage Moroccan warmth with an
            understated, retro-bohemian elegance. Mornings here begin gently
            with a curated breakfast served poolside. As the midday sun arrives,
            sink into a plush sunbed or curl up on our shaded patio sofas—the
            perfect aesthetic environment to read, unwind, and disconnect.
          </p>
          <h2 className=" font-canela italic text-[25px] leading-6.25 text-casa-black">
            Seamless Transitions from Poolside to Sunset Dining
          </h2>
          <div className="text-[15px] leading-[25.5px] font-light text-casa-black">
            <p className="text-[15px] leading-[25.5px] font-light text-casa-black">
              Casa Lalla Takerkoust {"isn't"} just a place to sleep—it is an
              invitation to experience the ultimate Mediterranean-inspired
              lifestyle in Morocco. When evening falls, the energy transitions
              effortlessly. Guests can choose to stay in the serene comfort of
              the hotel for an intimate meal, or step over to our vibrant nearby
              restaurant for a signature dining experience and sunset cocktails
              by the water.
            </p>
            <ul className="list-disc list-inside mt-5 pl-8 space-y-3">
              <li>
                <strong>Intimate Boutique Scale:</strong> Only 9 thoughtfully
                designed retro-bohemian rooms ensuring privacy and tranquility.
              </li>
              <li>
                <strong>Prime Geo-Location:</strong> The perfect basecamp
                bridging the Agafay Desert dunes and Lake Lalla Takerkoust.
              </li>
              <li>
                <strong>Curated Pool Oasis:</strong> Guest access to our
                tranquil swimming pool, premium sunbeds, and patio lounges.
              </li>
              <li>
                <strong>Morning Dining:</strong> Fresh, complimentary breakfast
                served daily by the poolside.
              </li>

              <li>
                <strong>Restaurant Access:</strong> Just a short walk to the
                main Casa Lalla dining experience and sunset lounge.
              </li>
              <li>
                <strong>Cinematic Views:</strong> Uninterrupted vantage points
                of the water, desert, and snow-capped Atlas Mountains.
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-24">
          <Image
            src="/menu/im-8.jpeg"
            alt="Stunning boho-chic interior design at our luxury lakeside restaurant, blending Mykonos aesthetics with Marrakech charm"
            title="Boho-Chic Interior Design at Our Luxury Lakeside Restaurant"
            loading="lazy"
            width={500}
            height={500}
            className="object-cover w-full h-125"
          />
          <Image
            src="/menu/im-5.jpeg"
            alt="Breathtaking views of the snow-capped High Atlas Mountains from our exclusive Ibiza-style day club near Marrakech"
            title="Stunning High Atlas Mountain Views from Our Luxury Day Club"
            loading="lazy"
            width={500}
            height={500}
            className="object-cover w-full h-125"
          />
          <Image
            src="/menu/im-6.jpeg"
            alt="The best Ibiza-style luxury restaurant and day club experience at Lake Lalla Takerkoust in Marrakech"
            title="Best Ibiza-Style Luxury Restaurant Experience in Marrakech"
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
