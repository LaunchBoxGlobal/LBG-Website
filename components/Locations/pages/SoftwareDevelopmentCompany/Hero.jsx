"use client";
import AnimatedText from "@/components/StaffAugmentation/AnimatedText";
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
      <section
        ref={ref}
        className="w-full relative pt-36 2xl:pt-52 padding-x flex flex-col items-center justify-start gap-5 lg:gap-3 overflow-hidden z-10"
      >
        <AnimatedText direction="left">
          <h1 className="font-extrabold text-[8.5vw] md:text-[5.5vw] lg:text-[70px] xl:text-[70px] text-center tracking-normal leading-[1] w-full z-10 flex flex-col items-center gap-4">
            <span>Software Development Company In</span>{" "}
            <span className="red-bg block py-4 px-10 text-white rounded-[17px]">
              Florida
            </span>
          </h1>
        </AnimatedText>
        <AnimatedText direction="right">
          <p className="text-base md:text-lg lg:text-[22px] my-2 2xl:text-[26px] font-medium text-gray-500 text-center md:w-2/3 lg:w-[75%] leading-7 mx-auto z-10">
            Build custom app solutions with a trusted software development
            company in Florida, delivering tailored mobile and web applications
            for local businesses.
          </p>
        </AnimatedText>
        <AnimatedText>
          <section className="w-full mt-5 z-10">
            <Link
              href={`/contact-us`}
              className="max-w-[260px] bg-[#F40E00] hover:bg-black h-[56px] rounded-[9px] text-center flex items-center justify-center text-lg font-bold text-white mx-auto z-10"
            >
              Request Free Proposal
            </Link>
          </section>
        </AnimatedText>

        <div className="lg:h-[609px] w-full flex justify-center relative items-end mt-10">
          {/* border-grid */}
          <Image
            src={"/locations/mobile-app-developer/border-grid.png"}
            width={1427}
            height={887}
            alt="border-grid"
            className="mx-auto absolute inset-0 z-0 object-contain"
          />
          <motion.div
            initial={{ y: 600 }}
            animate={inView ? { y: 0 } : { y: 600 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="mx-auto"
          >
            <Image
              src={"/locations/software-development-company/hero-mockup.png"}
              width={1236}
              height={620}
              alt="Software Development Company in Florida showcasing custom enterprise application with modern UI"
              className="mx-auto h-full object-contain z-10 relative -bottom-4"
            />
          </motion.div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
