"use client";
import Image from "next/image";
import React, { useState } from "react";
import AnimatedText from "../StaffAugmentation/AnimatedText";
import {
  ON_DEMAND_WHY_CHOOSE_US_1,
  ON_DEMAND_WHY_CHOOSE_US_2,
} from "@/constants/on-demand-talent-content/on-demand-why-choose-us";

const WhyChooseUs = () => {
  const [isHovered, setIsHovered] = useState(null);
  const [isCardHovered, setIsCardHovered] = useState(null);
  return (
    <section className="w-full py-20 midlg:py-32 xl:py-40 padding-x bg-[#F9F9F9] overflow-hidden">
      <section className="w-full flex flex-col items-center gap-5">
        <AnimatedText>
          <h2 className="section-heading text-center mx-auto">
            The Right Way to Augment <span className="red-text">Talent</span>
          </h2>
        </AnimatedText>
        <AnimatedText>
          <p className="section-paragraph text-center mx-auto lg:w-[65%]">
            LaunchBox Global delivers seamless talent augmentation solutions,
            providing immediate access to examine developers who integrate
            effortlessly with your team eliminating lengthy hiring processes and
            contractual constraints.
          </p>
        </AnimatedText>
      </section>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14">
        {ON_DEMAND_WHY_CHOOSE_US_1?.map((c, i) => {
          return (
            <div
              className={`w-full py-8 px-5 hover:bg-[#F40E00] hover:text-white transition-all duration-300 ${
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
                    src={i === isHovered ? c?.whiteIcon : c?.icon}
                    width={c?.iconWidth}
                    height={c?.iconHeight}
                    alt={c?.title}
                  />
                  <p className="text-lg">{c?.description}</p>
                </div>
              </AnimatedText>
            </div>
          );
        })}
        {ON_DEMAND_WHY_CHOOSE_US_2?.map((c, i) => {
          return (
            <div
              className={`w-full py-8 px-5 hover:bg-[#F40E00] hover:text-white transition-all duration-300 ${
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
                    src={i === isCardHovered ? c?.whiteIcon : c?.icon}
                    width={c?.iconWidth}
                    height={c?.iconHeight}
                    alt={c?.title}
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
