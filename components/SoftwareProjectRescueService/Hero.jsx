import React from "react";
import ContactButton from "@/components/Global/ContactButton";
import HeroAnimation from "./HeroAnimation";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full relative pt-36 2xl:pt-52 padding-x">
      <section className="w-full relative pt-10 flex flex-col items-center justify-start gap-5 lg:gap-3 bg-white">
        <h1 className="red-text text-[22px] font-semibold">
          Software Project Rescue Service
        </h1>
        <h2 className="font-bold text-[8.5vw] md:text-[5.5vw] text-center tracking-tight leading-[1] w-full">
          Built a Proud Creation? Let’s Make it{" "}
          <span className="red-text">Truly Shine</span>
        </h2>

        <p className="text-base md:text-lg lg:text-[22px] my-2 2xl:text-[26px] font-medium text-gray-500 text-center md:w-2/3 lg:w-[70%] leading-[1.1] mt-4">
          Built something cool with AI tools like{" "}
          <Link
            href={`https://cursor.com/`}
            target="_blank"
            className="underline"
          >
            Cursor
          </Link>
          ,{" "}
          <Link
            href={`https://bolt.new/`}
            target="_blank"
            className="underline"
          >
            Bolt.new
          </Link>
          ,{" "}
          <Link
            href={`https://grok.com/`}
            target="_blank"
            className="underline"
          >
            Grok
          </Link>
          , or{" "}
          <Link
            href={`https://lovable.dev/`}
            target="_blank"
            className="underline"
          >
            Lovable
          </Link>
          ? Great start. We help you refine and fix your half‑built prototypes
          through our project recovery services.
        </p>
        <div className="flex items-center justify-center gap-4 mt-1 mb-10">
          <ContactButton text={"Get Professional Support"} />
        </div>

        <HeroAnimation />
      </section>
    </section>
  );
};

export default Hero;
