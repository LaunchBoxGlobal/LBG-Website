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
      <section className="w-full bg-white relative pt-36 2xl:pt-52 flex flex-col items-center justify-start gap-5 overflow-hidden padding-x">
        <Image
          src={"/case-studies/market-toll.png"}
          width={200}
          height={200}
          className="w-24"
          alt="market toll logo"
        />

        <h1 className="font-extrabold text-[40px] lg:text-[80px] text-center leading-[1.1]">
          Market <span className="text-[#0093E7]">Toll</span>
        </h1>

        <h2 className="text-[22px] font-medium">Overview</h2>

        <p className="md:text-xl text-center leading-tight lg:w-[90%] opacity-60">
          Markettoll is a multi-vendor eCommerce platform built to connect both buyers and sellers on one platform. We designed with three integrated interfaces: Mobile App, Web Application, and Admin Dashboard. Vendors get the freedom to set up their shops, customers can enjoy a smooth shopping experience with ease, and admins can manage operations easily. The mobile and web platforms are packed with features like browsing, advanced search, secure checkout, and personalized recommendations. Our developers designed this platform in a way that customers enjoy a smooth shopping journey, vendors receive dedicated tools to manage inventory, track sales, and optimize performance, and the admin dashboard offers strong oversight with analytics, compliance, and marketplace management tools. We kept it flexible, secure, and feature-rich. This platform is a complete solution for creating successful digital commerce communities.
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
            src={"/case-studies/hero-market.png"}
            alt="mockup"
            width={1000}
            height={1000}
            className="w-[80%] md:w-[60%] object-center absolute"
          />
          <Image
            src={"/case-studies/market-grad.png"}
            alt="mockup"
            width={1000}
            height={1000}
            className="object-center"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
