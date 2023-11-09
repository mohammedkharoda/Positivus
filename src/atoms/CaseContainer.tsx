import { twMerge } from "tailwind-merge";
import assets from "../assets";
import { caseStudy } from "../db/case-study";

const CaseContainer = () => {
  return (
    <div className="bg-black_color px-[60px] py-[70px]">
      <div className="flex">
        {caseStudy.map((item, index) => (
          <div
            className={twMerge(
              "text-[#fff] font-grotesk text-[18px] font-normal border-r-2 ml-6",
              index === caseStudy.length - 1 ? "border-0" : "border-[#fff] mx-3"
            )}
            key={index}
          >
            {item.case}
            <div className="flex items-center gap-[15px]">
              <p className="text-primary_color">Learn More</p>
              <img src={assets.icon.GREEN_ARROW} alt="green arrow" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseContainer;
