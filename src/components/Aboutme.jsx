import React from "react";
import {
  binance,
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
            <img src={binance} alt="" width="400px" />
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
            <div className="text-5xl text-yellow-500 code-font my-8 md:ml-12 font-bold">
              Who we are?
            </div>
            <div className="text-sm text-white my-2 md:ml-12 text-justify">
              Starship-X is of the people, by the people, and for the people.
              Just like you, we are creators who care greatly for the crypto
              community. Here with STARSHIP, we're going to make a difference in
              the world, not just in our bank accounts or garages. We understand
              crypto mass adoption is inevitable and through our integrity, we
              aim be a positive lighthouse for like minded individuals.
              <br />
              <br />
              All Starship-X team members are doxed. Top to bottom, we're made
              up of well-established investors and successful business people.
              We aren't looking for a quick buck, rather our goal is to help the
              space grow. We aim to provide holders life changing opportunities
              through investing in an asset that isn't controlled by any
              government, stock market, or news organization.
            </div>
            <div className="text-2xl text-yellow-500 code-font my-2 md:ml-12 font-bold">
              Our Mission
            </div>
            <div className="text-sm text-white my-2 md:ml-12 text-justify">
              Our Mission at Starship-X is to help individuals and their
              families financially and emotionally. Our religion faith has
              helped foster our love for the crypto community as EVERYONE is
              accepted with open arms. Through that, a large part of this baby
              coin's mission is to nurture ideas and support each other no
              matter what. This will allow us to create the greatest community
              in the crypto space.
              <br />
              <br />
              Our developers have created a token with well tested tokenomics,
              coding, and development. This will serve as the backbone of all
              the ways investors will benefit. Taking it a step further from the
              technicals, the use case will help take our community to the next
              level. Here at Starship-X, we've got the perfect trifecta to
              facilitate our exponential growth: technology, use case, and major
              incentivizing catalysts.
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
