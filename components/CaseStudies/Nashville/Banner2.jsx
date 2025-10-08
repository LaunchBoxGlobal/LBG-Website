"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";

const Banner2 = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });
  return (
    <div ref={ref}>
      <motion.div
        initial={{ scale: 0.4 }}
        animate={inView ? { scale: 1 } : { y: 200, scale: 0.4 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="w-full padding-x"
      >
        <img
          src="/case-studies/nashville/nashville-banner-2.webp"
          alt="Nashville case study banner highlighting creative project design"
          width={1270}
          height={707}
          quality={85}
          loading="lazy"
          sizes="(max-width: 640px) 100vw,
         (max-width: 1024px) 90vw,
         1270px"
          className="w-full h-auto rounded-[40px] object-cover"
        />
      </motion.div>
    </div>
  );
};

export default Banner2;
