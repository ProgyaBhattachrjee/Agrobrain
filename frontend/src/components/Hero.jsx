import React from "react";
import videoSrc from "../../public/agrobrain.mp4";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
      ></video>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white bg-black bg-opacity-30">
        <a
          href="#home"
          className="absolute bottom-8 animate-bounce text-white text-2xl bg-gray-800 bg-opacity-70 rounded-full p-3 hover:bg-gray-700 focus:outline-none"
          aria-label="Scroll to Home"
        >
          ↓
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
