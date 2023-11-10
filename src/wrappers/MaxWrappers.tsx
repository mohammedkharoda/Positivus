import React from "react";

interface MaxWrapperprops {
  children: React.ReactNode;
}

const MaxWrapper = ({ children }: MaxWrapperprops) => {
  return (
    <div id="MaxWrapper" className="max-w-[1600px] w-[100%] m-auto">
      {children}
    </div>
  );
};

export default MaxWrapper;
