import React from "react";
import { TbBrandNextjs } from "react-icons/tb";
import { AiOutlineSearch } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";
function Navbar() {
  return (
    <div
      className="w-[90%] mx-auto
   bg-cyan-800 flex justify-between
   shadow-xl rounded-t-lg
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
      <div
        className="flex justify-center
       items-center gap-4"
      >
        <div
          className="flex  w-[90%] justify-end 
        items-center gap-2 relative"
        >
          <button
            className="absolute hover:opacity-80
             bg-cyan-600 px-4 hover:duration-300
            py-2  mr-1 text-xl rounded-l-full
             rounded-r-full
           text-white"
          >
            <AiOutlineSearch />
          </button>
          <input
            className="outline-none px-4 
           py-2 rounded-r-full rounded-l-full
           text-lg"
            placeholder="search ..."
          />
        </div>
        <button
          className="flex justify-center
         items-center gap-2 px-3 
         py-2 rounded-lg bg-red-600 hover:opacity-80 
         hover:duration-300"
        >
          <i className="text-xl text-red-300 ">
            <AiFillMinusCircle />
          </i>
          <h2 className="text-white">DELETE</h2>
        </button>
        <button
          className="flex justify-center
         items-center gap-0 px-3 w-[40%]
         py-2 rounded-lg bg-green-600 hover:opacity-80 
         hover:duration-300"
        >
          <i className="text-xl text-green-300 ">
            <AiFillMinusCircle />
          </i>
          <h2 className="w-[170px] text-white">ADD NEW PRODUCT</h2>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
