const navItems = [
  {
    path: "/",
    name: "About",
  },
  {
    path: "/",
    name: "Events",
  },
  {
    path: "/",
    name: "Gift Card",
  },
  {
    path: "/",
    name: "Japan Festival 2023",
  },
  {
    path: "/",
    name: "Shop Now",
  },
];

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-8 mx-[8rem]">
      <p className="mr-[10rem] text-[1.75rem] cursor-pointer">IKIGAI LIVING</p>
      <ul className="hidden lg:flex justify-self-end items-center gap-x-[3rem] xl:text-[1.25rem]">
        {navItems.map((item, index) => (
          <li
            key={item.name}
            className={`cursor-pointer transition-colors hover:text-red-400 ease-in-out duration-150 
            ${
              index === 4 ? "underline underline-offset-[8px]" : ""
            }`}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
