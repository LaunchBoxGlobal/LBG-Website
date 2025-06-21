"use client";
import React, { useState } from "react";
import AgileWorkflow from "./AgileWorkflow";
import RecommendedWorkflow from "./RecommendedWorkflow";
import WaterfallWorkflow from "./WaterfallWorkflow";
// import { ECOMMERCE_RECOMMENDED_WORKFLOW } from "@/constants/ecommerce-develpment/EcommerceRecommendedWorkflow";
import { ECOMMERCE_AGILE_WORKFLOW } from "@/constants/ecommerce-develpment/ecommerceagileworkflow";
import { ECOMMERCE_WATERFALL_WORKFLOW } from "@/constants/ecommerce-develpment/ecommercewaterfallworkflow";
import { ECOMMERCE_RECOMMENDED_WORKFLOW } from "@/constants/ecommerce-develpment/ecommercerecommendedworkflow";

const Workflow = () => {
  const [activeTab, setActiveTab] = useState("recommended");

  return (
    <section className="w-full padding-x py-10 lg:py-20 relative overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading w-full">
          The Process Behind <br className="hidden lg:block" /> Profitable{" "}
          <span className="red-text">Stores</span>
        </h2>
        <p className="section-paragraph lg:w-[85%]">
          It’s not just about how your ecommerce platform looks. It’s about how
          it works. We design seamless shopping experiences backed by powerful
          integrations, delivering custom ecommerce solutions to convert.
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
                ? "bg-[#F40E00] text-white"
                : "bg-white text-gray-500"
            }`}
          >
            AGILE
          </button>
          <button
            type="button"
            name="recommened workflow button"
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
        <AgileWorkflow workflow={ECOMMERCE_AGILE_WORKFLOW} />
      )}
      {activeTab === "recommended" && (
        <RecommendedWorkflow workflow={ECOMMERCE_RECOMMENDED_WORKFLOW} />
      )}
      {activeTab === "waterfall" && (
        <WaterfallWorkflow workflow={ECOMMERCE_WATERFALL_WORKFLOW} />
      )}
    </section>
  );
};

export default Workflow;
