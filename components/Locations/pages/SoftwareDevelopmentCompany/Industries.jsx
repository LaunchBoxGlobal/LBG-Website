import React from "react";
import LocationIndustries from "../../LocationComponents/LocationIndustries";
import { SOFTWARE_DEV_COMPANY_FLORIDA_INDUSTRIES } from "@/constants/locations/software-dev-company-florida/software-dev-company-florida-industries";

const Industries = () => {
  return (
    <section className="w-full padding-x pb-10 lg:py-20 relative overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading w-full lg:w-[80%]">
          Industries We Serve in<span className="red-text"> Florida</span>
        </h2>
        <p className="section-paragraph lg:w-[80%]">
          Partner with Florida's leading software development experts. We
          deliver custom solutions for businesses across industries, combining
          local market knowledge with proven technical expertise to bring your
          digital vision to life efficiently.
        </p>
      </section>

      <LocationIndustries
        industries={SOFTWARE_DEV_COMPANY_FLORIDA_INDUSTRIES}
      />
    </section>
  );
};

export default Industries;
