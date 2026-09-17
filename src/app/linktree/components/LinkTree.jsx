import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineMenuBook, MdOutlineLocalHotel } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";

const links = [
  {
    label: "Menu",
    href: "https://casalallatakerkoust.com/menu/",
    icon: MdOutlineMenuBook,
    external: false,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/casa.lalla.takerkoust/",
    icon: FaInstagram,
    external: true,
  },
  {
    label: "Location",
    href: "https://maps.app.goo.gl/CdZE6bLCs9tzvyJd7",
    icon: FaMapMarkerAlt,
    external: true,
  },
  {
    label: "Hotel",
    href: "https://casalallatakerkoust.com/rural-hotel/",
    icon: MdOutlineLocalHotel,
    external: false,
  },
  {
    label: "Pure House On The Lake",
    href: "https://purehouseonthelake.com/",
    icon: CgWebsite,
    external: true,
  },
];

const LinkTree = () => {
  return (
    <div className="w-full max-w-sm rounded-4xl p-8 text-white">
      {/* Avatar */}
      <div className="mb-5 flex justify-center drop-shadow-sm">
        <div className="rounded-full p-0.5">
          <div className="h-40 w-40 overflow-hidden">
            <Image
              src="/casa-lalla-logo-white.png"
              alt="Casa Lalla Takerkoust"
              width={1000}
              height={1000}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Name 
      <h1 className="text-center text-2xl font-light tracking-wide drop-shadow-sm">
        Enjoy Marrakech
      </h1>
      <p className="mt-1 text-center text-sm font-light text-white/75 drop-shadow-sm">
        with us
      </p>*/}

      {/* Links */}
      <nav className="mt-20 flex flex-col gap-3">
        {links.map(({ label, href, icon: Icon, external }) => (
          <Link
            key={label}
            href={href}
            {...(external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="group relative flex items-center justify-center rounded-xl border border-white/20 bg-casa-black/40 py-3.5 text-[15px] font-light text-white transition duration-300 ease-out hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 motion-reduce:transform-none shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]"
          >
            <Icon className="absolute left-6 text-lg opacity-90 transition-opacity group-hover:opacity-100" />
            <span className="pt-0.5">{label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default LinkTree;
