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
          sizes="(max-width: 640px) 100vw,
           (max-width: 1024px) 90vw,
           1270px"
          className="object-contain mx-auto"
        />
      </motion.div>

      <Image
        src="/case-studies/fit110/fit110-glow-right.webp"
        alt=""
        role="presentation"
        width={536}
        height={563}
        quality={70}
        loading="lazy"
        sizes="(max-width: 768px) 50vw,
         (max-width: 1280px) 40vw,
         536px"
        className="absolute right-0 top-0 z-0 w-[50vw] h-auto max-w-[536px]"
      />

      <Image
        src="/case-studies/fit110/fit110-glow-left.webp"
        alt=""
        role="presentation"
        width={536}
        height={563}
        quality={70}
        loading="lazy"
        sizes="(max-width: 768px) 50vw,
         (max-width: 1280px) 40vw,
         536px"
        className="absolute left-0 bottom-0 z-10 w-[50vw] h-auto max-w-[536px]"
      />
    </div>
  );
};

export default Mockup;
