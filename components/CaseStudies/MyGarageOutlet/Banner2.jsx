"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";

const Banner2 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <div ref={ref} className="w-full padding-x">
      <motion.div
        initial={{ scale: 0.7 }}
        animate={inView ? { scale: 1 } : { scale: 0.7 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full"
      >
        <Image
          src={"/case-studies/my-garage-outlet/my-garage-outlet-banner-1.png"}
          alt="nashville-banner-1"
          width={1270}
          height={593}
          className=""
        />
      </motion.div>
    </div>
  );
};

export default Banner2;
