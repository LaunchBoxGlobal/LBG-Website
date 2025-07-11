import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full relative overflow-hidden bg-white min-h-[100vh]">
      <section className="w-full relative pt-36 2xl:pt-52 padding-x flex flex-col items-center justify-start gap-5 lg:gap-3 overflow-hidden z-10">
        <h1 className="font-extrabold text-[8.5vw] md:text-[5.5vw] lg:text-[70px] xl:text-[70px] text-center tracking-normal leading-[1] w-full z-10 lg:w-[90%] mx-auto">
          <span>Grow Your Team with Offshore</span>{" "}
          <span className="red-text">Software Development</span>
        </h1>

        <p className="text-base md:text-lg lg:text-[22px] my-2 2xl:text-[26px] font-medium text-gray-500 text-center md:w-2/3 lg:w-[75%] leading-7 mx-auto z-10">
          Access top-tier global tech talent to accelerate development, cut
          costs, and deliver quality products all from your ideal time zone.
        </p>

        <section className="mx-auto mt-5 z-10">
          <Link
            href={`/contact-us`}
            className=" bg-[#F40E00] hover:bg-black px-6 h-[56px] rounded-[9px] text-center flex items-center justify-center text-lg font-bold text-white mx-auto z-10"
          >
            Claim Your Free Strategy Call
          </Link>
        </section>

        <Image
          src={"/off-shore/hero-image.webp"}
          width={1541}
          height={260}
          alt="hero-image"
          className="w-full mx-auto object-contain z-10"
        />
        {/*  */}

        <Image
          src={"/off-shore/offshore-hero-right-image.webp"}
          width={292}
          height={603}
          alt="hero-image"
          className="absolute -right-16 top-20 w-[292px] h-[603px] object-contain z-0 hidden lg:block"
        />
        <Image
          src={"/off-shore/offshore-hero-left-image.webp"}
          width={292}
          height={603}
          alt="hero-image"
          className="absolute -left-16 top-20 w-[292px] h-[603px] object-contain z-0 hidden lg:block"
        />
      </section>
    </section>
  );
};

export default Hero;
