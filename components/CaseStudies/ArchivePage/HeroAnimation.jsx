"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const HeroAnimation = () => {
  const { ref: ctaRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <div
      ref={ctaRef}
      className="w-full overflow-hidden flex justify-center h-[20vh] lg:h-[38vh] 2xl:h-[26vh] relative"
    >
      <motion.div
        initial={{ x: 0 }}
        animate={inView ? { x: "-380px" } : {}}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="absolute -bottom-14 p-0 z-30"
      >
        <Image
          src={"/case-studies/archive-page-hero-mockup-1.png"}
          width={473}
          height={475}
          alt="case studies archive page hero mockup"
          className="w-[395px] h-[295px] object-contain"
        />
      </motion.div>
      <motion.div
        initial={{ x: 0 }}
        animate={inView ? { x: -190 } : {}}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="absolute -bottom-36 p-0 z-20"
      >
        <Image
          src={"/case-studies/archive-page-hero-mockup-2.png"}
          width={473}
          height={475}
          alt="case studies archive page hero mockup"
          className="w-[485px] h-[495px] object-contain"
        />
      </motion.div>
      <motion.div
        initial={{ x: 0 }}
        animate={inView ? { x: 150 } : {}}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="absolute -bottom-28 p-0 z-10"
      >
        <Image
          src={"/case-studies/archive-page-hero-mockup-3.png"}
          width={473}
          height={475}
          alt="case studies archive page hero mockup"
          className="w-[455px] h-[455px] object-contain"
        />
      </motion.div>
      <motion.div
        initial={{ x: 0 }}
        animate={inView ? { x: "370px" } : {}}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="absolute top-3 p-0 z-0"
      >
        <Image
          src={"/case-studies/archive-page-hero-mockup-4.png"}
          width={473}
          height={475}
          alt="case studies archive page hero mockup"
          className="w-[425px] h-[205px] object-contain"
        />
      </motion.div>
    </div>
  );
};

export default HeroAnimation;
