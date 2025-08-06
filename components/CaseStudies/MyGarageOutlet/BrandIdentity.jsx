"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";

const BrandIdentity = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <section className="w-full padding-x flex flex-col items-center relative overflow-hidden">
      <h2 className="section-heading z-10">Brand Identity</h2>
      <p className="text-center lg:w-[90%] text-base lg:text-xl mt-7 z-10">
        We gave My Garage Outlet personality that excited feeling of spotting a
        driveway full of hidden gems. Bright colors popped like vintage finds,
        while friendly fonts made our mobile app development approachable. Every
        detail felt like a helpful neighbor, not another faceless tech platform.
      </p>

      <div
        ref={ref}
        className="w-full mt-10 midlg:mt-14 bg-[#F5F5F5] rounded-[17px]"
      >
        <div className="w-full p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <Image
              src={"/case-studies/my-garage-outlet/brand-identity-fonts.webp"}
              alt="fonts"
              width={553}
              height={262}
              loading="lazy"
              className="object-contain max-h-[260px]"
            />
          </div>
          <div>
            <Image
              src={"/case-studies/my-garage-outlet/brand-identity-colors.webp"}
              alt="fonts"
              width={560}
              height={248}
              loading="lazy"
              className="object-contain max-h-[260px]"
            />
          </div>
        </div>
        <div className="w-full flex items-end justify-center relative">
          <motion.div
            initial={{ y: 400 }}
            animate={inView ? { y: 0 } : { y: 400 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative -right-5 md:-right-11"
          >
            <Image
              src={
                "/case-studies/my-garage-outlet/brand-identity-mobile-mockup-1.webp"
              }
              alt="brand-identity-mobile-mockup-1"
              width={427}
              height={881}
              loading="lazy"
              className="object-contain w-[157px] md:w-[327px] midlg:w-[427px]"
            />
          </motion.div>
          <motion.div
            initial={{ y: 400 }}
            animate={inView ? { y: 0 } : { y: 400 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative -left-5 md:-left-11"
          >
            <Image
              src={
                "/case-studies/my-garage-outlet/brand-identity-mobile-mockup-2.webp"
              }
              alt="brand-identity-mobile-mockup-2"
              width={427}
              height={881}
              loading="lazy"
              className="object-contain w-[157px] md:w-[327px] midlg:w-[427px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandIdentity;
