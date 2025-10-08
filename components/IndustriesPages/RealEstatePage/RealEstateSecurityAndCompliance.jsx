import React from "react";
import { REAL_ESTATE_SECURITY_AND_COMPLIANCE } from "@/constants/industries/real-estate-content/real-estate-security-and-compliance";
import RealEstateSecurityAndComplianceSlider from "./RealEstateSecurityAndComplianceSlider";

const RealEstateSecurityAndCompliance = () => {
  return (
    <section className="w-full py-20 midlg:py-20 bg-[#fff] padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading lg:w-[90%] mx-auto">
          Security & Compliance for Real Estate{" "}
          <span className="red-text">Platforms</span>
        </h2>

        <p className="section-paragraph lg:w-[90%] mx-auto">
          Security and compliance aren’t just checkboxes, they’re what keep your
          real estate platform trustworthy. We manage the complex parts of data
          protection and regulations, so you can focus on growth while knowing
          your users and business are fully protected.
        </p>
      </section>

      <RealEstateSecurityAndComplianceSlider
        content={REAL_ESTATE_SECURITY_AND_COMPLIANCE}
      />
    </section>
  );
};

export default RealEstateSecurityAndCompliance;
