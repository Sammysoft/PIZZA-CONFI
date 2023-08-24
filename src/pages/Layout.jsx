import React, { useContext, useEffect } from "react";
import Header from "../components/customizer/Header";
import { Outlet } from "react-router-dom";
import LeftSidebar from "../components/customizer/LeftSidebar";
import RightSidebar from "../components/customizer/RightSidebar";
import Configurator from "./configurator/Configurator";
import AuthContext from "../context/auth/authContext";

const Layout = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="h-screen bg-[#F2F3F5] md:overflow-hidden">
      <Header />
      <div className="flex jus ">
        <LeftSidebar />
        <div className="hidden md:block w-[15%] bg-[#F2F3F5] min-h-screen">
          <Outlet />
        </div>
        <Configurator />
        <RightSidebar />
      </div>
    </div>
  );
};

export default Layout;
