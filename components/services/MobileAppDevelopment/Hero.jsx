import ContactButton from "@/components/Global/ContactButton";
import Image from "next/image";
import React from "react";
import HeroImageSlider from "./HeroImageSlider";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full relative pt-36 2xl:pt-52 flex flex-col items-center justify-start gap-5 lg:gap-5 mb-40 bg-white overflow-hidden padding-x">
      <h1 className="font-bold text-[34px] lg:text-[64px] 2xl:text-[100px] text-center tracking-normal lg:leading-[64px] w-[100%]">
        Reliable Mobile App Development Company for{" "}
        <span className="red-text">Your Business</span>
      </h1>
      <p className="text-base lg:text-[22px] 2xl:text-[26px] font-medium text-gray-500 text-center lg:w-[70%] leading-8">
        Mobile app development services that build apps for your needs. Tested
        on real devices, fixed after launch, and designed to help startups and
        businesses grow.
      </p>
      <div className="flex items-center justify-center gap-4 mt-1 mb-8">
        <Link
          href={"/contact-us"}
          className={`bg-[#F40E00] text-white px-5 lg:px-7 py-4 md:py-5 2xl:py-8 font-bold rounded-xl flex items-center justify-center gap-2 text-sm lg:text-[18px] 2xl:text-[25px] hover:bg-[#000] transition-all duration-300 border border-black red-btn-shadow`}
        >
          Get A Free Consultation
        </Link>
      </div>
      <HeroImageSlider />
    </section>
  );
};

export default Hero;
