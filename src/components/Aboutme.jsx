import React from "react";
import { binance } from "./";

export const Aboutme = ({ scrl }) => {
  return (
    <>
      <div className="m-4 flex justify-center flex-wrap" ref={scrl}>
        <div className="md:w-1/2 flex justify-center items-center flex-col  my-10 md:my-0">
          <div className="relative h-[500px] my-10 md:my-0 lg:w-1/2 w-full flex justify-center items-center">
            <img src={binance} alt="" width="400px" />
          </div>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutme;
