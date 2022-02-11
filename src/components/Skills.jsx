import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import Swiper core and required modules
import SwiperCore, { EffectCards } from "swiper";
import Heading from "./Heading";

// install Swiper modules
SwiperCore.use([EffectCards]);

const Skills = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="text-white text-center">
        <div className="md:text-6xl text-5xl text-yellow-500 code-font my-12 font-bold">
          Road Map
        </div>
      </div>
      <div className="flex justify-around items-center flex-wrap">
        <div className="w-[310px] h-[400px] my-7 mx-2">
          <Card
            logo="01"
            title="Phase"
            description={
              <>
                <div className="flex">
                  <span>⚡️</span>
                  <span>Social media launch</span>
                </div>
                <div className="flex">
                  <span>⚡️</span>
                  <span>Website launch</span>
                </div>
                <div className="flex">
                  <span>⚡️</span>
                  <span>2000 telegram members</span>
                </div>
                <div className="flex">
                  <span>⚡️</span>
                  <span>Private sale </span>
                </div>
                <div className="flex">
                  <span>⚡️</span>
                  <span>Presale</span>
                </div>
                <div className="flex">
                  <span>⚡️</span>
                  <span>Earlier Markerting push</span>
                </div>
                <div className="flex">
                  <span>⚡️</span>
                  <span>Starship-X born (pancake launch)</span>
                </div>
              </>
            }
          />
        </div>
        <div className="w-[310px] h-[400px] my-7 mx-2">
          <Card
            logo="02"
            title="Phase"
            description={
              <>
                <div className="flex">
                  <span>⚡️</span>
                  <span>Airdrop contest winners distribution</span>
                </div>
                <div className="flex">
                  <span>⚡️</span>
                  <span>Influncer markerting push</span>
                </div>
                <div className="flex">
                  <span>⚡️</span>
                  <span>Listing CMC</span>
                </div>
                <div className="flex">
                  <span>⚡️</span>
                  <span>Listing CG</span>
                </div>
              </>
            }
          />
        </div>
        <div className="w-[310px] h-[400px] my-7 mx-2">
          <Card
            logo="03"
            title="Phase"
            description={
              <>
                <div className="flex">
                  <span>⚡️</span>
                  <span>Telegram 10 k members</span>
                </div>
                <div className="flex">
                  <span>⚡️</span>
                  <span>Massive markerting push</span>
                </div>
                <div className="flex">
                  <span>⚡️</span>
                  <span>Dextool & Cmc trending</span>
                </div>
                <div className="flex">
                  <span>⚡️</span>
                  <span>10 MC</span>
                </div>
              </>
            }
          />
        </div>
        <div className="w-[310px] h-[400px] my-7 mx-2">
          <Card
            logo="04"
            title="Phase"
            description={
              <>
                <div className="flex">
                  <span>⚡️</span>
                  <span>Starship-X staking platform</span>
                </div>
                <div className="flex">
                  <span>⚡️</span>
                  <span>NFT Launch</span>
                </div>
                <div className="flex">
                  <span>⚡️</span>
                  <span>Certic Audit</span>
                </div>
                <div className="flex">
                  <span>⚡️</span>
                  <span>Massive Burn</span>
                </div>
              </>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;

const Card = ({ logo, title, description }) => (
  <>
    <div className="sm:w-[280px] w-[310px] h-[400px] bg-gray-700 p-6 rounded-xl overflow-hidden relative z-[1] border-r border-yellow-500 before:absolute before:-top-56 before:-left-56 before:w-[190px] before:h-[190px] before:rounded-none before:-z-[1] before:bg-gray-700 before:transition-all after:absolute after:-top-[72px] after:-left-[55px] after:w-[190px] after:h-[190px] after:rounded-full after:-z-[2] after:bg-yellow-600 after:bg-gradient-to-t after:from-yellow-500 after:to-pink-600 after:transition-all hover:before:-top-[72px] hover:before:-left-[55px] hover:before:rounded-full hover:after:w-[120%] hover:after:h-[120%] hover:after:-left-[10%] hover:after:-top-[10%] hover:after:rounded-none hover:after:transition-all">
      <div className="w-10 ml-3 mt-3 text-white text-4xl font-bold">{logo}</div>
      <div className="text-white pt-14">
        <h5 className="mb-7 text-2xl capitalize">{title}</h5>
        <div className="text-base">{description}</div>
      </div>
    </div>
  </>
);
