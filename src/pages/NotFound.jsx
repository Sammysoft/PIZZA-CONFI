import React from "react";
import logoWhite from "../assets/logo_white.png";
import uf from "../assets/up_frame.png";
import df from "../assets/down_frame.png";
import { MdArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="relative bg-accent-2 min-h-screen">
      <div className="bg-[#EBE7E7]">
        <Header />
      </div>
      <img className="absolute right-16" src={uf} alt="background icon" />
      <img className="absolute bottom-0" src={df} alt="background icon" />
      <div className="w-full mx-8 md:w-[400px] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
        {/* <img
          className="w-[120px] md:w-[200px] mx-auto transition duration-75 mb-16"
          src={logoWhite}
          alt="white logo"
        /> */}
        <h1 className="text-white text-4xl font-bold text-center mb-4">
          NOT <strong className="text-primary">FOUND</strong>
        </h1>
        <p className="text-white text-sm text-center mb-12">
          The page you are trying to access does not exist.
        </p>

        <button
          onClick={handleGoBack}
          type="submit"
          className="flex items-center justify-center w-full text-white bg-primary hover:bg-opacity-95 focus:outline-none font-medium text-sm px-5 py-3.5 text-center"
        >
          <MdArrowBackIos className="w-6 h-6" /> Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
