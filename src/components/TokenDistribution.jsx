import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import CountUp from "react-countup";

ChartJS.register(ArcElement, Tooltip, Legend);
export const data = {
  labels: [
    "Auto Burn",
    "Private Sale",
    "Pre Sale",
    "Giveaway (Dev)",
    "Airdrop Contest",
    "Liquidity Token ",
  ],
  datasets: [
    {
      label: "# of Votes",
      data: [30.0, 10.6, 30.0, 4.9, 0.5, 24.0],
      backgroundColor: [
        "rgba(252, 9, 145, 1)",
        "#95CD41",
        "#0C1E7F",
        "rgba(75, 192, 192, 1)",
        "#B33030",
        "#FFE162",
      ],
      borderColor: [
        "#000000",
        "#000000",
        "#000000",
        "#000000",
        "#000000",
        "#000000",
      ],
      borderWidth: 3,
    },
  ],
};

const TokenDistribution = () => {
  return (
    <div className="m-4 flex justify-center items-center flex-wrap flex-col">
      <div className="flex justify-center items-center flex-col  my-10 md:my-0 relative w-full md:h-screen">
        {/* <img src={logo} alt="" width="400px" /> */}
        <div className="text-white">
          <div className="md:text-6xl text-5xl text-yellow-500 code-font my-2 font-bold">
            Tokenomics
          </div>
        </div>
        <h2 className="text-white font-bold md:text-7xl text-4xl my-3">
          <CountUp end={1000000000} delay={0} />
        </h2>
        <p className="text-yellow-500 font-bold text-3xl my-3">
          {" "}
          (Ten Billion)
        </p>
        <p className="text-yellow-500 text-3xl my-3">Total Supply</p>
      </div>
      <div className="flex justify-center items-center flex-col  my-10 md:my-0 relative w-full h-screen">
        {/* <img src={logo} alt="" width="400px" /> */}
        <div className="md:text-8xl text-6xl text-center text-yellow-500 code-font my-2 font-bold">
          $Starship-X Taxation
        </div>
        <div className="text-white text-center md:text-7xl text-4xl my-3 m-auto">
          <CountUp end={11} delay={0} className="font-bold" />%
          <p className="text-yellow-500 font-bold text-5xl my-3">
            Buy & Sell Taxes Distribution
          </p>
          <div className="flex justify-center items-center flex-col">
            <div className="text-left">
              <p className="text-white text-4xl my-3">2% Liquidity Pool</p>
              <p className="text-white text-4xl my-3">5% Reflections</p>
              <p className="text-white text-4xl my-3">4% Marketing</p>
            </div>
          </div>
          <p className="text-white text-xl my-3 md:w-7/12 m-auto mt-7">
            At the heart of every great crypto project are its 'tokenomics'.
            This basically communicates how much and where the transactional
            fees are distributed on any buy, sell or transfer of the token. Our
            team is committed to building a truly decentralized community that
            gives back to every stakeholder
          </p>
        </div>
        {/* <p className="text-yellow-500 font-bold text-3xl my-3">
          {" "}
          (Ten Billion)
        </p> */}
      </div>
      <div className="text-white grid place-items-center my-10 md:my-0 px-6">
        <div className="flex justify-center items-center flex-col  my-10 md:my-0 relative w-full">
          {/* <img src={logo} alt="" width="400px" /> */}
          <div className="text-white">
            <div className="md:text-6xl text-4xl text-yellow-500 code-font my-8 font-bold whitespace-nowrap">
              Token Distribution
            </div>
          </div>
        </div>
        <Pie data={data} />
      </div>
    </div>
  );
};

export default TokenDistribution;
