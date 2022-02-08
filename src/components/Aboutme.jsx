import React from "react";
import {
  bitcoin,
  css,
  js,
  reactimg,
  sanity,
  wordpress,
  figma,
  tailwind,
} from "./";
// import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
// import { AiFillGithub } from "react-icons/ai";
// import { BsStackOverflow } from "react-icons/bs";

export const Aboutme = ({ scrl }) => {
  return (
    <>
      <div className="m-4 flex justify-center flex-wrap" ref={scrl}>
        <div className="md:w-1/2 flex justify-center items-center flex-col  my-10 md:my-0">
          {/* <img src={me} alt="me" id="melogo" /> */}
          <div className="relative h-[500px] my-10 md:my-0 lg:w-1/2 w-full flex justify-center items-center">
            {/* <iframe
          src="https://my.spline.design/charactor-389faed3c836ddc49c274b15d22eba47/"
          frameBorder="0"
          width="100%"
          height="100%"></iframe>
        <div className="absolute bottom-[10px] right-[10px] rounded-full w-10 h-10 bg-gray-900"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-transparent md:hidden"></div> */}
            <img src={bitcoin} alt="" width="400px" />
          </div>
          {/* <div className="flex justify-center items-center my-4">
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
          </div> */}
        </div>
        <div className="text-white md:w-1/2 grid place-items-center  my-10 md:my-0">
          <div className="text-white md:w-10/12">
            <div className="text-5xl text-pink-600 code-font my-8 md:ml-12 font-bold">
              Who we are?
            </div>
            <div className="text-sm text-white my-2 md:ml-12 text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
              explicabo dolorem laboriosam autem, ducimus laudantium eaque
              dolores quos consequatur consequuntur, nulla maxime. Voluptatum,
              officiis! Ipsam fugit distinctio quibusdam voluptate quasi!
              <br />
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
              explicabo dolorem laboriosam autem, ducimus laudantium eaque
              dolores quos consequatur consequuntur, nulla maxime. Voluptatum,
              officiis! Ipsam fugit distinctio quibusdam voluptate quasi!
              <br />
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
              explicabo dolorem laboriosam autem, ducimus laudantium eaque
              dolores quos consequatur consequuntur, nulla maxime. Voluptatum,
              officiis! Ipsam fugit distinctio quibusdam voluptate quasi!
            </div>
            {/* <div className="my-2 md:ml-12 flex items-center flex-wrap">
              <img src={html} alt="html" width="30" className="md:m-2 m-1" />
              <img src={css} alt="css" width="30" className="md:m-2 m-1" />
              <img
                src={tailwind}
                alt="tailwind"
                width="32"
                className="md:m-2 m-1"
              />
              <img src={js} alt="js" width="30" className="md:m-2 m-1" />
              <img
                src={wordpress}
                alt="wordpress"
                width="30"
                className="md:m-2 m-1"
              />
              <img
                src={reactimg}
                alt="react"
                width="30"
                className="md:m-2 m-1"
              />
              <img
                src={sanity}
                alt="sanity"
                width="30"
                className="md:m-2 m-1"
              />
              <img src={figma} alt="figma" width="30" className="md:m-2 m-1" />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutme;
