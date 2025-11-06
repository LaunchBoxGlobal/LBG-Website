import React from "react";
import { FaCheck } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="w-full relative pb-20 overflow-x-hidden pt-28 md:pt-36 2xl:pt-48 padding-x">
      <div className="w-full flex flex-col items-center text-center gap-6 overflow-hidden">

        {/* ✅ Heading */}
        <h1 className="font-bold text-[9vw] sm:text-[7vw] md:text-[5vw] lg:text-[4.5vw] leading-[1.1] tracking-tight">
          The Ultimate Startup Guide to Building a{" "}
          <span className="text-[#f40e00]">Mobile App</span>
        </h1>

        {/* ✅ Subtitle */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 md:w-4/5 lg:w-3/5 leading-relaxed">
          We turned a million-dollar process into a step-by-step guide. This ebook is your complete mobile app development guide created by an experienced custom mobile app development company. Designed for startups and founders, it simplifies every stage of the journey.
        </p>

        {/* ✅ Form */}
        <div className="flex flex-col items-center w-full mt-4 gap-4">
          <div className="relative bg-white shadow-xl p-2 w-full max-w-md rounded-full">
            <input
              placeholder="Enter Your Email"
              className="pl-4 pr-32 py-2 w-full rounded-full text-sm sm:text-base outline-none text-gray-600"
            />
            <button className="bg-[#f40e00] text-white px-5 sm:px-6 py-2 rounded-full absolute right-2 top-1/2 -translate-y-1/2 text-xs sm:text-sm font-medium">
              Take the First Step
            </button>
          </div>

          {/* ✅ Trust message */}
          <span className="text-xs sm:text-sm md:text-base flex items-center justify-center text-gray-700 opacity-85 px-5">
            <FaCheck className="bg-[#f40e00] text-white rounded-full p-1 mr-2 text-xs sm:text-sm" />
            It's <span className="text-[#f40e00] mx-1 cursor-pointer hover:underline">100% free</span> and we will never send more than one email per month
          </span>
        </div>

      </div>
    </section>
  );
};

export default Hero;
