import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/img8349.png";
import logoWhite from "../assets/logo_white.png";

import { motion } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";

import { slideAnimation } from "../config/motion";
import CustomBtn from "../components/CustomBtn";
import { BsArrowRightShort } from "react-icons/bs";

const GetStarted = () => {
  const snap = useSnapshot(state);
  const navigate = useNavigate();
  return (
    <div className="mx-4">
      {!snap.intro && (
        <div>
          <motion.img
            className="w-[120px] md:w-[200px] mx-auto mb-8 transition duration-75"
            src={logoWhite}
            alt="white logo"
            {...slideAnimation("up")}
          />
          <motion.h1
            {...slideAnimation("up")}
            className="text-primary text-center text-xl md:text-3xl font-bold mb-4"
          >
            Create custom 3D configurator design
          </motion.h1>
          <motion.p
            {...slideAnimation("up")}
            className="md:w-[500px] mx-auto text-white text-center text-sm md:text-base mb-12"
          >
            Your all-in-one configurator tool. Create custom pizzabox design.
            View packaging design in 3D.
          </motion.p>

          <motion.div
            {...slideAnimation("up")}
            className="w-[300px] md:w-[400px] mx-auto bg-[#DBD9D9] flex flex-col items-end p-4"
          >
            <CustomBtn
              {...slideAnimation("up")}
              title="Get started"
              handleClick={() => navigate("/signup")}
              icon={<BsArrowRightShort />}
              customStyles="bg-primary hover:bg-[#B2611F] ease-in duration-75 text-white outline-none"
            />
            <img className="w-[300px] mx-auto" src={img1} alt="" />
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default GetStarted;
