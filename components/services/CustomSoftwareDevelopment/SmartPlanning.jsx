"use client";
import React, { useState } from "react";
import AgileWorkflow from "./AgileWorkflow";
import RecommendedWorkflow from "./RecommendedWorkflow";
import WaterfallWorkflow from "./WaterfallWorkflow";
import { CUSTOM_SOFTWARE_SMART_PLANNING } from "@/constants/custom-software-development/CustomSoftwareSmartPlanning";
import { RECOMMENDED_WORKFLOW } from "@/constants/custom-software-development/RecommendedWorkflow";
import { WATERFALL_WORKFLOW } from "@/constants/custom-software-development/WaterfallWorkflow";
import NewWorkflow from "@/components/Common/NewWorkflow";
import {
  SOFTWARE_DEV_FLORIDA_AGILE_PROCESS,
  SOFTWARE_DEV_FLORIDA_RECOMMENDED_PROCESS,
  SOFTWARE_DEV_FLORIDA_WATERFALL_PROCESS,
} from "@/constants/locations/software-dev-company-florida/software-dev-florida-process";

const SmartPlanning = () => {
  const [activeTab, setActiveTab] = useState("recommended");

  return (
    <section className="w-full padding-x py-10 lg:py-20 relative overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading w-full">
          Choosing the Right Path to <span className="red-text">Success</span>
        </h2>
        <p className="section-paragraph lg:w-[85%]">
          Successful custom software development solutions start with the right
          approach. Agile keeps things flexible, Waterfall provides a clear
          roadmap, and our Functionality-First Approach ensures every feature is
          built with a clear purpose and maximum impact.
        </p>
      </section>

      <NewWorkflow
        agileProcess={SOFTWARE_DEV_FLORIDA_AGILE_PROCESS}
        recommendedProcess={SOFTWARE_DEV_FLORIDA_RECOMMENDED_PROCESS}
        waterfallProcess={SOFTWARE_DEV_FLORIDA_WATERFALL_PROCESS}
      />

      {/* <div className="w-full flex justify-center mt-10">
        <div className="w-full md:w-[413px] h-[56px] border rounded-full flex items-center justify-between p-1">
          <button
            type="button"
            name="agile methodology button"
            onClick={() => setActiveTab("agile")}
            className={`uppercase text-sm lg:text-lg font-semibold px-3.5 h-full rounded-full ${
              activeTab === "agile"
                ? "bg-[#F40E00] text-white"
                : "bg-white text-gray-500"
            }`}
          >
            AGILE
          </button>
          <button
            type="button"
            name="recommended methodology button"
            onClick={() => setActiveTab("recommended")}
            className={`uppercase text-sm lg:text-lg font-semibold px-3.5 h-full rounded-full ${
              activeTab === "recommended"
                ? "bg-[#F40E00] text-white"
                : "bg-white text-gray-500"
            }`}
          >
            recommended
          </button>
          <button
            type="button"
            name="waterfall methodology button"
            onClick={() => setActiveTab("waterfall")}
            className={`uppercase text-sm lg:text-lg font-semibold px-3.5 h-full rounded-full ${
              activeTab === "waterfall"
                ? "bg-[#F40E00] text-white"
                : "bg-white text-gray-500"
            }`}
          >
            Waterfall
          </button>
        </div>
      </div>

      {activeTab === "agile" && (
        <AgileWorkflow workflow={CUSTOM_SOFTWARE_SMART_PLANNING} />
      )}
      {activeTab === "recommended" && (
        <RecommendedWorkflow workflow={RECOMMENDED_WORKFLOW} />
      )}
      {activeTab === "waterfall" && (
        <WaterfallWorkflow workflow={WATERFALL_WORKFLOW} />
      )} */}
    </section>
  );
};

export default SmartPlanning;
