import React from "react";
import logo from "./images/logo.svg";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { BsStackOverflow } from "react-icons/bs";

import { reactimg, tailwind } from "./";

const Footer = () => {
  return (
    <div className="flex justify-around items-center flex-wrap bg-gray-800 rounded-md backdrop-blur-sm m-5 shadow-xl">
      <div className="flex items-center md:text-2xl text-base my-4">
        <div className="h-12 w-12 flex items-center justify-center z-20 mr-2 bg-gray-800 rounded-full transition-all duration-300 ease-linear">
          <img src={logo} alt="logo" className="m-2" />
        </div>
        <div className="text-white uppercase font-semibold flex flex-wrap justify-center">
          <span className="text-yellow-500">Abdur</span>&nbsp;
          <span className="text-pink-600">Rasheed</span>
        </div>
      </div>
      <h2 className="text-pink-600 text-xl flex justify-center items-center my-4">
        {"</>"} With&nbsp;
        <img src={reactimg} alt="icon" className="w-6 h-6" />
        &nbsp;
        <img src={tailwind} alt="icon" className="w-6 h-6" />
        &nbsp;and ❤
      </h2>
      <div className="flex justify-center items-center my-4">
        <a
          href="https://www.facebook.com/abdur.rasheed.12720/"
          target="_blank"
          className="w-10 h-10 flex justify-center items-center bg-gradient-to-r from-yellow-500 to-pink-600  rounded-full m-2 transition ease-in-out delay-100 duration-100 hover:-translate-y-1 hover:scale-110">
          <FaFacebookF fontSize={20} />
        </a>
        <a
          href="https://github.com/abdu-rr-asheed"
          target="_blank"
          className="w-10 h-10 flex justify-center items-center bg-gradient-to-r from-yellow-500 to-pink-600  rounded-full m-2 transition ease-in-out duration-100 hover:-translate-y-1 hover:scale-110">
          <AiFillGithub fontSize={20} />
        </a>
        <a
          href="https://stackoverflow.com/users/14837324/abdur-rasheed"
          target="_blank"
          className="w-10 h-10 flex justify-center items-center bg-gradient-to-r from-yellow-500 to-pink-600  rounded-full m-2 transition ease-in-out delay-100 duration-100 hover:-translate-y-1 hover:scale-110">
          <BsStackOverflow fontSize={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/abdur-rasheed-430/"
          target="_blank"
          className="w-10 h-10 flex justify-center items-center bg-gradient-to-r from-yellow-500 to-pink-600  rounded-full m-2 transition ease-in-out delay-100 duration-100 hover:-translate-y-1 hover:scale-110">
          <FaLinkedinIn fontSize={20} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
