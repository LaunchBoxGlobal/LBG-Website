"use client";
import Image from "next/image";
import React, { useState } from "react";

const LocationsWhyChooseUs = ({
  heading,
  redText,
  description,
  content1,
  content2,
}) => {
  const [isHovered, setIsHovered] = useState(null);
  const [isCardHovered, setIsCardHovered] = useState(null);
  return (
    <section className="w-full py-20 midlg:py-32 xl:py-40 padding-x">
      <div className="w-full flex flex-col items-center gap-5">
        {/* <h2 className="blueText font-semibold text-[25px] lg:w-[60%] text-center">
          Partner with LaunchBox Global
        </h2> */}
        <h2 className="section-heading text-center mx-auto">
          {heading} <span className="red-text">{redText}</span>
        </h2>
        <p className="section-paragraph text-center mx-auto lg:w-[70%]">
          {description}
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14">
        {content1?.map((c, i) => {
          return (
            <div
              className={`w-full flex flex-col items-center group justify-start text-center gap-6 py-8 px-5 hover:bg-[#F40E00] hover:text-white transition-all duration-300 ${
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
              <img
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
        {content2?.map((c, i) => {
          return (
            <div
              key={i}
              className={`w-full flex flex-col items-center group justify-start text-center gap-6 py-8 px-5 hover:bg-[#F40E00] hover:text-white transition-all duration-300 ${
                i === 0
                  ? "lg:border-r"
                  : i === 1
                  ? "lg:border-r"
                  : i === 2
                  ? ""
                  : ""
              }`}
              onMouseEnter={() => setIsCardHovered(i)}
              onMouseLeave={() => setIsCardHovered(null)}
            >
              <h3 className="font-semibold text-[20px] xl:text-[22px]">
                {c?.title}
              </h3>
              <img
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

export default LocationsWhyChooseUs;
