"use client";
import React, { useRef } from "react";
import "./style.css";
import Image from "next/image";
import { useInView, motion } from "framer-motion";

const HeroAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="w-full max-w-[1260px] lg:h-[707px] relative">
      <Image
        src={"/industries/real-estate/hero-section-mockup.png"}
        alt="hero-section-mockup"
        width={1262}
        height={707}
        className="mx-auto object-contain lg:hidden"
      />

      {/* hero-section-borders-image */}
      <Image
        src={`/industries/real-estate/hero-section-borders-image.png`}
        width={1262}
        height={707}
        alt="hero-section-borders-image"
        className="hidden lg:block"
      />

      {/* mobile mockup */}
      <motion.div
        className="absolute top-0 z-20 w-full h-full"
        initial={{ y: 500 }}
        animate={isInView ? { y: 0 } : { y: 500 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src={`/industries/real-estate/hero-section-mobile-mockup.png`}
          width={296}
          height={613}
          alt="hero-section-mobile-mockup"
          className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 object-contain h-[350px] lg:h-auto hidden lg:block"
        />
      </motion.div>

      {/* loft-house-image */}
      <Image
        src={`/industries/real-estate/loft-house-image.png`}
        alt="loft-house-image"
        width={758}
        height={282}
        className="absolute left-1/2 -translate-x-1/2 bottom-[3%] z-10 hidden lg:block"
      />

      {/* secure payment */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
        className="absolute lg:top-4 midlg:top-4 xl:top-7 lg:right-[5%] xl:right-[6%] z-30 lg:w-[300px] midlg:w-[350px] xl:w-[400px] hidden lg:flex justify-end"
      >
        <Image
          src={`/industries/real-estate/secure-payment-border-line.png`}
          width={276}
          height={42}
          alt="border line"
          className="object-contain absolute top-[40%] left-[-17%]"
        />
        <div className="bg-white max-w-[240px] p-4 rounded-[17px] hero-card-shadow z-10">
          <span className="font-medium text-base xl:text-lg text-gray-600 text-nowrap">
            Secure Payment Gateway
          </span>
        </div>
      </motion.div>

      {/* Interactive Dashboards interactive-dashboard-border-line.png */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
        className="absolute lg:bottom-[40%] midlg:bottom-[40%] xl:bottom-[37%] lg:right-[3%] midlg:right-[3%] xl:right-[3%] z-30 lg:w-[300px] midlg:w-[350px] xl:w-[400px] hidden lg:flex justify-end"
      >
        <Image
          src={`/industries/real-estate/interactive-dashboard-border-line.png`}
          width={246}
          height={101}
          alt="border line"
          className="object-contain absolute top-[-120%] left-[-17%]"
        />

        <div className="bg-white min-w-[210px] p-4 rounded-[17px] hero-card-shadow z-10">
          <span className="font-medium text-base xl:text-lg text-gray-600 text-nowrap">
            Interactive Dashboards
          </span>
        </div>
      </motion.div>

      {/* Interactive Dashboards */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
        className="absolute bottom-[59%] left-[1%] z-30 lg:w-[300px] midlg:w-[350px] xl:w-[400px] hidden lg:flex justify-start"
      >
        <Image
          src={`/industries/real-estate/lead-management-border-line.png`}
          width={276}
          height={42}
          alt="border line"
          className="object-contain absolute top-[40%] lg:right-[-8%] midlg:right-[-16%] xl:right-[-14%]"
        />
        <div className="bg-white min-w-[210px] p-4 rounded-[17px] hero-card-shadow z-10">
          <span className="font-medium text-base xl:text-lg text-gray-600 text-nowrap">
            Advanced Lead Management
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroAnimation;
