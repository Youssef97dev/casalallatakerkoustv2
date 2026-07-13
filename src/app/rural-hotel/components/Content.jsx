import ImageSlider from "@/components/Slides";
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
        <div className="w-full flex flex-col justify-start items-start gap-0.5">
          <Image
            src="/images/boutique-hotel-lalla-takerkoust-lake-view.webp"
            alt="Exterior of Casa Lalla Hotel Rural overlooking the shimmering waters of Lake Lalla Takerkoust."
            title="Lake View Boutique Hotel — Casa Lalla Takerkoust"
            loading="lazy"
            width={500}
            height={500}
            className="object-cover w-full h-120 lg:h-110 rounded-xl"
          />
          <Image
            src="/images/patio-sofas-lounge-boutique-hotel-marrakech.webp"
            alt="Comfortable patio sofas under the shade, ideal for a peaceful afternoon escape."
            title="Comfortable Shaded Patio Lounge"
            loading="lazy"
            width={500}
            height={500}
            className="object-cover w-full h-120 lg:h-110 rounded-xl"
          />
          <Image
            src="/images/retro-bohemian-room-boutique-hotel-agafay.webp"
            alt="Spacious retro-bohemian guest room blending vintage warmth with understated elegance at Casa Lalla."
            title="Retro-Bohemian Guest Room — Agafay Area"
            loading="lazy"
            width={500}
            height={500}
            className="object-cover w-full h-120 lg:h-110 rounded-xl"
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
          <ImageSlider />
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-0.5">
          <Image
            src="/images/sunset-golden-hour-hotel-rural-lalla-takerkoust.webp"
            alt="Warm golden hour sunlight bathing the tranquil courtyards of Casa Lalla Hotel Rural."
            title="Golden Hour at Casa Lalla Hotel"
            loading="lazy"
            width={500}
            height={500}
            className="object-cover w-full h-120 lg:h-110 rounded-xl"
          />
          <Image
            src="/images/vintage-moroccan-decor-room-marrakech-getaway.webp"
            alt="Thoughtfully designed bedroom featuring vintage Moroccan decor and cozy textures for a relaxing stay."
            title="Vintage Moroccan Room Decor — Casa Lalla"
            loading="lazy"
            width={500}
            height={500}
            className="object-cover w-full h-120 lg:h-110 rounded-xl"
          />
          <Image
            src="/images/atlas-mountains-view-hotel-getaway-marrakech.webp"
            alt="Snow-capped Atlas Mountains serving as the backdrop for the serene Casa Lalla rural hotel."
            title="Atlas Mountains View Hotel Near Marrakech"
            loading="lazy"
            width={500}
            height={500}
            className="object-cover w-full h-120 lg:h-110 rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Content;
