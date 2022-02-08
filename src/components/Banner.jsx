import React from "react";
import Particles from "react-tsparticles";
import Typewriter from "typewriter-effect";
import {
  html,
  css,
  js,
  reactimg,
  sanity,
  wordpress,
  figma,
  tailwind,
  balls,
} from "./";

const Banner = () => {
  return (
    <div
      className="relative flex justify-around items-center lg:flex-row md:flex-col flex-wrap code w-full"
      id="hero">
      <div className="text-white md:pl-24 pl-4 my-10 md:my-0 lg:w-1/2 w-full">
        <div className="opacity-40">&lt;body&gt;</div>
        <div className="opacity-40">&emsp;&lt;whoami&gt;</div>
        <div className="md:text-6xl text-5xl font-bold code-font my-2 md:ml-12 bg bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-pink-600">
          Hi,
          <br />
          I'm, RASHEED
        </div>
        <div className="opacity-40">&emsp;&lt;&#47;whoami&gt;</div>
        <div className="opacity-40">&emsp;&lt;profession&gt;</div>
        <div className="md:text-6xl text-5xl font-bold code-font my-2 md:ml-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-pink-600">
          Web Developer
        </div>
        <div className="opacity-40">&emsp;&lt;&#47;profession&gt;</div>
        <div className="opacity-40">&emsp;&lt;aboutme&gt;</div>
        <div className="text-2xl text-slate-300 code-font my-2 md:ml-12">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Front-end Developer | UI/UX Designer")
                .changeDelay(5000)
                .pauseFor(2500)
                .start();
            }}
          />
        </div>
        <div className="opacity-40">&emsp;&lt;&#47;aboutme&gt;</div>
        <div className="opacity-40">&lt;&#47;body&gt;</div>
      </div>
      <div className="relative h-[500px] my-10 md:my-0 lg:w-1/2 w-full">
        <iframe
          src="https://my.spline.design/charactor-389faed3c836ddc49c274b15d22eba47/"
          frameBorder="0"
          width="100%"
          height="100%"></iframe>
        <div className="absolute bottom-[10px] right-[10px] rounded-full w-10 h-10 bg-gray-900"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-transparent md:hidden"></div>
      </div>
      <img
        src={balls}
        alt="ball"
        className="absolute md:left-0 md:bottom-10 right-0 w-48 -z-10 opacity-40"
      />
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
                  src: html,
                  width: 20,
                  height: 20,
                },
                {
                  src: css,
                  width: 20,
                  height: 20,
                },
                {
                  src: figma,
                  width: 20,
                  height: 20,
                },
                {
                  src: js,
                  width: 20,
                  height: 20,
                },
                {
                  src: reactimg,
                  width: 20,
                  height: 20,
                },
                {
                  src: sanity,
                  width: 20,
                  height: 20,
                },
                {
                  src: tailwind,
                  width: 20,
                  height: 20,
                },
                {
                  src: wordpress,
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
