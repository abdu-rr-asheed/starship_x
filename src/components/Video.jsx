import React from "react";
import bgvideo from "./images/bgvideo.mp4";

const Video = () => {
  return (
    <div className="fixed left-0 top-0 w-full h-screen -z-10">
      <video
        src={bgvideo}
        type="video/mp4"
        loop
        controls={false}
        muted
        autoPlay
        className="w-full h-screen object-cover"></video>
    </div>
  );
};

export default Video;
