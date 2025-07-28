import React from "react";

const HeroSlidingMobileMockups = () => {
  return (
    <div className="absolute bottom-[-40%] lg:bottom-[-25%] left-1/2 -translate-x-1/2 z-10 flex items-end justify-center h-auto lg:h-[646px]">
      {/* Blank Mobile Mockup */}
      <img
        src="/mobile-app-development-mobile-mockup.png"
        alt="blank-mobile-mockup"
        width={308}
        height={646}
        className="relative z-0"
      />

      {/* Sliding Mockups */}
      <div className="mt-3 mockup-slider overflow-hidden h-full absolute inset-x-0 bottom-[-2%] md:bottom-[-1%] lg:bottom-[-4.7%] midlg:bottom-[-5%] max-w-[175px] left-0.5 md:left-0 md:max-w-[290px] px-4 lg:max-w-[290px] midlg:max-w-[288px] mx-auto z-50 rounded-t-[25px] md:rounded-t-[42px]">
        <img
          src="/screen-1.png"
          alt="mockup-1"
          className="z-20 rounded-t-[25px] md:rounded-t-[42px]"
        />
        <img
          src="/screen-2.png"
          alt="mockup-2"
          className="z-20 rounded-t-[25px] md:rounded-t-[42px]"
        />
        <img
          src="/screen-3.png"
          alt="mockup-3"
          className="z-20 rounded-t-[25px] md:rounded-t-[42px]"
        />
        <img
          src="/screen-4.png"
          alt="mockup-4"
          className="z-20 rounded-t-[25px] md:rounded-t-[42px]"
        />
      </div>
    </div>
  );
};

export default HeroSlidingMobileMockups;
