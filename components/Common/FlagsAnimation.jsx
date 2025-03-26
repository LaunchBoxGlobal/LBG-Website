"use client";
import React, { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";

const flags = [
  "/flag-01.png",
  "/flag-02.png",
  "/flag-03.png",
  "/flag-04.png",
  "/flag-05.png",
  "/flag-06.png",
  "/flag-09.png",
  "/flag-07.png",
  "/flag-08.png",
];

const FlagsAnimation = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const width = useTransform(scrollYProgress, [0, 1], ["10%", "90%"]);
  const flagsContainerWidth = useTransform(
    scrollYProgress,
    [0, 1],
    ["90%", "10%"]
  );
  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "-720deg"]);

  return (
    <div className="bg-white w-full pt-10 md:py-10">
      <div
        ref={targetRef}
        className="w-full relative flex justify-between gap-1 md:gap-3 overflow-hidden"
      >
        <motion.div
          style={{ width: flagsContainerWidth, transformOrigin: "left" }}
          className="h-[69px] lg:h-[152px] rounded-r-full bg-white flex items-center justify-end gap-1 md:gap-3 p-1"
        >
          {flags?.map((image, i) => (
            <motion.img
              style={{ rotate: rotate }}
              src={image}
              key={i}
              alt=""
              className="h-[63px] lg:h-[149px] w-[63px] lg:w-[149px] rounded-full object-cover"
            />
          ))}
        </motion.div>
        <motion.div
          style={{
            width,
            transformOrigin: "right",
          }}
          className="h-[69px] lg:h-[152px] bg-[#F40E00] p-1 lg:p-1.5 flex items-center gap-4 rounded-l-full overflow-hidden"
        >
          <div className="rounded-full bg-white flex items-center justify-center h-[63px] lg:h-[143px] w-[63px] lg:w-[143px] shrink-0">
            <Image
              src={"/flag-red-arrow.png"}
              className="w-[28px] lg:w-[80px] h-[22px] lg:h-[63px]"
              alt="arrow icon"
              width={80}
              height={63}
            />
          </div>
          <h3 className="text-white text-xl md:text-4xl lg:text-6xl font-bold whitespace-nowrap">
            Our Global Presence
          </h3>
        </motion.div>
      </div>
    </div>
  );
};

export default FlagsAnimation;
