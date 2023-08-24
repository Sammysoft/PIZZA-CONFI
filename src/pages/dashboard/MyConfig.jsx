import React from "react";
import TitleHeader from "../../components/TitleHeader";
import CustomBtn from "../../components/CustomBtn";
import { BiChevronDown } from "react-icons/bi";
import frame from "../../assets/Frame.png";
import { IoMdAdd } from "react-icons/io";

const MyConfig = () => {
  return (
    <div className="w-full bg-[#DBD9D9] p-4 lg:p-16">
      <TitleHeader
        title="My Configuration"
        btn={
          <CustomBtn
            title="Recent"
            customStyles="bg-primary text-white"
            icon={<BiChevronDown className="w-8 h-8" />}
          />
        }
      />

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
        <div className="bg-white flex flex-col justify-center items-center p-4 lg:w-[300px] lg:h-[300px]">
          <img src={frame} alt="box image" />
        </div>

        <div className="flex flex-col justify-between items-center bg-transparent border border-dashed border-black px-4 py-8 h-[250px] lg:w-[300px] lg:h-[300px]">
          <div className="bg-primary bg-opacity-20 p-3">
            <IoMdAdd className="w-8 h-8 text-primary" />
          </div>

          <button className="w-full bg-primary text-white py-3 px-4">
            Add new configuration
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyConfig;
