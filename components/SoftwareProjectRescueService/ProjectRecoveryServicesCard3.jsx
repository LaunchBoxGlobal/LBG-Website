"use client";
import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

const ProjectRecoveryServicesCard3 = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // change to true if you want it only the first time
  });

  // Parent container animation
  const parentVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // delay between child animations
      },
    },
  };

  // Child animations (fade + slide)
  const slideRight = {
    hidden: { x: 200, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const slideDown = {
    hidden: { y: 200, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div
      ref={ref}
      className="w-full max-w-[631px] lg:min-h-[493px] bg-[#F6F6F6] rounded-[26px] flex items-start justify-between overflow-hidden mx-auto"
    >
      {/* Left Content */}
      <div className="w-full lg:w-[60%] flex flex-col items-start gap-4 py-8 lg:pt-24 lg pl-8 pr-8 lg:pr-4">
        <div className="w-[54px] h-[54px] rounded-full bg-[#F40E00] flex items-center justify-center">
          <img
            src="/new-project/development-icon.png"
            alt="development-icon"
            width={25}
            height={25}
          />
        </div>
        <h3 className="font-semibold text-[26px] leading-[1]">
          MVPs & Early-Stage Builds
        </h3>
        <p className="text-lg" style={{ lineHeight: "1.5rem" }}>
          Started your MVP with low code or no code tools? You’ve made a great
          start. We help you refine, strengthen with our detailed code audit and
          convert early‑stage builds into stable products ready for market.
        </p>
      </div>

      {/* Right Images with Animation */}
      <div className="w-full lg:w-[40%] relative h-full hidden lg:block">
        <motion.div
          className="w-full h-full absolute inset-x-0 rounded-r-[26px] bottom-[-25%]"
          variants={parentVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.img
            src="/new-project/border-lines.png"
            alt="border-lines"
            className="absolute top-[12%] right-0 z-0"
            variants={slideRight}
          />
          <motion.img
            src="/new-project/half-built-products-mockup-1.png"
            alt="mockup-3"
            className="absolute top-[118px] right-0 w-[640px] h-auto bottom-0 z-10"
            variants={slideRight}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectRecoveryServicesCard3;
