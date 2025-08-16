"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";

const ResearchCard = ({ research, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });
  return (
    <div ref={ref} className={`w-full max-w-[295px]`}>
      <motion.div
        initial={{ scale: 0.7 }}
        animate={inView ? { scale: 1 } : { scale: 0.7 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full"
      >
        <div
          className={`w-full bg-white rounded-[29px] px-6 py-12 relative flex flex-col items-center justify-start text-center custom-shadow gap-5 ${
            index === 0
              ? "-rotate-12 top-4"
              : index === 1
              ? "rotate-6"
              : "-rotate-6 lg:rotate-6"
          }`}
        >
          <div className="rounded-full sittner-primary-bg w-[88px] h-[88px] flex items-center justify-center">
            <img
              src={research?.icon}
              width={research?.width}
              height={research?.height}
              alt={`${research?.title} icon`}
              className="object-contain"
            />
          </div>
          <h3 className="font-medium text-[22px] leading-none">
            {research?.title}
          </h3>
          <p className="text-lg leading-[1.2]">{research?.description}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default ResearchCard;
