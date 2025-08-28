import React from "react";
import NewWorkflow from "@/components/Common/NewWorkflow";
import {
  MOBILE_APP_DEVELOPMENT_AGILE_PROCESS,
  MOBILE_APP_DEVELOPMENT_RECOMMENDED_PROCESS,
  MOBILE_APP_DEVELOPMENT_WATERFALL_PROCESS,
} from "@/constants/mobile-app-development/mobile-app-development-process";

const SmartPlanning = () => {
  return (
    <section className="w-full padding-x py-10 lg:py-20 relative overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading">
          9 Out of 10 Successful Apps Begin with{" "}
          <span className="red-text">Smart Planning</span>
        </h2>
        <p className="section-paragraph lg:w-[90%]">
          Our mobile app development company uses a step-by-step approach to
          create apps that work. We are one of the top Android and iOS app
          development companies that offer​ regular updates, and real-user
          testing ensures your app runs smoothly and delivers results.
        </p>
      </section>

      <NewWorkflow
        agileProcess={MOBILE_APP_DEVELOPMENT_AGILE_PROCESS}
        recommendedProcess={MOBILE_APP_DEVELOPMENT_RECOMMENDED_PROCESS}
        waterfallProcess={MOBILE_APP_DEVELOPMENT_WATERFALL_PROCESS}
      />
    </section>
  );
};

export default SmartPlanning;
