import React from "react";
import logo from "./images/logo.svg";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsTelegram, BsFacebook, BsReddit } from "react-icons/bs";

import { reactimg, tailwind } from "./";

const Footer = () => {
  return (
    <div className="flex justify-around items-center flex-wrap bg-gray-800 rounded-md backdrop-blur-sm m-5 shadow-xl">
      <div className="flex items-center md:text-2xl text-base my-4">
        <div className="h-12 w-12 flex items-center justify-center z-20 mr-2 bg-gray-800 rounded-full transition-all duration-300 ease-linear">
          <img src={logo} alt="logo" className="m-2" />
        </div>
        <div className="text-white uppercase font-semibold flex flex-wrap justify-center text-pink-600">
          Starship-x
        </div>
      </div>
      <h2 className="text-pink-600 text-xl flex justify-center items-center my-4">
        All reserved Copyright ©
      </h2>
      <div className="flex justify-center items-center my-4">
        <a
          href="https://twitter.com/starshipxbsc?t=QthdOPriEKtXCoq-V5eoEg&s=09"
          target="_blank"
          className="w-10 h-10 flex justify-center items-center bg-gradient-to-r from-yellow-500 to-pink-600  rounded-full m-2 transition ease-in-out delay-100 duration-100 hover:-translate-y-1 hover:scale-110">
          <AiFillTwitterCircle fontSize={20} />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100078049712953"
          target="_blank"
          className="w-10 h-10 flex justify-center items-center bg-gradient-to-r from-yellow-500 to-pink-600  rounded-full m-2 transition ease-in-out duration-100 hover:-translate-y-1 hover:scale-110">
          <BsFacebook fontSize={20} />
        </a>
        <a
          href="https://stackoverflow.com/users/14837324/abdur-rasheed"
          target="_blank"
          className="w-10 h-10 flex justify-center items-center bg-gradient-to-r from-yellow-500 to-pink-600  rounded-full m-2 transition ease-in-out delay-100 duration-100 hover:-translate-y-1 hover:scale-110">
          <BsTelegram fontSize={20} />
        </a>
        <a
          href="https://www.reddit.com/u/starshipxbsc?utm_medium=android_app&utm_source=share"
          target="_blank"
          className="w-10 h-10 flex justify-center items-center bg-gradient-to-r from-yellow-500 to-pink-600  rounded-full m-2 transition ease-in-out delay-100 duration-100 hover:-translate-y-1 hover:scale-110">
          <BsReddit fontSize={20} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
