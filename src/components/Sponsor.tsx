import { sponsor } from "../db/sponsor";
const Sponsor = () => {
  return (
    <div className="flex md:justify-between md:flex-wrap flex-wrap justify-center ">
      {sponsor.map((sponsors) => (
        <div className="w-[200px] h-[200px]">
          <img
            src={sponsors.image.src}
            alt="Image 1"
            className="w-full h-full brightness-0"
          />
        </div>
      ))}
    </div>
  );
};

export default Sponsor;
