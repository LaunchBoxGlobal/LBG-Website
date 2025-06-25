"use client";
import { GENERIC_SOFTWARE_CONTENT } from "@/constants/custom-software-development/GenericSoftwareContent";
import Image from "next/image";
import { motion, useTransform, useScroll } from "framer-motion";
import React, { useRef } from "react";

const GenericSoftware = () => {
  return (
    <section className="w-full py-10 lg:py-20 padding-x">
      <div className="w-full flex flex-col items-center gap-5">
        <h2 className="red-text font-semibold text-lg lg:text-[25px] text-center">
          Why you should have Customized Software?
        </h2>
        <h3 className="section-heading text-center">
          Get Exactly What Your <br className="hidden lg:block" />{" "}
          <span className="red-text">Business Needs</span>
        </h3>
        <p className="section-paragraph text-center mx-auto lg:w-[90%]">
          Off-the-shelf software often has unnecessary features, hidden costs,
          and limitations that don’t align with your goals. As a custom software
          development company, we build tailored solutions that fit your
          business perfectly, helping you work smarter and grow faster.
        </p>
      </div>

      <div className="w-full bg-white lg:px-16 mt-10 hidden lg:flex flex-col items-center mx-auto relative left-[-4.3%]">
        {GENERIC_SOFTWARE_CONTENT.map((solution, i) => {
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
              className="relative w-full min-h-[220px]"
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
                <h4 className="text-white text-[24px] md:text-[2.5vw] font-medium leading-10">
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
        {GENERIC_SOFTWARE_CONTENT?.map((solution, i) => {
          return (
            <div
              className="w-full flex flex-col relative h-auto lg:h-[220px]"
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
                <h4 className="text-white text-[24px] md:text-[30px] xl:text-[40px] font-medium leading-[1]">
                  {solution?.title}
                </h4>
              </div>
              <div
                className={`w-full py-10 px-[8%] rounded-2xl flex items-center justify-end min-h-[220px] rightDiv`}
                style={{ background: solution?.descriptionBg }}
              >
                <p className="text-white text-center text-base xl:text-xl w-full lg:w-[80%]">
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
