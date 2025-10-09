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
        className="w-full relative pt-28 padding-x flex flex-col items-center justify-start gap-5 lg:gap-3 overflow-hidden z-20"
      >
 
        <h1 className="font-extrabold text-[8.5vw] md:text-[5.5vw] lg:text-[70px] xl:text-[70px] text-center tracking-normal leading-[1] w-full z-20 flex flex-col items-center gap-4">
          <span>Your Trusted Custom Software Development Company In</span>
          <span className="red-bg block py-4 px-10 text-white rounded-[17px]">
            Austin
          </span>
        </h1>


        <p className="text-base z-20 md:text-lg lg:text-[22px] my-2 2xl:text-[26px] font-medium text-gray-500 text-center md:w-2/3 lg:w-[75%] leading-7 mx-auto">
          As a leading custom software development company in Austin, we create
          personalized, smart solutions that help startups improve processes,
          grow performance, and achieve flexible growth with tech made just for
          them.
        </p>

   
        <section className="w-full mt-5 z-20">
          <Link
            href={`/contact-us`}
            className="max-w-[260px] bg-[#F40E00] hover:bg-black h-[56px] rounded-[9px] text-center flex items-center justify-center text-lg font-bold text-white mx-auto z-10"
          >
            Start Your Journey
          </Link>
        </section>

        <div className="lg:h-[595px] w-full flex justify-center relative items-end mt-0">
          <motion.div
            initial={{ y: 600 }}
            animate={inView ? { y: 0 } : { y: 400 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="mx-auto relative"
          >
 
            <Image
              src="/locations/software-dev-company-austin/hero.png"
              width={4028}
              height={892}
              alt="Custom Software Development Company in Austin showcasing innovative digital solutions for startups"
              priority
              sizes="(max-width: 768px) 95vw, (max-width: 1400px) 80vw, 2028px"
              className="mx-auto scale-[2] h-full object-cover z-10 relative md:-bottom-80"
            />


            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 100 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{
                delay: 0.9,
                duration: 0.6,
                ease: "easeOut",
              }}
              className="absolute top-[40%] left-[40%] -translate-x-1/2 z-30"
            >
              <Image
                src="/locations/software-dev-company-austin/hero2.png"
                width={308}
                height={892}
                alt="Overlay image showcasing digital creativity and innovation"
                priority
                className="w-[280px] md:block hidden"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
