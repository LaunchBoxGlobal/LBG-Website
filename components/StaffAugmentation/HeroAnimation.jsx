import Image from "next/image";
import React from "react";

const HeroAnimation = () => {
  return (
    <div className="w-full min-h-[230px] z-10 lg:min-h-[578px] relative flex items-center justify-between lg:mt-10">
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 2xl:left-[45%] -translate-y-1/2 items-center justify-center flex w-[300px] h-[300px] lg:w-[412px] lg:h-[412px] bg-transparent z-10">
        <span className="animate-ping absolute inline-flex h-[60px] w-[60px] md:w-[120px] md:h-[120px] lg:h-[230px] lg:w-[230px] rounded-full bg-[#F40E0040] opacity-75"></span>
        <span className="animate-ping absolute inline-flex w-[80px] h-[80px] md:w-[150px] md:h-[150px] lg:h-[190px] lg:w-[190px] rounded-full bg-[#F40E0040] opacity-50"></span>
        <span className="animate-ping absolute inline-flex h-[100px] w-[100px] md:w-[180px] md:h-[180px] lg:h-[150px] lg:w-[150px] rounded-full bg-[#F40E0059] opacity-25"></span>
      </div>

      <Image
        src={"/staff-augmentation/hero-mockup-01.png"}
        alt="hero-mockup"
        width={1270}
        height={578}
        className="object-contain relative -bottom-1.5 lg:-bottom-4"
      />
    </div>
  );
};

export default HeroAnimation;
