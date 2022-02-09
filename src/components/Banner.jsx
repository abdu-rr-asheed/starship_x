import React from "react";
import Particles from "react-tsparticles";
import Typewriter from "typewriter-effect";
import logo from "./images/logo.jpg";
import { bitcoin, avalanche, binance, ethereum, iota, monero, shiba } from "./";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsTelegram, BsFacebook, BsReddit } from "react-icons/bs";

const Banner = () => {
  return (
    <div
      className="relative flex justify-around items-center lg:flex-row md:flex-col flex-wrap code w-full"
      id="hero">
      <div className="text-white md:pl-24 pl-4 my-10 md:my-0 lg:w-1/2 w-full">
        <div className="md:text-6xl text-5xl md:text-left text-center font-bold code-font my-6 md:ml-12 bg bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-pink-600">
          STARSHIP - X
        </div>
        <div className="text-xl font-bold md:text-justify text-center code-font my-2 md:ml-12 text-pink-600">
          $ STARSHIP-X (SS) is a hyper-deflationary token on the Binance Smart
          Chain that provides unparalleled investing opportunities and an
          unprecedented use case that actually makes a difference in this world!
        </div>
        <div className="text-base text-slate-300 md:text-justify text-center code-font my-2 md:ml-12">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "The STARSHIP-X Token contract is verified and 100% of LP tokens have been locked. This means that no one can ever access the liquidity pool."
                )
                .changeDelay(5000)
                .pauseFor(2500)
                .start();
            }}
          />
        </div>
        <div className="flex md:justify-start justify-center items-center my-4 md:ml-12">
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
      <div className="relative h-[500px] my-10 md:my-0 lg:w-1/2 w-full flex justify-center items-center">
        {/* <iframe
          src="https://my.spline.design/charactor-389faed3c836ddc49c274b15d22eba47/"
          frameBorder="0"
          width="100%"
          height="100%"></iframe>
        <div className="absolute bottom-[10px] right-[10px] rounded-full w-10 h-10 bg-gray-900"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-transparent md:hidden"></div> */}
        <img src={logo} alt="" width="400px" />
      </div>
      {/* <img
        src={balls}
        alt="ball"
        className="absolute md:left-0 md:bottom-10 right-0 w-48 -z-10 opacity-40"
      /> */}
      <Particles
        id="tsparticles"
        options={{
          fullScreen: {
            enable: true,
            zIndex: -2,
          },
          detectRetina: true,
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onDiv: {
                elementId: "repulse-div",
                enable: false,
                mode: "repulse",
              },
              onHover: {
                enable: true,
                mode: "bubble",
                parallax: {
                  enable: false,
                  force: 60,
                  smooth: 10,
                },
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 2,
              },
              connect: {
                distance: 80,
                lineLinked: {
                  opacity: 0.5,
                },
                radius: 60,
              },
              grab: {
                distance: 400,
                lineLinked: {
                  opacity: 1,
                },
              },
              push: {
                quantity: 2,
              },
              remove: {
                quantity: 2,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            lineLinked: {
              blink: false,
              color: "#000",
              consent: false,
              distance: 150,
              enable: false,
              opacity: 0.4,
              width: 1,
            },
            move: {
              attract: {
                enable: false,
                rotate: {
                  x: 600,
                  y: 1200,
                },
              },
              bounce: false,
              direction: "none",
              enable: true,
              outMode: "out",
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              limit: 20,
              value: 15,
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.2,
                speed: 1,
                sync: false,
              },
              random: true,
              value: 1,
            },
            rotate: {
              animation: {
                enable: true,
                speed: 5,
                sync: false,
              },
              direction: "random",
              random: true,
              value: 0,
            },
            shape: {
              character: {
                fill: false,
                font: "Verdana",
                style: "",
                value: "*",
                weight: "400",
              },
              image: [
                {
                  src: bitcoin,
                  width: 20,
                  height: 20,
                },
                {
                  src: binance,
                  width: 20,
                  height: 20,
                },
                {
                  src: avalanche,
                  width: 20,
                  height: 20,
                },
                {
                  src: ethereum,
                  width: 20,
                  height: 20,
                },
                {
                  src: iota,
                  width: 20,
                  height: 20,
                },
                {
                  src: monero,
                  width: 20,
                  height: 20,
                },
                {
                  src: shiba,
                  width: 20,
                  height: 20,
                },
              ],
              polygon: {
                sides: 5,
              },
              stroke: {
                color: "#000000",
                width: 0,
              },
              type: "image",
            },
            size: {
              animation: {
                enable: false,
                minimumValue: 0.1,
                speed: 40,
                sync: false,
              },
              random: false,
              value: 16,
            },
          },
          polygon: {
            draw: {
              enable: false,
              lineColor: "#ffffff",
              lineWidth: 0.5,
            },
            move: {
              radius: 10,
            },
            scale: 1,
            url: "",
          },
          background: {
            image: "90vh 90vh",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover",
          },
        }}
      />
    </div>
  );
};

export default Banner;
