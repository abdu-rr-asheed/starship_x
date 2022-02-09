import React from "react";

const Lunchdate = () => {
  return (
    <>
      <div className="md:text-8xl text-6xl text-center text-yellow-500 code-font my-2 font-bold my-9">
        LAUNCH EVENT
      </div>
      <div className="text-white flex md:justify-around justify-center items-center flex-wrap">
        <div className="border-2 border-yellow-500 p-6 rounded-lg text-center bg-black m-3">
          <h1 className="text-yellow-500 text-2xl font-bold">PRIVATE SALE</h1>
          <div className="text-4xl code-three mt-6">
            {" "}
            18<sup>th</sup> Feb 2022 UTC 14:00
          </div>
        </div>
        <div className="border-2 border-yellow-500 p-6 rounded-lg text-center bg-black">
          <h1 className="text-yellow-500 text-2xl font-bold">
            PRE SALE (PINK SALE)
          </h1>
          <div className="text-4xl code-three mt-6">
            {" "}
            25<sup>th</sup> Feb 2022 UTC 14:00
          </div>
        </div>
        <div className="border-2 border-yellow-500 p-6 rounded-lg text-center bg-black m-3">
          <h1 className="text-yellow-500 text-2xl font-bold">LAUNCH EVENT</h1>
          <div className="text-4xl code-three mt-6">
            {" "}
            1<sup>st</sup> March 2022 UTC 14:00
          </div>
        </div>
      </div>
    </>
  );
};

export default Lunchdate;
