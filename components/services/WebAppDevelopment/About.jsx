"use client";
import React from "react";
import { TextMaskEffect } from "./ScrollOpacityText";
import "./Styles.css";
import Character from "@/components/Common/ServicesAboutSection";

const paragraph =
  "We are a trusted web application service agency, building web apps that solve real problems. From startups to businesses, we create apps that are simple, reliable, and ready to grow. Our web app development services include clear planning, clean coding, and thorough testing. We stay to fix bugs, add features, and keep your app running well. Let’s build something that truly works for your business.";

const About = () => {
  return (
    <section className="w-full padding-x py-10 lg:pt-32 lg:pb-20 flex flex-col items-center gap-6">
      <h2
        className={
          "text-xl lg:text-[25px] text-[#f40e00] font-semibold text-center"
        }
      >
        Your Trusted Web App Development Services Partner
      </h2>
      <Character value={paragraph} />
      {/* <TextMaskEffect /> */}
    </section>
  );
};

export default About;
