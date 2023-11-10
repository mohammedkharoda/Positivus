import FooterBlock from "../atoms/footer/FooterBlock";
import FooterContact from "../atoms/footer/FooterContact";
import FooterRights from "../atoms/footer/FooterRights";

const Footer = () => {
  return (
    <>
      <div className="bg-black_color px-[60px] py-[50px] rounded-t-[30px] flex flex-col gap-[30px]">
        <FooterBlock />
        <FooterContact />
        <hr className="border-grey_color" />
        <FooterRights />
      </div>
    </>
  );
};

export default Footer;
