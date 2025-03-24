"use client";
import React, { useState } from "react";
import AgileWorkflow from "./AgileWorkflow";
import RecommendedWorkflow from "./RecommendedWorkflow";
import WaterfallWorkflow from "./WaterfallWorkflow";

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

      {activeTab === "agile" && <AgileWorkflow />}
      {activeTab === "recommended" && <RecommendedWorkflow />}
      {activeTab === "waterfall" && <WaterfallWorkflow />}
    </section>
  );
};

export default SmartPlanning;
