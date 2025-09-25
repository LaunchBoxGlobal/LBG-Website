import PortfolioParallexCards from "@/components/Common/PortfolioParallexCards";
import { ECOMMERCE_INDUSTRIES_CASE_STUDIES } from "@/constants/industries/ecommerce-industry-content/ecommerce-industries-case-studies";
import React from "react";

const CaseStudies = () => {
  return (
    <section className="w-full py-20 midlg:py-32 bg-[#fff]">
      <section className="w-full flex flex-col items-center justify-center gap-6 padding-x text-center">
        <h2 className="section-heading lg:w-[90%] mx-auto">
          Proven Ecommerce <span className="red-text">Success Stories</span>
        </h2>

        <p className="section-paragraph lg:w-[90%] mx-auto">
          You don’t need promises, you need proof. Our case studies show how
          startups overcame Ecommerce challenges and started growing with smart
          ecommerce development solutions. These stories give you a clear
          picture of the ecommerce development stores to enhance customer
          journeys when the right strategy is in place.
        </p>
      </section>

      <PortfolioParallexCards projects={ECOMMERCE_INDUSTRIES_CASE_STUDIES} />
    </section>
  );
};

export default CaseStudies;
