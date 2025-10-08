import React from "react";
import NewWorkflow from "@/components/Common/NewWorkflow";
import {
  WEB_APP_DEV_AGILE_WORKFLOW,
  WEB_APP_DEV_RECOMMENDED_WORKFLOW,
  WEB_APP_DEV_WATERFALL_WORKFLOW,
} from "@/constants/web-app-dvelopment/web-app-development-workflow";

const SmartPlanning = () => {
  return (
    <section className="w-full padding-x py-10 lg:py-20 relative overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading w-full">
          Powered by a Well-Defined <span className="red-text">Workflow</span>
        </h2>
        <p className="section-paragraph lg:w-[85%]">
          Your project is unique, so we adapt our approach to match your goals
          and needs. You get open communication, explanation in simple language,
          and guidance through each step so you always know what’s happening.
        </p>
      </section>
      <NewWorkflow
        agileProcess={WEB_APP_DEV_AGILE_WORKFLOW}
        recommendedProcess={WEB_APP_DEV_RECOMMENDED_WORKFLOW}
        waterfallProcess={WEB_APP_DEV_WATERFALL_WORKFLOW}
      />
    </section>
  );
};

export default SmartPlanning;
