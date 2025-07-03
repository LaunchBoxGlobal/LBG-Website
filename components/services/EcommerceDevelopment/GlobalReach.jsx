import React from "react";
// import AnimatedText from "../StaffAugmentation/AnimatedText";
import { GLOBAL_REACH } from "@/constants/off-shore-development/global-reach";
import Image from "next/image";

const GlobalReach = () => {
  return (
    <section className="w-full py-32 xl:py-40 bg-[#fff] padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center gap-5">
        {/* <AnimatedText> */}
        <p className="red-text mx-auto text-center text-lg md:text-xl lg:text-2xl font-semibold">
          Local Impact, Global Vision
        </p>
        <h2 className="section-heading text-center mx-auto">
          Our Global
          <span className="red-text"> Reach</span>
        </h2>
        {/* </AnimatedText> */}
        {/* <AnimatedText> */}
        <p className="section-paragraph text-center mx-auto lg:w-[80%]">
          We bring world-class ecommerce development services to clients across
          key international markets. Our teams are strategically located to
          provide on-the-ground support and global delivery with local insight.
        </p>
        {/* </AnimatedText> */}
      </section>

      <section className="w-full mt-10 lg:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10">
        {GLOBAL_REACH?.map((reach, index) => {
          return (
            <div
              key={index}
              className="w-full group min-h-[337px] flex flex-col items-center justify-center relative"
            >
              <Image
                src={reach?.image}
                width={reach?.imageWidth}
                height={reach?.imageHeight}
                alt={`${reach?.title} image`}
                className="mb-4 grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              <h3 className="absolute bottom-0 text-lg lg:text-[26px] font-medium">
                {reach?.title}
              </h3>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default GlobalReach;
