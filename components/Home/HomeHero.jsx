"use client";
import React from "react";
import ContactButton from "../Global/ContactButton";
import FlippingText from "./FlippingText";
import Image from "next/image";
import { GlobeDemo } from "../talk-to-us/GlobeDemo";
import { useEffect, useRef } from "react";

const words = [
  "End-to-End Product Teams",
  "Agile Development Teams",
  "Elite Software Engineers",
  "Innovative UI/UX Designers",
  "Expert Project Managers",
  "Strategic Business Analysts",
  "Visionary Software Architects",
  "Certified Scrum Masters",
  "Diligent QA Engineers",
  "Specialist Database Architects",
  "Creative Storyboard Artists",
  "Skilled Video Editors",
];

const HomeHero = () => {
  // text-[34px] lg:text-[64px] xl:text-[84px] 2xl:text-[100px]

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      // Set playback speed to 1.5 (1.5x speed)
      videoRef.current.playbackRate = 0.9;
    }
  }, []);
  return (
    <section className="w-full bg-white relative pt-36 2xl:pt-52 flex flex-col items-center justify-start gap-0 lg:gap-[25px] overflow-hidden">
      <h1 className="font-bold text-[9vw] md:text-[5.5vw] mb-1 text-center tracking-normal lg:leading-[78px] w-[100%]">
        <span className="flex items-center justify-center gap-2 lg:gap-6">
          Plan{" "}
          <img
            src={"/home-hero-heading-icon.webp"}
            width={80}
            height={80}
            alt={"arrow icon"}
            className="w-[20px] lg:w-[50px]"
            priority
          />{" "}
          Build{" "}
          <img
            src={"/home-hero-heading-icon.webp"}
            width={80}
            height={80}
            alt={"arrow icon"}
            className="w-[20px] lg:w-[50px]"
            priority
          />{" "}
          Succeed
        </span>

        <div className="w-full relative -top-1.5 md:-top-3 2xl:top-2">
          <FlippingText phrases={words} />
        </div>
      </h1>

      <div className="flex items-center justify-center gap-2 w-[95%] lg:w-[76%] relative -top-3 md:-top-6 2xl:top-4 padding-x">
        <h2 className="text-base lg:text-[22px] 2xl:text-[26px] font-medium text-gray-500 text-center">
          Available in your Timezone, at Affordable Rates, with Full
          Transparency.
        </h2>
      </div>

      <div className="flex items-center justify-center gap-4 mt-0 relative lg:-top-3 2xl:top-10 z-20 mb-10 lg:mb-0">
        <ContactButton text={"Get a Free Consultation"} />
      </div>

      {/* <div className="w-full flex items-center justify-center z-0">
        <GlobeDemo />
      </div> */}

      <div className="w-full h-[100px] md:h-[150px] lg:h-[200px] xl:h-[250px] overflow-hidden relative bg-white flex justify-center items-start">
        <video
          // ref={videoRef}
          width="1920"
          height="299"
          muted
          loop
          autoPlay
          playsInline
          className="w-full h-auto bg-white md:max-w-[70%] relative z-0"
        >
          <source src="/globe/Globe 05.webm" type="video/mp4" />
        </video>
        <Image
          src={"/image-glow-optimized.webp"}
          width={1710}
          height={359}
          alt="globe shadow image"
          priority
          className="w-[100%] h-[109px] lg:h-[190px] xl:h-[259px] absolute -bottom-[50%] midlg:-bottom-[40%] xl:-bottom-[50%] z-30 opacity-100"
        />
      </div>
    </section>
  );
};

export default HomeHero;
