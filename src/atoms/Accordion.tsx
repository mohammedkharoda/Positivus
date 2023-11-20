import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { BiMinus, BiPlus } from "react-icons/bi";
interface AccordionProps {
  title: string;
  content: string;
  index?: number;
}

const Accordion = ({ title, content, index }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={twMerge(
        " mb-4 border-2 border-solid border-black_color rounded-[25px] drop-shadow-md",
        !isOpen
          ? "bg-grey_color md:px-[60px] md:py-[40px]"
          : "bg-primary_color md:px-[60px] md:py-[40px]"
      )}
    >
      <div
        className="flex items-center justify-between p-4 bg-gray-800 text-white cursor-pointer flex-wrap md:flex-nowrap"
        onClick={toggleAccordion}
      >
        <div className="flex items-center gap-[25px]">
          <span className="font-grotesk text-[60px] text-[#000] font-medium leading-normal">
            0{index}
          </span>
          <span className="font-grotesk text-[#000] text-[30px] font-medium">
            {title}
          </span>
        </div>
        <span className="transform transition-transform">
          {isOpen ? (
            <div className="bg-[#fff] p-4 rounded-full">
              <BiMinus size={30} />
            </div>
          ) : (
            <div className="bg-[#fff] p-4 rounded-full">
              <BiPlus size={30} />
            </div>
          )}
        </span>
      </div>
      {isOpen && (
        <div className="p-4 bg-gray-700 text-white">
          <p className="font-grotesk text-[#000] text-[18px] leading-normal font-normal">
            {content}
          </p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
