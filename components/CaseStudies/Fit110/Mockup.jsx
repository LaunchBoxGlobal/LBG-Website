"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";

const Mockup = ({ imageSrc, imgAltTag, width, height }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });
  return (
    <div
      className="w-full relative overflow-hidden flex justify-center items-center"
      ref={ref}
    >
      <motion.div
        initial={{ y: 100, scale: 0.4 }}
        animate={inView ? { y: 0, scale: 1 } : { y: 100, scale: 0.4 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full"
      >
        <Image
          src={imageSrc}
          alt={imgAltTag}
          width={1270}
          height={848}
          className="object-contain mx-auto"
        />
      </motion.div>

      <Image
        src={"/case-studies/fit110/fit110-glow-right.png"}
        alt="fit110-glow-right"
        width={536}
        height={563}
        className="absolute right-0 top-0 z-0 h-[40vw] w-[50vw]"
      />
      <Image
        src={"/case-studies/fit110/fit110-glow-left.png"}
        alt="fit110-glow-left"
        width={536}
        height={563}
        className="absolute left-0 bottom-0 z-10 h-[40vw] w-[50vw]"
      />
    </div>
  );
};

export default Mockup;
