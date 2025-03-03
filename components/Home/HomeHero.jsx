"use client";
import React from "react";
import ContactButton from "../Global/ContactButton";
import FlippingText from "./FlippingText";
import Image from "next/image";
import { GlobeDemo } from "../talk-to-us/GlobeDemo";

const HomeHero = () => {
  return (
    <section className="w-full bg-white relative pt-40 2xl:pt-52 flex flex-col items-center justify-start gap-0 lg:gap-[25px] xl:h-[105vh] overflow-hidden">
      <h1 className="font-bold text-3xl lg:text-[84px] 2xl:text-[100px] mb-1 text-center tracking-normal lg:leading-[78px] w-[100%]">
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

        <div className="w-full relative -top-3 2xl:top-2">
          <FlippingText />
        </div>
      </h1>
      <div className="flex items-center justify-center gap-2 w-[76%] relative -top-6 2xl:top-4 padding-x">
        <h2 className="text-lg lg:text-[22px] 2xl:text-[26px] font-medium text-gray-500 text-center">
          Available in your Timezone, at Affordable Rates, with Full
          Transparency.
        </h2>
      </div>

      <div className="flex items-center justify-center gap-4 mt-0 relative -top-1 2xl:top-10">
        <ContactButton text={"Get a Free Consultation"} />
      </div>
      {/* <div className="w-full h-[340px] flex items-center justify-center relative">
        <GlobeDemo />
      </div> */}

      <Image
        src={"/hero-globe.png"}
        width={1710}
        height={439}
        alt="globe image"
        className="w-[80%] h-[139px] lg:h-[359px] 2xl:h-[439px] absolute bottom-0 2xl:-bottom-11 shadow-bottom"
      />
      <Image
        src={"/image-glow.png"}
        width={1710}
        height={439}
        alt="globe image"
        className="w-[90%] h-[139px] lg:h-[359px] 2xl:h-[439px] absolute -bottom-[20%] 2xl:-bottom-[22%]"
      />
    </section>
  );
};

export default HomeHero;
