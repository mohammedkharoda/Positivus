import ContactUsForm from "../atoms/ContactUsForm";
interface ContactUsProps {
  id: string
}
const ContactUs = ({ id }: ContactUsProps) => {
  return (
    <>
      <div className="flex gap-[40px] w-fit md:items-center flex-wrap" id={id}>
        <div className="font-grotesk font-medium text-[40px] bg-primary_color text-black_color px-7 md:w-fit rounded-lg min-w-max">
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
