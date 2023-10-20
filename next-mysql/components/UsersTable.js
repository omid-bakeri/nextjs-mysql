import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
// import { Tooltip } from "react-tooltip";

import "react-tooltip/dist/react-tooltip.css";
function UsersTable() {
  const data = [
    {
      name: "Omid",
      email: "Omid@gmail.com",
    },
    {
      name: "Andres",
      email: "Andres@gmail.com",
    },
    {
      name: "Ali",
      email: "Ali@gmail.com",
    },
    {
      name: "Mohammad",
      email: "Mohammad@gmail.com",
    },
    {
      name: "Robert",
      email: "Robert@gmail.com",
    },
    {
      name: "Shadmehr",
      email: "Shadmehr76@gmail.com",
    },
    {
      name: "Nazanin",
      email: "Nazanin@gmail.com",
    },
    {
      name: "Bahar",
      email: "B65@gmail.com",
    },
  ];
  return (
    <>
      <div className="bg-slate-100 mx-auto w-[90%]">
        <div
          className="flex px-8 py-3
       justify-center rounded-b-lg 
    items-center w-[90%] mx-auto"
        >
          <div className="flex justify-between items-center w-full">
            <div className="flex justify-center items-center gap-4">
              <input type="checkbox" />
              <h1 className="font-bold">Name</h1>
            </div>
            <div className="font-bold">Email</div>
            <div className="font-bold">Actions</div>
          </div>
        </div>
        <div
          className="flex p-4
       justify-center rounded-b-lg 
    items-center w-[90%] mx-auto"
        >
          <div
            className="flex flex-col justify-between 
          items-center w-full"
          >
            {data.map((item) => (
              <>
                <button
                  className="mt-1 flex 
                justify-between w-full py-2 
                items-center hover:duration-150
                 hover:bg-slate-200 px-4"
                >
                  <div
                    className="flex justify-center 
                items-center gap-4"
                  >
                    <input type="checkbox" />
                    <div>{item.name.toUpperCase()}</div>
                  </div>
                  <div className="text-center">{item.email}</div>
                  <div className="flex justify-center items-center gap-3">
                    <button>
                      <AiTwotoneDelete
                        className="text-xl
                 text-red-500"
                      />
                    </button>
                    <button className="">
                      <AiFillEdit
                        className="text-xl
                 text-yellow-500"
                      />
                    </button>
                  </div>
                </button>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default UsersTable;
