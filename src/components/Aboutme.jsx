import React from "react";
import {
  html,
  css,
  js,
  reactimg,
  sanity,
  wordpress,
  figma,
  tailwind,
} from "./";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { BsStackOverflow } from "react-icons/bs";

export const Aboutme = ({ scrl }) => {
  return (
    <>
      <div className="m-4 flex justify-center flex-wrap" ref={scrl}>
        <div className="md:w-1/2 flex justify-center items-center flex-col  my-10 md:my-0">
          {/* <img src={me} alt="me" id="melogo" /> */}
          <div className="relative md:h-[500px] h-[300px] w-full">
            <iframe
              src="https://abdu-rr-asheed.github.io/imagepixa/"
              frameBorder="0"
              width="100%"
              height="100%"></iframe>
          </div>
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
        <div className="text-white md:w-1/2 grid place-items-center  my-10 md:my-0">
          <div className="text-white md:w-10/12">
            <div className="opacity-40">&lt;section&gt;</div>
            <div className="opacity-40">&emsp;&lt;h2&gt;</div>
            <div className="text-5xl text-pink-600 code-font my-2 md:ml-12 font-bold">
              Me, Myself
            </div>
            <div className="opacity-40">&emsp;&lt;&#47;h2&gt;</div>
            <div className="opacity-40">&emsp;&lt;p&gt;</div>
            <div className="text-sm text-white my-2 md:ml-12 text-justify">
              My name is Abdur Rasheed, I'm a Web Developer with a great passion
              for Developing. I describe myself as a passionate developer who
              loves coding and the web platform.
              <br />
              <br /> Improved my skills as a Front-End developer I develop
              websites and applications using HTML5, CSS3, Bootstrap5
              ,Tailwindcss, Javascript and React JS. I am familiar with
              developing layouts that provide me.
              <br />
              <br /> I'm always improving myself with each project they put in
              my hands. I am a dedicated person who pursues his dreams,
              hardworking and results oriented, I always seek to achieve my best
              version
            </div>
            <div className="opacity-40">&emsp;&lt;&#47;p&gt;</div>
            <div className="opacity-40">&emsp;&lt;skills&gt;</div>
            <div className="my-2 md:ml-12 flex items-center flex-wrap">
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
            </div>
            <div className="opacity-40">&emsp;&lt;&#47;skills&gt;</div>
            <div className="opacity-40">&lt;&#47;section&gt;</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutme;
