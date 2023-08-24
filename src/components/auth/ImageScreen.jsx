import React from "react";
import pacBox from "../../assets/package.png";

const ImageScreen = ({ desc }) => {
  return (
    <div className="w-[40%] hidden md:block">
      <h1 className="text-primary xl:text-4xl font-bold mb-4">
        <span className="text-[#1E1E1E]">Welcome to</span> Mypizzabox
      </h1>
      <p className="mb-12">{desc}</p>
      <img
        className="w-[300px] md:w-[300px] xl:w-[420px]"
        src={pacBox}
        alt="pizza boxs"
      />
    </div>
  );
};

export default ImageScreen;
