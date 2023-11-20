import assets from "../assets";
import Button from "../atoms/Button";

const Proposal = () => {
  return (
    <div className="bg-grey_color md:px-[60px] p-20 flex gap-5 items-center justify-between rounded-[20px]">
      <div className="flex gap-4 flex-col">
        <p className="font-grotesk text-[#000] text-[30px] font-medium leading-normal">
          Let's make things happen
        </p>
        <p className="text-[#000] font-grotesk text-[18px] font-normal max-w-[550px]">
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>
        <Button className="text-[#fff] w-fit rounded-[20px] min-w-max">
          Get your free proposal
        </Button>
      </div>
      <div>
        <img
          src={assets.images.MAKE_IT_HAPPEN}
          alt="proposal"
          className="hidden md:block"
        />
      </div>
    </div>
  );
};

export default Proposal;
