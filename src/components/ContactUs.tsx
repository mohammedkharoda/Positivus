import React from "react";
import ContactUsForm from "../atoms/ContactUsForm";

const ContactUs = () => {
  return (
    <>
      <div className="flex gap-[40px] w-fit items-center">
        <div className="font-grotesk font-medium text-[40px] bg-primary_color text-black_color px-7 w-fit rounded-lg">
          Contact Us
        </div>
        <div className="text-[18px] font-grotesk font-normal leading-normal break-words max-w-[600px]">
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </div>
      </div>
      <ContactUsForm />
    </>
  );
};

export default ContactUs;
