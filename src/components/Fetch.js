import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { actionCreators } from "../State";

export default function Fetch() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch("https://ghibliapi.herokuapp.com/films");
    setData(await response.json());
  };
  useEffect(() => {
    getData();
  }, []);

  const id = useSelector((state) => state.id);
  return (
    <div className="h-full bg-[#11052C] mt-20">
      <div className=" mb-20 ">
        <span className="   text-white  font-semibold text-2xl ml-20">
          Most Popular Anime
        </span>
        <div className="md:grid md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-3 xl:grid-cols-4 xl:gap-4 h-full ml-24 mt-20 mr-24 flex flex-col ">
          {data.map((curElem, key) => {
            return (
              <div className=" hover:mt-3  rounded-3xl h-full flex justify-center mt-5 items-center">
                <Link to={curElem.id}>
                  <img
                    // onClick={() => {
                    //   dispatch(actionCreators.setId(curElem.id));
                    // }}
                    className=" rounded-3xl border-4  border-[#261B3E]  h-80  "
                    src={curElem.image}
                    alt=""
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
