import React from "react";
import TitleHeader from "../../components/TitleHeader";
import CustomBtn from "../../components/CustomBtn";
import { BiChevronDown } from "react-icons/bi";
import { RiShoppingBag3Fill } from "react-icons/ri";

const Notification = () => {
  return <div className="w-full bg-[#DBD9D9] p-4 lg:p-16">
  <TitleHeader
    title="Notification"
    btn={
      <CustomBtn
        title="Today"
        customStyles="bg-primary text-white"
        icon={<BiChevronDown className="w-8 h-8" />}
      />
    }
  />

  <h1 className="text-black text-xl font-bold mb-4">Today</h1>

  <div className="bg-white flex items-center justify-between p-4 lg:p-8 mb-8">
    <div className="flex items-center gap-4">
      <div className="bg-primary bg-opacity-20 p-2 lg:p-6">
        <RiShoppingBag3Fill className="w-4 h-4 lg:w-8 lg:h-8 text-primary" />
      </div>
      <p className="text-[#474544] text-xs xl:text-base">
        Get your orders in less than one hour
      </p>
    </div>
    <p className="text[#474544] text-xs xl:text-base">May 26,2023 | 09:10PM</p>
  </div>
  <hr className="border-[#ADADAD] mb-8" />

  <h1 className="text-black text-xl font-bold mb-4">Older</h1>

  <div className="bg-white flex items-center justify-between p-4 lg:p-8">
    <div className="flex items-center gap-4">
      <div className="bg-primary bg-opacity-20 p-2 lg:p-6">
        <RiShoppingBag3Fill className="w-4 h-4 lg:w-8 lg:h-8 text-primary" />
      </div>
      <p className="text-[#474544] text-xs xl:text-base">Successful, Order shipped</p>
    </div>
    <p className="text[#474544] text-xs xl:text-base">May 26,2023 | 09:10PM</p>
  </div>
</div>
};

export default Notification;
