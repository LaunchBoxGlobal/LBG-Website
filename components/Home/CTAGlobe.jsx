"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function CTAGlobe() {
  return (
    <section className=" padding-x  py-12">
      <div
        className="
          flex flex-col lg:flex-row 
          items-center justify-between 
          bg-[#F9F9F9] 
          rounded-3xl relative overflow-hidden
          md:h-auto lg:h-[500px] 
          pt-12 md:pt-16
        "
      >
        {/* Background grid */}
        <div className="absolute inset-0 bg-[url('/dot-grid.png')] opacity-20 pointer-events-none"></div>

        {/* Text Section */}
        <div className="relative z-10 flex-1 flex flex-col items-start justify-center text-left p-6 sm:p-10 md:p-12">
          <h2
            className="
              text-2xl md:text-nowrap sm:text-3xl md:text-4xl lg:text-5xl 
              font-bold text-gray-900 
              leading-snug mb-4 sm:mb-6
            "
          >
            Behind The Code And <br className="hidden sm:block" /> Creativity: Our Brand Story
          </h2>
          <p
            className="
              text-gray-600 
              text-base sm:text-lg 
              leading-relaxed 
            "
          >
            At LaunchBox Global, your creative imagination meets expert execution. 
            We gathered a team of experts to connect businesses with affordable global tech talent 
            and provide reliable software solutions. For startups, small businesses, and non-tech founders, 
            we simplify the development journey through expert guidance and a range of services.
          </p>
        </div>

        <div
          className="
            relative 
            w-full sm:w-[80%] md:w-[60%] lg:w-[50%] 
            h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px]
            md:flex hidden justify-center lg:justify-end mt-8 lg:mt-0
          "
        >
          <motion.div
            className="
              absolute 
              top-1/2 lg:top-0 
              right-[-25%]
              transform -translate-y-1/2 lg:translate-y-0
              w-[80%] sm:w-[70%] md:w-[80%] lg:w-[100%]
              max-w-[400px] sm:max-w-[500px] lg:max-w-none
            "
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 30,
            }}
            style={{ originX: "50%", originY: "50%" }}
          >
            <Image
              src="/home/globe-cta.png"
              alt="Globe"
              width={1000}
              height={1000}
              className="object-contain select-none pointer-events-none w-full h-auto"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CTAGlobe;
