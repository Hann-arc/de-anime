import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const menuItems = [
    { path: "/recent", label: "Baru" },
    { path: "/populer", label: "Populer" },
    { path: "/completed", label: "Tamat" },
    { path: "/schedule", label: "Jadwal Rilis" },
  ];

  const isActive = (path) => location?.pathname === path;

  return (
    <>
      <div className="flex justify-between items-center bg-[#222222] md:p-3 p-5 w-full">
        <div className="bg-inherit flex items-center gap-x-6">
          <RxHamburgerMenu
            size={24}
            className="cursor-pointer md:hidden"
            onClick={toggleMenu}
          />
          <Link to="/" className="text-orange-500 font-bold ">
            De-Anime
          </Link>

          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`py-3 transition-colors hidden md:block cursor-pointer
                ${
                  isActive(item.path)
                    ? "text-orange-500"
                    : "hover:text-orange-500"
                }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className=" flex items-center">
          <Link to="/search">
            <IoIosSearch size={24} className="cursor-pointer" />
          </Link>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${
          isMenuOpen ? "opacity-50 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMenu}
      />
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#222222] z-100 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex  justify-between items-center p-5 border-b border-gray-700">
          <p className="text-orange-500 font-bold">Menu</p>
          <IoMdClose
            size={24}
            className="text-white cursor-pointer"
            onClick={closeMenu}
          />
        </div>

        {/* mobile */}

        <div className="flex flex-col p-5 text-white">
          <Link
            to="/"
            onClick={closeMenu}
            className={`py-3 transition-colors ${
              isActive("/") ? "text-orange-500" : "hover:text-orange-500"
            }`}
          >
            Beranda
          </Link>

          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              className={`py-3 transition-colors
                ${
                  isActive(item.path)
                    ? "text-orange-500"
                    : "hover:text-orange-500"
                }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
