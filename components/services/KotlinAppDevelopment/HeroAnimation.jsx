"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";

const HeroAnimation = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });
  return (
    <div
      ref={ref}
      className="h-[269px] md:h-[400px] lg:h-[499px] midlg:h-[529px] w-full mx-auto relative overflow-hidden"
    >
      <Image
        src="/kotlin/kotlin-hero-bg.webp"
        alt="hero-bg"
        width={748}
        height={370}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 748px"
        className="absolute bottom-[-3%] left-1/2 -translate-x-1/2 object-cover md:object-contain z-0 h-auto lg:h-[387px]"
      />
      {/* mobile-mockup */}
      <motion.div
        initial={{ y: 400, x: "-50%" }}
        animate={inView ? { y: 0, x: "-50%" } : { y: 400, x: "-50%" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute left-1/2 -translate-x-1/2 bottom-0 mx-auto"
      >
        <Image
          src="/kotlin/mobile-mockup.webp"
          alt="Kotlin development company showcasing Android app interface with modern UI components"
          width={383}
          height={563}
          priority
          sizes="(max-width: 768px) 60vw, (max-width: 1200px) 40vw, 383px"
          className="object-contain h-auto md:max-h-[400px] lg:h-[463px] migld:h-[583px] z-10"
        />
      </motion.div>

      {/* card 02 */}
      <motion.div
        initial={{ scale: 0.4 }}
        animate={inView ? { scale: 1 } : { scale: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-[14%] left-[13%] midlg:left-[17%] bg-[#C858B7] hidden md:flex flex-col items-start gap-2 justify-center w-[133px] h-[123px] lg:w-[153px] lg:h-[153px] midlg:w-[173px] midlg:h-[173px] rounded-[17px] p-5"
      >
        <Image
          src={"/kotlin/card-icon-1.webp"}
          alt="card-icon-1"
          width={24}
          height={34}
          className="w-[18px] h-[24px] lg:w-[24px] lg:h-[34px]"
        />
        <p className="text-sm lg:text-lg xl:text-2xl font-bold text-white leading-[1]">
          Kotlin-Powered Efficiency
        </p>
      </motion.div>

      {/* card 01 */}
      <motion.div
        initial={{ scale: 0.4 }}
        animate={inView ? { scale: 1 } : { scale: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute bottom-[10%] left-[10%] xl:left-[13%] bg-[#FB860B] hidden md:flex flex-col items-start gap-2 justify-center max-w-[173px] max-h-[173px] rounded-[17px] p-5"
      >
        <Image
          src={"/kotlin/card-icon-2.webp"}
          alt="card-icon-2"
          width={32}
          height={22}
          className="w-[22px] h-auto lg:w-[32px] lg:h-[22px]"
        />
        <p className="text-sm lg:text-lg midlg:text-2xl font-bold text-white leading-[1.2]">
          30% Less Code
        </p>
        <p className="text-sm midlg:text-base font-semibold text-white bg-black px-4 py-1 lg:py-2 rounded-full">
          2x the Speed
        </p>
      </motion.div>

      {/* card 03 */}
      <motion.div
        initial={{ scale: 0.4 }}
        animate={inView ? { scale: 1 } : { scale: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-[#756EFE] hidden md:flex flex-col items-start gap-2 justify-center md:w-[172px] lg:w-[222px] midlg:w-[291px] max-h-[189px] rounded-[17px] p-5 absolute md:top-[22%] lg:top-[16%] midlg:top-[26%]  right-2"
      >
        <Image
          src={"/kotlin/card-icon-3.webp"}
          alt="card-icon-3"
          width={40}
          height={40}
          className="w-[21px] h-[21px] lg:w-[40px] lg:h-[40px]"
        />
        <p className="text-sm lg:text-lg midlg:text-2xl font-bold leading-[1.2] text-white">
          Security from the Ground Up
        </p>
      </motion.div>

      {/* card 03 */}
      <motion.div
        initial={{ scale: 0.4 }}
        animate={inView ? { scale: 1 } : { scale: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute bottom-[8%] lg:right-[10%] xl:right-[15%]"
      >
        <Image
          src="/kotlin/kotlin-hero-card-4.webp"
          alt="kotlin-hero-card-4"
          width={297}
          height={61}
          priority
          sizes="(max-width: 768px) 40vw, (max-width: 1200px) 25vw, 297px"
          className="w-[121px] lg:w-[297px]"
        />
      </motion.div>
    </div>
  );
};

export default HeroAnimation;
