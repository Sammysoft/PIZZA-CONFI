import React from "react";
import Title from "../../components/Title";

const Package = () => {
  return (
    <div className="w-full bg-white h-full py-8 px-4">
      <Title title="Packaging" />
      <input
        type="text"
        placeholder="Search here"
        className="w-fit bg-[#F2F3F5] py-3 px-4 mt-4 outline-none caret-primary border border-transparent focus:border-primary"
      />
    </div>
  );
};

export default Package;
