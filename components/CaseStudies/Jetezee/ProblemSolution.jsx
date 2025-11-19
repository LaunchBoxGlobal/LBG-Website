"use client";

import { useState } from "react";
import { IoWarning } from "react-icons/io5";
import { FcIdea } from "react-icons/fc";
import Image from "next/image";

export default function ProblemSolution() {
  const [activeTab, setActiveTab] = useState("webapp");

  const data = {
    webapp: {
      problems: `The existing marketplaces felt quite cluttered and technical. Buyers struggled to compare aircraft by specifications such as range, capacity, and flight hours. Sellers faced the inconsistent forms and the unclear data entry.`,
      solutions: `Simplifying the listing pages through the comparison tools, sorting pictures, and meeting the precise requirements. Customers also had the option to filter by capacity, year, model, and manufacturer. A guided upload process with preview, validation, and features was given to sellers.`
    },
    admin: {
      problems: `The listings, fraud detection, and user verification were not visible to the administrators. Conventional dashboards were dynamic and quite tricky to use.`,
      solutions: `Created a centralized prototype with moderation controls, workflows for user or vendor verification, and real-time monitoring. Additionally, administrators may use a sleek, role-based interface to approve the flag or examine the listings.`
    }
  };

  return (
    <section className="w-full px-4 md:px-8">
      {/* Header */}
      <div className="text-center mb-10 max-w-4xl mx-auto">
        <h2 className="section-heading font-extrabold text-gray-900">
          Problem <span className="">vs.</span> Solution
        </h2>
        <p className="text-gray-500 mt-4 text-base md:text-xl">
          Before we started the development process, we created both low-fidelity 
          and high-fidelity wireframes to plan user flows and validate functionality.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-4 w-[22%] py-2  mx-auto rounded-full mb-10 bg-gray-300">
        {["webapp", "admin"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full font-semibold  transition 
              ${activeTab === tab ? "bg-[#E6B557] text-white shadow-xl" : " text-gray-700"}`}
          >
            {tab === "webapp" ? "Web App" : "Admin Dashboard"}
          </button>
        ))}
      </div>
      <div className="flex flex-col md:flex-row  items-center justify-center gap-16 max-w-6xl mx-auto">
        <div className="w-full md:w-1/3 text-left h-[250px]">
          <IoWarning className="text-yellow-400" size={50} />
          <div className="flex items-center gap-2 mb-4">
            <h3 className="font-bold text-lg text-gray-900">Problems</h3>
          </div>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            {data[activeTab].problems}
          </p>
        </div>

    <div>
      <Image src={"/case-studies/jetezee/ps.png"} alt="logo" width={200} height={200} />
    </div>

        <div className="w-full md:w-1/3 text-right h-[250px]">
        <div className="flex flex-col items-end">
          <FcIdea className="text-3xl md:text-4xl" />
          <div className="flex items-center gap-2 mb-4">
            <h3 className="font-bold text-lg text-gray-900">Solutions</h3>
          </div>
          </div>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            {data[activeTab].solutions}
          </p>
        </div>
      </div>
    </section>
  );
}
