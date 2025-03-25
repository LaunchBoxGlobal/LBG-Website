"use client";
import { SMART_PLANNING } from "@/constants/mobile-app-development/SmartPlanning";
import React, { useState } from "react";
import AgileWorkflow from "../CustomSoftwareDevelopment/AgileWorkflow";
import RecommendedWorkflow from "../CustomSoftwareDevelopment/RecommendedWorkflow";
import WaterfallWorkflow from "../CustomSoftwareDevelopment/WaterfallWorkflow";
import { MOBILE_APP_WATERFALL_WORKFLOW } from "@/constants/mobile-app-development/MobileAppWaterfall";
import { MOBILE_APP_RECOMMENDED_WORKFLOW } from "@/constants/mobile-app-development/MobileAppRecommendedWorkflow";

const SmartPlanning = () => {
  const [activeTab, setActiveTab] = useState("recommended");

  return (
    <section className="w-full padding-x py-10 lg:py-20 relative overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading">
          9 Out of 10 Successful Apps Begin with{" "}
          <span className="red-text">Smart Planning</span>
        </h2>
        <p className="section-paragraph lg:w-[90%]">
          Our mobile app development company uses a step-by-step approach to
          create apps that work. Regular updates, quick fixes, and real-user
          testing ensure your app runs smoothly and delivers results.
        </p>
      </section>

      <div className="w-full flex justify-center mt-10">
        <div className="w-full lg:w-[413px] h-[56px] border rounded-full flex items-center justify-between p-1">
          <button
            type="button"
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

      {activeTab === "agile" && <AgileWorkflow workflow={SMART_PLANNING} />}
      {activeTab === "recommended" && (
        <RecommendedWorkflow workflow={MOBILE_APP_RECOMMENDED_WORKFLOW} />
      )}
      {activeTab === "waterfall" && (
        <WaterfallWorkflow workflow={MOBILE_APP_WATERFALL_WORKFLOW} />
      )}
    </section>
  );
};

export default SmartPlanning;
