"use client";
import {
  FLUTTER_WHY_CHOOSE_US2,
  FLUTTER_WHY_CHOOSE_US_1,
} from "@/constants/flutter-app-development/flutter-why-choose-us";
import {
  REACT_NATIVE_WHY_CHOOSE_US_1,
  REACT_NATIVE_WHY_CHOOSE_US_2,
} from "@/constants/react-native-app-development-services/react-native-choose-us";
import Image from "next/image";
import React, { useState } from "react";

const WhyChooseUs = () => {
  const [isHovered, setIsHovered] = useState(null);
  const [isCardHovered, setIsCardHovered] = useState(null);
  return (
    <section className="w-full py-10 lg:py-20 padding-x">
      <div className="w-full flex flex-col items-center gap-5">
        {/* <h2 className="blueText font-semibold text-[25px] lg:w-[60%] text-center">
          Partner with LaunchBox Global
        </h2> */}
        <h2 className="section-heading text-center">
          Trusted React Native App Development Company for{" "}
          <span className="blueText">Your Business</span>
        </h2>
        <p className="section-paragraph text-center mx-auto">
          At Launchbox Global, we build fast, reliable React Native apps that
          people love to use. Our team knows the ins and outs of React Native
          mobile app development, delivering top-quality apps on time, every
          time. Work with us, and get an app that truly works for you.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14">
        {REACT_NATIVE_WHY_CHOOSE_US_1?.map((c, i) => {
          return (
            <div
              className={`w-full group flex flex-col items-center justify-start text-center gap-6 py-8 px-5 hover:bg-[#5290f1] hover:text-white transition-all duration-300 ${
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
          );
        })}
        {REACT_NATIVE_WHY_CHOOSE_US_2?.map((c, i) => {
          return (
            <div
              className={`w-full group flex flex-col items-center justify-start text-center gap-6 py-8 px-5 hover:bg-[#5290f1] hover:text-white transition-all duration-300 ${
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
          );
        })}
      </div>
    </section>
  );
};

export default WhyChooseUs;
