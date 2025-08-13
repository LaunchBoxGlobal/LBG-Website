"use client";
import React from "react";
import { TextMaskEffect } from "./ScrollOpacityText";
import "./Styles.css";
import Character from "@/components/Common/ServicesAboutSection";
import Link from "next/link";

const paragraph =
  "We are one of the leading web app development companies that builds powerful digital solutions for all kinds of businesses. We combine technical expertise with clear communication. Instead of overpromising, we deliver exactly what you need according to your requirements. Our team understands your goals before crafting customized solutions. Whether you need smooth web APIs, scalable web applications, or straightforward web app development services, we’ve got you covered.";

const About = () => {
  return (
    <section className="w-full padding-x py-20 lg:py-32 flex flex-col items-center gap-6">
      <h2
        className={
          "text-xl lg:text-[25px] text-[#f40e00] font-semibold text-center"
        }
      >
        The People You’ll Work With
      </h2>
      <p className="text-[22px] lg:text-[2.8vw] text-center lg:leading-[56px] text-gray-400 tracking-tight">
        {paragraph}
      </p>
      {/* <Character value={paragraph} /> */}
      {/* <TextMaskEffect /> */}
      <div className="w-full flex justify-center mt-4">
        <Link
          href={"/contact-us"}
          className="bg-[#F40E00] text-white px-5 lg:px-6 py-4 lg:py-4 2xl:py-6 font-bold rounded-xl flex items-center justify-center gap-2 text-sm lg:text-[18px] 2xl:text-[25px] hover:bg-[#000] transition-all duration-300"
        >
          Share Your Idea – Let’s Talk
        </Link>
      </div>
    </section>
  );
};

export default About;
