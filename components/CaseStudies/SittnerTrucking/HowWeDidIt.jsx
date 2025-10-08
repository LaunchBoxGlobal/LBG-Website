"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";

const HowWeDidIt = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });
  return (
    <section className="w-full padding-x flex flex-col items-center">
      <h2 className="section-heading">How We Did It</h2>
      <p className="text-center lg:w-[90%] text-base lg:text-xl mt-7">
        We followed a Hybrid process, collaborating closely with JB Sittner
        Trucking’s team to understand workflows. Our custom web application
        development focuses on intuitive design, real-time features, and secure
        access for employees and dispatchers.
      </p>

      <div ref={ref} className="w-full mt-10 lg:mt-14">
        <motion.div
          initial={{ scale: 0.7 }}
          animate={inView ? { scale: 1 } : { scale: 0.7 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full"
        >
          <img
            src={"/case-studies/sittner-trucking/how-we-did-it-steps.png"}
            alt="how-we-did-it-steps"
            width={1280}
            height={310}
            className="mx-auto object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeDidIt;
