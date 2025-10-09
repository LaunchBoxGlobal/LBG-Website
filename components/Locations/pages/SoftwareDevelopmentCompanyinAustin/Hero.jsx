"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion, useInView } from "framer-motion";

function Hero() {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });
  return (
    <section className="relative min-h-screen pb-8 md:pb-0">
      <div className="pt-32 max-w-screen-xl mx-auto relative z-30">
        <h1 className="font-extrabold text-[8.5vw] md:text-[5.5vw] lg:text-[70px] text-center tracking-normal leading-[1.1] w-full flex flex-col items-center gap-4">
          <span>Your Trusted Custom Software Development Company In</span>
          <span className="bg-[#F40E00] block py-4 px-10 text-white rounded-[17px]">
            Austin
          </span>
        </h1>
        <p className="text-base px-2 mt-4 md:text-lg lg:text-[22px] 2xl:text-[26px] font-medium text-gray-600 text-center md:w-2/3 lg:w-[75%] leading-7 mx-auto">
          As a leading custom software development company in Austin, we create
          personalized, smart solutions that help startups improve processes,
          grow performance, and achieve flexible growth with tech made just for
          them.
        </p>

        {/* CTA */}
        <div className="w-full mt-5 flex justify-center">
          <Link
            href="/contact-us"
            className="max-w-[260px] bg-[#F40E00] px-12 hover:bg-black h-[56px] rounded-[9px] text-center flex items-center justify-center text-lg font-bold text-white transition-all duration-300"
          >
            Start Your Journey
          </Link>
        </div>
      </div>
      <div className="">
        <Image
          src={"/locations/software-dev-company-austin/gradient.png"}
          width={800}
          height={1000}
          className="absolute top-0 w-full md:block hidden"
          alt="Gradient background"
        />
        <Image
          src={"/locations/software-dev-company-austin/grids.png"}
          width={800}
          height={1000}
          className="absolute top-0 w-full"
          alt="Gradient background"
        />
        <div className="relative mt-10">
          {/* Hero2 image - pops up after hero animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              delay: 1.2, 
              duration: 0.6, 
              ease: [0.34, 1.56, 0.64, 1] // Bouncy easing for popup effect
            }}
            className="absolute -top-6 left-[40%] translate-x-[-50%] z-30"
          >
            {/* Continuous floating animation after popup */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.8 // Start floating after popup completes
              }}
            >
              <Image
                src={"/locations/software-dev-company-austin/hero2.png"}
                width={300}
                height={300}
                alt="Overlay mobile"
                className="drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Hero image - slides up from bottom */}
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Image
              src="/locations/software-dev-company-austin/hero.png"
              width={1000}
              height={1000}
              alt="Austin city background"
              className="object-cover relative z-0 mx-auto w-[70%] mt-20 -mb-12"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;