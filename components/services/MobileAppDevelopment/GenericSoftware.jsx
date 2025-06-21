"use client";
import { GENERIC_SOFTWARE_CONTENT } from "@/constants/custom-software-development/GenericSoftwareContent";
import Image from "next/image";
import { motion, useTransform, useScroll } from "framer-motion";
import React, { useRef } from "react";
import { MOBILE_APP_DEVELOPMENT_GENERIC_APP } from "@/constants/mobile-app-development/MobileAppDevGenericSoftware";

const GenericSoftware = () => {
  return (
    <section className="w-full py-10 lg:py-20 padding-x">
      <div className="w-full flex flex-col items-center gap-5">
        <h2 className="section-heading text-center">
          Why Your Business Needs a <br className="hidden lg:block" />{" "}
          <span className="red-text">Mobile App?</span>
        </h2>
        <p className="section-paragraph text-center mx-auto lg:w-[90%]">
          In today’s digital landscape, having a website is no longer enough to
          stay ahead. A mobile app provides a direct, convenient, and engaging
          way to connect with customers, improve efficiency, and drive business
          growth. As a trusted provider of mobile app development services, we
          create custom solutions that align with your business goals and
          deliver long-term value.
        </p>
      </div>

      <div className="w-full bg-white lg:px-16 mt-10 xl:mt-12 hidden lg:flex flex-col items-center mx-auto relative left-[-4.3%]">
        {MOBILE_APP_DEVELOPMENT_GENERIC_APP.map((solution, i) => {
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
                className={`absolute top-0 bg-red-400 rounded-2xl z-20 p-10 flex flex-col items-start justify-center gap-4 h-[220px]`}
              >
                <Image
                  src={solution?.icon}
                  width={solution?.iconWidth}
                  height={solution?.iconHeight}
                  alt={solution?.title}
                />
                <h3 className="text-white text-[24px] md:text-[2.5vw] font-medium leading-10">
                  {solution?.title}
                </h3>
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

      <div className="w-full mt-14">
        {GENERIC_SOFTWARE_CONTENT?.map((solution, i) => {
          return (
            <div
              className="w-full flex flex-col lg:hidden relative h-auto lg:h-[220px]"
              key={i}
            >
              <div
                className={`w-full lg:w-1/2 p-10 rounded-2xl flex flex-col items-start justify-center gap-4 static lg:absolute h-[220px] leftDiv`}
                style={{ background: solution?.titleBg }}
              >
                <Image
                  src={solution?.icon}
                  width={solution?.iconWidth}
                  height={solution?.iconHeight}
                  alt={solution?.title}
                />
                <h3 className="text-white text-[24px] md:text-[28px] lg:text-[40px] font-medium leading-8 lg:leading-10">
                  {solution?.title}
                </h3>
              </div>
              <div
                className={`w-full py-10 px-[8%] rounded-2xl flex items-center justify-end h-[220px] rightDiv`}
                style={{ background: solution?.descriptionBg }}
              >
                <p className="text-white text-center text-sm w-full lg:w-[40%] float-end">
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

export default GenericSoftware;
