"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";

const HeroAnimation = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });
  return (
    <div
      ref={ref}
      className="w-full relative flex items-center justify-center mb-10"
    >
      <Image
        src={"/new-project/hero-section-icons-mobile.png"}
        alt="hero-section-icons-mobile"
        width={1081}
        height={402}
        className="mx-auto lg:hidden"
      />
      <motion.div
        initial={{ scale: 0.4 }}
        animate={inView ? { scale: 1 } : { scale: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full"
      >
        <Image
          src={"/new-project/hero-section-icons-image.png"}
          alt="hero-section-image"
          width={1081}
          height={402}
          className="mx-auto z-0 hidden lg:block"
        />
      </motion.div>
      <motion.div
        initial={{ scale: 0.4 }}
        animate={inView ? { scale: 1 } : { scale: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="border-2 border-black absolute left-1/2 -translate-x-1/2"
      >
        <div className="bg-white border border-[#F40E0073] rounded-[7px] w-[352px] h-[98px] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 hidden lg:flex items-center justify-center lbg-shadow overflow-hidden">
          {/* <div class="animated-border-box-glow"></div> */}
          {/* <div class="animated-border-box"> */}
          <img
            src="/new-logo.svg"
            alt="launchbox global logo"
            width={277}
            height={58}
            className="z-20 relative"
          />
          {/* </div> */}
        </div>
      </motion.div>
    </div>
  );
};

export default HeroAnimation;
