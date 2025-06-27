"use client";
import Image from "next/image";
import React from "react";
import "./Styles.css";

const HeroAnimation = () => {
  return (
    <div className="w-full flex justify-center relative md:h-[395px] lg:h-auto mt-10">
      <Image
        src={"/custom-software-hero-card-01.webp"}
        alt="custom-software-hero-card"
        width={168}
        height={149}
        className="w-[168px] h-[149px] hidden md:block absolute md:left-[0%] lg:left-[10%] xl:left-[14%] top-[6%] z-10 hero-card-img"
      />
      <Image
        src={"/custom-software-hero-dashboard.webp"}
        alt="Custom software development dashboard interface showing analytics and workflow management tools"
        width={853}
        height={595}
        className="w-[90%] md:w-[80%] lg:w-[60%] h-full xl:h-[505px] hero-img z-0 custom-shadow"
      />
      <Image
        src={"/custom-software-hero-card-02.webp"}
        alt="custom-software-hero-card"
        width={224}
        height={147}
        className="w-[224px] h-[147px] hidden md:block absolute md:-left-10 lg:left-[8%] xl:left-[11%] bottom-[18%] z-10 hero-card-img"
      />
      <Image
        src={"/custom-software-hero-card-03.webp"}
        alt="custom-software-hero-card"
        width={224}
        height={147}
        className="w-[102px] h-[102px] hidden md:block absolute md:-right-2 lg:right-[12%] xl:right-[16.4%] md:bottom-16 lg:bottom-[18%] xl:bottom-[26%] z-10 hero-card-img"
      />
      <div className="w-[230px] h-[230px] hidden md:flex items-center justify-center absolute md:top-[1%] lg:top-[10%] xl:top-[15%] md:-right-32 lg:-right-1 xl:right-[2%] hero-card-img">
        <Image
          src="/custom-software-hero-cursor.webp"
          alt="cursor"
          width={40}
          height={39}
          className="orbiting-cursor z-20"
        />

        <Image
          src="/custom-software-hero-card-04.webp"
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
