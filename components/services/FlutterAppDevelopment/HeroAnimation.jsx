"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";

const HeroAnimation = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });
  return (
    <div className="w-full flex justify-center h-[65vh] md:min-h-[861px]">
      <div
        ref={ref}
        className="w-[95%] h-[300px] md:w-[90%] md:h-[650px] lg:w-[672px] lg:h-[672px] border relative flex items-center justify-center rounded-full border-[#5290F1] overflow-visible"
      >
        <div className="w-[80%] h-[247px] md:w-[377px] md:h-[377px] lg:w-[457px] lg:h-[457px] bg-[#5290F1] rounded-full absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 z-0" />
        <Image
          src={"/flutter/flutter-app-mobile-app-mockup.png"}
          width={313}
          height={813}
          alt="Flutter app development company showcasing cross-platform mobile UI with responsive widgets"
          className="z-10 relative top-[20%] md:top-[10%] lg:top-[15%] right-[5%] w-auto h-[400px] md:h-[713px] md:w-auto lg:h-[813px] moveUpDownMockup"
        />
        {/* ORBITING IMAGE 1 */}
        <div className="orbit-wrapper orbit-1 hidden md:block">
          <Image
            src="/flutter/flutter-app-hero-mockup-1.png"
            width={113}
            height={113}
            alt="flutter-app-hero-mockup-1"
            className="absolute top-[45%] right-[-8%]"
          />
        </div>

        {/* ORBITING IMAGE 2 */}
        <div className="orbit-wrapper orbit-2 hidden md:block">
          <Image
            src="/flutter/flutter-app-hero-mockup-2.png"
            width={113}
            height={113}
            alt="flutter-app-hero-mockup-2"
            className="absolute top-[5%] left-[9%]"
          />
        </div>

        {/* ORBITING IMAGE 3 */}
        <div className="orbit-wrapper orbit-3 hidden md:block">
          <Image
            src="/flutter/flutter-app-hero-mockup-3.png"
            width={113}
            height={113}
            alt="flutter-app-hero-mockup-3"
            className="absolute bottom-[0%] left-[15%]"
          />
        </div>

        {/* ORBITING IMAGE 4 */}
        {/* <div className="orbit-wrapper orbit-4 hidden md:block">
          <Image
            src="/flutter/flutter-app-hero-mockup-4.png"
            width={196}
            height={196}
            alt="flutter-app-hero-mockup-4"
            className="absolute top-[50%] left-[-14%]"
          />
        </div> */}

        <div className="hidden md:block">
          <Image
            src="/flutter/flutter-app-hero-mockup-4.png"
            width={196}
            height={196}
            alt="Flutter app development company displaying cross-platform mobile app UI with smooth animations"
            className="absolute top-[20%] left-[10%] z-20 scaleUpDown"
          />
        </div>

        <Image
          src={"/flutter/flutter-app-hero-mockup-5.png"}
          width={244}
          height={187}
          alt="Flutter app development company demoing shopping app interface with product carousel"
          className="absolute top-[50%] right-[5%] z-20 hidden md:block moveUpDown"
        />
      </div>
    </div>
  );
};

export default HeroAnimation;
