import React from "react";

// import js from "./images/js.svg";
import {
  html,
  css,
  js,
  reactimg,
  sanity,
  wordpress,
  octobercms,
  figma,
  tailwind,
  xd,
  spline,
  blender,
} from "./";

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

const Skills = ({ scrl }) => {
  return (
    <>
      <Heading title="Skills" scrl={scrl} />
      <div className="flex justify-around items-center flex-wrap overflow-x-hidden">
        <div className="w-[310px] h-[400px] my-7 mx-2">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}>
            <SwiperSlide className="rounded-xl">
              <Card
                logo={html}
                title="HTML"
                description="HTML, in full hypertext markup language, a formatting system for displaying material retrieved over the Internet. HTML markup tags specify document elements such as headings, paragraphs, and tables. They mark up a document for display by a computer program known as a Web browser."
              />
            </SwiperSlide>
            <SwiperSlide className="rounded-xl">
              <Card
                logo={css}
                title="CSS"
                description="Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript."
              />
            </SwiperSlide>
            <SwiperSlide className="rounded-xl">
              <Card
                logo={tailwind}
                title="Tailwind CSS"
                description="Tailwind CSS is basically a utility-first CSS framework for rapidly building custom user interfaces. It is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override."
              />
            </SwiperSlide>
            <SwiperSlide className="rounded-xl">
              <Card
                logo={js}
                title="javaScript"
                description="JavaScript is a dynamic computer programming language. It is lightweight and most commonly used as a part of web pages, whose implementations allow client-side script to interact with the user and make dynamic pages. It is an interpreted programming language with object-oriented capabilities."
              />
            </SwiperSlide>
            <SwiperSlide className="rounded-xl">
              <Card
                logo={reactimg}
                title="React Js"
                description="React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”. React has a few different kinds of components, but we'll start with React.Component subclasses: class ShoppingList extends React."
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-[310px] h-[400px] my-7 mx-2">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}>
            <SwiperSlide className="rounded-xl">
              <Card
                logo={wordpress}
                title="Wordpress"
                description="WordPress is an open source Content Management System (CMS), which allows the users to build dynamic websites and blogs. WordPress is the most popular blogging system on the web and allows updating, customizing and managing the website from its back-end CMS and components"
              />
            </SwiperSlide>
            <SwiperSlide className="rounded-xl">
              <Card
                logo={sanity}
                title="Sanity"
                description="Sanity Studio is an open source headless real-time CMS, that you can customize with JavaScript and React. Efficient editing, instant UI for complex fields. Responsive, works on small screens. Plug-in architecture and custom input components. Style with your own branding."
              />
            </SwiperSlide>
            <SwiperSlide className="rounded-xl">
              <Card
                logo={octobercms}
                title="OctoberCMS"
                description="October is a self-hosted content management system (CMS) based on the PHP programming language and Laravel web application framework. The October CMS covers a range of capabilities such as users, permissions, themes, and plugins, and is seen as a simpler alternative to WordPress."
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-[310px] h-[400px] my-7 mx-2">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}>
            <SwiperSlide className="rounded-xl">
              <Card
                logo={figma}
                title="Figma"
                description="Figma is a browser-based UI and UX design application, with excellent design, prototyping, and code-generation tools. It's currently (arguably) the industry's leading interface design tool, with robust features which support teams working on every phase of the design process."
              />
            </SwiperSlide>
            <SwiperSlide className="rounded-xl">
              <Card
                logo={xd}
                title="Adobe XD"
                description="Adobe XD is a powerful and easy-to-use vector-based experience design platform that gives teams the tools they need to craft the world's best experiences collaboratively. Available on Mac and Windows systems, XD meets teams where they're working with cross-platform compatibility."
              />
            </SwiperSlide>
            <SwiperSlide className="rounded-xl">
              <Card
                logo={spline}
                title="Spilne"
                description="Spline is the design tool for 3D. Create web-based 3D experiences, using a 2d approach. Import 3D models, use basic geometric shapes, edit materials, use text, and much more! Spline is currently in Preview Release, so try it out and send them some thoughts to help them shape the product."
              />
            </SwiperSlide>
            <SwiperSlide className="rounded-xl">
              <Card
                logo={blender}
                title="Blender"
                description="Blender is the free and open source 3D creation suite. It supports the entirety of the 3D pipeline—modeling, rigging, animation, simulation, rendering, compositing and motion tracking, even video editing and game creation. Blender is cross-platform and runs equally well on Linux, Windows, and Macintosh computers."
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Skills;

const Card = ({ logo, title, description }) => (
  <>
    <div className="sm:w-[280px] w-[310px] h-[400px] bg-gray-700 p-6 rounded-xl overflow-hidden relative z-[1] border-r border-yellow-500 before:absolute before:-top-56 before:-left-56 before:w-[190px] before:h-[190px] before:rounded-none before:-z-[1] before:bg-gray-700 before:transition-all after:absolute after:-top-[72px] after:-left-[55px] after:w-[190px] after:h-[190px] after:rounded-full after:-z-[2] after:bg-yellow-600 after:bg-gradient-to-t after:from-yellow-500 after:to-pink-600 after:transition-all hover:before:-top-[72px] hover:before:-left-[55px] hover:before:rounded-full hover:after:w-[120%] hover:after:h-[120%] hover:after:-left-[10%] hover:after:-top-[10%] hover:after:rounded-none hover:after:transition-all">
      <img src={logo} alt="logo" className="w-10 ml-3 mt-3" />
      <div className="text-white pt-14">
        <h5 className="mb-7 text-2xl capitalize">{title}</h5>
        <p className="text-justify text-[13px]">{description}</p>
      </div>
    </div>
  </>
);
