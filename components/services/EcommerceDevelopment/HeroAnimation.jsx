"use client";
import Image from "next/image";
import React from "react";
import { motion, useScroll, useInView } from "framer-motion";
import { useRef } from "react";

const HeroAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-30% 0px -30% -40px",
  });
  return (
    <section
      ref={ref}
      className="w-full h-[330px] md:h-[429px] xl:h-[699.23px] relative mx-auto flex justify-center items-end overflow-hidden"
    >
      <Image
        src={"/ecommerce-page-hero-orange-bg.webp"}
        alt="ecommerce-page-hero-orange-bg"
        width={540}
        height={447.76}
        priority
        className="w-[70%] md:w-[46%] lg:w-[340px] xl:w-[540px] lg:h-[347px] xl:h-[447px] mx-auto z-10 md:h-[307px] object-contain"
      />
      <Image
        src={"/ecommerce-page-hero-borders-image.webp"}
        alt="ecommerce-page-hero-borders-image"
        width={980.18}
        height={509}
        priority
        className="absolute inset-0 z-0 left-1/2 -translate-x-1/2 bottom-0 h-full w-full"
      />
      <motion.img
        initial={{ opacity: 1, y: 280, x: "-50%" }}
        animate={isInView ? { opacity: 1, y: 0, x: "-50%" } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        src={"/ecommerce-page-hero-mobile-mockup.webp"}
        alt="ecommerce-page-hero-mobile-mockup"
        width={415}
        height={609.23}
        priority
        className="z-20 w-[280px] xl:w-[400px] md:w-[37%] h-[309px] md:h-[409px] xl:h-[609px] absolute left-1/2 -translate-x-1/2 md:bottom-[-0.88rem] bottom-[-0.68rem] object-contain"
      />
      {/* right side images */}
      <motion.img
        initial={{ opacity: 0.4, scale: 0.1 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        src={"/proven-ecommerce-experience.webp"}
        alt="proven-ecommerce-experience"
        width={262}
        height={90}
        property=""
        className="absolute top-[20%] right-0 md:w-[8rem] lg:w-[11rem] hidden md:block"
      />
      <motion.img
        initial={{ opacity: 0.4, scale: 0.1 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        src={"/store-management.webp"}
        alt="store-management"
        width={232}
        height={90}
        priority
        className="absolute bottom-[20%] right-[5%] md:w-[8rem] lg:w-[11rem] hidden md:block"
      />
      {/* left side images */}
      <motion.img
        initial={{ opacity: 0.4, scale: 0.1 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        src={"/managing-stores.webp"}
        alt="managing-stores"
        width={262}
        height={90}
        priority
        className="absolute top-[20%] left-0 md:w-[8rem] lg:w-[11rem] hidden md:block"
      />
      <motion.img
        initial={{ opacity: 0.4, scale: 0.1 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        src={"/yearly-revenue.webp"}
        alt="yearly-revenue"
        width={226}
        priority
        height={207}
        className="absolute bottom-[20%] left-[5%] md:w-[8.5rem] lg:w-[11rem] hidden md:block"
      />
    </section>
  );
};

export default HeroAnimation;

// ecommerce-page-hero-orange-bg
