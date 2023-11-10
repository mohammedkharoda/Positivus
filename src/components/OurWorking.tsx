import Accordion from "../atoms/Accordion";
import { workingProcess } from "../db/working";

const OurWorking = () => {
  return (
    <>
      <div className="flex gap-[40px] w-fit items-center">
        <div className="font-grotesk font-medium text-[40px] bg-primary_color text-black_color px-7 w-fit rounded-lg">
          Our Working Process
        </div>
        <div className="text-[18px] font-grotesk font-normal leading-normal break-words max-w-[600px]">
          Step-by-Step Guide to Achieving Your Business Goals
        </div>
      </div>
      {workingProcess.map((work, index) => (
        <Accordion
          title={`${work.title}`}
          content={`${work.content}`}
          index={index + 1}
        />
      ))}
    </>
  );
};

export default OurWorking;
