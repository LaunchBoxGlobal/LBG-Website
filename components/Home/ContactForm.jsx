"use client"
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ServiceForm from "./ServiceForm";

const words = [
  "Right Workflow",
  "Winning Strategy",
  "Smart Execution",
  "Long-term Value",
  "Seamless Experiences",
  "Right Workflow",
];

function ContactForm() {
  const [index, setIndex] = useState(0);

  // Automatically cycle through words
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000); // change every 2 seconds
    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: {  opacity: 0, y: 20 },
    center: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.6, ease: "easeIn" },
    },
  };

  return (
    <section className="padding-x py-8 ">
      <div className="bg-[#212121] text-white rounded-xl">
        <div className="flex flex-col md:flex-row p-8 items-center">

          <div className="w-full md:w-1/2 mx-auto flex justify-center items-center text-center md:text-left">
            <div className="w-[80%]">
              <h1 className="text-5xl w-full font-bold ">
                Your app idea <br/> deserves
              </h1>

              <div className="relative h-[1.2em] text-nowrap  text-white text-5xl font-bold ">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={words[index]}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0 flex items-center justify-center md:justify-start"
                  >
                    {words[index]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Right side - form */}
          <div className="w-full md:w-1/2 ">
            <ServiceForm buttonTitle="Get your free app plan!" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
