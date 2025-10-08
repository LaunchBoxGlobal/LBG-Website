"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const HeroAnimationTablet = () => {
  const { ref: ctaRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <div
      ref={ctaRef}
      className="w-full h-[20vh] overflow-hidden md:hidden block"
    >
      <motion.div
        initial={{ x: 0 }}
        animate={inView ? { x: -80 } : {}}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="absolute -bottom-14 p-0 z-30 block md:hidden"
      >
        <Image
          src={"/case-studies/archive-page-hero-mockup-1.png"}
          width={473}
          height={475}
          alt="case studies archive page hero mockup"
          className="w-[155px] h-[155px] object-contain"
        />
      </motion.div>
      <motion.div
        initial={{ x: 0 }}
        animate={inView ? { x: -10 } : {}}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="absolute -bottom-16 p-0 z-20 md:hidden block"
      >
        <Image
          src={"/case-studies/archive-page-hero-mockup-2.png"}
          width={473}
          height={475}
          alt="case studies archive page hero mockup"
          className="w-[185px] h-[195px] object-contain"
        />
      </motion.div>
      <motion.div
        initial={{ x: 0 }}
        animate={inView ? { x: 80 } : {}}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="absolute -bottom-16 p-0 z-10 md:hidden block"
      >
        <Image
          src={"/case-studies/archive-page-hero-mockup-3.png"}
          width={473}
          height={475}
          alt="case studies archive page hero mockup"
          className="w-[165px] h-[215px] object-contain"
        />
      </motion.div>
    </div>
  );
};

export default HeroAnimationTablet;
