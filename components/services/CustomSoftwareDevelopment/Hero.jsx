import React from "react";
import HeroAnimation from "./HeroAnimation";
import ContactButton from "@/components/Global/ContactButton";

const phrases = [
  "Advanced Infrastructure",
  "Scalable Architecture",
  "Optimized Performance",
  "Effortless Integrations",
];
const Hero = () => {
  return (
    <section className="w-full relative overflow-x-hidden">
      <div className="w-full relative pt-36 2xl:pt-52 padding-x flex flex-col items-center justify-start gap-5 lg:gap-3 bg-white overflow-hidden">
        <p className="text-xl font-bold red-text">Powering Innovation with</p>
        <h1 className="font-bold text-[34px] lg:text-[84px] 2xl:text-[100px] text-center tracking-normal leading-10 lg:leading-[84px] 2xl:leading-[104px] w-full">
          Custom Software Development that Delivers{" "}
          <span className="red-text">Excellence</span>
          {/* <span className="relative inline-flex align-baseline text-center min-w-fit">
            <FlipText phrases={phrases} />
          </span> */}
        </h1>

        {/* <span className="red-text">Deliver </span> */}
        <p className="text-base lg:text-[22px] 2xl:text-[26px] my-2 font-medium text-gray-500 text-center lg:w-[75%] leading-6 lg:leading-8">
          Smart software starts with functionality. As a Leading Software
          Development Company, We build solutions that integrate seamlessly,
          scale effortlessly, and adapt with the agility your business demands.
        </p>
        <div className="flex items-center justify-center gap-4 mt-1">
          <ContactButton text={"Get A Free Consultation"} />
        </div>
        <HeroAnimation />
      </div>
    </section>
  );
};

export default Hero;
