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
                className={twMerge(
                  "bg-primary_color text-black_color font-grotesk text-[30px] font-medium px-4 max-w-[320px] rounded-lg",
                  service.textBackgroundColor && service.textBackgroundColor
                )}
              >
                {service.title}
              </p>
              <div className="flex items-center gap-[15px]">
                <img src={service.arrow} alt="black_arrow" />
                <p
                  className={twMerge(
                    "font-grotesk text-[20px] font-normal text-black_color cursor-pointer hover:underline hover:underline-offset-4",
                    service.learnMore
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
