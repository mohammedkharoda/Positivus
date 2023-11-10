import assets from "../assets";
import Button from "./Button";

const ContactUsForm = () => {
  return (
    <>
      <div className="bg-grey_color rounded-[25px] px-[100px] py-[60px]">
        <div className="flex justify-between items-center">
          <div className="flex gap-[40px] flex-col">
            <div className="flex gap-[20px] flex-col w-fit md:w-2/3">
              <div className="flex flex-col gap-[10px]">
                <label
                  htmlFor="name"
                  className="font-grotesk text-[#000] text-[18px] font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="border-2 border-solid border-black_color rounded-[25px] px-[20px] py-[10px]"
                />
              </div>
              <div className="flex flex-col gap-[10px]">
                <label
                  htmlFor="email"
                  className="font-grotesk text-[#000] text-[18px] font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="border-2 border-solid border-black_color rounded-[25px] px-[20px] py-[10px]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[20px] w-fit">
              <div className="flex flex-col gap-[10px]">
                <label
                  htmlFor="Message"
                  className="font-grotesk text-[#000] text-[18px] font-medium"
                >
                  Message
                </label>
                <textarea
                  wrap="hard"
                  name="message"
                  rows={8}
                  cols={50}
                  id="message"
                  className="border-black_color border-2 border-solid resize-none"
                />
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <img src={assets.images.GET_IN_TOUCH} alt="star-image" />
          </div>
        </div>
        <Button className="text-[#fff] w-1/4 rounded-[10px] mt-5">
          Send Message
        </Button>
      </div>
    </>
  );
};

export default ContactUsForm;
