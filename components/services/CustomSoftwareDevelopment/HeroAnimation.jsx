"use client";
import Image from "next/image";
import React from "react";

const HeroAnimation = () => {
  return (
    <div className="w-full flex justify-center relative">
      <Image
        src={"/custom-software-hero-card-01.png"}
        alt="custom-software-hero-card"
        width={168}
        height={149}
        className="w-[168px] h-[149px] hidden lg:block absolute left-[14%] top-[6%] z-10 hero-card-img"
      />
      <Image
        src={"/custom-software-hero-dashboard.png"}
        alt="custom software development services"
        width={853}
        height={595}
        className="w-full lg:w-[70%] h-auto lg:h-[595px] hero-img z-0"
      />
      <Image
        src={"/custom-software-hero-card-02.png"}
        alt="custom-software-hero-card"
        width={224}
        height={147}
        className="w-[224px] h-[147px] hidden lg:block absolute left-[11%] bottom-[18%] z-10 hero-card-img"
      />
      <Image
        src={"/custom-software-hero-card-03.png"}
        alt="custom-software-hero-card"
        width={224}
        height={147}
        className="w-[102px] h-[102px] hidden lg:block absolute right-[16.4%] bottom-[26%] z-10 hero-card-img"
      />
      <div className="w-[230px] h-[230px] hidden lg:flex items-center justify-center absolute top-[15%] right-[2%] hero-card-img">
        <Image
          src="/custom-software-hero-cursor.png"
          alt="cursor"
          width={40}
          height={39}
          className="orbiting-cursor z-20"
        />

        <Image
          src="/custom-software-hero-card-04.png"
          alt="custom-software-hero-card"
          width={153}
          height={132}
          className="w-[153px] h-[132px] z-10"
        />
      </div>
    </div>
  );
};

export default HeroAnimation;

{
  /* <motion.div
          style={{ rotate }}
          className="absolute w-full h-full flex items-center justify-center"
        >
          <Image
            src="/custom-software-hero-cursor.png"
            alt="custom-software-hero-cursor"
            width={40}
            height={39}
            className="absolute top-2.5 left-1.5"
          />
        </motion.div> */
}
