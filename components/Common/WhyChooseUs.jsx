"use client";
import Image from "next/image";
import React, { useState } from "react";

const WhyChooseUs = ({
  heading,
  subheading,
  description,
  content1,
  content2,
  color,
  colorfulText,
}) => {
  const [isHovered, setIsHovered] = useState(null);
  const [isCardHovered, setIsCardHovered] = useState(null);
  const [contentIndex1, setContentIndex1] = useState(null);
  const [contentIndex2, setContentIndex2] = useState(null);
  return (
    <section className="w-full py-10 lg:py-20 padding-x">
      <div className="w-full flex flex-col items-center gap-5">
        <p
          className="font-semibold text-[25px] lg:w-[60%] text-center"
          style={{ color }}
        >
          {subheading}
        </p>
        <h2 className="section-heading text-center">
          {heading} <span style={{ color }}>{colorfulText}</span>
        </h2>
        <p className="section-paragraph text-center mx-auto">{description}</p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14">
        {content1?.map((c, i) => {
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
              style={{ background: contentIndex1 == i ? color : "#fff" }}
              key={i}
              onMouseEnter={() => {
                setIsHovered(i);
                setContentIndex1(i);
              }}
              onMouseLeave={() => {
                setIsHovered(null);
                setContentIndex1(null);
              }}
            >
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
          );
        })}
        {content2?.map((c, i) => {
          return (
            <div
              className={`w-full flex flex-col items-center justify-start text-center gap-6 py-8 px-5 hover:text-white transition-all duration-300 ${
                i === 0
                  ? "lg:border-r"
                  : i === 1
                  ? "lg:border-r"
                  : i === 2
                  ? ""
                  : ""
              }`}
              style={{ background: contentIndex2 == i ? color : "#fff" }}
              key={i}
              onMouseEnter={() => {
                setIsCardHovered(i);
                setContentIndex2(i);
              }}
              onMouseLeave={() => {
                setIsCardHovered(null);
                setContentIndex2(null);
              }}
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

export default WhyChooseUs;
