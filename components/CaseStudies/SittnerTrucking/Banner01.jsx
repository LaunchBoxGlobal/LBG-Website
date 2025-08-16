"use client";
import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

const Banner01 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <div ref={ref} className="w-full">
      <motion.div
        initial={{ scale: 0.7 }}
        animate={inView ? { scale: 1 } : { scale: 0.7 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full"
      >
        <img
          src="/case-studies/sittner-trucking/jb-sittner-trucking-banner-01.png"
          alt="jb-sittner-trucking-banner-01"
          width={1270}
          height={593}
          quality={85}
          priority
          sizes="(max-width: 640px) 100vw, 
         (max-width: 1024px) 90vw, 
         1270px"
          className="w-full h-auto"
        />
      </motion.div>
    </div>
  );
};

export default Banner01;
