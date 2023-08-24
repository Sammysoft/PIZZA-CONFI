import React, { useState } from "react";
import {
  AiFillEye,
  AiFillEyeInvisible,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import { BiMove, BiSave, BiSolidEditAlt } from "react-icons/bi";
import { GrPowerReset } from "react-icons/gr";
import { Tb3DRotate } from "react-icons/tb";

import Canvas from "../../components/customizer/canvas/Expe";
import { useSnapshot } from "valtio";
import state from "../../store";

const Configurator = () => {
  const snap = useSnapshot(state);
  const [value, setValue] = useState(30);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    console.log("New value:", newValue);
    // Perform any desired actions with the new value here
  };

  return (
    <div className="relative w-full bg-[#F2F3F5] h-full">
      <div className="py-8 px-6">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <button className="flex items-center bg-white py-2.5 px-5 text-sm md:text-base text-[#1e1e1e] font-semibold">
            <BiSolidEditAlt className="w-6 h-6 text-primary mr-2" />
            Edit Dimension
          </button>
          <div className="flex">
            <button className="flex items-center bg-primary py-2.5 px-5 text-sm md:text-base text-white font-semibold">
              <BiSave className="w-6 h-6 text-white mr-2" />
              Save
            </button>
            <button className="flex items-center bg-white py-2.5 px-5 text-sm md:text-base text-[#474544] font-semibold">
              <GrPowerReset className="w-6 h-6 text-[#474544] mr-2" /> Reset
            </button>
          </div>
        </div>

        <div className="h-[300px] md:h-[480px] 2xl:h-[560px] m-auto">
          <Canvas />
        </div>

        <div className=" flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="flex">
              <button className="bg-primary py-2.5 px-5 text-sm md:text-base text-white font-semibold">
                Outside
              </button>
              <button className="bg-white py-2.5 px-5 text-sm md:text-base text-[#1e1e1e] font-semibold">
                Inside
              </button>
            </div>
            <div className="bg-white px-2.5 flex items-center gap-4">
              <AiOutlineMinus className="w-6 h-6" />
              <input
                id="small-range"
                type="range"
                value={value}
                className="w-[60px] md:w-[100px] "
                onChange={handleChange}
              />
              <AiOutlinePlus className="w-6 h-6" />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="bg-white p-2.5">
              <Tb3DRotate className="w-8 h-8" />
            </button>{" "}
            <button className="bg-white p-2.5">
              {snap.isModelVisible ? (
                <AiFillEyeInvisible
                  onClick={() => (snap.isModelVisible = false)}
                  className="w-8 h-8"
                />
              ) : (
                <AiFillEye
                  onClick={() => (snap.isModelVisible = false)}
                  className="w-8 h-8"
                />
              )}
            </button>{" "}
            <button className="bg-white p-2.5">
              <BiMove className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configurator;
