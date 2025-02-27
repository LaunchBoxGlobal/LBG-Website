"use client";
import { PROCESS } from "@/constants/Process";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Process = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
    setImageIndex(index);
  };

  return (
    <section
      className="w-full padding-x py-12 lg:py-28 bg-[#F9F9F9]"
      id="workflow"
    >
      <section
        className="w-full flex flex-col items-center justify-center gap-5"
        id="services"
      >
        <h2 className="section-heading">
          From Start To <span className="red-text">Finish</span>
        </h2>
        <p className="section-paragraph text-center">
          We follow a structured and client focused development process to{" "}
          <br />
          ensure the successful delivery of high quality software solutions.{" "}
          <br /> Our workflow includes.:
        </p>
      </section>

      <section className="w-full mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <section className="w-full">
          {PROCESS?.map((process, index) => {
            return (
              <button
                type="button"
                className={`w-full flex items-start gap-10 mb-3.5 outline-none`}
                key={index}
                onClick={() => toggleFaq(index)}
              >
                <div
                  className={`flex flex-col items-center justify-start gap-1 relative`}
                >
                  <p
                    className={`text-[30px] font-bold ${
                      openFaq === index ? "text-[#F40E00]" : "text-gray-400"
                    } transition-all duration-1000`}
                  >
                    {index + 1}
                  </p>
                  <div
                    className={`w-1 ${
                      openFaq === index
                        ? "h-14 bg-[#F40E00]"
                        : "h-0 bg-gray-400"
                    } transition-all duration-1000 rounded-full`}
                  ></div>
                </div>
                <div className="flex flex-col items-start justify-start">
                  <h2
                    className={`text-[30px] ${
                      openFaq === index
                        ? "font-bold text-[#F40E00]"
                        : "font-semibold text-gray-400"
                    }`}
                  >
                    {process?.title}
                  </h2>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openFaq === index ? "auto" : 0,
                      opacity: openFaq === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-[20px] font-normal text-start leading-[24px] tracking-tight text-gray-900 w-[90%]">
                      {process?.text}
                    </p>
                  </motion.div>
                </div>
              </button>
            );
          })}
        </section>
        <section className="w-full flex items-start justify-center">
          <Image
            src={PROCESS[imageIndex]?.image}
            alt={`process images`}
            width={380}
            height={410}
            className="transition-all duration-1000 object-contain w-[400px] h-[470px]"
          />
        </section>
      </section>
    </section>
  );
};

export default Process;
