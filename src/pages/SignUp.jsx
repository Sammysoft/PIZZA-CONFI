import React from "react";
import Header from "../components/Header";
import SignUpForm from "../components/auth/SignUpForm";
import ImageScreen from "../components/auth/ImageScreen";

const SignUp = () => {
  return (
    <div className="bg-[#EBE7E7] h-screen xl:overflow-x-hidden">
      <Header />
      <div className="container">
        <div className="flex justify-between gap-28 items-start md:mt-12 xl:mt-4">
          <ImageScreen desc={"Sign up and join the Mypizzabox family"} />
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
