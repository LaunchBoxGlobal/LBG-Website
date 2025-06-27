"use client";
import Image from "next/image";
import React, { useState } from "react";
import AnimatedText from "../StaffAugmentation/AnimatedText";
import {
  OFFSHORE_WHY_CHOOSE_US_1,
  OFFSHORE_WHY_CHOOSE_US_2,
} from "@/constants/off-shore-development/offshore-why-choose-us";

const WhyChooseUs = () => {
  const [isHovered, setIsHovered] = useState(null);
  const [isCardHovered, setIsCardHovered] = useState(null);
  return (
    <section className="w-full py-20 midlg:py-32 xl:py-40 padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center gap-5">
        <AnimatedText>
          <h2 className="section-heading text-center mx-auto">
            Why You Should Work <span className="red-text">With Us</span>
          </h2>
        </AnimatedText>
        <AnimatedText>
          <p className="section-paragraph text-center mx-auto lg:w-[70%]">
            We deliver quality offshore development with US project management,
            proven processes, and dedicated teams - saving you 40%+ costs
            without compromising results or communication.
          </p>
        </AnimatedText>
      </section>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14">
        {OFFSHORE_WHY_CHOOSE_US_1?.map((c, i) => {
          return (
            <div
              className={`w-full group py-8 px-5 hover:bg-[#F40E00] hover:text-white transition-all duration-300 ${
                i === 0
                  ? "lg:border-r lg:border-b "
                  : i === 1
                  ? "lg:border-r lg:border-b"
                  : i === 2
                  ? "lg:border-b"
                  : ""
              }`}
              key={i}
              onMouseEnter={() => setIsHovered(i)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <AnimatedText>
                <div className="w-full flex flex-col items-center justify-start text-center gap-6">
                  <h3 className="font-semibold text-[20px] xl:text-[22px]">
                    {c?.title}
                  </h3>
                  <Image
                    src={c?.icon}
                    width={c?.iconWidth}
                    height={c?.iconHeight}
                    alt={c?.title}
                    className="transition duration-300 group-hover:invert group-hover:brightness-0"
                  />
                  <p className="text-lg">{c?.description}</p>
                </div>
              </AnimatedText>
            </div>
          );
        })}
        {OFFSHORE_WHY_CHOOSE_US_2?.map((c, i) => {
          return (
            <div
              className={`w-full group py-8 px-5 hover:bg-[#F40E00] hover:text-white transition-all duration-300 ${
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
              <AnimatedText>
                <div className="w-full flex flex-col items-center justify-start text-center gap-6">
                  <h3 className="font-semibold text-[20px] xl:text-[22px]">
                    {c?.title}
                  </h3>
                  <Image
                    src={c?.icon}
                    width={c?.iconWidth}
                    height={c?.iconHeight}
                    alt={c?.title}
                    className="transition duration-300 group-hover:invert group-hover:brightness-0"
                  />
                  <p className="text-lg">{c?.description}</p>
                </div>
              </AnimatedText>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyChooseUs;
