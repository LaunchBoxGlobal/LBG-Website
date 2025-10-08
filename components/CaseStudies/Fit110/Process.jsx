"use client";
import { FIT110_PROCESS } from "@/constants/case-studies/fit110/fit110-process";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const Process = () => {
  return (
    <section className="w-full pb-10 relative">
      <section className="w-full padding-x flex flex-col items-center">
        <h2 className="section-heading">Process</h2>
        <p className="text-center lg:w-[90%] text-base lg:text-xl mt-7">
          We followed a clear agile workflow. The plan was not to overcomplicate
          things; we planned to keep it simple. We made fast decisions, kept
          moving, and built without getting stuck in the usual mess.
        </p>
      </section>

      <div className="w-full mt-10 lg:h-[337px] relative flex flex-col lg:flex-row items-center justify-center gap-2">
        <img
          src={"/case-studies/fit110/process-background-line.png"}
          alt="process-background-line"
          width={1932}
          height={356}
          className="w-full absolute inset-x-0 top-1/2 -translate-y-1/2 hidden lg:block"
        />

        {FIT110_PROCESS?.map((p, i) => {
          return <ProcessCard p={p} key={i} index={i} />;
        })}
      </div>

      <img
        src={"/case-studies/fit110/fit110-glow-right.png"}
        alt="fit110-glow-right"
        width={536}
        height={563}
        className="absolute right-0 top-[-20%] z-0 h-[40vw] w-[50vw]"
      />
      <img
        src={"/case-studies/fit110/fit110-glow-left.png"}
        alt="fit110-glow-left"
        width={536}
        height={563}
        className="absolute left-0 bottom-[-20%] z-10 h-[40vw] w-[50vw]"
      />
    </section>
  );
};

export default Process;

export const ProcessCard = ({ p, index }) => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setTimeout(() => setIsVisible(true), index * 200);
    }
  }, [inView, index]);
  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0 }}
      animate={isVisible ? { scale: 1 } : { scale: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 10 }}
      className={`w-[200px] h-[145px] flex items-end justify-center relative ${
        index === 0
          ? "lg:top-[-18%]"
          : index === 2
          ? "lg:bottom-[-15%]"
          : index === 3
          ? "lg:bottom-[-28%]"
          : index === 4
          ? "lg:bottom-[-12%]"
          : index === 5
          ? "lg:top-[-9%]"
          : ""
      }`}
    >
      <div
        className={`rounded-full w-[65px] h-[65px] flex items-center justify-center absolute top-0 left-1/2 -translate-x-1/2 z-10 border-[6px] border-white ${
          index === 0
            ? "bg-[#FF4C2B]"
            : index === 2
            ? "bg-[#FF7356]"
            : index === 3
            ? "bg-[#FF866B]"
            : index === 4
            ? "bg-[#FF9980]"
            : index === 5
            ? "bg-[#FFA892]"
            : "bg-[#FF5F40]"
        }`}
      >
        <span className="text-white font-semibold text-[22px]">
          0{index + 1}
        </span>
      </div>
      <div
        className={`w-full h-[109px] flex flex-col items-center justify-end p-3 rounded-[18px] gap-1 ${
          index === 0
            ? "bg-[#FF4C2B]"
            : index === 2
            ? "bg-[#FF7356]"
            : index === 3
            ? "bg-[#FF866B]"
            : index === 4
            ? "bg-[#FF9980]"
            : index === 5
            ? "bg-[#FFA892]"
            : "bg-[#FF5F40]"
        }`}
      >
        <Image
          src={p?.icon}
          width={p?.iconWidth}
          height={p?.iconHeight}
          alt={p?.title}
        />
        <h3 className="font-semibold text-base text-white">{p?.title}</h3>
      </div>
    </motion.div>
  );
};
