"use client";
import PageBreadcrumb from "@/components/Common/PageBreadcrumb";
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
    <section className="w-full bg-white relative pt-36 2xl:pt-52 flex flex-col items-center justify-start gap-5 overflow-hidden padding-x">
      {/* <PageBreadcrumb
        pageLink={"/case-studies/fitness-by-faith"}
        pageTitle={"Fitness By Faith"}
        primaryLink={"/case-studies"}
        primaryPageTitle={"Case Studies"}
      /> */}
      <Image
        src={"/case-studies/fitness-by-faith/fitness-by-faith-logo.png"}
        width={109}
        height={109}
        alt="bloom logo"
      />
      <h1 className="font-bold text-[40px] lg:text-[80px] leading-[1.1] text-center">
        Fitness By Faith with <span className="fitnessText">Laken</span>
      </h1>
      <h2 className="text-[22px] font-medium">Overview</h2>
      <p className="text-xl text-center lg:w-[90%]">
        Fitness by Faith with Laken helps users stick to workouts through
        personalized plans and live trainer chats. Built with enterprise mobile
        app development, the app tracks progress while keeping workouts fresh.
        Trainers update plans in real time, and users get nudges when they
        slack. It’s like having a coach in your pocket; no fancy gym is needed.
        The clean layout makes it easy to log meals, join live sessions, or
        check tomorrow’s workout.
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

      <div className="w-full flex flex-col lg:flex-row lg:items-center items-start justify-between tracking-tight lg:border rounded-full md:px-8 min-h-[107px] my-20 border-[#64b5ac] fitnessShadow gap-4">
        <div className="flex items-center gap-3">
          <div className="min-w-[66px] h-[66px] bg-[#64B5AC] rounded-full flex items-center justify-center">
            <Image
              src={"/case-studies/time-icon.png"}
              alt="time-icon"
              width={40}
              height={40}
            />
          </div>
          <div className="flex flex-col items-start gap-1">
            <p className="text-lg text-gray-500">The Milestones</p>
            <p className="text-[18px] lg:text-[20px] font-bold">
              4 Months of Daily Momentum
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="min-w-[66px] h-[66px] bg-[#64B5AC] rounded-full flex items-center justify-center">
            <Image
              src={"/case-studies/globe-icon.png"}
              alt="time-icon"
              width={40}
              height={40}
            />
          </div>
          <div className="flex flex-col items-start gap-1">
            <p className="text-lg text-gray-500">The Sector</p>
            <p className="text-[18px] lg:text-[20px] font-bold">
              Health, Fitness & Nutrition
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="min-w-[66px] h-[66px] bg-[#64B5AC] rounded-full flex items-center justify-center">
            <Image
              src={"/case-studies/constribution-icon.png"}
              alt="time-icon"
              width={44}
              height={40}
            />
          </div>
          <div className="flex flex-col items-start gap-1">
            <p className="text-lg text-gray-500">What We Did</p>
            <p className="text-[18px] lg:text-[20px] font-bold">
              Mobile App Development
            </p>
          </div>
        </div>
      </div>

      <motion.div
        ref={ref}
        initial={{ y: 100, scale: 0.4 }}
        animate={inView ? { y: 0, scale: 1 } : { y: 100, scale: 0.4 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full"
      >
        <Image
          src={"/case-studies/fitness-by-faith/banner-1.png"}
          alt="nashville-banner-1"
          width={1270}
          height={593}
          className="object-cover"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
