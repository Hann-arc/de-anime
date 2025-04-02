import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <div className="flex justify-between items-center text-white bg-[#222222] md:p-3 p-5 w-full">
     
        <div className="flex items-center gap-x-6">
          <RxHamburgerMenu
            size={24}
            className="cursor-pointer md:hidden"
            onClick={toggleMenu}
          />
          <a href="/" className="font-bold text-orange-500 cursor-pointer" >De-Anime</a>
          <a href="/recent" className="py-3 hover:text-orange-500 transition-colors hidden md:block cursor-pointer">Baru</a>
          <a href="/populer" className="py-3 hover:text-orange-500 transition-colors hidden md:block cursor-pointer">Populer</a>
          <a href="/completed" className="py-3 hover:text-orange-500 transition-colors hidden md:block cursor-pointer">Tamat</a>
          <a href="/schedule" className="py-3 hover:text-orange-500 transition-colors hidden md:block cursor-pointer">Jadwal Rilis</a>
        </div>
    
        <div className="flex items-center">
          <a href="/search"><IoIosSearch size={24} className="cursor-pointer" /></a>
          
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${
          isMenuOpen ? "opacity-50 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMenu}
      />
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#222222] z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
       
        <div className="flex justify-between items-center p-5 border-b border-gray-700">
          <p className="text-orange-500 font-bold">Menu</p>
          <IoMdClose
            size={24}
            className="text-white cursor-pointer"
            onClick={closeMenu}
          />
        </div>

        <div className="flex flex-col p-5 text-white">
          <a href="/" className="py-3 hover:text-orange-500 transition-colors">Beranda</a>
          <a href="/recent" className="py-3 hover:text-orange-500 transition-colors">Baru</a>
          <a href="/populer" className="py-3 hover:text-orange-500 transition-colors">Populer</a>
          <a href="/completed" className="py-3 hover:text-orange-500 transition-colors">Tamat</a>
          <a href="/schedule" className="py-3 hover:text-orange-500 transition-colors">Jadwal Rilis</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;