const FooterContact = () => {
  return (
    <div className="flex justify-between ">
      <div className="flex flex-col gap-3">
        <div className="bg-primary_color w-fit px-2 rounded-md">
          Contact us:
        </div>
        {/* address */}
        <div className="flex flex-col gap-4">
          <p className="text-[18px] font-grotesk font-normal leading-normal text-[#fff]">
            Email: info@positivus.com
          </p>
          <p className="text-[18px] font-grotesk font-normal leading-normal text-[#fff]">
            Phone: 555-567-8901
          </p>
          <p className="text-[18px] font-grotesk font-normal leading-normal text-[#fff]">
            Address: 1234 Main St{" "}
            <span className="font-grotesk text-[18px] max-w-[200px]">
              Moonstone City, Stardust State 12345
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterContact;
