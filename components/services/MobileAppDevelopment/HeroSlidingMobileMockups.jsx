import React from "react";

const HeroSlidingMobileMockups = () => {
  return (
    <div className="absolute bottom-[-30%] left-1/2 -translate-x-1/2 z-10 flex items-end justify-center h-[446px] lg:h-[646px]">
      {/* Blank Mobile Mockup */}
      <img
        src="/mobile-app-development-mobile-mockup.png"
        alt="blank-mobile-mockup"
        width={318}
        height={646}
        className="relative z-0"
      />

      {/* Sliding Mockups */}
      <div className="mockup-slider mt-3 overflow-hidden z-20">
        <img src="/screen-1.png" alt="mockup-1" className="z-20" />
        <img src="/screen-2.png" alt="mockup-2" className="z-20" />
        <img src="/screen-3.png" alt="mockup-3" className="z-20" />
        <img src="/screen-4.png" alt="mockup-4" className="z-20" />
      </div>
    </div>
  );
};

export default HeroSlidingMobileMockups;
