import React from "react";
import Link from "next/link";
import HeroAnimation from "./HeroAnimation";
import PageBreadcrumb from "@/components/Common/PageBreadcrumb";

const Hero = () => {
  return (
    <section className="w-full relative overflow-x-hidden pt-36 2xl:pt-52 padding-x">
      <section className="w-full relative pt-10 flex flex-col items-center justify-start gap-5 lg:gap-3 bg-white overflow-hidden">
        <h1 className="font-bold text-[8.5vw] md:text-[5.5vw] text-center tracking-normal leading-[1.1] w-full">
          Swift App Development Services for{" "}
          <span className="orangeText">iOS Success</span>
        </h1>
        <p className="text-base md:text-lg lg:text-[22px] my-2 2xl:text-[26px] font-medium text-gray-500 text-center md:w-2/3 lg:w-[70%] leading-7">
          We engineer high-performance iOS apps using Swift app development
          services that optimize process, enhance engagement, and deliver
          reliable operation with your business needs.
        </p>
        <div className="flex items-center justify-center gap-4 mt-1 mb-8">
          <Link
            href={"/contact-us"}
            aria-label="A link to contact us page"
            className="orangeBg text-white px-5 lg:px-10 py-4 lg:py-6 2xl:py-8 font-bold rounded-xl flex items-center justify-center gap-2 text-sm lg:text-[22px] 2xl:text-[25px] hover:bg-[#000] transition-all duration-300"
          >
            Get a Free Consultation
          </Link>
        </div>
        <HeroAnimation />
      </section>
    </section>
  );
};

export default Hero;
