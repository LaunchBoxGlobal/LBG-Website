"use client";
import { WEB_APP_SMART_PLANNING } from "@/constants/web-app-dvelopment/WebAppSmartPlanning";
import Image from "next/image";
import React, { useState } from "react";
import AgileWorkflow from "../CustomSoftwareDevelopment/AgileWorkflow";
import RecommendedWorkflow from "../CustomSoftwareDevelopment/RecommendedWorkflow";
import WaterfallWorkflow from "../CustomSoftwareDevelopment/WaterfallWorkflow";
import { WEB_DEVELOPMENT_RECOMMENDED_WORKFLOW } from "@/constants/web-app-dvelopment/WebAppRecommendedWorkflow";
import { WEB_DEVELOPMENT_WATERFALL_WORKFLOW } from "@/constants/web-app-dvelopment/WebAppWaterfallWorkflow";
import NewWorkflow from "@/components/Common/NewWorkflow";
import {
  WEB_DEV_NEW_JERSEY_AGILE_PROCESS,
  WEB_DEV_NEW_JERSEY_RECOMMENDED_PROCESS,
  WEB_DEV_NEW_JERSEY_WATERFALL_PROCESS,
} from "@/constants/locations/web-dev-company-new-jersey/web-dev-company-new-jersey-process";

const SmartPlanning = () => {
  const [activeTab, setActiveTab] = useState("recommended");
  return (
    <section className="w-full padding-x py-10 lg:py-20 relative overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading w-full">
          Powered by a Well-Defined <span className="red-text">Workflow</span>
        </h2>
        <p className="section-paragraph lg:w-[85%]">
          Struggling with slow, hard-to-use web apps? Our web app development
          services create fast, reliable, and easy-to-navigate apps. As a
          dependable web application development agency, we focus on solving
          real problems and delivering results that matter.
        </p>
      </section>
      <NewWorkflow
        agileProcess={WEB_DEV_NEW_JERSEY_AGILE_PROCESS}
        recommendedProcess={WEB_DEV_NEW_JERSEY_RECOMMENDED_PROCESS}
        waterfallProcess={WEB_DEV_NEW_JERSEY_WATERFALL_PROCESS}
      />

      {/* <div className="w-full flex justify-center mt-10">
        <div className="w-full md:w-[413px] h-[56px] border rounded-full flex items-center justify-between p-1">
          <button
            type="button"
            name="agile development methoddology button"
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
            name="recommended development methodology button"
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
        <AgileWorkflow workflow={WEB_APP_SMART_PLANNING} />
      )}
      {activeTab === "recommended" && (
        <RecommendedWorkflow workflow={WEB_DEVELOPMENT_RECOMMENDED_WORKFLOW} />
      )}
      {activeTab === "waterfall" && (
        <WaterfallWorkflow workflow={WEB_DEVELOPMENT_WATERFALL_WORKFLOW} />
      )} */}
    </section>
  );
};

export default SmartPlanning;
