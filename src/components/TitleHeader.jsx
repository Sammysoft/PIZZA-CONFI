import React from "react";
import Title from "./Title";

const TitleHeader = ({ title, desc, btn }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-3">
        <div className="w-full">
          <h1 className="text-lg lg:text-2xl font-bold">{title}</h1>
          <h4 className="mt-4">{desc}</h4>
        </div>

        {btn ? btn : null}
      </div>
      <hr className="border-[#ADADAD]" />
    </div>
  );
};

export default TitleHeader;
