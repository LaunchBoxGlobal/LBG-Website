"use client";
import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

const ProjectRecoveryServicesCard4 = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });
  return (
    <div
      ref={ref}
      className="w-full max-w-[631px] min-h-[493px] bg-[#F6F6F6] rounded-[26px] flex items-start justify-between overflow-hidden"
    >
      <div className="w-full lg:w-[60%] flex flex-col items-start gap-4 py-8 lg:pt-24 pl-8 pr-8 lg:pr-0">
        <div className="w-[54px] h-[54px] bg-red rounded-full bg-[#F40E00] flex items-center justify-center">
          <img
            src="/new-project/transitioning-projects-icon.png"
            alt="transitioning projects icon"
            width={24}
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
      <div className="w-full lg:w-[40%] relative h-full hidden lg:block">
        <div className="w-full h-full absolute right-0 top-[10%]">
          <motion.div
            initial={{ x: 200 }}
            animate={inView ? { x: 0 } : { x: 200 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <img
              src="/new-project/design-and-vibe-focused-projects-image-1.png"
              alt="design-and-vibe-focused-projects-image-1"
              width={250}
              height={158}
              className="absolute top-0 z-10 right-4"
            />
          </motion.div>
          <motion.div
            initial={{ x: 200 }}
            animate={inView ? { x: 0 } : { x: 200 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img
              src="/new-project/design-and-vibe-focused-projects-image-2.png"
              alt="design-and-vibe-focused-projects-image-2"
              width={280}
              height={209}
              className="absolute top-[118px] z-20 right-0"
            />
          </motion.div>
          <motion.div
            initial={{ x: 200 }}
            animate={inView ? { x: 0 } : { x: 200 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img
              src="/new-project/design-and-vibe-focused-projects-image-3.png"
              alt="design-and-vibe-focused-projects-image-3"
              width={180}
              height={139}
              className="w-full h-full max-w-[200px] object-contain rounded-[26px] absolute right-[-8%] bottom-[2%] z-0"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectRecoveryServicesCard4;
