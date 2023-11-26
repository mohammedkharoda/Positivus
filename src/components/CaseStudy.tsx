import CaseContainer from "../atoms/CaseContainer";
interface CaseStudyProps {
  id: string
}

const CaseStudy = ({ id }: CaseStudyProps) => {
  return (
    <>
      <div className="flex gap-[40px] w-fit md:items-center flex-wrap justify-center" id={id}>
        <div className="font-grotesk font-medium text-[40px] bg-primary_color text-black_color px-7 w-fit rounded-lg">
          Case Studies
        </div>
        <div className="text-[18px] font-grotesk font-normal leading-normal break-words max-w-[600px]">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </div>
      </div>
      <CaseContainer />
    </>
  );
};

export default CaseStudy;
