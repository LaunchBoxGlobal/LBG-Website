import React from "react";
import Link from "next/link";
import HeroAnimation from "./HeroAnimation";
import PageBreadcrumb from "@/components/Common/PageBreadcrumb";

const Hero = () => {
  return (
    <section className="w-full relative overflow-hidden pt-36 2xl:pt-52 padding-x">
      <section className="w-full relative pt-10 flex flex-col items-center justify-start gap-5 lg:gap-3 bg-white overflow-hidden">
        <h1 className="font-bold text-[8.5vw] md:text-[5.5vw] text-center tracking-normal leading-[1] w-full">
          Ionic Experts for <span className="ionic-text">Smoother Apps</span>
        </h1>
        <p className="text-base md:text-lg lg:text-[22px] my-2 2xl:text-[26px] font-medium text-gray-500 text-center md:w-2/3 lg:w-[78%] leading-7">
          We develop cross-platform applications that deliver consistent
          performance across all devices. As an established Ionic company, we
          specialize in creating intuitive apps that users prefer.
        </p>
        <div className="flex items-center justify-center gap-4 mt-1 mb-8">
          <Link
            href={"/contact-us"}
            aria-label="A link to contact us page"
            className="ionic-button"
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
