"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "@components/navbar/styles.module.css";

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
  // {
  //   path: "/",
  //   name: "Shop Now",
  //   href: "https://www.ikigailiving.co.uk/s/shop"
  // },
];

const Navbar = () => {
  const path = usePathname();

  return (
    <nav className="navbar-container">
      <Link href="/" className="text-[2.5rem] cursor-pointer">
        IKIGAI LIVING
      </Link>

      <ul className="hidden lg:flex justify-self-end items-center gap-x-[3rem] xl:text-[1.1rem]">
        {navItems.map((item, index) => (
          <Link
            href={item.href}
            target={item.name === "Shop Now" ? "_blank" : ""}
            key={item.name}
            className={`relative cursor-pointer transition-colors hover:text-black hover:drop-shadow-xl ease-in-out duration-150 
            ${index === 4 ? "underline-offset-[8px]" : ""}`}
          >
            {item.href === path && (
              <motion.span
                layoutId="underline"
                className="absolute left-0 top-full block h-[1.25px] w-full bg-white mt-1"
              />
            )}
            {item.name}
          </Link>
        ))}
      </ul>

      <Link
        href="https://www.ikigailiving.co.uk/s/shop"
        target="_blank"
        className="cursor-pointer transition-colors hover:text-black hover:drop-shadow-xl ease-in-out duration-150 underline underline-offset-[0.5rem]"
      >
        Shop Now
      </Link>
    </nav>
  );
};

export default Navbar;
