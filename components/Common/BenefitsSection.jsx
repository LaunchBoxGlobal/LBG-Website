"use client";
import Image from "next/image";
import { motion, useTransform, useScroll } from "framer-motion";
import React, { useRef } from "react";

const BenefitsSection = ({
  heading,
  subheading,
  description,
  benefits,
  colorfulText,
  color,
}) => {
  return (
    <section className="w-full py-10 lg:py-20 padding-x">
      {/* Top Heading */}
      <div className="w-full flex flex-col items-center gap-5">
        <p className="text-2xl font-semibold" style={{ color }}>
          {subheading}
        </p>
        <h2 className="section-heading text-center">
          {heading} <span style={{ color }}>{colorfulText}</span>
        </h2>
        <p className="section-paragraph text-center mx-auto lg:w-[90%]">
          {description}
        </p>
      </div>

      {/* Desktop Version */}
      <div className="w-full bg-white lg:px-16 mt-10 xl:mt-12 hidden lg:flex flex-col items-center mx-auto relative left-[-4.3%]">
        {benefits?.map((solution, i) => {
          const containerRef = useRef(null);
          const { scrollYProgress } = useScroll({
            target: containerRef,
            offset: ["0.95 end", "center center"],
          });

          const leftDivX = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);
          const rightDivX = useTransform(
            scrollYProgress,
            [0, 1],
            ["25%", "50%"]
          );

          return (
            <div
              ref={containerRef}
              key={i}
              className="relative w-full min-h-[220px]"
              style={{ height: "220px" }} // Reserve exact space
            >
              {/* Left Card */}
              <motion.div
                style={{
                  left: leftDivX,
                  width: "60%",
                  background: solution?.titleBg,
                }}
                className="absolute top-0 rounded-2xl z-20 p-10 flex flex-col items-start justify-center gap-4 h-full"
              >
                <div
                  style={{
                    width: solution?.iconWidth,
                    height: solution?.iconHeight,
                    position: "relative",
                  }}
                >
                  <Image
                    src={solution?.icon}
                    width={solution?.iconWidth}
                    height={solution?.iconHeight}
                    alt={solution?.title}
                    loading="lazy"
                  />
                </div>
                <h3 className="text-white text-[24px] md:text-[2.5vw] font-medium leading-10">
                  {solution?.title}
                </h3>
              </motion.div>

              {/* Right Card */}
              <motion.div
                style={{
                  left: rightDivX,
                  width: "60%",
                  background: solution?.descriptionBg,
                }}
                className="absolute top-0 h-full rounded-2xl flex justify-end items-center z-10 p-10"
              >
                <p className="text-white text-center text-base xl:text-xl w-full lg:w-[80%]">
                  {solution?.description}
                </p>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Mobile Version */}
      <div className="w-full mt-14">
        {benefits?.map((solution, i) => (
          <div
            key={i}
            className="w-full flex flex-col lg:hidden relative min-h-[440px]"
          >
            <div
              className="w-full p-10 rounded-2xl flex flex-col items-start justify-center gap-4"
              style={{
                background: solution?.titleBg,
                height: "220px", // Fixed height
              }}
            >
              <div
                style={{
                  width: solution?.iconWidth,
                  height: solution?.iconHeight,
                  position: "relative",
                }}
              >
                <Image
                  src={solution?.icon}
                  width={solution?.iconWidth}
                  height={solution?.iconHeight}
                  alt={solution?.title}
                  loading="lazy"
                />
              </div>
              <h3 className="text-white text-[24px] md:text-[28px] lg:text-[40px] font-medium leading-8 lg:leading-10">
                {solution?.title}
              </h3>
            </div>

            <div
              className="w-full py-10 px-[8%] rounded-2xl flex items-center justify-end"
              style={{
                background: solution?.descriptionBg,
                height: "220px", // Fixed height
              }}
            >
              <p className="text-white text-center text-sm w-full lg:w-[40%]">
                {solution?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
