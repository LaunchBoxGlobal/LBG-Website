"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });
  return (
    <section className="w-full relative overflow-hidden bg-white min-h-[100vh]">
      <section
        ref={ref}
        className="w-full relative pt-36 2xl:pt-52 padding-x flex flex-col items-center justify-start gap-5 lg:gap-3 overflow-hidden z-10"
      >
        <h1 className="font-extrabold text-[8.5vw] md:text-[5.5vw] lg:text-[70px] xl:text-[70px] text-center tracking-normal leading-[1] w-full z-10 flex flex-col items-center gap-4">
          <span>Top Mobile App Developers In</span>{" "}
          <span className="red-bg block py-4 px-10 text-white rounded-[17px]">
            Houston
          </span>
        </h1>

        <p className="text-base md:text-lg lg:text-[22px] my-2 2xl:text-[26px] font-medium text-gray-500 text-center md:w-2/3 lg:w-[75%] leading-7 mx-auto z-10">
          Build high-performance apps with Houston’s trusted mobile app
          development company, specializing in custom solutions for local
          businesses.
        </p>

        <section className="w-full mt-5 z-10">
          <Link
            href={`/contact-us`}
            className="max-w-[260px] bg-[#F40E00] hover:bg-black h-[56px] rounded-[9px] text-center flex items-center justify-center text-lg font-bold text-white mx-auto z-10"
          >
            Request Free Proposal
          </Link>
        </section>

        <div className="h-auto w-full flex justify-center relative items-end">
          <motion.div
            initial={{ y: 600 }}
            animate={inView ? { y: 0 } : { y: 600 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="mx-auto"
          >
            <img
              src={
                "/locations/mobile-app-developers-in-houston/mobile-app-developers-in-houston-hero-mockup.webp"
              }
              width={1331}
              height={589}
              priority
              alt="Mobile App Developers in Houston showcasing fitness tracking app with workout analytics dashboard"
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 1331px"
              className="mx-auto h-full object-contain z-10 relative -bottom-4"
            />
          </motion.div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
