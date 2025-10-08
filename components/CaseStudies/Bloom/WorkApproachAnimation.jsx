"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import React from "react";

const WorkApproachAnimation = () => {
  const { ref: ctaRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  console.log("inView status:", inView);

  return (
    <section
      ref={ctaRef}
      className="w-full flex justify-center items-center flex-col gap-5 h-[70vh] lg:min-h-[646px] midlg:min-h-[706px] relative"
    >
      <div className="w-[148px] h-[148px] md:w-[278px] md:h-[278px] lg:w-[378px] lg:h-[378px] bloomBgColor border-[14px] border-[#F6DEEC] rounded-full flex items-center justify-center">
        <h3 className="text-xl md:text-4xl lg:text-[50px] font-semibold text-white p-5 text-center leading-[1.2]">
          Process <br />
          We <br /> Followed
        </h3>
      </div>

      <div className="w-[404px] h-[205px] lg:w-[504px] lg:h-[375px] absolute bottom-[14%]">
        <motion.img
          initial={{ scale: 0.3, opacity: 0 }}
          animate={
            inView ? { scale: 1, opacity: 1 } : { scale: 0.3, opacity: 0 }
          }
          transition={{ duration: 0.9, ease: "easeOut" }}
          src={"/case-studies/purpleglowcircle.webp"}
          alt="purple-glow-circle"
          width={31}
          height={31}
          className="hidden lg:block absolute left-[-5%] top-[-12%] w-28 h-28"
        />
        <motion.img
          initial={{ scale: 0.3, opacity: 0 }}
          animate={
            inView ? { scale: 1, opacity: 1 } : { scale: 0.3, opacity: 0 }
          }
          transition={{ duration: 1.2, ease: "easeOut" }}
          src={"/case-studies/purpleglowcircle.webp"}
          alt="purple-glow-circle"
          width={31}
          height={31}
          className="hidden lg:block absolute right-[-4.5%] top-[-14%] w-28 h-28"
        />
        <motion.img
          initial={{ scale: 0.3, opacity: 0 }}
          animate={
            inView ? { scale: 1, opacity: 1 } : { scale: 0.3, opacity: 0 }
          }
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={"/case-studies/purpleglowcircle.webp"}
          alt="purple-glow-circle"
          width={31}
          height={31}
          className="hidden lg:block absolute right-[-8.3%] top-[37%] w-28 h-28"
        />
        <motion.img
          initial={{ scale: 0.3, opacity: 0 }}
          animate={
            inView ? { scale: 1, opacity: 1 } : { scale: 0.3, opacity: 0 }
          }
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={"/case-studies/purpleglowcircle.webp"}
          alt="purple-glow-circle"
          width={31}
          height={31}
          className="hidden lg:block absolute left-[-8.3%] top-[37%] w-28 h-28"
        />
        <motion.img
          initial={{ scale: 0.3, opacity: 0 }}
          animate={
            inView ? { scale: 1, opacity: 1 } : { scale: 0.3, opacity: 0 }
          }
          transition={{ duration: 1.2, ease: "easeOut" }}
          src={"/case-studies/purpleglowcircle.webp"}
          alt="purple-glow-circle"
          width={31}
          height={31}
          className="hidden lg:block absolute right-[17%] bottom-[-7%] w-28 h-28"
        />
        <motion.img
          initial={{ scale: 0.3, opacity: 0 }}
          animate={
            inView ? { scale: 1, opacity: 1 } : { scale: 0.3, opacity: 0 }
          }
          transition={{ duration: 1.2, ease: "easeOut" }}
          src={"/case-studies/purpleglowcircle.webp"}
          alt="purple-glow-circle"
          width={31}
          height={31}
          className="hidden lg:block absolute left-[17%] bottom-[-7%] w-28 h-28"
        />
        <Image
          src={"/case-studies/outer-alf-circle-purple.webp"}
          width={504}
          height={375}
          alt="outer-alf-circle.webp"
          className="w-[232px] h-[162px] mx-auto md:w-[404px] md:h-[404px] lg:w-[504px] lg:h-[375px] hidden lg:block"
        />
      </div>
      {/* 1 */}
      <motion.div
        initial={{ scale: 0.3, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.3, opacity: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="w-[110px] h-[110px] md:w-[152px] md:h-[152px] midlg:w-[182px] midlg:h-[182px] rounded-full p-2 border-2 border-gray-600 border-dashed absolute left-[7%] top-[14%] md:left-[9%] md:top-[12%] xl:left-[15%]"
      >
        <div className="w-full h-full bg-gray-200 rounded-full flex flex-col items-center justify-center text-center gap-1 p-3">
          <p className="bloomTextColor font-semibold uppercase text-[8px] md:text-sm midlg:text-base">
            think tank
          </p>
          <h4 className="text-xs md:text-lg midlg:text-[24px] leading-none m-0">
            Planning & Research
          </h4>
        </div>
      </motion.div>
      {/* 2 */}
      <motion.div
        initial={{ scale: 0.3, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.3, opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="w-[110px] h-[110px] md:w-[152px] md:h-[152px] midlg:w-[182px] midlg:h-[182px] rounded-full p-2 border-2 border-gray-600 border-dashed absolute -left-4 top-[40%] md:top-[49%] md:left-[7%] xl:left-[10%]"
      >
        <div className="w-full h-full bg-gray-200 rounded-full flex flex-col items-center justify-center text-center gap-1 p-3">
          <p className="bloomTextColor font-semibold uppercase text-[8px] md:text-sm midlg:text-base">
            structure
          </p>
          <h4 className="text-xs md:text-lg midlg:text-[24px] leading-none m-0">
            Foundation & UX
          </h4>
        </div>
      </motion.div>
      {/* 3 */}
      <motion.div
        initial={{ scale: 0.3, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.3, opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="w-[110px] h-[110px] md:w-[152px] md:h-[152px] midlg:w-[182px] midlg:h-[182px] rounded-full p-2 border-2 border-gray-600 border-dashed absolute bottom-[11%] left-[12%] md:bottom-[-13%] md:left-[25%] midlg:bottom-[-13%] xl:bottom-[-10%] lg:left-[27%] lg:bottom-[-8%]"
      >
        <div className="w-full h-full bg-gray-200 rounded-full flex flex-col items-center justify-center text-center gap-1 p-3">
          <p className="bloomTextColor font-semibold uppercase text-[8px] md:text-sm midlg:text-base">
            AESTHETICS
          </p>
          <h4 className="text-xs md:text-lg midlg:text-[24px] leading-none m-0">
            UI Design
          </h4>
        </div>
      </motion.div>
      {/* 4 */}
      <motion.div
        initial={{ scale: 0.3, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.3, opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="w-[110px] h-[110px] md:w-[152px] md:h-[152px] midlg:w-[182px] midlg:h-[182px] rounded-full p-2 border-2 border-gray-600 border-dashed absolute bottom-[11%] right-[12%] md:bottom-[-13%] md:right-[25%] lg:bottom-[-8%] lg:right-[27%] midlg:bottom-[-13%] xl:bottom-[-10%]"
      >
        <div className="w-full h-full bg-gray-200 rounded-full flex flex-col items-center justify-center text-center gap-1 p-3">
          <p className="bloomTextColor font-semibold uppercase text-[8px] md:text-sm midlg:text-base">
            TECHY PART
          </p>
          <h4 className="text-xs md:text-lg midlg:text-[24px] leading-none m-0">
            Development & Coding
          </h4>
        </div>
      </motion.div>
      {/* 5 */}
      <motion.div
        initial={{ scale: 0.3, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.3, opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="w-[110px] h-[110px] md:w-[152px] md:h-[152px] midlg:w-[182px] midlg:h-[182px] rounded-full p-2 border-2 border-gray-600 border-dashed absolute -right-4 top-[40%] md:top-[49%] md:right-[7%] xl:right-[10%]"
      >
        <div className="w-full h-full bg-gray-200 rounded-full flex flex-col items-center justify-center text-center gap-1 p-3">
          <p className="bloomTextColor font-semibold uppercase text-[8px] md:text-sm midlg:text-base">
            THE EXCITEMENT
          </p>
          <h4 className="text-xs md:text-lg midlg:text-[24px] leading-none m-0">
            Testing & Evaluation
          </h4>
        </div>
      </motion.div>
      {/* 6 */}
      <motion.div
        initial={{ scale: 0.3, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.3, opacity: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="w-[110px] h-[110px] md:w-[152px] md:h-[152px] midlg:w-[182px] midlg:h-[182px] rounded-full p-2 border-2 border-gray-600 border-dashed absolute right-[5%] top-[12%] md:top-[12%] md:right-[9%] lg:top-[12%] lg:right-[9%] xl:right-[15%]"
      >
        <div className="w-full h-full bg-gray-200 rounded-full flex flex-col items-center justify-center text-center gap-1 p-3">
          <p className="bloomTextColor font-semibold uppercase text-[8px] md:text-sm midlg:text-base">
            JACKPOT
          </p>
          <h4 className="text-xs md:text-lg midlg:text-[24px] leading-none m-0">
            Deployment - Go Live!
          </h4>
        </div>
      </motion.div>
    </section>
  );
};

export default WorkApproachAnimation;
