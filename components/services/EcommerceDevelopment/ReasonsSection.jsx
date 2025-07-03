"use client";
import Image from "next/image";
import { motion, useTransform, useScroll } from "framer-motion";
import React, { useRef } from "react";
import { WHY_ECOMMERCE_IS_ESSENTIAL } from "@/constants/ecommerce-develpment/ecommerceReasons";

const ReasonsSection = () => {
  return (
    <section className="w-full py-10 lg:pb-20 lg:pt-40 padding-x">
      <div className="w-full flex flex-col items-center gap-5">
        <h2 className="section-heading text-center">
          The Clear Advantage of Working with{" "}
          <span className="red-text">LaunchBox Global</span>
        </h2>
        <p className="section-paragraph text-center mx-auto lg:w-[90%]">
          As a top ecommerce development company, we build high-performance
          stores and apps that boost sales. Our ecommerce development services
          ensure smooth, scalable, and secure shopping experiences.
        </p>
      </div>

      <div className="w-full bg-white lg:px-16 mt-10 hidden lg:flex flex-col items-center mx-auto relative left-[-4.3%]">
        {WHY_ECOMMERCE_IS_ESSENTIAL.map((solution, i) => {
          const containerRef = useRef(null);

          // Scroll progress for each container
          const { scrollYProgress } = useScroll({
            target: containerRef,
            offset: ["0.95 end", "center center"], // Trigger animation when container enters/leaves viewport
          });

          // Transform scroll progress to "left" positions for both divs
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
              className="relative w-full h-[220px]"
            >
              <motion.div
                style={{
                  left: leftDivX,
                  width: "60%",
                  background: solution?.titleBg,
                }}
                className={`absolute top-0 bg-red-400 rounded-2xl z-20 p-10 flex flex-col items-start justify-center gap-4 min-h-[220px]`}
              >
                <Image
                  src={solution?.icon}
                  width={solution?.iconWidth}
                  height={solution?.iconHeight}
                  alt={solution?.title}
                />
                <h4 className="text-white text-[24px] lg:text-[30px] xl:text-[40px] font-medium leading-[1]">
                  {solution?.title}
                </h4>
              </motion.div>

              <motion.div
                style={{
                  left: rightDivX,
                  width: "60%",
                  background: solution?.descriptionBg,
                }}
                className={`absolute top-0 h-full bg-red-600 rounded-2xl flex justify-end items-center z-10 p-10`}
              >
                <p className="text-white text-center text-base xl:text-xl w-full lg:w-[80%]">
                  {solution?.description}
                </p>
              </motion.div>
            </div>
          );
        })}
      </div>

      <div className="w-full mt-14 lg:hidden">
        {WHY_ECOMMERCE_IS_ESSENTIAL?.map((solution, i) => {
          return (
            <div
              className="w-full flex flex-col lg:hidden relative h-auto lg:h-[220px]"
              key={i}
            >
              <div
                className={`w-full lg:w-1/2 p-10 rounded-2xl flex flex-col items-start justify-center gap-4 static lg:absolute min-h-[220px] leftDiv`}
                style={{ background: solution?.titleBg }}
              >
                <Image
                  src={solution?.icon}
                  width={solution?.iconWidth}
                  height={solution?.iconHeight}
                  alt={solution?.title}
                />
                <h4 className="text-white text-[24px] md:text-[30px] xl:text-[40px] font-medium leading-[1.1]">
                  {solution?.title}
                </h4>
              </div>
              <div
                className={`w-full py-10 px-[8%] rounded-2xl flex items-center justify-end min-h-[220px] rightDiv`}
                style={{ background: solution?.descriptionBg }}
              >
                <p className="text-white text-start text-lg xl:text-xl w-full lg:w-[80%]">
                  {solution?.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ReasonsSection;
