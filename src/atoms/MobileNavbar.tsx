import React, { useState } from "react";
import { FiMenu, FiXCircle } from "react-icons/fi";
import assets from "../assets";
import { navbarData } from "../db/navbar";

const MobileNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="flex justify-between items-center w-full lg:hidden">
      <div className="flex items-center gap-3">
        <img src={assets.icon.LOGO} alt="icon" />
        <h1 className="text-[20px] font-grotesk font-normal">Positivus</h1>
      </div>
      <button
        className="cursor-pointer"
        onClick={() => {
          toggleMenu();
        }}
      >
        {!isMenuOpen && (
          <FiMenu className="text-2xl" />
        )}
      </button>
      {isMenuOpen && (
        <div className="fixed top-0 left-0 h-full w-full bg-black_color z-[1]">
          <div className="bg-black_color/90  w-full">
            <FiXCircle
              size={35}
              onClick={() => {
                toggleMenu();
              }}
              color="white"
              className="absolute top-10 right-5 cursor-pointer"
            />
            <ul className="flex flex-col items-center mt-20 gap-5 py-20">
              {navbarData?.map((nav, index) => (
                <li
                  key={index}
                  className="text-[25px] font-grotesk font-normal cursor-pointer hover:underline text-grey_color"
                  onClick={closeMenu}
                >
                  <a href={nav.url}>
                  {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
