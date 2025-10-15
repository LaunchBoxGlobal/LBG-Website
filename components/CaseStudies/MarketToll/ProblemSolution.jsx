"use client";
import React from "react";
import { motion } from "framer-motion";

const problems = [
  {
    id: 1,
    title: "Mobile App",
    problem:
      "Browsing became slow and frustrating with heavy images and clunky navigation. Many users dropped off before completing purchases, impacting conversion rates.",
    solution:
      "We boosted performance by using lightweight frameworks, lazy loading, and caching. Checkout flows were optimized to be seamless on all screen sizes, making purchases faster and easier.",
  },
  {
    id: 2,
    title: "Web App",
    problem:
      "Vendors had difficulty handling large inventories, and buyers struggled to search through countless products. Managing catalog data was time-consuming.",
    solution:
      "We introduced a bulk upload system using smart automation and filters. Buyers now enjoy faster discovery through advanced product categorization and search.",
  },
  {
    id: 3,
    title: "Admin Dashboard",
    problem:
      "Admins lacked control over fraud detection, reports, and vendor approvals. Manual oversight slowed down platform scaling and transparency.",
    solution:
      "To solve this, we implemented advanced admin tools with real-time analytics and automated fraud detection. Dashboards now offer quick access to all critical data, boosting efficiency and trust.",
  },
];

function ProblemSolution() {
  return (
    <section className="w-full padding-x  py-20">
      {/* Header */}
      <div className="text-center  mb-20">
        <h2 className="section-heading font-extrabold text-gray-900">
          Problem <span className="">vs.</span> Solution
        </h2>
        <p className="text-gray-500 mt-4 text-base md:text-xl max-w-4xl mx-auto">
          Every digital marketplace runs into obstacles, but actual success lies in turning those
          obstacles into progress. We analyzed issues across Mobile, Web, and Admin experiences
          and crafted functionality-driven solutions.
        </p>
      </div>

      <div className="flex flex-col gap-20 items-center justify-center">
        {problems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            className="relative flex flex-col md:flex-row items-center justify-between w-full max-w-5xl px-6 md:px-10"
          >
            {/* Problem Box */}
            <div className="w-full md:w-1/3 text-center md:text-right">
              <motion.div
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true, amount: 0.3 }}
                className="inline-block bg-gradient-to-t from-[#e6f6ff] to-blue-400  px-4 py-2 rounded-full font-semibold mb-4"
              >
                Problem
              </motion.div>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {item.problem}
              </p>
            </div>

            {/* Animated Dotted Circle */}
{/* Animated Dotted Circle */}
<motion.div
  whileHover={{ scale: 1.05 }}
  viewport={{ once: true, amount: 0.3 }}
  className="relative flex items-center justify-center w-[280px] h-[280px] mx-10 my-10 md:my-0"
>
  {/* Rotating dotted border */}
  <motion.svg
    viewBox="0 0 100 100"
    className="absolute w-full h-full"
    animate={{ rotate: 360 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
  >
    <defs>
      <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0039A9" />   {/* Dark Blue */}
        <stop offset="100%" stopColor="#00C6FF" /> {/* Light Blue */}
      </linearGradient>
    </defs>

    <circle
      cx="50"
      cy="50"
      r="45"
      fill="none"
      stroke="url(#blueGradient)"  // apply gradient stroke
      strokeWidth="5"
      strokeDasharray="6 9"        // dotted pattern
      strokeLinecap="round"        // rounded dots
    />
  </motion.svg>

  {/* Text inside the circle */}
  <div className="relative z-10 text-center">
    <h3 className="text-lg md:text-3xl font-extrabold text-[#0093E7]">
      {item.title.split(" ")[0]}
      <br/>
      {item.title.split(" ")[1]}
    </h3>
  </div>
</motion.div>



            {/* Solution Box */}
            <div className="w-full md:w-1/3 text-center md:text-left">
              <motion.div
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true, amount: 0.3 }}
                className="inline-block bg-gradient-to-t from-[#e6f6ff] to-blue-400 px-4 py-2 rounded-full font-semibold mb-4"
              >
                Solution
              </motion.div>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {item.solution}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ProblemSolution;
