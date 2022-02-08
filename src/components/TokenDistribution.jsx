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
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const TokenDistribution = () => {
  return (
    <div className="m-4 flex justify-center flex-wrap">
      <div className="md:w-1/2 flex justify-center items-center flex-col  my-10 md:my-0 relative lg:w-1/2 w-full">
        {/* <img src={logo} alt="" width="400px" /> */}
        <div className="text-white">
          <div className="md:text-6xl text-5xl text-pink-600 code-font my-2 font-bold">
            Tokenomics
          </div>
        </div>
        <h2 className="text-white font-bold md:text-7xl text-4xl my-3">
          <CountUp end={10000000000} delay={0} />
        </h2>
        <p className="text-yellow-500 text-2xl my-3">Total Supply</p>
      </div>
      <div className="text-white md:w-1/2 grid place-items-center my-10 md:my-0 px-6">
        <div className="md:w-1/2 flex justify-center items-center flex-col  my-10 md:my-0 relative lg:w-1/2 w-full">
          {/* <img src={logo} alt="" width="400px" /> */}
          <div className="text-white">
            <div className="md:text-6xl text-4xl text-pink-600 code-font my-8 font-bold whitespace-nowrap">
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
