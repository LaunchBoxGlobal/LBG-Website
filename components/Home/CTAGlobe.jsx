"use client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function CTAGlobe() {
  return (
    <section className="padding-x py-12">
    <div className="flex flex-col h-[500px] lg:flex-row items-center pt-20 justify-between bg-[#F9F9F9] rounded-3xl  relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/dot-grid.png')] opacity-20 pointer-events-none"></div>
      <div className="relative z-10 flex-1 flex flex-col items-start justify-center text-left">
        {/* <div className="relative mb-8">
          <div className="absolute left-0 top-1/2 w-[120px] h-[2px] bg-red-500"></div>
          <div className="ml-[120px] w-[60px] h-[40px] bg-white rounded-md shadow-md border border-gray-200 flex items-center justify-center">
            <div className="w-[8px] h-[8px] bg-red-500 rounded-full"></div>
          </div>
        </div> */}

        <div className="p-12" >
        <h2 className="text-3xl lg:text-5xl text-nowrap font-bold text-gray-900 leading-snug">
          Behind The Code And <br /> Creativity: Our Brand Story
        </h2>
        <p className="text-gray-600 text-lg mt-4 leading-relaxed ">
          At LaunchBox Global, your creative imagination meets expert execution.
          We gathered a team of experts to connect businesses with affordable
          global tech talent and provide reliable software solutions. For
          startups, small businesses, and non-tech founders, we simplify the
          development journey through expert guidance and a range of services.
        </p>
        </div>
      </div>
    <div className="relative flex h-[500px] justify-end w-[50%]">
      <motion.div
        className="absolute top-0 right-[-40%] h-auto w-[100%]"
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
          className="object-contain select-none pointer-events-none"
        />
      </motion.div>
    </div>
    </div>
    </section>
  );
}

export default CTAGlobe;
