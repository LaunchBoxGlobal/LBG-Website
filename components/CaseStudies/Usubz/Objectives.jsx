"use client"
import React from 'react';
import { motion } from 'framer-motion';

export default function Objectives() {
  const cardVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", bounce: 0.2, duration: 0.8 }
    }
  };

  const lineVariants = {
    offscreen: { scaleY: 0 },
    onscreen: {
      scaleY: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="w-full px-6 md:px-12 overflow-hidden relative py-20">
      {/* Section Header */}
      <div className="text-center mb-20">
        <motion.h2
          className="section-heading font-extrabold text-gray-900 leading-tight "
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Objectives
        </motion.h2>
        <motion.p
          className="text-gray-600 mt-4 text-base md:text-xl max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          We then aimed to create a platform where skill-building and career growth feel natural, motivating, and rewarding.
        </motion.p>
      </div>

      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {[
          {
            title: "Simplifies dual-purpose navigation",
            desc: "balancing learning and job search features."
          },
          {
            title: "Builds credibility",
            desc: "for learners by integrating profile verification after completing tutorials."
          },
          {
            title: "Creates a sense of achievement",
            desc: "using gamification mechanics (points, levels, and badges)."
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            className="text-center"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <motion.div
              className="h-6 flex justify-center items-center mb-4"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              variants={lineVariants}
              style={{ transformOrigin: "center top" }}
            >
              <div className="w-1 h-6 bg-green-400 rounded-full"></div>
            </motion.div>
            <div className="mt-4 bg-white shadow-lg p-6 rounded-3xl text-gray-600">
              {item.desc}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto mt-20">
        {[
          {
            title: "Increases engagement",
            desc: "through interactive progress tracking and rewards."
          },
          {
            title: "Drives job visibility",
            desc: "by linking verified skills directly to recruiter search results."
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            className="text-center"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <div className="mt-4 h-[100px] bg-white shadow-lg p-6 rounded-3xl text-gray-600">
              {item.desc}
            </div>
            <motion.div
              className="h-6 flex mt-2 justify-center items-center"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              variants={lineVariants}
              style={{ transformOrigin: "center top" }}
            >
              <div className="w-1 h-6 bg-green-400 rounded-full"></div>
            </motion.div>
            <h3 className="font-semibold text-lg mt-2">{item.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
