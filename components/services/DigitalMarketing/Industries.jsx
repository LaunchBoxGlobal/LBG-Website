"use client";
import React from "react";
import IndustriesSwiper from "@/components/Common/IndustriesSwiper";
import { DIGITAL_MARKETING_INDUSTRIES } from "@/constants/digital-marketing/DigitalMarketingIndustries";

const Industries = () => {
  return (
    <section className="w-full padding-x py-10 lg:py-20 relative overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading">
          Digital Marketing Services that Deliver{" "}
          <span className="red-text"> Real Results</span>
        </h2>
        <p className="section-paragraph lg:w-[93%]">
          Get more customers with our digital marketing services. We boost your
          online presence using SEO, ads, and social media. Grow your business
          with strategies that work. Let’s get started!
        </p>
      </section>

      <IndustriesSwiper industries={DIGITAL_MARKETING_INDUSTRIES} />
    </section>
  );
};

export default Industries;
