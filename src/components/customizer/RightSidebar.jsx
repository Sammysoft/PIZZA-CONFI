import React from "react";
import Title from "../../components/Title";
import packageSample from "../../assets/pizza_box_sample.png";
import { BiHelpCircle } from "react-icons/bi";
import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";
import state from "../../store";

const RightSidebar = () => {
  const snap=useSnapshot(state)
  return (
    <div className="hidden md:block min-h-screen bg-white w-[20%]">
      <div className="w-full bg-white h-full py-8 px-4">
        <Title title="Overview" />
        <div className="mt-4 bg-[#F2F3F5] py-14 px-4 mb-6">
          <img src={packageSample} alt="package sample" />
        </div>

        <p className="flex items-center gap-2 text-black font-medium mb-4">
          Size/Material <BiHelpCircle className="text-[#D0D0D0]" />
        </p>

        <div className="flex justify-between items-center text-sm mb-2">
          <p className="text-[#D0D0D0]">Inner dimension </p>
          <p className="text-[#474544]">12.017x11.9579x2.0488in </p>
        </div>

        <div className="flex justify-between items-center text-sm mb-4">
          <p className="text-[#D0D0D0]">Thickness</p>
          <p className="text-[#474544]">10.063In</p>
        </div>

        <button className="w-full bg-primary hover:bg-opacity-95 text-white py-2.5 px-5 mb-8">
          Edit Dimension
        </button>

        <p className="flex items-center gap-2 text-black font-medium mb-4">
          Packaging color
        </p>

        <SketchPicker
          color={snap.color}
          disableAlpha
          onChange={(color) => (state.color = color.hex)}
          // presetColors={["#ccc", "#EFBD4E", "#80C670", "#726DE8"]}
        />
      </div>
    </div>
  );
};

export default RightSidebar;
