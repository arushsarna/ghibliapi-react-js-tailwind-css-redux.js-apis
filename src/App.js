import React from "react";

import NavBar from "./components/NavBar";

import Fetch from "./components/Fetch";
export default function App() {
  return (
    <div className=" bg-[#261B3E] flex   w-screen h-full">
      <NavBar />
      <div className="bg-[#11052C] flex flex-col w-screen h-full  rounded-r-3xl mr-1 md:ml-40 ">
        {/* <input placeholder="Search.. " className=' placeholder:text-gray-600 w-80 h-12 mt-16 ml-16 rounded-2xl bg-[#261B3E] pl-12 p-5 text-white border-0 outline-0' /> */}
        {/* <img className=' relative w-5 h-5 -right-20 left-20 -top-9' alt src={search} ></img> */}

        <Fetch />
      </div>
    </div>
  );
}
