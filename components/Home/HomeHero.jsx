"use client";
import React from "react";
import ContactButton from "../Global/ContactButton";
import FlippingText from "./FlippingText";
import Image from "next/image";
import { GlobeDemo } from "../talk-to-us/GlobeDemo";

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
  return (
    <section className="w-full bg-white relative pt-36 2xl:pt-52 flex flex-col items-center justify-start gap-0 h-[85vh] lg:h-[125vh] lg:gap-[25px] xl:h-[114vh] 2xl:h-[100vh] overflow-hidden">
      <h1 className="font-bold text-[34px] lg:text-[84px] 2xl:text-[100px] mb-1 text-center tracking-normal lg:leading-[78px] w-[100%]">
        <span className="flex items-center justify-center gap-2 lg:gap-6">
          Plan{" "}
          <Image
            src={"/hero-heading-icon.png"}
            width={80}
            height={80}
            alt={"arrow icon"}
            className="w-[20px] lg:w-[50px]"
          />{" "}
          Build{" "}
          <Image
            src={"/hero-heading-icon.png"}
            width={80}
            height={80}
            alt={"arrow icon"}
            className="w-[20px] lg:w-[50px]"
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

      <div className="flex items-center justify-center gap-4 mt-0 relative top-3 lg:-top-3 2xl:top-10 z-20">
        <ContactButton text={"Get a Free Consultation"} />
      </div>
      <div className="w-full h-[45%] xl:h-[40%] lg:h-[30%] 2xl:h-[55%] hidden lg:flex items-center justify-center relative z-0">
        <GlobeDemo />
      </div>

      <Image
        src={"/hero-globe-02.png"}
        width={1710}
        height={439}
        alt="globe image"
        className="globe-img w-[90%] absolute bottom-12 lg:hidden h-[15%]"
      />

      <Image
        src={"/image-glow.png"}
        width={1710}
        height={439}
        alt="globe image"
        className="w-[90%] h-[139px] lg:h-[359px] 2xl:h-[439px] absolute -bottom-12 lg:-bottom-[14%] 2xl:-bottom-[22%] z-30 opacity-100"
      />
      <div className="w-full h-[20px] lg:h-[50px] bg-white absolute bottom-0" />
    </section>
  );
};

export default HomeHero;
