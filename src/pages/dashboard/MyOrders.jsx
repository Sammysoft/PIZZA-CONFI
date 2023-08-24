import React, { useState } from "react";
import { IoMdAdd, IoMdArrowBack } from "react-icons/io";
import TitleHeader from "../../components/TitleHeader";
import Input from "../../components/Input";
import { BiHelpCircle } from "react-icons/bi";
import { AiOutlineMinus } from "react-icons/ai";
import pack from "../../assets/pack.png";
import { BsFillBookmarkFill, BsShareFill } from "react-icons/bs";
import { RiDeleteBin4Fill } from "react-icons/ri";

const MyOrders = () => {
  const [labelColor, setLabelColor] = useState("");
  const [isActive, setIsActive] = useState("");
  return (
    <div className="w-full bg-[#DBD9D9] p-4 lg:p-16">
      <div className="flex gap-4 items-center font-semibold mb-8">
        <IoMdArrowBack className="text-primary w-8 h-8" />
        <p>Back</p>
      </div>

      <TitleHeader
        title="My order"
        btn={
          <button className="text-xs lg:text-base w-[300px] md:w-[250px] bg-primary py-3 px-2 lg:px-4 text-white font-medium">
            Add new configuration
          </button>
        }
      />

      <div className="flex flex-col gap-8 lg:flex-row lg:gap-0 items-center justify-between">
        <div className="flex items-center gap-8">
          <img className="lg:w-[200px]" src={pack} alt="pack" />
          <div>
            <h1 className="font-bold lg:text-2xl mb-1">
              Corrugated Packing Pizza Box
            </h1>
            <p className="mb-1">
              <strong>Size:</strong> 26 x 26 x 3 cm
            </p>
            <p className="mb-6">
              <strong>Size type:</strong> Treviso - rounded corners
            </p>
            <div className="flex items-center gap-4">
              <BsFillBookmarkFill className="w-6 h-6 text[#474544] cursor-pointer" />
              <BsShareFill className="w-6 h-6 text[#474544] cursor-pointer" />
              <RiDeleteBin4Fill className="w-6 h-6 text[#474544] cursor-pointer" />
            </div>
          </div>
        </div>

        <div>
          <p className="text-xl font-bold text-right">$219.00</p>
          <div className="flex items-center gap-4">
            <button className="bg-primary py-2.5 px-4 font-semibold text-white">
              Qty
            </button>
            <div className="flex items-center">
              <AiOutlineMinus className="text-[#838282] cursor-pointer" />
              <Input
                title="1"
                type={"number"}
                name="fullname"
                customStyles="bg-transparent text-center text-[#838282] border-none w-[80px] ml-4"
                setLabelColor={setLabelColor}
              />
              <IoMdAdd className="text-[#838282] cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      <h4 className="text-lg lg:text-2xl font-bold mt-8 mb-4">Summary</h4>

      <div className="bg-white p-8 shadow">
        <p className="font-medium mb-2">Do you have a promo code?</p>
        <div className="lg:w-[300px] mb-4">
          <Input
            title="Enter code"
            type={"text"}
            name="promocode"
            setLabelColor={setLabelColor}
            customStyles="bg-[#F8F8F8] text-[#838282]"
          />
        </div>

        <div className="grid grid-cols-2 justify-between mb-4">
          <div className="flex items-center gap-2">
            <p className="text-lg font-semibold">Subtotal</p>
            <BiHelpCircle className="w-6 h-6" />
          </div>
          <p className="text-xl font-bold text-right">$199.00</p>
        </div>

        <div className="grid grid-cols-2 justify-between mb-6">
          <p className="text-lg font-semibold">Delivery fee</p>
          <p className="text-xl font-bold text-right">$20.00</p>
        </div>

        <hr className="border-[#ADADAD] mb-4" />

        <div className="grid grid-cols-2 justify-between">
          <p className="text-lg font-semibold">Total</p>
          <p className="text-xl font-bold text-right">$219.00</p>
        </div>
      </div>

      <div className="text-center">
        <button className="bg-primary py-3 px-4 text-white mt-8 w-full lg:w-[80%] ">
          Check out
        </button>
      </div>
    </div>
  );
};

export default MyOrders;
