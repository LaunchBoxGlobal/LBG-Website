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
          src={"/case-studies/usubz/us.png"}
          width={400}
          height={400}
          className="w-44"
          alt="market toll logo"
        />


        <h2 className="text-[22px] font-medium">Overview</h2>

        <p className="md:text-xl text-center leading-tight lg:w-[90%] opacity-60">
       Usubz is a career-development platform that merges learning and job hunting into one ecosystem. Users take courses and challenges to earn points and verified skills that boost recruiter visibility. LaunchBox Global designed a modern, motivating UI/UX that keeps learners engaged while helping recruiters easily discover qualified, verified talent.
        </p>

        <div className="flex items-center justify-center gap-2">
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
        </div>
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
            src={"/case-studies/usubz/hero.png"}
            alt="mockup"
            width={2000}
            height={2000}
            className="w-[100%]  object-contain "
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
