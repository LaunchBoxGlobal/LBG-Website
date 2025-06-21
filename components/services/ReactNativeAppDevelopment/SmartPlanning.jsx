"use client";
import React, { useState } from "react";
import AgileWorkflow from "./AgileWorkflow";
import { SMART_PLANNING } from "@/constants/mobile-app-development/SmartPlanning";
import { MOBILE_APP_WATERFALL_WORKFLOW } from "@/constants/mobile-app-development/MobileAppWaterfall";
import { MOBILE_APP_RECOMMENDED_WORKFLOW } from "@/constants/mobile-app-development/MobileAppRecommendedWorkflow";

const SmartPlanning = () => {
  const [activeTab, setActiveTab] = useState("recommended");

  return (
    <section className="w-full padding-x py-10 lg:py-20 relative overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading w-full">
          Our Step-by-Step Process to Develop React Native{" "}
          <span className="blueText"> Apps Right</span>
        </h2>
        <p className="section-paragraph lg:w-[85%]">
          We follow a clear path to build your React Native app, from idea to
          launch. No guesswork, just smart planning and careful building at
          every step.
        </p>
      </section>

      <div className="w-full flex justify-center mt-10">
        <div className="w-full md:w-[413px] h-[56px] border rounded-full flex items-center justify-between p-1">
          <button
            type="button"
            name="agile methodology button"
            onClick={() => setActiveTab("agile")}
            className={`uppercase text-sm lg:text-lg font-semibold px-3.5 h-full rounded-full ${
              activeTab === "agile"
                ? "bg-[#00A7D4] text-white"
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
                ? "bg-[#00A7D4] text-white"
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
                ? "bg-[#00A7D4] text-white"
                : "bg-white text-gray-500"
            }`}
          >
            Waterfall
          </button>
        </div>
      </div>

      {activeTab === "agile" && <AgileWorkflow workflow={SMART_PLANNING} />}
      {activeTab === "recommended" && (
        <AgileWorkflow workflow={MOBILE_APP_RECOMMENDED_WORKFLOW} />
      )}
      {activeTab === "waterfall" && (
        <AgileWorkflow workflow={MOBILE_APP_WATERFALL_WORKFLOW} />
      )}
    </section>
  );
};

export default SmartPlanning;
