import React, { useState } from "react";
import { footerMenu, menu } from "../../config/constants";
import { NavLink } from "react-router-dom";

const LeftSidebar = () => {
  const [isActive, setisActive] = useState("Packaging");

  return (
    <div className="relative hidden md:block w-[20%] bg-accent-2 min-h-screen text-accent-3">
      <div className="w-full">
        <ul className="pt-[50px]">
          {menu.map((item, index) => {
            return (
              <li
                onClick={() => setisActive(item.name)}
                key={index}
                className={`flex items-center gap-2 bg-opacity-95 py-4 px-8 hover:bg-[#DCD6D60D] hover:border-primary hover:border-r-4 ${
                  isActive === item.name &&
                  `bg-[#DCD6D60D] border-primary border-r-4`
                }`}
              >
                {item.icon}
                <NavLink className={``} onClick={() => {}} to={item.link}>
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <ul className="absolute w-full bottom-28">
          {footerMenu.map((item, index) => {
            return (
              <li
                onClick={() => setisActive(item.name)}
                key={index}
                className={`flex items-center gap-2 bg-opacity-95 py-4 px-8 hover:bg-[#DCD6D60D] hover:border-primary hover:border-r-4 ${
                  isActive === item.name &&
                  `bg-[#DCD6D60D] border-primary border-r-4`
                }`}
              >
                {item.icon}
                <NavLink className={``} onClick={() => {}} to={item.link}>
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default LeftSidebar;
