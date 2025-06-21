"use client";
import React, { useState } from "react";
import AgileWorkflow from "./AgileWorkflow";
import RecommendedWorkflow from "./RecommendedWorkflow";
import WaterfallWorkflow from "./WaterfallWorkflow";
import { BRANDING_AND_DESIGN_RECOMMENDED_WORKFLOW } from "@/constants/branding-and-design/recommend-workflow";
import { BRANDING_AND_DESIGN_AGILE_WORKFLOW } from "@/constants/branding-and-design/agile-workflow";
import { BRANDING_AND_DESIGN_WATERFALL_WORKFLOW } from "@/constants/branding-and-design/waterfall-workflow";

const Workflow = () => {
  const [activeTab, setActiveTab] = useState("recommended");

  return (
    <section className="w-full padding-x py-10 lg:py-20 relative overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading">
          Collaborative Workflow for Building{" "}
          <span className="red-text">Your Brand</span>
        </h2>
        <p className="section-paragraph lg:w-[90%]">
          Our design and branding workflow ensures a seamless process, from
          strategy to execution. We work closely with you at every step,
          refining ideas and designs that reflect your brand’s identity and
          connect with your audience.
        </p>
      </section>

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
            name="recommended workflow button"
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
      </div> */}

      {/* {activeTab === "agile" && (
        <AgileWorkflow workflow={BRANDING_AND_DESIGN_AGILE_WORKFLOW} />
      )}
      {activeTab === "recommended" && (
        <RecommendedWorkflow
          workflow={BRANDING_AND_DESIGN_RECOMMENDED_WORKFLOW}
        />
      )}
      {activeTab === "waterfall" && (
      )} */}
      <WaterfallWorkflow workflow={BRANDING_AND_DESIGN_WATERFALL_WORKFLOW} />
    </section>
  );
};

export default Workflow;
