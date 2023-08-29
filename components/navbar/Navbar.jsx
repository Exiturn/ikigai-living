"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import "@components/navbar/styles.module.css";
import Images from "@utils/images";
import Background from "@components/background/Background";

const navItems = [
  {
    path: "/",
    name: "About",
    href: "/about",
  },
  {
    path: "/",
    name: "Events",
    href: "/events",
  },
  {
    path: "/",
    name: "Gift Card",
    href: "/gift-card",
  },
  {
    path: "/",
    name: "Japan Festival 2023",
    href: "/japan-festival-2023",
  },
  {
    path: "/",
    name: "Shop Now",
    href: "https://www.ikigailiving.co.uk/s/shop",
  },
];

const Navbar = () => {
  const path = usePathname();

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {}, [isActive]);

  return (
    <nav className="navbar-container">
      {/* Branding & Logo */}
      <div className="flex items-center gap-x-2 z-20">
        <motion.img
          whileHover={{
            rotateZ: 180,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
          className="hidden md:flex"
          width={50}
          height={50}
          src="/image/icon.svg"
          alt="Icon"
        />
        <Link
          href="/"
          className="text-[1.5rem] md:text-[2.5rem] cursor-pointer flex gap-x-3"
        >
          IKIGAI <span className="lg:hidden xl:flex">LIVING</span>
        </Link>
      </div>

      {/* Mobile Menu Icon */}
      <AiOutlineMenu
        className="block lg:hidden cursor-pointer"
        size={25}
        onClick={() => setIsActive(!isActive)}
      />

      {/* Desktop Nav */}
      <ul className="hidden lg:flex justify-between items-center gap-[1rem] xl:gap-x-[2rem] text-[1.25rem]">
        {navItems.map((item, index) => (
          <Link
            href={item.href}
            target={item.name === "Shop Now" && "_blank"}
            key={item.name}
            className={`relative cursor-pointer transition-colors hover:text-[#ED1B24] hover:drop-shadow-xl ease-in-out duration-150
            ${index === 4 ? "hidden" : ""}
            ${item.href === path && "text-[#ED1B24]"}`}
          >
            {item.href === path && (
              <motion.span
                layoutId="underline"
                className="absolute left-0 top-full block h-[2px] w-full bg-[#ED1B24] mt-1"
              />
            )}
            {item.name}
          </Link>
        ))}
      </ul>

      {/* Mobile Nav Menu */}
      <ul
        className={`fixed h-[100vh] w-full overflow-x-hidden left-0 top-0 border-r border-r-gray-900 bg-[#f4f4f4] transform transition-all 
        duration-500 z-50 flex flex-col justify-between items-center
      ${
        !isActive
          ? "translate-y-[-100%]"
          : "translate-y-0 lg:translate-y-[-100%]"
      }
      `}
      >
        <Background />

        <div className="flex flex-row justify-between items-center w-full px-4 mt-10 relative">
          <Link
            href="/"
            className="text-[2rem] md:text-[3.5rem] cursor-pointer flex gap-x-3"
            onClick={() => setIsActive(!isActive)}
          >
            IKIGAI <span className="lg:hidden xl:flex">LIVING</span>
          </Link>
          <AiOutlineClose
            className="cursor-pointer color-white"
            size={35}
            onClick={() => setIsActive(!isActive)}
          />
        </div>
        <div className="flex flex-col justify-center items-center place-self-center gap-y-5">
          {navItems.map((item, index) => (
            <Link
              href={item.href}
              onClick={() => setIsActive(!isActive)}
              target={item.name === "Shop Now" && "_blank"}
              key={item.name}
              className={`relative cursor-pointer transition-colors hover:text-[#ED1B24] hover:drop-shadow-xl ease-in-out duration-150 text-center
            ${index === 4 ? "hidden" : ""}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <Link
          href="https://www.ikigailiving.co.uk/s/shop"
          target="_blank"
          className="text-end cursor-pointer transition-colors hover:text-[#ED1B24] hover:drop-shadow-xl ease-in-out duration-150 underline underline-offset-[0.5rem] mb-10"
        >
          Shop Now
        </Link>
      </ul>

      {/* Shop Link */}
      <Link
        href="https://www.ikigailiving.co.uk/s/shop"
        target="_blank"
        className="hidden lg:block text-end cursor-pointer transition-colors hover:text-[#ED1B24] hover:drop-shadow-xl ease-in-out duration-150 underline underline-offset-[0.5rem] text-[2rem]"
      >
        Shop Now
      </Link>
    </nav>
  );
};

export default Navbar;
