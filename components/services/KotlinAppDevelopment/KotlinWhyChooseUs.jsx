"use client";
import {
  KOTLIN_WHY_CHOOSE_US_1,
  KOTLIN_WHY_CHOOSE_US_2,
} from "@/constants/kotlin-app-development-content/KotlinChooseUs";
import Image from "next/image";
import React, { useState } from "react";

const KotlinWhyChooseUs = () => {
  const [isHovered, setIsHovered] = useState(null);
  const [isCardHovered, setIsCardHovered] = useState(null);
  return (
    <section className="w-full py-10 lg:py-20 padding-x">
      <div className="w-full flex flex-col items-center gap-5">
        {/* <p className="kotlin-text font-semibold text-[25px] lg:w-[60%] text-center">
          Trusted Kotlin Development Partners
        </p> */}
        <h2 className="section-heading text-center">
          Trusted Kotlin Development{" "}
          <span className="kotlin-text">Partners</span>
        </h2>
        <p className="section-paragraph text-center mx-auto">
          We specialize in Kotlin application development services that make
          apps work better. Our team focuses on what matters - clean code,
          on-time delivery, and apps people actually use daily.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14">
        {KOTLIN_WHY_CHOOSE_US_1?.map((c, i) => {
          return (
            <div
              className={`w-full flex flex-col items-center justify-start text-center gap-6 py-8 px-5 hover:bg-[#5290f1] hover:text-white transition-all duration-300 ${
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
                src={i === isHovered ? c?.whiteIcon : c?.icon}
                width={c?.iconWidth}
                height={c?.iconHeight}
                alt={c?.title}
                className="group-hover:brightness-0 group-hover:invert"
              />
              <p className="text-lg">{c?.description}</p>
            </div>
          );
        })}
        {KOTLIN_WHY_CHOOSE_US_2?.map((c, i) => {
          return (
            <div
              className={`w-full flex flex-col items-center justify-start text-center gap-6 py-8 px-5 hover:bg-[#5290f1] hover:text-white transition-all duration-300 ${
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

export default KotlinWhyChooseUs;
