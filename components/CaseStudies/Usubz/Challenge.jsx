"use client";
import { GiJourney } from "react-icons/gi";
import React from "react";
import { LiaNetworkWiredSolid } from "react-icons/lia";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CiSearch, CiPen } from "react-icons/ci";
import { IoBugOutline } from "react-icons/io5";
import { cn } from "@/lib/utils";
import Image from "next/image";
const steps = [
  {
    id: "01",
    title: "fluid user journey",
    desc: "Designing a smooth, immediate journey that blends learning and career discovery.",
    icon: "/case-studies/usubz/c1.png",
  },
  {
    id: "02",
    title: "user fatigue",
    desc: "Minimizing user fatigue while switching between learning and applying tasks.",
    icon: "/case-studies/usubz/c2.png",
  },
  {
    id: "03",
    title: "professional tone  ",
    desc: "Crafting gamification that motivates learners yet appeals to recruiters professionally.",
    icon: "/case-studies/usubz/c3.png",
  },
  {
    id: "04",
    title: "minimal UI",
    desc: "Delivering a clean, engaging UI that scales seamlessly across mobile and web.",
    icon: "/case-studies/usubz/c4.png",
  },
];

function Challenge() {
  return (
    <section className="w-full padding-x  overflow-hidden relative">
      <div className="text-center mb-14">
        <h2 className="section-heading font-extrabold text-gray-900 leading-tight">
          The Challenge
        </h2>
        <p className="text-gray-500 mt-4 text-base md:text-xl max-w-3xl mx-auto">
          Designing Usubz required addressing a unique set of challenges. The
          platform needed to combine two distinct goals: skill-building and job
          discovery, without overwhelming users while setting a benchmark among
          the best job portals.
        </p>
      </div>
      <div className="flex flex-wrap gap-8 padding-x xl:flex-nowrap justify-center items-center ">
        {steps.map((step, i) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.2,
          });

          return (
            <React.Fragment key={step.id}>
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 60 }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 25px rgba(76,140,233,0.5)", // soft blue glow
                }}
                animate={
                  inView
                    ? {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.8, delay: i * 0.15 },
                      }
                    : {}
                }
                className="flex items-center gap-4 rounded-3xl my-10 text-center w-[220px]"
              >
                <div className="bg-white relative justify-center   gap-3  w-[320px] text-black h-[350px] rounded-3xl flex flex-col items-center p-5">
                  <h1 className="text-base h-[20px] uppercase font-semibold flex items-center gap-3">
                    {" "}
                    {step.title}
                  </h1>
                  <div className="h-[100px] flex justify-center items-center">
                    <Image
                      src={step.icon}
                      alt="icon-steps"
                      width={60}
                      height={60}
                    />
                  </div>
                  <p className="text-sm opacity-65 h-[100px]">{step.desc}</p>
                </div>
                {/* <h3 className="font-semibold h-[40px] text-base md:text-lg mt-2">{step.title}</h3>
                <p className="text-gray-600 h-[100px] text-sm md:text-base mt-1 max-w-[190px]">
                  {step.desc}
                </p> */}
              </motion.div>
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}

export default Challenge;
