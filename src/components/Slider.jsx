import React from "react";

import { burn } from "./";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import SwiperCore, { Autoplay, Pagination } from "swiper";
import Heading from "./Heading";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination]);

const Slider = () => {
  return (
    <>
      <Heading title="Portfolio" />
      <div className="w-full" id="portfolio">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            type: "fraction",
          }}>
          <SwiperSlide>
            <Portfolio
              portImg={burn}
              imgColor="#2c353d"
              siteLink="https://rasheedshareme.netlify.app/"
              description="This Web application Full Stack Social Media Application. build with React, Tailwind and Sanity.Login with Google-Auth ,Upload image, Delete image, Save image, Download image, Comment by User. Admin can manage the Backend."
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Slider;

const Portfolio = ({ portImg }) => (
  <div className="w-full grid place-items-center md:mt-20 my-16">
    <div className="relative md:w-9/12 w-11/12  md:h-full h-[340px]  rounded-md overflow-hidden">
      <img
        src={portImg}
        alt="londonMartImage"
        className="w-full object-cover h-full"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-75"></div>
      <div className="md:px-16 px-5 py-10 absolute w-full h-full top-0 left-0 text-white flex justify-center items-center flex-col text-center">
        <h1 className="text-yellow-500 md:text-6xl text-2xl font-bold">
          The birth of Starship-X
        </h1>
        <p className="text-xl md:text-3xl my-3">
          The World best Hyper deflationary Community coin
        </p>
        <div className="flex flex-col text-left text-yellow-500 font-bold text-base my-2 md:text-3xl">
          <p>50 % coins already burned</p>
          <p>5% Reflection to holders</p>
        </div>
        <p className="text-justify my-2 md:text-3xl text-sm">
          We have burned 50+of the supply .that mean out of the 5%
          redistribution 50% it will be distributed to the dead wallet each
          transaction 2.5% coins are burnt with every transactions
        </p>
      </div>
    </div>
  </div>
);
