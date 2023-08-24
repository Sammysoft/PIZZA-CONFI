import React, { useState } from "react";
import Input from "../Input";
import { AiFillEye } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";

const ChangePassword = ({ isOpen, setIsOpen }) => {
  const [labelColor, setLabelColor] = useState("");

  if (!isOpen) return null;
  return (
    <div className="z-30 bg-white shadow-lg w-[95%] lg:w-[500px] p-4 lg:p-8 fixed top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-bold lg:text-lg">Change password</h1>
        <GrFormClose className="w-8 h-8 cursor-pointer" onClick={() => setIsOpen(false)} />
      </div>

      <div className="flex flex-col gap-2 mb-4">
        <label
          htmlFor="oldpwd"
          className={`font-medium focus:text-primary ${
            labelColor.name === "oldpwd" && `text-[${labelColor.color}]`
          }`}
        >
          Old password
        </label>
        <Input
          title="Enter old password"
          type={"text"}
          name="oldpwd"
          customStyles="bg-[#F8F8F8] text-[#838282]"
          setLabelColor={setLabelColor}
          icon={<AiFillEye className="w-8 h-8 cursor-pointer text-primary" />}
        />
      </div>

      <div className="flex flex-col gap-2 mb-4">
        <label
          htmlFor="newpwd"
          className={`font-medium focus:text-primary ${
            labelColor.name === "newpwd" && `text-[${labelColor.color}]`
          }`}
        >
          New password
        </label>
        <Input
          title="Enter new password"
          type={"text"}
          name="newpwd"
          customStyles="bg-[#F8F8F8] text-[#838282]"
          setLabelColor={setLabelColor}
          icon={<AiFillEye className="w-8 h-8 cursor-pointer text-primary" />}
        />
      </div>

      <div className="flex flex-col gap-2 mb-4">
        <label
          htmlFor="confirmpwd"
          className={`font-medium focus:text-primary ${
            labelColor.name === "confirmpwd" && `text-[${labelColor.color}]`
          }`}
        >
          Confirm password
        </label>
        <Input
          title="Confirm password"
          type={"text"}
          name="confirmpwd"
          customStyles="bg-[#F8F8F8] text-[#838282]"
          setLabelColor={setLabelColor}
          icon={<AiFillEye className="w-8 h-8 cursor-pointer text-primary" />}
        />
      </div>
    </div>
  );
};

export default ChangePassword;
