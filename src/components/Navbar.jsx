import React, { useEffect, useState } from "react";
import images from "../assets/images/Logo.svg";
import images1 from "../assets/images/shopping bag.svg";
import images2 from "../assets/images/search.svg";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const menuLinks = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "SHOOP", link: "#shoop" },
    { name: "CONTACT", link: "#contact" },
  ];
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <nav className={`fixed w-screen left-0 top-0 z-[999] text-black md:px-10 px-5 ${sticky ? "backdrop-blur-lg" : " "}`}>
      <div className="flex items-center justify-between">
        <div className="m-5">
          <img src={images} alt="logo" />
        </div>
        <p className="-ml-[15rem] xl:-ml-[0.5rem]">Toutem</p>
        <div className="md:bg-white/0 bg-white text-black md:block hidden px-7 py-2 font-medium  rounded-bl-full mx-[25rem]">
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-6 hover:text-cyan-600">
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}

          </ul>
        </div>
        <div className="hidden md:block">
          <div className="flex gap-3">
            <img src={images1} alt="search" />
            <img src={images2} alt="bucket" />
          </div>
        </div>
        <div onClick={() => setOpen(!open)} className={`z-[999]  ${open ? "text-gray-900" : "text-gray-900"} text-3xl md:hidden m-5`}>
          <ion-icon name="menu"></ion-icon>
        </div>
        <div className={`md:hidden text-gray-900 absolute w-2/3 h-screen px-7 py-2 font-medium bg-white top-0 duration-300 ${open ? "right-0" : "right-[-100%]"}`}>
          <ul className="flex flex-col justify-center h-[30em] gap-10 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li onClick={() => setOpen(false)} key={i} className="px-6 hover:text-cyan-600">
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
          <div className="flex gap-5">
            <img src={images1} alt="search" />
            <img src={images2} alt="bucket" />
          </div>
        </div>
      </div>
    </nav >
  );
};

export default Navbar;
