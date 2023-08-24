import React, { useEffect } from "react";
import logoWhite from "../assets/logo_white.png";
import topleft from "../assets/tl.png";
import downleft from "../assets/ld.png";
import topRight from "../assets/tr.png";
import downRight from "../assets/dr.png";

import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";
import { CustomButton } from "../components";

import { slideAnimation } from "../config/motion";
import GetStarted from "./GetStarted";

const Intro = () => {
  const snap = useSnapshot(state);

  useEffect(() => {
    setTimeout(() => (state.intro = false), 2000);
  }, []);

  return (
    <div className="relative bg-accent-2 min-h-screen">
      <AnimatePresence>
        <div className="relative bg-accent-2 min-h-screen overflow-x-hidden">
          <motion.img
            className="absolute top-0 w-[150px] md:w-[200px] xl:w-[280px]"
            src={topleft}
            alt="element"
            {...slideAnimation("left")}
          />
          <motion.img
            className="absolute bottom-0 w-[150px] md:w-[200px] xl:w-[280px]"
            src={downleft}
            alt="element"
            {...slideAnimation("left")}
          />

          {/* //  absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] */}
          <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
          {snap.intro && (
            <motion.img
              className="w-[120px] md:w-[200px] mx-auto mb-8 transition duration-75"
              src={logoWhite}
              alt="white logo"
              // {...slideAnimation("down")}
            />
            )} 
            <GetStarted />
          </div>
          <motion.img
            className="absolute right-0 w-[150px] md:w-[200px] top-0 xl:w-[280px]"
            src={topRight}
            alt="element"
            {...slideAnimation("right")}
          />
          <motion.img
            className="absolute right-0 w-[150px] md:w-[200px] bottom-0 xl:w-[280px]"
            src={downRight}
            alt="element"
            {...slideAnimation("right")}
          />
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Intro;
