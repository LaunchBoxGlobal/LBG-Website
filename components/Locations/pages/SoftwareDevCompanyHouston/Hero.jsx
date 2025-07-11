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
            <span>Top Custom Software Development Company In</span>{" "}
            <span className="red-bg block py-4 px-10 text-white rounded-[17px]">
              Houston
            </span>
          </h1>
        </AnimatedText>
        <AnimatedText direction="right">
          <p className="text-base md:text-lg lg:text-[22px] my-2 2xl:text-[26px] font-medium text-gray-500 text-center md:w-2/3 lg:w-[75%] leading-7 mx-auto z-10">
            We build high-performance custom software solutions for Houston
            businesses - scalable, secure, and tailored to your needs.
          </p>
        </AnimatedText>
        <AnimatedText>
          <section className="w-full mt-5 z-10">
            <Link
              href={`/contact-us`}
              className="max-w-[220px] bg-[#F40E00] hover:bg-black h-[56px] rounded-[9px] text-center flex items-center justify-center text-lg font-bold text-white mx-auto z-10"
            >
              Get Started
            </Link>
          </section>
        </AnimatedText>

        <Image
          src={"/locations/software-dev-company-houston/hero-left-dots.png"}
          width={28}
          height={95}
          className="absolute left-[5%] top-[13%] hidden lg:block"
        />

        <section className="lg:h-[609px] w-full flex justify-center relative items-end mt-10">
          <motion.div
            initial={{ y: 600 }}
            animate={inView ? { y: 0 } : { y: 600 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="mx-auto"
          >
            <Image
              src={"/locations/software-dev-company-houston/hero-mockup.png"}
              width={1172}
              height={609}
              alt="Custom Software Development Company in Houston showcasing enterprise application with intuitive dashboard"
              className="mx-auto h-full object-contain z-10 relative -bottom-4"
            />
          </motion.div>

          <Image
            src={`/locations/software-dev-company-houston/hero-mockup-2.png`}
            width={194}
            height={191}
            alt="hero-mockup-2"
            className="absolute -right-20 bottom-32 hidden lg:block"
          />
          <Image
            src={"/locations/software-dev-company-houston/hero-dots.png"}
            width={88}
            height={131}
            alt="hero-dots"
            className="absolute bottom-80 -right-36 hidden lg:block"
          />
        </section>
      </section>
    </section>
  );
};

export default Hero;
