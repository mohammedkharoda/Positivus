import Card from "../atoms/Card";

const Services = () => {
  return (
    <>
      <div className="flex gap-[40px] w-fit items-center">
        <div className="font-grotesk font-medium text-[40px] bg-primary_color text-black_color px-7 w-fit rounded-lg">
          Services
        </div>
        <div className="text-[18px] font-grotesk font-normal leading-normal break-words max-w-[600px]">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-3 gap-4">
        <Card />
      </div>
    </>
  );
};

export default Services;
