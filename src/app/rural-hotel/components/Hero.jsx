"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-[#F7F3EE] overflow-hidden pt-5">
      <div className="max-w-7xl mx-auto min-h-screen px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 items-center gap-20 py-24">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="uppercase tracking-[6px] text-sm text-[#A58D6A]">
              Rural Hotel
            </span>

            <h1 className="mt-6 text-6xl lg:text-7xl leading-tight font-serif text-[#2D241C]">
              A Peaceful Escape
              <br />
              by the Lake
            </h1>

            <p className="mt-10 text-lg leading-9 text-[#5F574F] max-w-xl">
              Experience authentic Moroccan hospitality, elegant rooms,
              breathtaking lake views, exceptional cuisine and unforgettable
              sunsets in Lalla Takerkoust.
            </p>

            <div className="flex gap-5 mt-14">
              <button className="bg-[#2D241C] text-white px-8 py-4 rounded-full hover:bg-[#A58D6A] duration-300">
                Book your stay
              </button>

              <button className="border border-[#2D241C] px-8 py-4 rounded-full hover:bg-[#2D241C] hover:text-white duration-300">
                Discover
              </button>
            </div>
          </motion.div>

          {/* IMAGE */}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[750px] rounded-[40px] overflow-hidden shadow-2xl">
              <Image
                src="/menu/im-12.jpeg"
                fill
                priority
                className="object-cover hover:scale-105 duration-700"
                alt="Casa Lalla Takerkoust Rural Hotel"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
