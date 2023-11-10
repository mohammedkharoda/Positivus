import React from "react";
interface SecondaryWrapperProps {
  children: React.ReactNode;
}

const SecondaryWrapper = ({ children }: SecondaryWrapperProps) => {
  return <div className="w-[90%] m-auto">{children}</div>;
};

export default SecondaryWrapper;
