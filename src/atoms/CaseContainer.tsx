import { twMerge } from "tailwind-merge";
import assets from "../assets";
import { caseStudy } from "../db/case-study";

const CaseContainer = () => {
  return (
    <div className="bg-black_color px-[60px] py-[70px] rounded-[25px]">
      <div className="flex md:flex-nowrap flex-wrap gap-10">
        {caseStudy.map((item, index) => (
          <div
            className={twMerge(
              "text-[#fff] font-grotesk text-[18px] font-normal md:border-b-0 md:border-r-2 border-b-2 text-center md:text-left md:pr-4 ml-6 pb-5",
              index === caseStudy.length - 1 ? "border-0" : "border-[#fff] mx-3"
            )}
            key={index}
          >
            {item.case}
            <div className="group flex items-center gap-[15px] pt-5 justify-center md:justify-normal cursor-pointer">
              <p className="text-primary_color group-hover:underline">Learn More</p>
              <img src={assets.icon.GREEN_ARROW} alt="green arrow" className="transition-transform duration-300 group-hover:rotate-[30deg]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseContainer;
