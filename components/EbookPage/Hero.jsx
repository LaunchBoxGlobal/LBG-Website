import React from "react";
import { CiCircleCheck } from "react-icons/ci";
import ContactButton from "@/components/Global/ContactButton";
import { FaCheck } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="w-full relative overflow-x-hidden pt-36 2xl:pt-52 padding-x">
      <div className="w-full relative pt-10 flex flex-col items-center justify-start gap-5 lg:gap-3 bg-white overflow-hidden">
        <h1 className="font-bold text-[8.5vw] md:text-[5.5vw] text-center tracking-normal leading-[1] w-full">
          The Complete Startup Guide to Building{" "}
          <span className="red-text">An App</span>
        </h1>

        <p className="text-base md:text-lg lg:text-[22px] my-2 2xl:text-[26px] font-medium text-gray-500 text-center md:w-2/3 lg:w-[70%] leading-8">
          Learn how to turn your app idea into a market-ready product — from concept validation to post-launch success. This free eBook gives you the frameworks, insights, and checklists used by real startups.
        </p>
        <div className="flex flex-col items-center justify-center w-full gap-4 mt-1 ">
          <div className="relative bg-white shadow-xl  p-3 w-[40%] rounded-full" >
            <input placeholder="Enter Your Email" className="pl-2 py-2 rounded-full text-xs outline-none text-gray-500" />
            <button className="bg-[#f40e00] text-white px-8 py-2 rounded-full absolute right-4 top-2" >Subscribe</button>
          </div>
          <span className="text-base flex items-center opacity-85"><span><FaCheck  className="bg-[#f40e00] rounded-full p-1 text-white mr-3" /></span> It's <span className="text-[#f40e00] mx-1 hover:underline cursor-pointer">100% free</span> and we will never send more than one email per month</span>
        </div>
      </div>
        <div>
            
        </div>
    </section>
  );
};

export default Hero;
