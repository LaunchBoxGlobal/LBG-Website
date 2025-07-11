import AnimatedText from "@/components/StaffAugmentation/AnimatedText";
import Link from "next/link";
import React from "react";
import HeroAnimation from "./HeroAnimation";

const Hero = () => {
  return (
    <section className="w-full relative overflow-hidden bg-white min-h-[100vh]">
      <section className="w-full relative pt-36 2xl:pt-52 padding-x flex flex-col items-center justify-start gap-5 lg:gap-3 z-10">
        <AnimatedText direction="left">
          <h1 className="font-extrabold text-[8.5vw] md:text-[5.5vw] lg:text-[70px] xl:text-[70px] text-center tracking-normal leading-[1] w-full z-10 flex flex-col items-center gap-4">
            <span>Trusted Web Development Company In</span>{" "}
            <span className="red-bg block py-4 px-10 text-white rounded-[17px]">
              New Jersey
            </span>
          </h1>
        </AnimatedText>
        <AnimatedText direction="right">
          <p className="text-base md:text-lg lg:text-[22px] my-2 2xl:text-[26px] font-medium text-gray-500 text-center md:w-2/3 lg:w-[75%] leading-7 mx-auto z-10">
            Collaborate with a trusted web development company in New Jersey for
            custom websites and web applications.
          </p>
        </AnimatedText>
        <AnimatedText>
          <section className="w-full mt-5 z-10">
            <Link
              href={`/contact-us`}
              className="max-w-[260px] bg-[#F40E00] hover:bg-black h-[56px] rounded-[9px] text-center flex items-center justify-center text-lg font-bold text-white mx-auto z-10"
            >
              Connect With Us
            </Link>
          </section>
        </AnimatedText>
      </section>

      <HeroAnimation />
    </section>
  );
};

export default Hero;
