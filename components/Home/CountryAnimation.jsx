"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const CountryAnimation = () => {
  const containerRef = useRef(null);

  // Capture scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const containerWidth = useTransform(scrollYProgress, [0, 1], [250, 2900]);

  const flagMoveX = useTransform(scrollYProgress, [0, 1], [-60, -1200]);

  const flagRotate = useTransform(scrollYProgress, [0, 0.9], [0, 360]);

  //   const flagMoveX = useTransform(
  //     containerWidth,
  //     (width) => 110 - (width - 250)
  //   );

  return (
    <div
      ref={containerRef}
      className="h-[250] flex items-center justify-between w-full"
    >
      {/* Flags Container (Now Moves Left) */}
      <motion.div className="flex gap-4 border mr-20" style={{ x: flagMoveX }}>
        {[
          "/flag-03.png",
          "/flag-04.png",
          "/flag-05.png",
          "/flag-06.png",
          "/flag-07.png",
          "/flag-08.png",
          "/flag-09.png",
        ].map((flag, index) => (
          <motion.img
            key={index}
            src={flag}
            alt="flag"
            className="w-[179px] h-[179px] rounded-full object-cover"
            style={{ rotate: flagRotate }}
          />
        ))}
      </motion.div>

      {/* Green Container (Expands Left, Stays on Right) */}
      <motion.div
        className="flex items-center justify-start bg-[#F40E00] rounded-l-full p-2 h-[179px] border-2 z-10"
        style={{ width: containerWidth, transformOrigin: "right" }} // Expands left
      >
        {/* Arrow Icon */}
        <motion.div className="w-[160px] h-[160px] bg-white rounded-full flex items-center justify-center">
          <span className="text-[#F40E00] text-8xl rotate-180 block mt-5">
            →
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CountryAnimation;
