"use client";
import React from "react";
import ContactButton from "../Global/ContactButton";
import FlippingText from "./FlippingText";
import Image from "next/image";
import { GlobeDemo } from "../talk-to-us/GlobeDemo";

const HomeHero = () => {
  return (
    <section className="w-full bg-white relative pt-40 2xl:pt-48 flex flex-col items-center justify-start padding-x gap-4 lg:gap-[25px] h-[80vh] lg:h-[120vh] 2xl:h-[95vh] overflow-hidden">
      <h1 className="font-bold text-3xl lg:text-[84px] 2xl:text-[100px] mb-1 text-center tracking-normal lg:leading-[78px] w-[100%]">
        <span className="flex items-center justify-center gap-2 lg:gap-6">
          Plan{" "}
          <Image
            src={"/arrow-right.svg"}
            width={80}
            height={80}
            alt={"arrow icon"}
            className="w-[20px] lg:w-[50px]"
          />{" "}
          Build{" "}
          <Image
            src={"/arrow-right.svg"}
            width={80}
            height={80}
            alt={"arrow icon"}
            className="w-[20px] lg:w-[50px]"
          />{" "}
          Succeed
        </span>

        <FlippingText />
      </h1>
      <div className="flex items-center justify-center gap-2 w-[76%]">
        <h2 className="text-lg lg:text-[22px] 2xl:text-[26px] font-medium text-gray-500 text-center">
          Available in your Timezone, at Affordable Rates, with Full
          Transparency.
        </h2>
      </div>

      <div className="flex items-center justify-center gap-4 mt-4">
        <ContactButton text={"Get a Free Consultation"} />
      </div>
      <div className="w-full  h-[340px] flex items-center justify-center relative">
        <GlobeDemo />
      </div>

      {/* <Image
        src={"/hero-globe.png"}
        width={1910}
        height={439}
        alt="globe image"
        className="w-full h-[139px] lg:h-[339px] 2xl:h-[439px] absolute bottom-0"
      /> */}
    </section>
  );
};

export default HomeHero;
