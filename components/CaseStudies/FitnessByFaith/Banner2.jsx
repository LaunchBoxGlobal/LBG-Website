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
    <motion.div
      ref={ref}
      initial={{ scale: 0.4 }}
      animate={inView ? { scale: 1 } : { scale: 0.4 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full padding-x"
    >
      <Image
        src={"/case-studies/fitness-by-faith/banner-2.webp"}
        alt="fitness by faith banner image"
        width={1270}
        height={807}
        quality={85}
        loading="lazy"
        sizes="(max-width: 640px) 100vw,
               (max-width: 1024px) 90vw,
               1270px"
      />
    </motion.div>
  );
};

export default Banner2;
