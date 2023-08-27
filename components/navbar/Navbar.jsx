"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import "@components/navbar/styles.module.css";
import Images from "@utils/images";

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

  useEffect(() => {
    console.log(isActive)
  }, [isActive])

  return (
    <nav className="navbar-container">
      
      {/* Branding & Logo */}
      <div className="flex items-center gap-x-2 z-20">
        <Image className="hidden md:flex" src={Images[6]} width={50} height={50} alt="Icon"/>
        <Link href="/" className="text-[2rem] md:text-[3.5rem] cursor-pointer flex gap-x-3">
          IKIGAI <span className="lg:hidden xl:flex">LIVING</span>
        </Link>
      </div>
      
      {/* Mobile Menu Icon */}
      <AiOutlineMenu className="block lg:hidden cursor-pointer" size={25} onClick={() => setIsActive(!isActive)}/>
      
      {/* Desktop Nav */}
      <ul className="hidden lg:flex justify-between items-center gap-[1rem] xl:gap-x-[2rem] text-[1.625rem]">
        {navItems.map((item, index) => (
          <Link
            href={item.href}
            target={item.name === "Shop Now" ? "_blank" : false}
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
      <ul className={`fixed h-[100vh] w-full overflow-x-hidden left-0 top-0 border-r border-r-gray-900 bg-white transform transition-all duration-500 z-50
      ${
        !isActive
          ? "translate-y-[-100%]"
          : "translate-x-0 lg:translate-x-[-100%]"
      }
      `}>
          <ul className="text-black text-[5rem]">
            1
          </ul>
          <ul className="text-black">
            1
          </ul>
          <ul className="text-black">
            1
          </ul>
          <AiOutlineClose className="cursor-pointer color-white" size={50} onClick={() => setIsActive(!isActive)}/>
      </ul>
      
      {/* Shop Link */}
      <Link
        href="https://www.ikigailiving.co.uk/s/shop"
        target="_blank"
        className="hidden lg:block text-end cursor-pointer transition-colors hover:text-[#ED1B24] hover:drop-shadow-xl ease-in-out duration-150 underline underline-offset-[0.5rem] text-[1.625rem]"
      >
        Shop Now 
      </Link>     
    </nav>
  );
};

export default Navbar;
