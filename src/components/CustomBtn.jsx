import React from "react";

const CustomBtn = ({ type, title, customStyles, handleClick, icon }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-4 py-2 xl:w-[160px] xl:h-[45px] font-medium ${customStyles}`}
      onClick={handleClick}
    >
      {title} {icon ? icon : null}
    </button>
  );
};

export default CustomBtn;
