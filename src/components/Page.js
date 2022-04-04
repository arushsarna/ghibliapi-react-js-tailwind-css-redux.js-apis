import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
export default function Page() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  //  const id = "2baf70d1-42bb-4437-b551-e5fed5a87abe";
  const getData = async () => {
    const response = await fetch("https://ghibliapi.herokuapp.com/films/" + id);
    setData(await response.json());
  };
  useEffect(() => {
    getData();
  }, []);
  // const id = useSelector((state) => state.id);
  return (
    <div>
      <div className=" bg-[#261B3E] flex  w-screen h-full ">
        <NavBar />
        {/* <img src = {data.movie_banner}/> */}

        <div className="bg-[#11052C] flex  pb-20 lg:flex-row flex-col md:h-screen h-full w-screen  md:pb-20 rounded-r-3xl mr-1 text-white md:ml-40 ">
          <div className="mt-20 md:ml-20 ml-10  ">
            <span className=" flex justify-center  text-5xl font-bold">
              {data.title}
            </span>

            <img
              width={3000}
              alt=""
              className=" mt-20 border-4 border-gray-500  rounded-2xl "
              src={data.movie_banner}
            />
          </div>
          <div className="mt-20 ml-20 flex flex-col md:mr-20">
            <span className="flex  justify-center  text-8xl font-bold">
              {data.original_title}
            </span>
            <div className=" mt-20">
              <span className="pt-20 text-2xl">
                <span className=" font-bold text-red-700  text-3xl">
                  About:- <span> </span>
                </span>
                {data.description}
              </span>
            </div>
            <div className=" mt-5 flex justify-start">
              <span className=" text-2xl">
                <span className=" font-bold text-red-700  text-3xl">
                  Director:- <span> </span>
                </span>
                {data.director}
              </span>
            </div>
            <div className=" mt-5 flex justify-start">
              <span className=" text-2xl">
                <span className=" font-bold text-red-700  text-3xl">
                  Producer:- <span> </span>
                </span>
                {data.producer}
              </span>
            </div>
            <div className=" mt-5 flex justify-start">
              <span className=" text-2xl">
                <span className=" font-bold text-red-700  text-3xl">
                  Release Date:- <span> </span>
                </span>
                {data.release_date}
              </span>
            </div>
            <div className=" mt-5 flex justify-start">
              <span className=" text-2xl">
                <span className=" font-bold text-red-700  text-3xl">
                  Running Time <span> </span>
                </span>
                {data.running_time}
              </span>
            </div>
            <div className=" mt-5 flex justify-start">
              <span className=" text-2xl">
                <span className=" font-bold text-red-700  text-3xl">
                  Rt Score:- <span> </span>
                </span>
                {data.rt_score}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
