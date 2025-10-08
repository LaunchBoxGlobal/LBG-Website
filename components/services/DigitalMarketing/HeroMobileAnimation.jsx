"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React from "react";

const HeroMobileAnimation = () => {
  const { ref: ctaRef, inView } = useInView({
    triggerOnce: false,
  });
  return (
    <section
      ref={ctaRef}
      className="w-full h-[242px] md:h-[310px] lg:h-[422px] flex items-end justify-center relative overflow-hidden"
    >
      <div className="absolute left-[11.2%] bottom-[-9%] hidden lg:block">
        <Image
          src={"/digital-marketing-hero-01.webp"}
          width={275}
          height={180}
          priority
          alt="digital marketing service image"
          className="-rotate-[8deg]"
        />
      </div>
      <div className="absolute left-[16%] bottom-[-8%] hidden lg:block">
        <Image
          src={"/digital-marketing-hero-image-02.webp"}
          width={400}
          height={262}
          priority
          alt="digital marketing service image"
          className="-rotate-[8deg]"
        />
      </div>
      <div className="absolute left-[0%] lg:left-[19.7%] bottom-[25%] lg:bottom-[18%]">
        <Image
          src={"/digital-marketing-hero-image-03.webp"}
          width={334}
          height={219}
          priority
          alt="digital marketing service image"
          className="-rotate-[5deg] h-[150px] w-[250px] md:w-[334px] md:h-[190px] lg:h-[219px]"
        />
      </div>
      <div className="absolute left-[40%] bottom-[30%] z-30">
        <Image
          src={"/digital-marketing-hero-image-04.webp"}
          width={429}
          height={280}
          priority
          alt="digital marketing service image"
          className="rotate-[5deg] w-[100%] md:w-[350px] lg:w-[429px]"
        />
      </div>
      <div className="absolute right-[18%] bottom-[-5.6%] z-20 hidden lg:block">
        <Image
          src={"/digital-marketing-hero-image-05.webp"}
          width={275}
          height={380}
          priority
          alt="digital marketing service image"
          className="rotate-2"
        />
      </div>
      <div className="absolute right-[15%] bottom-[-25%] lg:bottom-[-15%] z-0 hidden lg:block">
        <Image
          src={"/digital-marketing-hero-image-06.webp"}
          width={275}
          height={380}
          priority
          alt="digital marketing service image"
          className="rotate-[20deg] w-[175px] h-[280px]"
        />
      </div>
      <Image
        src={"/digital-marketing-hero-image-07.webp"}
        width={425}
        height={278}
        priority
        alt="digital marketing service image"
        className="absolute left-1/2 -translate-x-1/2 z-40 bottom-[-5%] rotate-3 w-[70%] md:w-[50%] lg:w-[425px]"
      />
    </section>
  );
};

export default HeroMobileAnimation;
