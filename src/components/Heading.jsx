import React from "react";

const Heading = ({ title, description, scrl }) => {
  return (
    <div className="text-white md:ml-10" ref={scrl}>
      <div className="md:text-6xl text-5xl text-pink-600 code-font my-2 md:ml-12 ml-5 font-bold">
        {title}
      </div>
      {description && (
        <>
          <div className="text-sm text-white my-2 md:ml-12 ml-5 text-justify">
            {description}
          </div>
        </>
      )}
    </div>
  );
};

export default Heading;
