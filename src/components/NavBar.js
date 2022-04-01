import React from "react";
import img1 from "../assets/Home.png";
import img2 from "../assets/Buy.png";
import img3 from "../assets/Calendar.png";
import img4 from "../assets/Heart.png";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div className="md:flex md:flex-col justify-center items-center hidden w-40 h-screen bg-[#11052C] fixed -ml-2  rounded-l-3xl">
      <Link to="/">
        <img className="hidden md:block mb-10" src={img1} alt="" />
      </Link>
      <img className="hidden md:block mb-10" src={img2} alt="" />
      <img className="hidden md:block mb-10" src={img3} alt="" />
      <img className="hidden md:block mb-10" src={img4} alt="" />
    </div>
  );
}
