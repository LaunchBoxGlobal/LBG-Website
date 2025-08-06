"use client";
import Image from "next/image";
import { BLOOM_SOLUTIONS } from "@/constants/case-studies/bloom/bloomSolutions";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const SolutionsAnimation = () => {
  return (
    <section className="w-full mx-auto relative overflow-hidden mt-12 md:mt-0 lg:mt-20 padding-x">
      <section className={`w-full flex flex-col items-start gap-0 lg:gap-40`}>
        {BLOOM_SOLUTIONS?.map((b, i) => {
          return <Card key={i} b={b} i={i} />;
        })}
      </section>
    </section>
  );
};

export default SolutionsAnimation;

export const Card = ({ b, i }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // or `true` if you want the animation only once
  });
  return (
    <div
      key={i}
      ref={ref}
      className={`w-full relative flex mt-10 md:mt-0 ${
        i % 2 === 1 ? "lg:flex-row-reverse flex-col" : "lg:flex-row flex-col"
      } items-center border border-black`}
    >
      {/* mockup */}
      <div className="w-full md:w-[36%] h-[416px] lg:h-[496px] relative my-10 lg:mb-0 overflow-hidden flex items-end justify-center">
        <Image
          src={
            i % 2 === 0
              ? "/case-studies/solutions-mockup-background.webp"
              : "/case-studies/solutions-mockup-background-2.webp"
          }
          alt="solutions-mockup-background"
          width={453}
          height={496}
          className="z-0 absolute left-1/2 -translate-x-1/2 -bottom-1 object-contain"
        />
        <motion.div
          initial={{ y: 600 }}
          animate={inView ? { y: 0 } : { y: 600 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full w-full z-20 relative flex justify-center items-end"
        >
          <Image
            src={b?.image}
            alt="solutions-mobile-mockup-1.webp"
            width={338}
            height={496}
            className="z-20 object-contain w-[80%] h-auto xl:h-[496px] xl:w-full absolute bottom-0 left-1/2 -translate-x-1/2"
          />
        </motion.div>
      </div>
      {/* content */}
      <div className="w-full md:w-[64%] flex flex-col items-center justify-between gap-8">
        <div
          className={`w-full flex items-center justify-center ${
            i % 2 === 1 && "flex-row-reverse"
          }`}
        >
          <div className="w-[40%] hidden lg:block overflow-hidden">
            <motion.div
              initial={{ x: i % 2 === 1 ? -200 : 200 }}
              animate={inView ? { x: 0 } : { x: i % 2 === 1 ? -200 : 200 }}
              transition={{
                duration: 1.05,
                delay: 0.9,
                ease: "easeOut",
              }}
              className={`w-full hidden lg:flex items-center justify-between ${
                i % 2 === 1 && "flex-row-reverse"
              }`}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 2,
                  ease: "easeOut",
                }}
                className="w-[28px] h-[28px] rounded-full border-[6px] border-[#C04DB2]"
              />
              <div className="w-full border border-[#C04DB2]" />
            </motion.div>
          </div>
          <div className="w-full md:min-w-[70%] relative z-20">
            <motion.div
              initial={{ scale: 0.3 }}
              animate={inView ? { scale: 1 } : { scale: 0.3 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="bg-[#F7D3FD2B] border border-[#C04DB2] rounded-[16px] p-7 flex flex-col items-center justify-center text-center gap-3 w-full"
            >
              <div className="flex items-center justify-center gap-3">
                <Image
                  src={"/case-studies/problem-icon.png"}
                  alt="problem icon"
                  width={35}
                  height={32}
                />
                <span className="red-text text-lg uppercase font-bold">
                  Problem
                </span>
              </div>
              <h3 className="font-bold text-[27px] leading-[1.1]">
                {b?.problemTitle}
              </h3>
              <p className="text-lg leading-[1.2] text-center">
                {b?.problemDescription}
              </p>
            </motion.div>
          </div>
        </div>

        <div
          className={`w-full flex items-center justify-center ${
            i % 2 === 1 && "flex-row-reverse"
          }`}
        >
          <div className="w-[40%] hidden lg:block overflow-hidden">
            <motion.div
              initial={{ x: i % 2 === 1 ? -200 : 200 }}
              animate={inView ? { x: 0 } : { x: i % 2 === 1 ? -200 : 200 }}
              transition={{
                duration: 1.05,
                delay: 0.9,
                ease: "easeOut",
              }}
              className={`w-full hidden lg:flex items-center justify-between ${
                i % 2 === 1 && "flex-row-reverse"
              }`}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 2,
                  ease: "easeOut",
                }}
                className="w-[28px] h-[28px] rounded-full border-[6px] border-[#C04DB2]"
              />
              <div className="w-full border border-[#C04DB2]" />
            </motion.div>
          </div>
          <div className="w-full md:min-w-[70%]">
            <motion.div
              initial={{ scale: 0.3 }}
              animate={inView ? { scale: 1 } : { scale: 0.3 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="bg-[#F7D3FD2B] border border-[#C04DB2] rounded-[16px] p-7 flex flex-col items-center justify-center text-center gap-3 w-full md:min-w-[70%]"
            >
              <div className="flex items-center justify-center gap-3">
                <Image
                  src={"/case-studies/solution-bulb-icon.png"}
                  alt="solution icon"
                  width={47}
                  height={43}
                />
                <span className="text-[#FFB400] uppercase text-lg font-bold">
                  SOLUTION
                </span>
              </div>
              <h3 className="font-bold text-[27px] leading-[1.1]">
                {b?.solutionTitle}
              </h3>
              <p className="text-lg leading-[1.2] text-center">
                {b?.solutionDescription}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
