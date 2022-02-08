import React from "react";
import { FaSun, FaFileCode } from "react-icons/fa";
import CV from "./images/ARasheedCV.pdf";
import logo from "./images/logo.svg";

const Header = () => {
  return (
    <div className="flex justify-between items-center md:px-7 px-2 py-2 text-white md:text-2xl text-base bg-gray-800 rounded-md backdrop-blur-sm md:m-5 m-3 shadow-xl">
      <div className="flex items-center">
        <div className="h-16 w-16 flex items-center justify-center z-20 mr-2 bg-gray-900 rounded-full transition-all duration-300 ease-linear shadow-2xl">
          <img src={logo} alt="logo" className="m-2" />
        </div>
        <div className="text-white uppercase font-semibold flex flex-wrap justify-center">
          <span className="text-yellow-500">Abdur</span>&nbsp;
          <span className="text-pink-600">Rasheed</span>
        </div>
      </div>
      <div className="flex items-center">
        {/* <FaSun fontSize={23} className="md:mx-6 mx-1" color="#FF8906" /> */}
        <a
          href={CV}
          download
          className="md:px-5 px-2 py-1 rounded-3xl mx-2 md:bg-gradient-to-r from-yellow-500 to-rose-400 hover:bg-gradient-to-r hover:from-rose-400 hover:to-yellow-500 transition-all duration-300 ease-linear uppercase font-semibold flex items-center justify-center">
          <span className="md:hidden">
            <FaFileCode fontSize={23} className="my-1 text-yellow-500" />
          </span>
          <span className="md:block hidden">CV</span>
        </a>
      </div>
    </div>
  );
};

export default Header;
