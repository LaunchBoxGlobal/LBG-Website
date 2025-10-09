"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion, useInView } from "framer-motion";

function Hero() {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });
  return (
    <section className="relative h-screen  md:h-[155vh]">

      

    <motion.div
  initial={{ y: 200, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 1, ease: "easeOut" }}
  className="absolute w-full bottom-0 overflow-hidden"
>
  {/* Background image (hero.png) */}
  <Image
    src="/locations/software-dev-company-austin/hero.png"
    width={1000}
    height={1000}
    alt="Austin city background"
    className="object-cover w-full relative z-0"
    priority
  />

  {/* Overlay image (hero2.png) - floats on top */}
  <motion.div
    initial={{ opacity: 0, y: 100, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
    className="absolute inset-0 flex justify-center items-center z-10"
  >
    {/* Continuous floating animation */}
    <motion.div
      animate={{ y: [0, -20, 0] }}
      transition={{
        duration: 3.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Image
        src="/locations/software-dev-company-austin/hero2.png"
        width={300}
        height={600}
        alt="Overlay mobile image"
        priority
        className="w-[80px] md:w-[280px] drop-shadow-2xl"
      />
    </motion.div>
  </motion.div>
</motion.div>

      <div className="pt-24 max-w-screen-xl mx-auto">
        <h1 className="relative z-30 font-extrabold text-[8.5vw] md:text-[5.5vw] lg:text-[70px] text-center tracking-normal leading-[1.1] w-full flex flex-col items-center gap-4">
          <span>Your Trusted Custom Software Development Company In</span>
          <span className="bg-[#F40E00] block py-4 px-10 text-white rounded-[17px]">
            Austin
          </span>
        </h1>
        <p className="text-base px-2 mt-4 relative z-50 md:text-lg lg:text-[22px] 2xl:text-[26px] font-medium text-gray-600 text-center md:w-2/3 lg:w-[75%] leading-7 mx-auto">
          As a leading custom software development company in Austin, we create
          personalized, smart solutions that help startups improve processes,
          grow performance, and achieve flexible growth with tech made just for
          them.
        </p>

        {/* CTA */}
        <div className="w-full mt-5 z-20 flex justify-center">
          <Link
            href="/contact-us"
            className="max-w-[260px] bg-[#F40E00] px-12 hover:bg-black h-[56px] rounded-[9px] text-center flex items-center justify-center text-lg font-bold text-white z-10 transition-all duration-300"
          >
            Start Your Journey
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
