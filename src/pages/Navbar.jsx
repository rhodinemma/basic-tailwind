import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-16 bg-blue-600 flex items-center px-10 py-2 justify-between">
      <h1 className="text-white text-3xl font-semibold font-sourcecodepro">
        Basic Tailwind
      </h1>

      <button className="w-48 bg-white text-black font-semibold text-xl h-12 rounded-lg font-sourcecodepro">
        Add User
      </button>
    </div>
  );
};

export default Navbar;
