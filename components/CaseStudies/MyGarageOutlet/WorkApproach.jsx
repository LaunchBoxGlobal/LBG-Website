"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";

const approach = [
  {
    icon: "/case-studies/my-garage-outlet/work-approach-1.png",
    title: "Foundation & UX",
  },
  {
    icon: "/case-studies/my-garage-outlet/work-approach-2.png",
    title: "Planning & Research",
  },
  {
    icon: "/case-studies/my-garage-outlet/work-approach-3.png",
    title: "UI Design",
  },
  {
    icon: "/case-studies/my-garage-outlet/work-approach-4.png",
    title: "Development & Coding",
  },
  {
    icon: "/case-studies/my-garage-outlet/work-approach-5.png",
    title: "Deployment - Go Live!",
  },
  {
    icon: "/case-studies/my-garage-outlet/work-approach-6.png",
    title: "Testing & Evaluation",
  },
];
const WorkApproach = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <section className="w-full padding-x flex flex-col items-center">
      <h2 className="section-heading">Work Approach</h2>
      <p className="text-center lg:w-[90%] text-base lg:text-xl mt-7">
        For My Garage Outlet, we kept things practical focusing on what bargain
        hunters actually needed. Through careful planning and constant testing,
        we created an app that makes finding local sales effortless, with
        intuitive features that just work.
      </p>

      <div className="w-full mt-10 lg:mt-16 relative hidden lg:block h-[766px]">
        {approach?.map((ap, i) => {
          return (
            <motion.div
              key={i}
              initial={{ scale: 0.7 }}
              animate={inView ? { scale: 1 } : { scale: 0.7 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.5 }}
              className={`bg-[#F3F5F7] p-1 pr-4 rounded-full h-[71px] w-[231px] flex items-center justify-start gap-3 relative ${
                i === 1
                  ? "lg:top-[25px] lg:left-[140px] xl:left-[170px]"
                  : i === 2
                  ? "lg:left-[290px] xl:left-[350px] lg:top-[52px] xl:top-[55px]"
                  : i === 3
                  ? "lg:left-[430px] midlg:left-[490px] xl:left-[550px] lg:top-[80px]"
                  : i === 4
                  ? "lg:left-[570px] midlg:left-[680px] xl:left-[750px] lg:top-[110px]"
                  : i === 5
                  ? "lg:left-[730px] midlg:left-[860px] xl:left-[940px] lg:top-[140px]"
                  : ""
              }`}
            >
              <div
                className={`min-w-[60px] min-h-[60px] bg-[#A07439] rounded-full flex items-center justify-center`}
              >
                <Image
                  src={ap?.icon}
                  width={29}
                  height={28}
                  alt={`${ap?.icon}-icon`}
                  className="object-contain"
                />
              </div>
              <p className={`text-[19px] font-semibold text-start leading-[1]`}>
                {ap?.title}
              </p>
            </motion.div>
          );
        })}
        <div ref={ref} className="w-full hidden lg:block">
          <svg
            width="100%"
            height="320"
            viewBox="-20 0 1240 180"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M -10 30 H 220 C 460 30, 560 140, 750 150 H 1210"
              stroke="#F3F5F7"
              strokeWidth="22"
              fill="none"
              strokeLinecap="round"
            />

            <path
              d="M -10 30 H 220 C 460 30, 560 140, 750 150 H 1210"
              stroke="#a1733a"
              strokeWidth="22"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="1250"
              strokeDashoffset={inView ? "0" : "1190"}
              style={{
                transition: "stroke-dashoffset 4s ease-out",
              }}
            />
          </svg>
        </div>
      </div>
      <div className="w-full mt-10 flex lg:hidden flex-col items-center gap-3">
        {approach?.map((ap, i) => {
          return (
            <div
              key={i}
              className={`bg-[#F3F5F7] p-1 pr-4 rounded-full h-[71px] w-[231px] flex items-center justify-start gap-3 relative`}
            >
              <div
                className={`min-w-[60px] min-h-[60px] bg-[#A07439] rounded-full flex items-center justify-center`}
              >
                <Image
                  src={ap?.icon}
                  width={29}
                  height={28}
                  alt={`${ap?.icon}-icon`}
                  className="object-contain"
                />
              </div>
              <p className={`text-[19px] font-semibold text-start leading-[1]`}>
                {ap?.title}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WorkApproach;
