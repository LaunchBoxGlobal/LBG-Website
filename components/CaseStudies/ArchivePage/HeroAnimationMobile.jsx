"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const HeroAnimationMobile = () => {
  const { ref: ctaRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <div
      ref={ctaRef}
      className="w-full h-[20vh] overflow-hidden flex justify-center border border-black relative"
    >
      <motion.div
        initial={{ x: 0 }}
        animate={inView ? { x: -80 } : {}}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="absolute -bottom-14 md:-bottom-16 p-0 z-30"
      >
        <Image
          src={"/case-studies/archive-page-hero-mockup-1.png"}
          width={473}
          height={475}
          alt="case studies archive page hero mockup"
          className="w-[155px] h-[155px] md:w-[175px] md:h-[175px] object-contain"
        />
      </motion.div>
      <motion.div
        initial={{ x: 0 }}
        animate={inView ? { x: -10 } : {}}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="absolute -bottom-16 md:-bottom-24 p-0 z-20"
      >
        <Image
          src={"/case-studies/archive-page-hero-mockup-2.png"}
          width={473}
          height={475}
          alt="case studies archive page hero mockup"
          className="w-[185px] h-[195px] md:w-[225px] md:h-[255px] object-contain"
        />
      </motion.div>
      <motion.div
        initial={{ x: 0 }}
        animate={inView ? { x: 80 } : {}}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="absolute -bottom-16 md:-bottom-24 p-0 z-10"
      >
        <Image
          src={"/case-studies/archive-page-hero-mockup-3.png"}
          width={473}
          height={475}
          alt="case studies archive page hero mockup"
          className="w-[165px] h-[235px] md:w-[195px] md:h-[285px] object-contain"
        />
      </motion.div>
      <motion.div
        initial={{ x: 0 }}
        animate={inView ? { x: 180 } : {}}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="absolute -top-7 p-0 z-0 hidden md:block"
      >
        <Image
          src={"/case-studies/archive-page-hero-mockup-4.png"}
          width={473}
          height={475}
          alt="case studies archive page hero mockup"
          className="w-[165px] h-[235px] md:w-[195px] md:h-[185px] object-contain"
        />
      </motion.div>
    </div>
  );
};

export default HeroAnimationMobile;
