import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

const ButtonWtsp = ({ content }) => {
  const { whatsappButton } = content;

  return (
    <Link
      href={siteConfig.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={whatsappButton.ariaLabel}
      className="block transition-transform duration-300 hover:scale-110 drop-shadow-md"
    >
      <Image
        src="/whatsapp.png"
        alt={whatsappButton.alt}
        width={56}
        height={56}
        className="w-12 h-12 object-contain"
      />
    </Link>
  );
};

export default ButtonWtsp;
