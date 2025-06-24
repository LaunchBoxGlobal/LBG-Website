"use client";
import PageBreadcrumb from "@/components/Common/PageBreadcrumb";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <section className="w-full bg-white relative pt-36 2xl:pt-52 flex flex-col items-center justify-start gap-5 overflow-hidden padding-x">
      {/* <PageBreadcrumb
        pageLink={"/case-studies/my-garage-outlet"}
        pageTitle={"My Garage Outlet"}
        primaryLink={"/case-studies"}
        primaryPageTitle={"Case Studies"}
      /> */}
      <Image
        src={"/case-studies/my-garage-outlet/my-garage-outlet-logo.png"}
        width={109}
        height={109}
        alt="my garage outlet logo"
      />
      <h1 className="font-bold text-[40px] lg:text-[80px] leading-[1.1] text-center">
        My Garage <span className="my-garage-outlet-text">Outlet</span>
      </h1>
      <h2 className="text-[22px] font-medium">Overview</h2>
      <p className="text-xl text-center lg:w-[90%]">
        We built My Garage Outlet to transform how people find local sales. This
        mobile app development project created an easy way to discover nearby
        garage sales, connect with sellers, and make secure payments all from
        your phone. The clean app features location based searches and social
        sharing, while our admin tools keep this online flea market running
        smoothly. No more driving around now the best deals come to you.
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

      <div className="w-full flex lg:items-center gap-4 flex-col lg:flex-row items-start justify-between tracking-tight lg:border border-[#a07439] rounded-full md:px-8 min-h-[107px] my-20 brownShadow">
        <div className="flex items-center gap-3">
          <div className="min-w-[66px] h-[66px] bg-[#a07439] rounded-full flex items-center justify-center">
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
              152 days of progress
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="min-w-[66px] h-[66px] bg-[#a07439] rounded-full flex items-center justify-center">
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
              Tourism & City Exploration
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="min-w-[66px] h-[66px] bg-[#a07439] rounded-full flex items-center justify-center">
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
              Mobile App Development, Branding & UI/UX Design
            </p>
          </div>
        </div>
      </div>
      <div ref={ref} className="w-full">
        <motion.div
          initial={{ scale: 0.7 }}
          animate={inView ? { scale: 1 } : { scale: 0.7 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full"
        >
          <Image
            src={"/case-studies/my-garage-outlet/my-garage-outlet-banner-1.png"}
            alt="nashville-banner-1"
            width={1270}
            height={593}
            className=""
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
