import { twMerge } from "tailwind-merge";
import assets from "../../assets";
import { navbarData } from "../../db/navbar";
import { FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";

const FooterBlock = () => {
  return (
    <>
      <div className="flex lg:justify-between lg:items-center md:flex-wrap md:gap-[30px] flex-wrap gap-[30px] ">
        {/* heading */}
        <div className="flex gap-3">
          <img src={assets.icon.FOOTER_ICON} alt="logo-positivus" />
          <h1 className="font-grotesk text-[20px] text-[#fff] font-bold">
            Positivus
          </h1>
        </div>
        {/* services */}
        <ul className="flex gap-8 items-center flex-wrap">
          {navbarData?.map((nav, index) => (
            <>
              <div key={nav.title}>
                <li
                  className={twMerge(
                    "text-[18px] text-[#fff] font-grotesk font-normal cursor-pointer hover:scale-125 hover:underline hover:underline-offset-4",
                    index === navbarData.length - 1 &&
                      "border border-black_color px-4 py-2 rounded-[10px] hover:bg-primary_color hover:text-black_color "
                  )}
                >
                  {nav.title}
                </li>
              </div>
            </>
          ))}
        </ul>
        {/* logos */}
        <div className="flex gap-[20px]">
          <div className="bg-grey_color p-2 rounded-[30px]">
            <FaLinkedinIn size={26} />
          </div>
          <div className="bg-grey_color p-2 rounded-[30px]">
            <RiTwitterXLine size={26} />
          </div>
          <div className="bg-grey_color p-2 rounded-[30px]">
            <BsInstagram size={26} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterBlock;
