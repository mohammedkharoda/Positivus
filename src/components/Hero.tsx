import { heroData } from "../db/hero-section";
import Button from "../atoms/Button";
import assets from "../assets";
const Hero = () => {
  return (
    <div className="flex justify-between items-center">
      {/* left */}
      {heroData.map((hero, index) => (
        <div key={index} className="flex flex-col gap-5">
          <div className="font-grotesk text-[60px] font-medium leading-normal max-w-[600px]">
            {hero.title}
          </div>
          <div className="font-grotesk text-[20px] font-normal leading-[28px] text-black_color max-w-[600px]">
            {hero.subtitle}
          </div>
          <Button className="rounded-[14px] text-[#fff] w-fit">
            {hero.buttonText}
          </Button>
        </div>
      ))}
      {/* right */}
      <div className="w-[600px] h-[515px] hidden md:block">
        <img src={assets.images.HERO_ILLUSTRATION} />
      </div>
    </div>
  );
};

export default Hero;
