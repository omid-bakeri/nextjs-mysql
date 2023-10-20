import React from "react";
import { TbBrandNextjs } from "react-icons/tb";
function Navbar() {
  return (
    <div
      className="w-[90%] mx-auto
   bg-cyan-800 flex justify-between
    items-center select-none gap-3 px-10 py-5 mt-10"
    >
      <div className="flex justify-start items-center gap-2">
        <i className="text-white text-4xl">
          <TbBrandNextjs />
        </i>
        <h2
          className="text-white 
      font-bold text-2xl"
        >
          NextJS-MySQL CRUD
        </h2>
      </div>
    </div>
  );
}

export default Navbar;
