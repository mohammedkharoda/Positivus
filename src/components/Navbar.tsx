import assets from "../assets";
import { navbarData } from "../db/navbar";
import { twMerge } from "tailwind-merge";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center w-fit gap-5">
        <img src={assets.icon.LOGO} alt="icon" />
        <h1 className="text-[20px] font-grotesk font-normal">Positivus</h1>
      </div>
      {/* other services */}
      <div>
        <ul className="flex gap-8 items-center">
          {navbarData?.map((nav, index) => (
            <>
              <div key={nav.title}>
                <li
                  className={twMerge(
                    "text-[18px] font-grotesk font-normal cursor-pointer hover:scale-125 hover:underline hover:underline-offset-4",
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
      </div>
    </div>
  );
};
export default Navbar;
