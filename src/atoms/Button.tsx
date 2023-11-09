import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

const Button = ({ children, className }: ButtonProps) => {
  return (
    <button
      className={twMerge(
        "px-[35px] py-[20px] bg-black_color text-white",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
