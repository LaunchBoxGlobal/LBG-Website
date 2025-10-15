"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Market Research",
    desc: "We started the research with the leading eCommerce stores and marketplaces like Amazon, eBay, and Shopee. So we could understand what made them successful. By identifying both their strengths and gaps, we created a model that could compete effectively while avoiding common traps.",
    icon: "/case-studies/r1.png",
  },
  {
    id: 2,
    title: "User Research",
    desc: "We conducted surveys with potential buyers, sellers, and admins. Buyers highlighted the need for faster product discovery and trusted vendors. Sellers demanded quick product listings and bulk upload options. Admins wanted advanced fraud detection tools and analytics to manage their operations.",
    icon: "/case-studies/r2.png",
  },
  {
    id: 3,
    title: "Technology Research",
    desc: "Finally, we explored the best frameworks and APIs to guarantee top-level security and smooth cross-platform performance. This step was crucial to aligning our platform with industry standards in ecommerce software development while preparing it for long-term growth.",
    icon: "/case-studies/r3.png",
  },
];

function ResearchJourney() {
  return (
    <section className="w-full padding-x py-20 overflow-hidden">
      {/* Header */}
      <div className="text-center  mb-16">
        <h2 className="section-heading font-extrabold text-gray-900">
          The Research <span className="text-[#0093E7]">Journey</span>
        </h2>
        <p className="text-gray-500 mt-4 text-base md:text-xl max-w-4xl mx-auto">
          Before starting development, we conducted in-depth research across three
          critical areas to ensure Markettoll was built on a strong foundation.
        </p>
      </div>

      {/* Steps */}
      <div className="relative flex flex-col md:flex-row justify-center items-start md:items-center gap-16 md:gap-8 w-[90%] mx-auto">
        {/* Line 1: Between Step 1 → Step 2 */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "calc(50% - 200px)" }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
           viewport={{ once: true, amount: 0.3 }}
         className="hidden md:block absolute top-[60px] left-[calc(15%+60px)] h-[3px] 
  bg-[radial-gradient(circle,_#0093E7_1.5px,_transparent_2px)] 
  bg-[length:12px_3px] bg-repeat-x rounded-full"
        />
        {/* Line 2: Between Step 2 → Step 3 */}
     <motion.div
  initial={{ width: 0 }}
  whileInView={{ width: "calc(50% - 200px)" }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 1.8, delay: 0.8, ease: "easeInOut" }}
  className="hidden md:block absolute top-[60px] left-[calc(50%+60px)] h-[3px] 
  bg-[radial-gradient(circle,_#0093E7_1.5px,_transparent_2px)] 
  bg-[length:12px_3px] bg-repeat-x rounded-full"
/>

        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="relative z-10 flex flex-col items-center text-center max-w-sm mx-auto"
          >
            {/* Icon */}
            <div className="w-[120px] h-[120px] flex items-center justify-center mb-6 relative">
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              ></motion.div>
              <Image
                src={step.icon}
                alt={step.title}
                width={150}
                height={150}
                className="z-10"
              />
            </div>

            {/* Text */}
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ResearchJourney;
