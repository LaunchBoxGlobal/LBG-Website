"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const steps = [
  {
    id: "01",
    title: "Mapping User Experiences",
    desc: "We mapped journeys for buyers, sellers, and admins to create clear, intuitive flows.",
    icon: "/case-studies/b1.png",
  },
  {
    id: "02",
    title: "Eliminating Roadblocks",
    desc: "Common hurdles in ecommerce mobile app development were identified and removed to enhance usability.",
    icon: "/case-studies/b2.png",
  },
  {
    id: "03",
    title: "Prototyping Designs",
    desc: "Wireframes and prototypes allowed us to test ideas early and align with user needs.",
    icon: "/case-studies/b3.png",
  },
  {
    id: "04",
    title: "Iterative Development",
    desc: "Iterative development for Mobile, Web, and Admin Dashboard.",
    icon: "/case-studies/b4.png",
  },
  {
    id: "05",
    title: "Testing & Refinement",
    desc: "Extensive testing ensured speed, security, and long-term scalability.",
    icon: "/case-studies/b5.png",
  },
];

function Built() {
  return (
    <section className="w-full px-4 md:px-10 lg:px-20 py-20 overflow-hidden relative">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="section-heading font-extrabold text-gray-900 leading-tight">
          How We Built <span className="text-[#0093E7]">Markettoll</span>
        </h2>
        <p className="text-gray-500 mt-4 text-base md:text-xl max-w-3xl mx-auto">
          To build Markettoll, we followed a Functionality-First Approach where
          every step was designed to solve real marketplace challenges. Being an
          experienced ecommerce app development company, we ensured the platform
          works smoothly across Mobile, Web, and Admin Dashboard.
        </p>
      </div>

      {/* Steps with dots between them */}
      <div className="flex flex-wrap padding-x xl:flex-nowrap justify-center xl:justify-between items-center gap-5 lg:gap-5">
        {steps.map((step, i) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.2,
          });

          return (
            <React.Fragment key={step.id}>
              {/* Step card */}
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 60 }}
                animate={
                  inView
                    ? { opacity: 1, y: 0, transition: { duration: 0.8, delay: i * 0.15 } }
                    : {}
                }
                className="flex flex-col gap-5 items-center text-center w-[150px] sm:w-[180px]"
              >
                <h1 className="text-4xl md:text-5xl font-bold opacity-20">{step.id}</h1>
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={500}
                  height={500}
                  className="w-20 sm:w-24 object-contain"
                />
                <h3 className="font-semibold h-[40px] text-base md:text-lg mt-2">{step.title}</h3>
                <p className="text-gray-600 h-[100px] text-sm md:text-base mt-1 max-w-[190px]">
                  {step.desc}
                </p>
              </motion.div>

              {/* Blue dot between cards (except after the last one) */}
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={
                    inView
                      ? { scale: 1, opacity: 1, transition: { duration: 0.6, delay: 0.3 } }
                      : {}
                  }
                  className="hidden md:flex items-center justify-center"
                >
                  <div className="w-3 h-3 rounded-full bg-[#0093E7]" />
                </motion.div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}

export default Built;
