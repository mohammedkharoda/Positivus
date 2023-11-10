import { AiOutlineCopyright } from "react-icons/ai";

const FooterRights = () => {
  return (
    <div>
      <p className="inline-flex gap-4 items-center">
        <AiOutlineCopyright size={25} color="#fff" />
        <span className="text-[#fff]">
          2023 Positivus. All Rights Reserved.
        </span>
      </p>
    </div>
  );
};

export default FooterRights;
