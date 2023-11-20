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
    console.log("close");
  };

  return (
    <div className="flex justify-between items-center w-full lg:hidden">
      <div className="flex items-center gap-3">
        <img src={assets.icon.LOGO} alt="icon" />
        <h1 className="text-[20px] font-grotesk font-normal">Positivus</h1>
      </div>
      <button
        className="cursor-pointer"
        onClick={isMenuOpen ? closeMenu : toggleMenu}
      >
        {isMenuOpen ? (
          <FiXCircle size={24} onClick={toggleMenu} />
        ) : (
          <FiMenu className="text-2xl" />
        )}
      </button>
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-50">
          <div className="bg-black_color/90 h-full w-full">
            <ul className="flex flex-col items-center mt-20 gap-5 py-20">
              {navbarData?.map((nav, index) => (
                <li
                  key={index}
                  className="text-[25px] font-grotesk font-normal cursor-pointer hover:underline text-grey_color"
                  onClick={closeMenu}
                >
                  {nav.title}
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
