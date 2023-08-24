import React from "react";
import logoWhite from "../assets/logo_white.png";
import uf from "../assets/up_frame.png";
import df from "../assets/down_frame.png";


const ResetPwd = () => {
  return (
    <div className="relative bg-accent-2 min-h-screen">
      <img className="absolute right-16" src={uf} alt="background icon" />
      <img className="absolute bottom-0" src={df} alt="background icon" />
      <div className="w-full mx-8 md:w-[400px] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
        <img
          className="w-[120px] md:w-[200px] mx-auto transition duration-75 mb-16"
          src={logoWhite}
          alt="white logo"
        />
        <h1 className="text-white text-4xl font-bold text-center mb-4">
          Reset your <strong className="text-primary">password</strong>
        </h1>
        <p className="text-white text-sm text-center mb-12">
          Please enter your registered email address. An email with a password
          reset link will be sent to you.
        </p>
        <form>
          <input
            type="password"
            id="password"
            className="shadow-sm caret-primary focus:border-primary bg-[#DCD6D6] border border-gray-300 text-gray-900 text-sm block w-full py-3.5 px-2.5 outline-none mb-6"
            placeholder="Enter your password"
            required
          />
          <button
            type="submit"
            className="w-full text-white bg-primary hover:bg-opacity-95 focus:outline-none font-medium text-sm px-5 py-3.5 text-center"
          >
            Reset your password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPwd;
