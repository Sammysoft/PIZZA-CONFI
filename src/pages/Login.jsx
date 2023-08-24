import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import ImageScreen from "../components/auth/ImageScreen";
import LoginForm from "../components/auth/LoginForm";
import AuthContext from "../context/auth/authContext";
import { useNavigate } from "react-router-dom";

const Login = () => {

  return (
    <div className="bg-[#EBE7E7] h-screen xl:overflow-x-hidden">
      <Header />
      <div className="container">
        <div className="flex justify-between gap-28 items-start md:mt-12 xl:mt-4">
          <ImageScreen desc={"Glad to have you back!"} />
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
