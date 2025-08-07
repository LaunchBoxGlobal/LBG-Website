"use client";
import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

const ProjectRecoveryServicesCard4 = () => {
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
            src="/new-project/transitioning-projects-icon.png"
            alt="transitioning-projects-icon.png"
            width={25}
            height={25}
          />
        </div>
        <h3 className="font-semibold text-[26px] leading-[1]">
          Transitioning Projects 
        </h3>
        <p className="text-lg" style={{ lineHeight: "1.5rem" }}>
          Some AI tools start as no code but end up requiring proper tech
          knowledge in the end. We help transition those projects, integrating
          custom development to make them stable and truly launch‑ready.
        </p>
      </div>

      {/* Right Images with Animation */}
      <div className="w-full lg:w-[40%] relative h-full hidden lg:flex items-end">
        <motion.div
          className="h-full absolute inset-x-0 rounded-r-[26px] bottom-0"
          variants={parentVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Dashboard */}
          <motion.img
            src="/new-project/transitioning-projects-mockup.png"
            alt="transitioning-projects-icon"
            // width={467}
            // height={576}
            className="absolute top-[118px] right-0 bottom-0 z-10 w-[467px]"
            variants={slideRight}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectRecoveryServicesCard4;
