"use client";
import { useEffect, useState } from "react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

const logos = [
  "/logos/on-the-lake-logo.png",
  "/logos/casalalla-takerkoust-logo.png",
];

const LinkTree = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (!logos.length) return;
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % logos.length);
        setFade(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full rounded-3xl p-6 bg-casa-white  text-[#4A2C1C] shadow-lg relative">
      {/* Avatar */}
      <div className="flex justify-center mb-4">
        <div className="w-32 h-32  rounded-full bg-casa-background">
          <Image
            key={index}
            src={logos[index]}
            alt="rotating logo"
            width={500}
            height={500}
            className={`w-32 h-32  rounded-full object-cover border border-white transition-opacity duration-700 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>

      {/* Name */}
      <h2 className="text-center text-xl">Enjoy Marrakech</h2>
      <p className="text-center text-base mt-1 opacity-80">with us</p>

      {/* Buttons */}
      <div className="mt-8 w-full flex flex-col  justify-center items-center space-y-3">
        <Link
          href="https://www.instagram.com/casa.lalla.takerkoust"
          className="w-[85%] flex justify-start items-center pl-7 gap-3  py-3 bg-casa-background text-casa-black rounded-lg font-light shadow-lg hover:scale-105 transition-all duration-200 ease-in-out"
        >
          <FaInstagram />
          <span className="pt-0.5">Casa Lalla Takerkoust</span>
        </Link>

        <Link
          href="https://www.instagram.com/pure_house_on_the_lake_/"
          className="w-[85%] flex justify-start items-center pl-7 gap-3 py-3 bg-casa-background text-casa-black rounded-lg font-light shadow-lg hover:scale-105 transition-all duration-200 ease-in-out"
        >
          <FaInstagram />
          <span className="pt-0.5">Pure House On The Lake</span>
        </Link>
      </div>
    </div>
  );
};

export default LinkTree;
