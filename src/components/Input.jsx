import React, { useState } from "react";
import { BiSolidEditAlt } from "react-icons/bi";

const Input = ({ title, customStyles, name, setLabelColor, type, icon }) => {
  const [handleFocus, setHandleFocus] = useState("border-transperent");

  const handleF = () => {
    setLabelColor({ name, color: "#EC7D23" });
    setHandleFocus("border-[#EC7D23]");
  };
  const handleB = () => {
    setLabelColor({ name, color: "#434446" });
    setHandleFocus("border-transperent");
  };
  return (
    <div
      className={`py-2.5 px-6 w-full flex justify-between items-center border-2 ${handleFocus} ${customStyles}`}
    >
      <input
        type={type}
        placeholder={title}
        className={`bg-transparent outline-none w-full`}
        onFocus={handleF}
        onBlur={handleB}
      />

      {icon ?? null}
    </div>
  );
};

export default Input;
