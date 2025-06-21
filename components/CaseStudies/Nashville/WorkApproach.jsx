"use client";
import { NASHVILLE_WORK_APPROACH } from "@/constants/case-studies/nashville/nashville-work-approach";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";

const WorkApproach = () => {
  return (
    <section className="w-full padding-x flex flex-col items-center">
      <h2 className="section-heading">Work Approach</h2>
      <p className="text-center lg:w-[90%] text-base lg:text-xl mt-7">
        We built Now You Know Nashville step by step, testing each feature with
        real users first. Our mobile app development process focused on making
        exploration simple clean menus, quick searches, and smooth navigation
        through all 11 local categories.
      </p>

      <div className="w-full relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 mt-10 lg:mt-14">
        <Image
          src={"/case-studies/nashville/work-approach-border-line.png"}
          alt="work-approach-border-line"
          width={1000}
          height={99}
          className="absolute z-0 top-[5%] left-1/2 -translate-x-1/2 hidden midlg:block midlg:w-[900px] xl:w-[1000px]"
        />
        {NASHVILLE_WORK_APPROACH?.map((w, i) => {
          return <Card key={i} w={w} i={i} />;
        })}
      </div>
    </section>
  );
};

export default WorkApproach;

export const Card = ({ w, i }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.5 }}
      animate={inView ? { scale: 1 } : { scale: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center text-center gap-1 relative w-full px-4"
    >
      <div className="rounded-full bg-[#407BA7] w-[103px] h-[103px] flex items-center justify-center">
        <Image
          src={w?.icon}
          width={w?.width}
          height={w?.height}
          alt={w?.title}
        />
      </div>
      <p className="text-[#407BA7] text-xs uppercase font-semibold mt-4">
        {w?.subtitle}
      </p>
      <h3 className="text-[22px] leading-none">{w?.title}</h3>
    </motion.div>
  );
};
