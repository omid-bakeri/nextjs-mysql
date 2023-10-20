import React from "react";
import ReactPaginate from "react-paginate";

function Pagination() {
  return (
    <ReactPaginate
      className="bg-slate-400 w-[90%] 
  mx-auto flex justify-center  items-center
   text-white gap-4 p-4 rounded-b-lg
    text-xl select-none"
      pageCount={7}
      activeClassName="bg-slate-300 p-1 w-6 
      flex justify-center items-center"
      previousClassName="bg-slate-500 px-4 roundedl-sm flex 
      justify-center items-center
      py-2"
      nextClassName="bg-slate-500 px-4 
      roundedl-sm flex 
      justify-center items-center
      py-2"

    />
  );
}

export default Pagination;
