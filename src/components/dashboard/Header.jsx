import React from "react";
import Logo from "../Logo";
import { HiOutlineMenu } from "react-icons/hi";
import CustomBtn from "../CustomBtn";
import { BiEditAlt } from "react-icons/bi";
import { RiArrowDropDownLine, RiShoppingBag3Fill } from "react-icons/ri";
import avatar from "../../assets/avatar.png";

const Header = () => {
  return (
    <div className="bg-white h-[90px] flex items-center shadow-md">
      <div className="w-full container">
        <div className="flex__basic">
          <div>
            <Logo />
          </div>

          {/* <div className="md:hidden">
            <HiOutlineMenu className="w-8 h-8 text-primary" />
          </div>

          <div className="xl:flex hidden ">
            <CustomBtn
              title="Design mode"
              customStyles="bg-primary text-white"
            />
            <CustomBtn title="3D mode" customStyles="bg-accent-1" />
          </div>

          <div className="xl:block hidden">
            <p className="font-semibold">Untitled design</p>
            <p className="text-[#A8A8A8] flex items-center gap-2">
              12.017inx11.9579inx2.0488in{" "}
              <span>
                <BiEditAlt />
              </span>
            </p>
          </div> */}

          <div className="hidden justify-between items-center gap-4 xl:flex">
            <RiShoppingBag3Fill className="w-6 h-6 cursor-pointer" />

            <p className="text-[#868686]">
              <strong className="font-semibold text-black">Hello!</strong>
              Hellen Armstrong
            </p>
            <img
              className="w-10 h-10 rounded-full"
              src={avatar}
              alt="Rounded avatar"
            />
            <CustomBtn
              title="English"
              customStyles="bg-black text-white justify-between"
              icon={<RiArrowDropDownLine className="w-8 h-8 text-primary" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
