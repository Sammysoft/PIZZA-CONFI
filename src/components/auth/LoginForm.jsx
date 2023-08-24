import React, { useContext, useEffect, useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

import AuthContext from "../../context/auth/authContext";

const LoginForm = () => {
  const authContext = useContext(AuthContext);
  const { login, error, clearErrors, isAuthenticated } = authContext;

  const [user, setUser] = useState({
    email: "",
    pwd: "",
  });

  const navigate = useNavigate();
  // const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/customize");
    }

    if (error === "Invalid Credentials") {
      // setAlert(error, "danger");
      alert(error);
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated]);

  const { email, pwd } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || pwd === "") {
      // setAlert("Please enter all fields", "danger");
      alert("Please enter all fields", "danger");
    } else {
      login({ email: email.toLowerCase(), password: pwd });
    }
  };

  return (
    <div className="md:w-[50%] flex flex-col items-center py-8 px-12 bg-[#1e1e1e]">
      <h1 className="text-3xl text-primary mb-2 font-bold self-start">
        Glad to have you back
      </h1>
      <p className="mb-4 text-white text-sm self-start">
        We would to know you, kindly fill your details below.
      </p>

      <div className="mb-8">
        <button
          type="button"
          className="text-white bg-[#DCD6D6] bg-opacity-5 hover:bg-[#272727] font-medium text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
        >
          <BsFacebook className="w-4 h-4 text-[#1877F2] mr-2" /> Login with
          Facebook
        </button>
        <button
          type="button"
          className="text-white bg-[#DCD6D6] bg-opacity-5 hover:bg-[#272727] font-medium text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
        >
          <FcGoogle className="w-4 h-4 mr-2" />
          Login with Google
        </button>
      </div>

      <hr className="w-full border-[1] border-[#DCD6D6]" />

      <p className="w-fit text-white text-sm py-2 px-4 bg-[#1e1e1e] -mt-5 mb-4">
        Or login with email
      </p>

      <div className="flex__basic mb-8">
        <button
          onClick={() => navigate("/login")}
          className="bg-primary text-sm py-2 px-8 md:px-12 text-white"
        >
          Login
        </button>
        <button
          onClick={() => navigate("/signup")}
          className="bg-[#DBD9D9] text-sm py-2 px-8 md:px-12 text-[#1e1e1e]"
        >
          Sign Up
        </button>
      </div>

      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mb-1 text-sm font-medium text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="shadow-sm caret-primary focus:border-primary bg-[#DCD6D6] border border-gray-300 text-gray-900 text-sm block w-full py-3 px-2.5 outline-none"
            placeholder="Enter your email here"
            required
            onChange={onChange}
            value={email}
          />
        </div>
        <div className="mb-1">
          <label
            htmlFor="pwd"
            className="block mb-1 text-sm font-medium text-white"
          >
            Your password
          </label>
          <input
            type="password"
            id="pwd"
            name="pwd"
            className="shadow-sm caret-primary focus:border-primary bg-[#DCD6D6] border border-gray-300 text-gray-900 text-sm block w-full py-3 px-2.5 outline-none"
            placeholder="Enter your password"
            required
            onChange={onChange}
            value={pwd}
          />
        </div>

        <div className="flex justify-end mb-8">
          <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-300">
            <a
              href="/reset-passwd"
              className="text-primary text-right underline"
            >
              Forget password?
            </a>
          </label>
        </div>

        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50"
            />
          </div>
          <label
            htmlFor="terms"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Keep me logged in
          </label>
        </div>

        <button
          type="submit"
          // onClick={() => navigate("/customize")}
          className="w-full text-white bg-[#474544] hover:bg-opacity-95 focus:outline-none font-medium text-sm px-5 py-3 text-center"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
