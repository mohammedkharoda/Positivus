import assets from "../assets";
import Button from "./Button";

const ContactUsForm = () => {
  return (
    <>
      <div className="bg-grey_color rounded-[25px] md:px-[100px] py-[60px] px-10">
        <div className="flex justify-between items-center gap-4">
          <div className="flex gap-[40px] flex-col w-full md:w-1/2">
            <div className="flex gap-[20px] flex-col">
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
                  className="border border-solid border-black_color rounded-lg px-[20px] py-[10px]"
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
                  className="border border-solid border-black_color rounded-lg px-[20px] py-[10px]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[20px] w-full">
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
                  cols={30}
                  id="message"
                  className="border-black_color border border-solid rounded-lg resize-none py-2 px-4"
                />
              </div>
            </div>
            <div>
              <Button className="text-[#fff] w-full rounded-[10px] mt-5 min-w-max">
                Send Message
              </Button>
            </div>
          </div>
          <div className="flex justify-end w-1/2">
            <img
              src={assets.images.GET_IN_TOUCH}
              alt="star-image"
              className="hidden md:hidden lg:block"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsForm;
