"use client";
import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { RiArrowDownSLine } from "react-icons/ri";
import { MdLanguage } from "react-icons/md";

const Navbar = ({ content, change = false }) => {
  const { nav, locale } = content;
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const homeHref = locale === "fr" ? "/fr/" : "/";

  return (
    <nav
      className={`fixed z-50 w-full transition-all duration-300 py-0 flex flex-col justify-center items-center ${
        scrolled || change
          ? "bg-casa-background"
          : "bg-transparent text-casa-white"
      }`}
    >
      <div className="w-full flex justify-center items-center mx-auto px-5 lg:px-10">
        <div
          className="cursor-pointer w-[26%] text-[18px] lg:text-[30px]"
          aria-hidden="true"
        />
        <div className="w-[48%] flex justify-center items-center pb-1 z-20">
          <Link href={homeHref} aria-label="Casa Lalla Takerkoust">
            <Image
              src={
                scrolled || change
                  ? "/casa-lalla-scarlet.png"
                  : "/back-trans.png"
              }
              width={300}
              height={300}
              priority
              alt={nav.logoAlt}
              className="py-2 w-16.25 2xl:w-30"
            />
          </Link>
        </div>
        <div className="flex lg:justify-start justify-end items-center gap-5 w-[26%] z-20">
          <div className="w-full lg:flex hidden justify-end items-center text-casa-white cursor-pointer">
            <Link
              href={nav.reservationLink}
              className={`w-full rounded-full text-center uppercase lg:w-[60%] tracking-widest lg:tracking-[0.2em] text-[12px] 2xl:text-[24px] leading-3 py-3 px-2 2xl:py-5 transition-all duration-300 ease-in-out ${
                scrolled || change
                  ? "text-casa-scarlet bg-casa-background hover:bg-casa-scarlet hover:text-casa-background border-2 border-casa-scarlet"
                  : "text-casa-background bg-transparent hover:bg-casa-background hover:text-casa-scarlet border-2 border-casa-background"
              }`}
            >
              {nav.reservationLabel}
            </Link>
          </div>
          <button
            type="button"
            aria-label={isOpen ? nav.closeMenuAria : nav.openMenuAria}
            aria-expanded={isOpen}
            className={`cursor-pointer text-[35px] 2xl:text-[50px] p-0 bg-transparent border-none ${
              scrolled || change ? "text-casa-scarlet" : "text-casa-background"
            }`}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {!isOpen ? <IoIosMenu /> : <IoMdClose />}
          </button>
        </div>
      </div>

      {/* Desktop Sliding Dropdown Bar */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-500"
        enterFrom="transform -translate-y-full opacity-0"
        enterTo="transform -translate-y-0 opacity-100"
        leave="transition ease-in duration-500"
        leaveFrom="transform -translate-y-0 opacity-100"
        leaveTo="transform -translate-y-full opacity-0"
      >
        <div
          className={`z-10 w-full h-fit lg:flex items-center justify-center gap-4 px-5 mx-auto lg:px-10 py-1 hidden ${
            scrolled || change
              ? "bg-casa-background text-casa-scarlet"
              : "bg-transparent text-casa-white"
          }`}
        >
          <ul className="flex justify-center items-center gap-3 uppercase text-[12px] 2xl:text-[24px] leading-9 2xl:leading-11.5 font-light">
            {nav.links.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="hover:underline transition-all"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <div
                className="relative lg:block hidden"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <button
                  type="button"
                  aria-label={nav.langSwitcherAria}
                  aria-expanded={isDropdownOpen}
                  className={`font-light tracking-widest flex justify-center items-center text-[12px] 2xl:text-[24px] gap-2 pb-1 cursor-pointer bg-transparent border-none ${
                    scrolled || change ? "text-casa-scarlet" : "text-white"
                  }`}
                >
                  <MdLanguage />
                  <div>
                    <RiArrowDownSLine />
                  </div>
                </button>
                {isDropdownOpen && (
                  <ul className="absolute rounded top-8 -left-2 bg-casa-background mt-0 py-2 w-20 2xl:w-36 shadow-lg flex justify-center items-center gap-1 z-30">
                    <li className="px-2 py-0 rounded-lg cursor-pointer hover:bg-casa-scarlet hover:text-casa-background transition-all duration-200 ease-in-out font-light text-casa-scarlet">
                      <Link
                        rel="alternate"
                        hrefLang="en"
                        lang="en"
                        href="/"
                        aria-label={nav.switchToEnAria}
                        aria-current={locale === "en" ? "page" : undefined}
                      >
                        EN
                      </Link>
                    </li>
                    <li className="px-2 py-0 rounded-lg cursor-pointer hover:bg-casa-scarlet hover:text-casa-background transition-all duration-200 ease-in-out font-light text-casa-scarlet">
                      <Link
                        rel="alternate"
                        hrefLang="fr"
                        lang="fr"
                        href="/fr/"
                        aria-label={nav.switchToFrAria}
                        aria-current={locale === "fr" ? "page" : undefined}
                      >
                        FR
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>
          </ul>
        </div>
      </Transition>

      {/* Full-screen Mobile Menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-400"
        enterFrom="transform -translate-x-full opacity-0"
        enterTo="transform -translate-x-0 opacity-100"
        leave="transition ease-in duration-400"
        leaveFrom="transform -translate-x-0 opacity-100"
        leaveTo="transform -translate-x-full opacity-0"
      >
        <div className="fixed top-0 left-0 z-9999 w-full h-screen bg-casa-background flex flex-col items-left justify-start gap-11 py-6 px-6 uppercase lg:hidden overflow-y-auto">
          <div className="w-full flex justify-end items-center text-casa-scarlet text-[25px]">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label={nav.closeMenuAria}
              className="text-casa-scarlet p-1 bg-transparent border-none cursor-pointer"
            >
              <IoMdClose />
            </button>
          </div>
          <ul
            onClick={() => setIsOpen(false)}
            className="space-y-3 text-casa-scarlet leading-12.25 text-[16px] flex flex-col justify-center items-center font-light"
          >
            {nav.links.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link
                href={nav.reservationLink}
                className="tracking-[0.2em] text-[12px] leading-8.5 py-3 px-4 transition-all duration-300 ease-in-out border-2 border-casa-scarlet text-casa-scarlet rounded-full inline-block mt-2"
              >
                {nav.reservationLabel}
              </Link>
            </li>
            <li className="w-full">
              <ul className="py-2 w-full flex justify-center items-center gap-4 mt-2">
                <li className="px-2 rounded-lg cursor-pointer">
                  <Link
                    rel="alternate"
                    hrefLang="en"
                    lang="en"
                    href="/"
                    aria-label={nav.switchToEnAria}
                  >
                    <Image
                      src="/english.png"
                      width={100}
                      height={100}
                      alt="English language toggle"
                      className="w-7 h-7"
                    />
                  </Link>
                </li>
                <li className="px-2 rounded-lg cursor-pointer">
                  <Link
                    rel="alternate"
                    hrefLang="fr"
                    lang="fr"
                    href="/fr/"
                    aria-label={nav.switchToFrAria}
                  >
                    <Image
                      src="/france.png"
                      width={100}
                      height={100}
                      alt="French language toggle"
                      className="w-7 h-7"
                    />
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </Transition>
    </nav>
  );
};

export default Navbar;
