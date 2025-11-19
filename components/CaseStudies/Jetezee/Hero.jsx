"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Timeline from "./Timeline";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  // Trigger animation once when hero image enters view
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div>
      <section className="w-full  relative pt-36 2xl:pt-52 flex flex-col items-center justify-start gap-5 overflow-hidden padding-x">
        <Image
          src={"/case-studies/jetezee/logo.png"}
          width={400}
          height={400}
          className="w-44"
          alt="market toll logo"
        />

        <h1 className="font-extrabold text-[40px] lg:text-[80px] text-center leading-[1.1]">
          Jet<span className="text-[#E9B44C]">ezee</span>
        </h1>

        <h2 className="text-[22px] font-medium">Overview</h2>

        <p className="md:text-xl text-center leading-tight lg:w-[90%] opacity-60">
         JetEzee is a luxury web-based marketplace created to redefine how private jets are bought and sold online, from Airbus and Boeing to Gulfstream and Bombardier. The vision was to transform complex, high-value aviation transactions into a fluent, secure, and visually elevated digital experience. LaunchBox Global led the entire prototyping phase, shaping the platform’s digital experience. LaunchBox Global led the entire prototyping phase, shaping the platform’s UX strategy, user flow design, wireframes, and high-fidelity mockups for both the web App and Admin Dashboard. Each of the elements was designed to deliver clarity and trust, the two vital pillars of digital ecommerce. Through our web app development services and UI/UX design services, we brought the structure, balance, and premium aesthetics into one stable ecosystem. The result was not just the prototype but a new digital benchmark for the aviation resale market, where confidence meets elegance in every interaction.  
        </p>

        {/* <div className="flex items-center justify-center gap-2">
          <Link href={"/"}>
            <Image
              src={"/app-store-button-image.png"}
              width={239}
              height={57}
              alt="app-store-button-image"
            />
          </Link>
          <Link href={"/"}>
            <Image
              src={"/google-play-button-image.png"}
              width={239}
              height={57}
              alt="google-play-button-image"
            />
          </Link>
        </div> */}
      </section>

      <Timeline />

      {/* Hero Image Animation (only this animates once) */}
      <div ref={heroRef} className="flex justify-center items-center relative">
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={
            heroInView
              ? { opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: "easeOut" } }
              : {}
          }
          className="relative flex justify-center items-center"
        >
          <Image
            src={"/case-studies/jetezee/hero.png"}
            alt="mockup"
            width={1200}
            height={1200}
            className="w-[100%]  object-center "
          />
          {/* <Image
            src={"/case-studies/market-grad.png"}
            alt="mockup"
            width={1000}
            height={1000}
            className="object-center"
          /> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
