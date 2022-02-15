import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { privetesale } from "./";

const PriveteSale = () => {
  return (
    <div className="flex items-center justify-around md:h-[75vh] flex-wrap">
      <img
        src={privetesale}
        alt="privetesale"
        className="w-1/3 md:block hidden"
      />
      <div className="text-center md:w-1/3">
        <h1 className="text-yellow-500 text-5xl font-bold">
          Private sale just begin LFG
        </h1>
        <div className="text-white text-2xl my-3">
          If you wish to invest just fill below the form and wait for for a team
          approval
        </div>
        <div className="flex items-center justify-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSenKpOYjp6LSByql6otL1P4ZR4tkLBwNkv3_f5uNEma4NBSww/viewform?usp=sf_link"
            target="_blank"
            className="text-black transition-all duration-500 font-bold text-2xl my-3 bg-yellow-500  active:bg-yellow-400 py-3 px-8 rounded-md flex items-center justify-center">
            <span>Apply</span>
            <span className="">
              <BsArrowRightShort fontSize={40} />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PriveteSale;
