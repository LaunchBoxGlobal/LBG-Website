"use client";
import React, { useState } from "react";
import AgileWorkflow from "./AgileWorkflow";
import RecommendedWorkflow from "./RecommendedWorkflow";
import WaterfallWorkflow from "./WaterfallWorkflow";
import { DIGITAL_MARKETING_AGILE_WORKFLOW } from "@/constants/digital-marketing/DigitalMarketingAgileWorkflow";
import { DIGITAL_MARKETING_RECOMMENDED_WORKFLOW } from "@/constants/digital-marketing/DigitalMarketingRecommendedWorkflow";
import { DIGITAL_MARKETING_WATERFALL_WORKFLOW } from "@/constants/digital-marketing/DigitalMarketingWaterfallWorkflow";

const Workflow = () => {
  const [activeTab, setActiveTab] = useState("recommended");

  return (
    <section className="w-full padding-x py-10 lg:py-20 relative overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading w-full">
          Boost Your Reach with Smart Digital{" "}
          <span className="red-text">Marketing Moves</span>
        </h2>
        <p className="section-paragraph lg:w-[85%]">
          Our digital marketing agency crafts tailored strategies to grow your
          brand online. From SEO to social media, we drive traffic, engagement,
          and results fast. Let’s get your business seen.
        </p>
      </section>

      <div className="w-full flex justify-center mt-10">
        {/* <div className="w-full md:w-[413px] h-[56px] border rounded-full flex items-center justify-between p-1">
          <button
            type="button"
            name="agile development process button"
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
            name="recommended development process button"
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
            name="waterfall development process button"
            onClick={() => setActiveTab("waterfall")}
            className={`uppercase text-sm lg:text-lg font-semibold px-3.5 h-full rounded-full ${
              activeTab === "waterfall"
                ? "bg-[#F40E00] text-white"
                : "bg-white text-gray-500"
            }`}
          >
            Waterfall
          </button>
        </div> */}
      </div>

      {/* {activeTab === "agile" && (
        <AgileWorkflow workflow={DIGITAL_MARKETING_AGILE_WORKFLOW} />
      )}
      {activeTab === "recommended" && (
        <RecommendedWorkflow
          workflow={DIGITAL_MARKETING_RECOMMENDED_WORKFLOW}
        />
      )} */}
      {/* {activeTab === "waterfall" && (
      )} */}
      <WaterfallWorkflow workflow={DIGITAL_MARKETING_WATERFALL_WORKFLOW} />
    </section>
  );
};

export default Workflow;
