"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const InsideBook = () => {
  const [openChapter, setOpenChapter] = useState(null);

  const chapters = [
    {
      id: 1,
      title: "Chapter 01: You Have an Idea… But Not Sure Where To Start?",
      content:
        "This chapter converts your raw idea into a structured, clear concept. It helps you pause and ask the right questions so you understand the problem, the audience, and the direction before moving forward.",
    },
    {
      id: 2,
      title: "Chapter 02: How Do You Turn The Idea Into Something Real?",
      content:
        "This chapter shows you how to move from vision to execution with a smart MVP plan. You learn to define essentials, set budgets, and focus on core functionality using a Functionality-First approach.",
    },
    {
      id: 3,
      title: "Chapter 03: Why Your App Needs To Feel Right For Users",
      content:
        "This chapter explains design from a user’s perspective. You learn the difference between UI and UX, how to test early prototypes, and why clarity beats complexity every time.",
    },
    {
      id: 4,
      title:
        "Chapter 04: You’re Building It… But Are You Doing It The Right Way?",
      content:
        "This chapter breaks down the development process in simple terms so you can manage it confidently. It shows how the Functionality-First model keeps your build structured and flexible.",
    },
    {
      id: 5,
      title:
        "Chapter 05: It’s Almost Ready — How To Launch Without Messing Up?",
      content:
        "This chapter guides you through a smooth launch. You learn how to test properly, plan a beta release, optimize for app stores, and prepare a calm, structured launch that avoids chaos.",
    },
  ];

  return (
    <section className="py-24 padding-x">
      <div className="max-w-6xl mx-auto  grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#f40e00] font-semibold mb-2 text-sm"
          >
           What’s Inside?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-snug"
          >
            A Closer Look at Each  <br />{" "}
            <span className="text-black">Chapters Covered.</span>
          </motion.h2>
          <div className="relative flex justify-center mt-10 w-full mx-auto md:mx-0">
            
            <motion.img
              src="/e-book/ip1.png" 
              alt="Back Book"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-72 sm:w-80 rounded-2xl  absolute top-5 -left-0 z-10"
            />

            
            <motion.img
              src="/e-book/ip2.png" 
              alt="Front Book"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              animate={{
                y: [0, -8, 0],
              }}
              className="w-72 sm:w-80 rounded-2xl relative -z-10"
            />
            <div className="absolute -z-20 top-10 left-6 w-80 h-96 bg-[#f40e00]/20 rounded-3xl blur-3xl opacity-40" />
          </div>
          
        </div>
        <div className="space-y-4">
          {chapters.map((chapter) => {
            const isOpen = openChapter === chapter.id;
            return (
              <motion.div
                key={chapter.id}
                layout
                transition={{
                  layout: { duration: 0.45, type: "spring", bounce: 0.25 },
                }}
                className={`rounded-2xl border overflow-hidden shadow-sm ${
                  isOpen
                    ? "border-[#f40e00] bg-white shadow-md"
                    : "border-gray-200 bg-white hover:shadow-md transition"
                }`}
              >
                {/* Chapter Button */}
                <motion.button
                  onClick={() => setOpenChapter(isOpen ? null : chapter.id)}
                  className={`w-full flex justify-between items-center px-6 py-5 text-left font-medium text-base transition-colors duration-300 ${
                    isOpen ? "bg-[#f40e00] text-white" : "text-gray-800"
                  }`}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>{chapter.title}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    <ChevronDown />
                  </motion.div>
                </motion.button>

                <AnimatePresence initial={false}>
  {isOpen && (
    <motion.div
      key="content"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{
        duration: 0.35,
        ease: [0.25, 0.8, 0.25, 1],
      }}
      className="overflow-hidden"
    >
      <div className="bg-gray-50 text-gray-600 px-6 py-4 text-base leading-relaxed">
        {chapter.content}
      </div>
    </motion.div>
  )}
</AnimatePresence>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InsideBook;
