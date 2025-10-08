import React from "react";
import {
  CUSTOM_SOFTWARE_AGILE_WORKFLOW,
  CUSTOM_SOFTWARE_RECOMMENDED_WORKFLOW,
  CUSTOM_SOFTWARE_WATERFALL_WORKFLOW,
} from "@/constants/custom-software-development/CustomSoftwareSmartPlanning";
import NewWorkflow from "@/components/Common/NewWorkflow";

const SmartPlanning = () => {
  return (
    <section className="w-full padding-x py-10 lg:py-20 relative overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading w-full">
          Our Custom Software{" "}
          <span className="red-text">Development Process</span>
        </h2>
        <p className="section-paragraph lg:w-[85%]">
          Your project is unique, so we adapt our software development services
          to match your goals and needs. You get open communication,
          explanations in simple language, and guidance through each step so you
          always know what’s happening.
        </p>
      </section>

      <NewWorkflow
        agileProcess={CUSTOM_SOFTWARE_AGILE_WORKFLOW}
        recommendedProcess={CUSTOM_SOFTWARE_RECOMMENDED_WORKFLOW}
        waterfallProcess={CUSTOM_SOFTWARE_WATERFALL_WORKFLOW}
      />
    </section>
  );
};

export default SmartPlanning;
