import React, { useState } from "react";
import TitleHeader from "../../components/TitleHeader";
import CustomBtn from "../../components/CustomBtn";
import { BiSolidEditAlt } from "react-icons/bi";
import Input from "../../components/Input";
import ChangePassword from "../../components/dashboard/ChangePassword";

const MyAccount = ({ isOpen, setIsOpen }) => {
  const [labelColor, setLabelColor] = useState("");
  const [isActive, setIsActive] = useState("");

  return (
    <div className="w-full bg-[#DBD9D9] p-4 lg:p-16">
      <ChangePassword isOpen={isOpen} setIsOpen={setIsOpen} />
      <TitleHeader title="My Account" desc="Account settings" />

      <div className="flex items-end gap-4 lg:gap-8 mb-8 lg:mb-16">
        <img
          className="w-24 h-24 lg:w-32 lg:h-32 rounded-full"
          src="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg"
          alt="Rounded avatar"
        />
        <CustomBtn
          title="Edit avatar"
          icon={<BiSolidEditAlt className="w-4 h-4" />}
          customStyles="flex-row-reverse bg-primary text-white"
        />
      </div>

      <h1 className="font-bold lg:text-xl mb-8">Personal Detials</h1>

      <form className="lg:w-[700px]">
        <div className="flex flex-col gap-2 mb-4">
          <label
            htmlFor="fullname"
            className={`font-medium focus:text-primary ${
              labelColor.name === "fullname" && `text-[${labelColor.color}]`
            }`}
          >
            Full name
          </label>
          <Input
            title="Hellen Armstrong"
            type={"text"}
            name="fullname"
            customStyles="bg-[#F8F8F8] text-[#838282]"
            setLabelColor={setLabelColor}
            icon={
              <BiSolidEditAlt className="w-8 h-8 cursor-pointer text-[#434446]" />
            }
          />
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <label
            htmlFor="email"
            className={`font-medium focus:text-primary ${
              labelColor.name === "email" && `text-[${labelColor.color}]`
            }`}
          >
            Email
          </label>
          <Input
            title="hellenarms@gmail.com"
            type={"text"}
            name="email"
            customStyles="bg-[#F8F8F8] text-[#838282]"
            setLabelColor={setLabelColor}
            icon={
              <BiSolidEditAlt className="w-8 h-8 cursor-pointer text-[#434446]" />
            }
          />
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <label
            htmlFor="pwd"
            className={`font-medium focus:text-primary ${
              labelColor.name === "pwd" && `text-[${labelColor.color}]`
            }`}
          >
            Password
          </label>
          <Input
            title="**********"
            type={"password"}
            name="pwd"
            customStyles="bg-[#F8F8F8] text-[#838282]"
            setLabelColor={setLabelColor}
            icon={
              <BiSolidEditAlt
                onClick={() => setIsOpen(true)}
                className="w-8 h-8 cursor-pointer text-[#434446]"
              />
            }
          />
        </div>
        <button className="bg-primary py-2.5 text-white w-full hover:opacity-95">
          Save
        </button>
      </form>
    </div>
  );
};

export default MyAccount;
