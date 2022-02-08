import React from "react";

import { ImNewTab } from "react-icons/im";

import {
  html,
  css,
  js,
  reactimg,
  sanity,
  wordpress,
  figma,
  tailwind,
  lonmrtimg,
  lonmrtlogo,
  sharemeimg,
  sharemelogo,
  xmobileimg,
  xmobilelogo,
  foodcoimg,
  foodcologo,
  phloximg,
  phloxlogo,
  rscimg,
  rsclogo,
} from "./";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import SwiperCore, { Autoplay, Pagination } from "swiper";
import Heading from "./Heading";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination]);

const Slider = ({ scrl }) => {
  return (
    <>
      <Heading title="Portfolio" />
      <div className="w-full" id="portfolio" ref={scrl}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          // direction={"vertical"}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            type: "fraction",
          }}>
          <SwiperSlide>
            <Portfolio
              portImg={sharemeimg}
              imgColor="#2c353d"
              portLogo={sharemelogo}
              progLang={[reactimg, sanity, tailwind]}
              siteLink="https://rasheedshareme.netlify.app/"
              description="This Web application Full Stack Social Media Application. build with React, Tailwind and Sanity.Login with Google-Auth ,Upload image, Delete image, Save image, Download image, Comment by User. Admin can manage the Backend."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Portfolio
              portImg={lonmrtimg}
              imgColor="#c5302e"
              portLogo={lonmrtlogo}
              progLang={[html, css, js]}
              figmaLink="https://www.figma.com/proto/PwdhraYAPexkAjJm3ueIK0/LondonMart?page-id=0%3A1&node-id=2%3A2&scaling=scale-down-width"
              siteLink="https://abdu-rr-asheed.github.io/londonMart/"
              description="This site is E-Commerce Site. I Designed Front-end for the site. build with HTML, CSS and JavaScript. I design UI/UX for the site. Deferent Sliders , Gallery page, Product View Page and Category page.My First complete website I have created"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Portfolio
              portImg={xmobileimg}
              imgColor="#044e81"
              portLogo={xmobilelogo}
              progLang={[html, css, js]}
              figmaLink="https://www.figma.com/proto/I62oGu2dE9YykIuQx5T5aC/X-Mobile-Mockup?page-id=0%3A1&node-id=1%3A2&viewport=241%2C48%2C0.05&scaling=scale-down-width"
              siteLink="https://abdu-rr-asheed.github.io/xmobile/"
              description="This is Electronic E-Commerce site.build with HTML, CSS, JavaScript.I Designed Front-end part and UI/UX. In site Hero Sliders , offer Countdown , Compare page , filleter ,Product page and 360 product View. "
            />
          </SwiperSlide>
          <SwiperSlide>
            <Portfolio
              portImg={rscimg}
              imgColor="#313946"
              portLogo={rsclogo}
              progLang={[html, css, js]}
              figmaLink="https://www.figma.com/proto/Vhy5kUFRdjNqcyVLZ6iXn5/RSC-Design?page-id=0%3A1&node-id=1%3A2&viewport=241%2C48%2C0.04&scaling=scale-down-width&starting-point-node-id=1%3A2"
              siteLink="https://abdu-rr-asheed.github.io/royalSC/"
              description="This is a Campus website.build with HTML ,CSS and JavaScript.I Designed Front-end part and UI/UX."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Portfolio
              portImg={phloximg}
              imgColor="#284f47"
              portLogo={phloxlogo}
              progLang={[wordpress]}
              siteLink="http://ecommercewordpress.epizy.com/"
              description="This is E-Commerce site.build with Wordpress, woo-commerce and elementor. This site build with my own for the study purpose"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Portfolio
              portImg={foodcoimg}
              imgColor="#777a4b"
              portLogo={foodcologo}
              figmaLink="https://www.figma.com/proto/xr2lsCfD7pHD0ajTIAgaOQ/Foodco?page-id=0%3A1&node-id=1%3A2&viewport=241%2C48%2C0.09&scaling=scale-down-width"
              description="This is static Food site. I have design UI/UX"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Slider;

const Portfolio = ({
  portImg,
  imgColor,
  portLogo,
  progLang,
  figmaLink,
  siteLink,
  description,
}) => (
  <div className="w-full grid place-items-center md:mt-20 my-16">
    <div className="relative md:w-9/12 w-11/12">
      <img
        src={portImg}
        alt="londonMartImage"
        className="w-full object-cover rounded-md"
        style={{ background: `${imgColor}` }}
      />
      <img
        src={portLogo}
        alt="LondonMartLogo"
        className="w-3/12 absolute md:-left-[120px] md:-top-[100px] left-0 -top-10"
      />
      <div className="absolute bottom-0 left-0 w-fit h-fit flex justify-center items-center p-[1px] bg-gray-900 bg-opacity-50 rounded-md m-1">
        {progLang &&
          progLang.map((item, idx) => (
            <img
              src={item}
              alt="icon"
              key={idx}
              className="md:w-[24px] w-[18px] m-2"
            />
          ))}
      </div>
      {figmaLink && (
        <div className="absolute bottom-0 right-0 w-fit h-fit flex justify-center items-center p-[1px] bg-gray-900 rounded-md m-1">
          <a href={figmaLink} target="_blank">
            <img src={figma} alt="" className="md:w-[22px] w-[20px] m-2" />
          </a>
        </div>
      )}
      {siteLink && (
        <a
          href={siteLink}
          target="_blank"
          className="text-white absolute md:bottom-16 md:-right-16 right-0 top-0 md:top-auto flex items-center text-xl tracking-widest"
          style={{ textShadow: "3px 3px 5px #000000" }}>
          <span className="hidden md:inline">View site</span>
          <span className="md:p-0 p-1 rounded-md md:bg-transparent bg-black md:m-0 m-1">
            <ImNewTab
              fontSize={24}
              className="ml-2 shadow-2xl m-1 text-white"
            />
          </span>
        </a>
      )}
    </div>
    <p className="md:w-9/12 w-11/12 text-white text-base md:text-left text-center mt-4">
      {description}
    </p>
  </div>
);
