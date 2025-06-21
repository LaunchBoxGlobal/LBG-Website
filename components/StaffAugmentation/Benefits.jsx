"use client";
import Image from "next/image";
import { motion, useTransform, useScroll } from "framer-motion";
import React, { useRef } from "react";
import { STAFF_AUGMENTATION_BENEFITS } from "@/constants/StaffAugmentation/staff-augmentation-benefits";
import AnimatedText from "./AnimatedText";

const Benefits = () => {
  return (
    <section className="w-full py-32 xl:py-40 bg-[#F9F9F9] padding-x overflow-hidden">
      <div className="w-full flex flex-col items-center gap-5">
        <AnimatedText>
          <h2 className="section-heading text-center mx-auto">
            Key Benefits of IT Staff{" "}
            <span className="red-text">Augmentation Services</span>
          </h2>
        </AnimatedText>
        <AnimatedText>
          <p className="section-paragraph text-center mx-auto lg:w-[50%]">
            Discover how staff augmentation gives your business the competitive
            edge with these powerful advantages:
          </p>
        </AnimatedText>
      </div>

      <div className="w-full bg-[#F9F9F9] lg:px-16 mt-10 xl:mt-12 hidden lg:flex flex-col items-center mx-auto relative left-[-4.3%]">
        {STAFF_AUGMENTATION_BENEFITS.map((solution, i) => {
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
                className={`absolute top-0 bg-red-400 rounded-2xl z-20 p-10 flex flex-col items-start justify-center gap-4 h-[220px] overflow-hidden`}
              >
                <AnimatedText delay={0.2}>
                  <Image
                    src={solution?.icon}
                    width={solution?.iconWidth}
                    height={solution?.iconHeight}
                    alt={solution?.title}
                  />
                </AnimatedText>
                <AnimatedText delay={0.2}>
                  <h3 className="text-white text-[24px] md:text-[2.5vw] font-medium leading-10">
                    {solution?.title}
                  </h3>
                </AnimatedText>
              </motion.div>

              <motion.div
                style={{
                  left: rightDivX,
                  width: "60%",
                  background: solution?.descriptionBg,
                }}
                className={`absolute top-0 h-full bg-red-600 rounded-2xl flex justify-end items-center z-10 p-10 overflow-hidden`}
              >
                <div className="w-full lg:w-[80%]">
                  <AnimatedText delay={0.2}>
                    <p className="text-white text-center text-base xl:text-xl">
                      {solution?.description}
                    </p>
                  </AnimatedText>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>

      <div className="w-full mt-14 bg-[#F9F9F9] lg:hidden block">
        {STAFF_AUGMENTATION_BENEFITS?.map((solution, i) => {
          return (
            <div
              className="w-full flex flex-col relative h-auto lg:h-[220px]"
              key={i}
            >
              <AnimatedText>
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
              </AnimatedText>

              <AnimatedText>
                <div
                  className={`w-full py-10 px-[8%] rounded-2xl flex items-center justify-end h-[220px] rightDiv`}
                  style={{ background: solution?.descriptionBg }}
                >
                  <p className="text-white text-center text-sm w-full lg:w-[40%] float-end">
                    {solution?.description}
                  </p>
                </div>
              </AnimatedText>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Benefits;
