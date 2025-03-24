"use client";
import {
  WHY_CHOOSE_US2,
  WHY_CHOOSE_US_1,
} from "@/constants/custom-software-development/WhyChooseUs";
import Image from "next/image";
import React, { useState } from "react";

const WhyChooseUs = () => {
  const [isHovered, setIsHovered] = useState(null);
  const [isCardHovered, setIsCardHovered] = useState(null);
  return (
    <section className="w-full py-10 lg:py-20 padding-x">
      <div className="w-full flex flex-col items-center gap-5">
        <h2 className="red-text font-semibold text-[25px]">
          Customer-Centric Approach
        </h2>
        <h3 className="section-heading text-center">
          Why Choose LaunchBox <br className="hidden lg:block" />{" "}
          <span className="red-text">Global?</span>
        </h3>
        <p className="section-paragraph text-center mx-auto">
          Your business isn’t one-size-fits-all, so why should your software be?
          Off-the-shelf solutions come with limitations, unnecessary features,
          and ongoing costs that slow you down. Our custom-built software is
          designed around your unique needs seamless, scalable, and
          cost-effective.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14">
        {WHY_CHOOSE_US_1?.map((c, i) => {
          return (
            <div
              className={`w-full flex flex-col items-center justify-start text-center gap-6 p-8 hover:bg-[#F40E00] hover:text-white transition-all duration-300 ${
                i === 0
                  ? "lg:border-r"
                  : i === 1
                  ? "lg:border-r"
                  : i === 2
                  ? ""
                  : ""
              }`}
              key={i}
              onMouseEnter={() => setIsHovered(i)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <h3 className="font-semibold text-[22px]">{c?.title}</h3>
              <Image
                src={i === isHovered ? c?.whiteIcon : c?.icon}
                width={c?.iconWidth}
                height={c?.iconHeight}
                alt={c?.title}
              />
              <p className="text-lg">{c?.description}</p>
            </div>
          );
        })}
      </div>
      <div className="w-full border-b my-3 hidden lg:block" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {WHY_CHOOSE_US2?.map((c, i) => {
          return (
            <div
              className={`w-full flex flex-col items-center justify-start text-center gap-6 p-8 hover:bg-[#F40E00] hover:text-white transition-all duration-300 ${
                i === 0
                  ? "lg:border-r"
                  : i === 1
                  ? "lg:border-r"
                  : i === 2
                  ? ""
                  : ""
              }`}
              key={i}
              onMouseEnter={() => setIsCardHovered(i)}
              onMouseLeave={() => setIsCardHovered(null)}
            >
              <h3 className="font-semibold text-[22px]">{c?.title}</h3>
              <Image
                src={i === isCardHovered ? c?.whiteIcon : c?.icon}
                width={c?.iconWidth}
                height={c?.iconHeight}
                alt={c?.title}
              />
              <p className="text-lg">{c?.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyChooseUs;
