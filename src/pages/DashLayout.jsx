import React from "react";
import Header from "../components/dashboard/Header";
import Sidebar from "../components/dashboard/Sidebar";
import Content from "../components/dashboard/Content"
import { Outlet } from "react-router-dom";
import Overlay from "../components/Overlay";

const DashLayout = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default DashLayout;
