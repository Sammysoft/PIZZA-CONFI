import React from "react";
import Logo from "./Logo";
import CustomBtn from "./CustomBtn";
import { RiArrowDropDownLine } from "react-icons/ri";

const Header = () => {
  return (
    <div className="py-4">
      <div className="container">
        <div className="flex__basic">
          <Logo />
          <CustomBtn
            title="English"
            customStyles="bg-[#1E1E1E] text-white justify-between hover:bg-[#272727] duration-150"
            icon={<RiArrowDropDownLine className="w-8 h-8 text-primary" />}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
