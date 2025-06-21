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
        <Image
          src={"/case-studies/nashville/nashville-banner-2.png"}
          alt="nashville-banner-2"
          width={1270}
          height={707}
          className="h-[707px] object-cover rounded-[40px] w-full"
        />
      </motion.div>
    </div>
  );
};

export default Banner2;
