import React from "react";
import { navbarData } from "../db/navbar";
import { twMerge } from "tailwind-merge";
import assets from "../assets";
import MobileNavbar from "../atoms/MobileNavbar";

const Navbar: React.FC = () => {
  return (
    <div className="mt-10 flex justify-between items-center">
      {/* Desktop Navbar */}
      <div className="hidden lg:flex items-center w-fit gap-5">
        <img src={assets.icon.LOGO} alt="icon" />
        <h1 className="text-[20px] font-grotesk font-normal">Positivus</h1>
      </div>

      {/* Mobile Navbar */}
      <MobileNavbar />

      {/* Desktop Navigation */}
      <div className="hidden lg:block">
        <ul className="flex gap-8 items-center">
          {navbarData?.map((nav, index) => (
            <li
              key={nav.title}
              className={twMerge(
                "text-[18px] font-grotesk font-normal cursor-pointer hover:scale-110 hover:underline hover:underline-offset-4",
                index === navbarData.length - 1 &&
                "border border-black_color px-4 py-2 rounded-[10px] hover:bg-primary_color, hover:text-black_color hover:no-underline"
              )}
            >
              <a
                href={nav.url}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
