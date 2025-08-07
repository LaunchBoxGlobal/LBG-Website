"use client";
import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

const ProjectRecoveryServicesCard2 = () => {
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
            src="/new-project/mvp-icon.png"
            alt="heart-icon"
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
          className="w-full h-full absolute inset-0 rounded-r-[26px]"
          variants={parentVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Cursor */}
          <motion.img
            src="/new-project/mvp-builds-cursor-icon.png"
            alt="mvp-builds-cursor-icon"
            width={73}
            height={62}
            className="absolute top-[15%] left-[10%] z-10"
            variants={slideRight}
          />

          {/* Dashboard */}
          <motion.img
            src="/new-project/mvp-dashboard-image.png"
            alt="mvp-dashboard-image"
            width={467}
            height={432}
            className="absolute top-[118px] right-0 bottom-0 z-10"
            variants={slideRight}
          />

          {/* Orange Cursor */}
          <motion.img
            src="/new-project/mvp-builds-orange-cursor-icon.png"
            alt="mvp-builds-orange-cursor-icon"
            width={118}
            height={66}
            className="absolute left-[-33%] bottom-[5%] z-10 object-contain"
            variants={slideDown}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectRecoveryServicesCard2;
