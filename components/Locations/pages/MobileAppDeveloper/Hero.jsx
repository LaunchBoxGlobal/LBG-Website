"use client";
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
        <h1 className="font-extrabold text-[8.5vw] md:text-[5.5vw] lg:text-[70px] xl:text-[70px] text-center tracking-normal leading-[1] w-full z-10 flex flex-col items-center gap-4">
          <span>Mobile App Developer In</span>{" "}
          <span className="red-bg block py-4 px-10 text-white rounded-[17px]">
            Florida
          </span>
        </h1>
        <p className="text-base md:text-lg lg:text-[22px] my-2 2xl:text-[26px] font-medium text-gray-500 text-center md:w-2/3 lg:w-[75%] leading-7 mx-auto z-10">
          Leading mobile app development agency in Florida creating custom
          solutions for businesses across industries. Local expertise with
          global standards.
        </p>

        <section className="w-full mt-5 z-10">
          <Link
            href={`/contact-us`}
            className="max-w-[260px] bg-[#F40E00] hover:bg-black h-[56px] rounded-[9px] text-center flex items-center justify-center text-lg font-bold text-white mx-auto z-10"
          >
            Get a Free Quote
          </Link>
        </section>

        <div className="h-[609px] w-full flex justify-center relative items-end mt-10">
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
              src={"/locations/mobile-app-developer/hero-mockup.png"}
              width={844}
              height={609}
              alt="Mobile App Developer in Florida showcasing responsive iOS/Android application with intuitive UI"
              className="mx-auto h-full object-contain z-10 relative -bottom-4"
            />
          </motion.div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
