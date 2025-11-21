"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Strategy() {
  const leftCards = [
    {
      title: "Modular Navigation",
      desc: "You can move smoothly between “Learn,” “Earn,” and “Get Hired.” These three tabs above guide your journey from building skills to getting noticed by recruiters.",
    },
    {
      title: "Gamification Layer",
      desc: "The users can earn badges, track learning streaks, and climb leaderboards. We made progress visible so you stay motivated and keep pushing forward.",
    },
    {
      title: "Smart Profile Dashboard",
      desc: "The users can see all their learning stats and job applications in one clear view. No switching screens, no confusion.",
    },
  ];

  const rightCards = [
    {
      title: "Interactive Course Cards",
      desc: "Each course shows difficulty, reward points, and estimated completion time. You know exactly what to expect and what’s in it for you.",
    },
    {
      title: "Light & Neutral Theme",
      desc: "A calm visual style suitable for both learners and recruiters.",
    },
    {
      title: "Micro-Interactions",
      desc: "Subtle animations to celebrate milestones and guide user attention.",
    },
  ];

  return (
    <section className="w-full padding-x overflow-hidden relative">
      {/* Heading */}
      <div className="text-center mb-16">
        <motion.h2
          className="section-heading font-extrabold text-gray-900 leading-tight text-3xl sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Design Strategy
        </motion.h2>

        <motion.p
          className="text-gray-600 mt-4 text-base sm:text-lg md:text-xl max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          We followed a Functionality-First Approach, focusing on core design principles
          that balance usability with motivation.
        </motion.p>
      </div>

      {/* Cards + Phone */}
      <div className="relative flex flex-col lg:flex-row justify-center items-center  gap-12 lg:gap-10">
        {/* Left Cards */}
          <Image
            src={"/case-studies/usubz/ring2.png"}
            width={800}
            height={800}
            alt="ring"
            className="absolute  left-[50%] transition-all translate-x-[-50%]"
          />
        <div className="flex flex-col gap-6 lg:w-1/3 w-full">
          {leftCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.2 }}
              className="bg-[#6EF0B2] rounded-3xl p-6 shadow-md h-[150px] text-white backdrop-blur-xl"
            >
              <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
              <p className="text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="relative flex justify-center">
          <Image
            src="/case-studies/usubz/ph.png"
            alt="phone"
            width={300}
            height={300}
            className="drop-shadow-xl rounded-3xl  "
          />
        </div>

        {/* Right Cards */}
        <div className="flex flex-col gap-6 lg:w-1/3 w-full">
          {rightCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.2 }}
              className="bg-[#6EF0B2] rounded-3xl h-[150px] p-6 shadow-md text-white backdrop-blur-xl"
            >
              <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
              <p className="text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
