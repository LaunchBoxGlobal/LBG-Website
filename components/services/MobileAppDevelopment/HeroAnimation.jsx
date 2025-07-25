import React from "react";

const HeroAnimation = () => {
  return (
    <div className="w-full h-[646px] border border-black relative flex items-center justify-center overflow-hidden">
      <div className="w-[800px] h-[800px] border-2 rounded-full absolute bottom-0 left-1/2 -translate-x-1/2"></div>
    </div>
  );
};

export default HeroAnimation;
