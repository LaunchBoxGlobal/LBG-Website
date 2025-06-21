"use client";
import React from "react";
import IndustriesSwiper from "@/components/Common/IndustriesSwiper";
import { BRANDING_AND_DESIGN_INDUSTRIES } from "@/constants/branding-and-design/BrandingAndDesignIndustries";

const Industries = () => {
  return (
    <section className="w-full padding-x py-10 lg:py-20 relative overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading">
          Empowering Brands Across <span className="red-text"> Industries</span>
        </h2>
        <p className="section-paragraph lg:w-[93%]">
          We work with businesses from diverse industries, offering custom
          solutions that speak to the specific challenges and opportunities each
          sector faces. From tech to healthcare, we bring design and branding
          strategies that elevate your brand’s impact and success.
        </p>
      </section>

      <IndustriesSwiper industries={BRANDING_AND_DESIGN_INDUSTRIES} />
    </section>
  );
};

export default Industries;
