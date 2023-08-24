import React from "react";

const Overlay = ({ isOpen, handleClose }) => {
  if (!isOpen) return null;
  return (
    <div
      onClick={handleClose}
      className="fixed z-20 w-full h-screen bg-black bg-opacity-30"
    >
      Overlay
    </div>
  );
};

export default Overlay;
