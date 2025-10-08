import Image from "next/image";
import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <section className="w-full padding-x py-10 lg:pt-20">
      <div className="w-full rounded-[17px] px-4 py-10 text-center md:p-16 flex items-center justify-center flex-col gap-4 lg:gap-6 flex-wrap relative bg-[#5290F1] text-white overflow-hidden">
        <Image
          src={"/technology-cta-map-image.png"}
          alt="technology-cta-map-image"
          width={1330}
          height={677}
          className="absolute inset-0 z-0 object-cover"
        />
        <h3 className="text-[28px] md:text-[38px] lg:text-[50px] leading-[1.3] font-bold z-10">
          Launch Your App 2x Faster with Flutter
        </h3>
        <p className="text-xl w-[90%] lg:w-[70%] text-center">
          Our flutter app development services are designed to get your product
          to market faster without compromising on quality or performance.
        </p>
        <Link
          href={"/contact-us"}
          className="bg-[#fff] text-[#5290F1] hover:bg-black hover:text-white transition-all duration-300 text-sm md:text-lg font-bold px-5 py-4 rounded-[9px] lg:h-[66px] lg:w-[279px] flex items-center justify-center text-center z-10"
        >
          Schedule a Free Call Today
        </Link>
      </div>
    </section>
  );
};

export default CTA;
