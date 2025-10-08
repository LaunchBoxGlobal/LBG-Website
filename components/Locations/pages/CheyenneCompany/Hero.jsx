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
      <section className="w-full relative pt-36 2xl:pt-52 padding-x flex flex-col items-center justify-start gap-5 lg:gap-3 overflow-hidden z-10">
        <h1 className="font-extrabold text-[8.5vw] md:text-[5.5vw] lg:text-[70px] xl:text-[70px] text-center tracking-normal leading-[1] w-full z-10 f">
          Cheyenne SEO Company That Boosts Your{" "}
          <span className="red-text">Local Visibility</span>
        </h1>
        <p className="text-base md:text-lg lg:text-[22px] my-2 2xl:text-[26px] font-medium text-gray-500 text-center md:w-2/3 lg:w-[75%] leading-7 mx-auto z-10">
          Enhance Cheyenne businesses' online visibility on Google with SEO
          solutions that are tailored to Wyoming marketplaces.
        </p>

        <section className="w-full mt-5 z-10 mb-10">
          <Link
            href={`/contact-us`}
            className="max-w-[220px] bg-[#F40E00] hover:bg-black h-[56px] rounded-[9px] text-center flex items-center justify-center text-lg font-bold text-white mx-auto z-10"
          >
            Get Started
          </Link>
        </section>
      </section>
      <section
        ref={ref}
        className="w-full flex justify-center relative items-end mt-10"
      >
        <motion.div
          initial={{ y: 600 }}
          animate={inView ? { y: 0 } : { y: 600 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mx-auto"
        >
          <img
            src="/locations/cheyenne-seo-company/hero-mockup.webp"
            alt="Cheyenne SEO company dashboard showing keyword rankings and organic traffic analytics"
            width={1596}
            height={698}
            priority
            quality={85}
            sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 90vw,
         1596px"
            // placeholder="blur"
            // blurDataURL="/locations/cheyenne-seo-company/hero-mockup-blur.jpg"
            className="mx-auto h-auto object-contain z-10 relative"
          />
        </motion.div>
      </section>
    </section>
  );
};

export default Hero;
