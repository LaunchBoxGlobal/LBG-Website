import React from "react";

const HeroSlidingMobileMockups = () => {
  return (
    <div className="absolute bottom-[-40%] lg:bottom-[-30%] left-1/2 -translate-x-1/2 z-10 flex items-end justify-center h-[396px] lg:h-[646px]">
      {/* Blank Mobile Mockup */}
      <img
        src="/mobile-app-development-mobile-mockup.png"
        alt="blank-mobile-mockup"
        width={308}
        height={646}
        className="relative z-0"
      />

      {/* Sliding Mockups */}
      <div className="mt-3 overflow-hidden absolute inset-x-0 bottom-[0%] md:bottom-[-4%] lg:bottom-[-2.7%] midlg:bottom-[0%] max-w-[278px] md:max-w-[310px] px-2 lg:max-w-[310px] midlg:max-w-[298px] mx-auto z-50">
        <img
          src="/screen-1.png"
          alt="mockup-1"
          className="z-20 rounded-t-[25px] md:rounded-t-[45px]"
        />
        {/* <img src="/screen-2.png" alt="mockup-2" className="z-20" />
        <img src="/screen-3.png" alt="mockup-3" className="z-20" />
        <img src="/screen-4.png" alt="mockup-4" className="z-20" /> */}
      </div>
    </div>
  );
};

export default HeroSlidingMobileMockups;
