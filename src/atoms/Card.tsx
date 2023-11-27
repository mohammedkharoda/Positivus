import { twMerge } from "tailwind-merge";
import { services } from "../db/services";

const Card = () => {
  return (
    <>
      {services.map((service) => (
        <>
          <div
            className={twMerge(
              "bg-black_color flex p-[50px] justify-between rounded-[20px] drop-shadow-xl",
              service.backgroundColor && service.backgroundColor
            )}
          >
            <div className="flex flex-col justify-between gap-5">
              <p
                className={"text-black_color font-grotesk text-[30px] font-medium px-4 max-w-[320px] rounded-lg"}
              >
                <span className={twMerge("p-1 rounded text-center box-decoration-clone", service.textBackgroundColor && service.textBackgroundColor)}>
                  {service.title}
                </span>
              </p>
              <div className="flex items-center gap-[15px] group">
                <img src={service.arrow} alt="black_arrow" className="transition-transform duration-300 group-hover:rotate-[30deg]" />
                <p
                  className={twMerge(
                    "font-grotesk text-[20px] font-normal text-black_color cursor-pointer hover:underline group-hover:underline-offset-4",
                    service?.learnMore
                  )}
                >
                  Learn more
                </p>
              </div>
            </div>
            <img
              src={service.serviceImage}
              alt="seo-image"
              className="hidden md:block"
            />
          </div>
        </>
      ))}
    </>
  );
};

export default Card;
