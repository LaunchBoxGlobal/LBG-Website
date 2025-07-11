"use client";
import React from "react";
import { TextMaskEffect } from "./ScrollOpacityText";
import "./Styles.css";
import Character from "@/components/Common/ServicesAboutSection";

const paragraph =
  "Need a reliable team to handle your web projects? We are a leading web application development agency dedicated to empowering businesses worldwide. Our web application development services expertise enables us to develop effective solutions for your challenges. We care about making apps people actually enjoy using. By partnering with leading web app development companies, we create solutions that help businesses grow. What makes us different? We listen with concentration, then build with the right technology. Our team brings worldwide experience to every project and always stays focused on delivering more than you expect.";

const About = () => {
  return (
    <section className="w-full padding-x py-20 lg:py-32 flex flex-col items-center gap-6">
      <h2
        className={
          "text-xl lg:text-[25px] text-[#f40e00] font-semibold text-center"
        }
      >
        Launchbox Global: Building Digital Futures
      </h2>
      <Character value={paragraph} />
      {/* <TextMaskEffect /> */}
    </section>
  );
};

export default About;
