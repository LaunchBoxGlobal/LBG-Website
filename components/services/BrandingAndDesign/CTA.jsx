"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <section className="w-full padding-x py-10 lg:py-20">
      <section className="w-full h-[410px] rounded-lg bg-[#212121]  overflow-hidden relative border group flex items-center justify-end">
        <section className="h-full text-white z-20 flex flex-col items-center text-center lg:items-start lg:text-start justify-center gap-5 w-full lg:w-[55%] p-4 lg:px-16 relative">
          <Image
            src={"/create-your-mobile-app-map.webp"}
            alt="map image"
            width={600}
            height={410}
            loading="lazy"
            className="w-[100%] h-full absolute inset-0 opacity-10 z-0"
          />
          <h2 className="font-bold text-[36px] lg:text-[50px] leading-[2.7rem] lg:leading-[52px]">
            Struggling to Stand Out in a Crowded Market?
          </h2>
          <p className="text-lg lg:text-[22px] font-light">
            Even strong businesses get overlooked without a clear, confident
            brand. We craft identities that stand out and stick with the right
            audience.
          </p>
          <Link
            href={"/contact-us"}
            className="px-5 h-[47px] mt-3 bg-white text-black flex items-center justify-center rounded-[11px] text-lg font-medium z-30 hover:bg-[#F40E00] hover:text-white transition-all duration-300"
          >
            Get a Free Brand Consultation
          </Link>
        </section>

        <section className="w-[45%] h-[410px] z-10 relative hidden lg:block">
          <Image
            src={"/branding-and-design-cta-image-1.webp"}
            alt="branding-and-design-cta-image-1"
            width={566}
            height={382}
            loading="lazy"
            className="absolute right-[-6%] bottom-[-30%] w-[556px] h-[382px] z-20"
          />
          <Image
            src={"/branding-and-design-cta-image-2.webp"}
            alt="branding-and-design-cta-image-1"
            width={566}
            height={382}
            loading="lazy"
            className="absolute right-[-12%] bottom-[-15%] w-[556px] h-[382px] z-10 rotate-[8deg]"
          />
          <Image
            src={"/branding-and-design-cta-image-3.webp"}
            alt="branding-and-design-cta-image-1"
            width={566}
            height={382}
            loading="lazy"
            className="absolute right-[-20%] bottom-[-7.5%] w-[556px] h-[382px] rotate-[15deg] z-0"
          />
        </section>
      </section>
    </section>
  );
};

export default CTA;
