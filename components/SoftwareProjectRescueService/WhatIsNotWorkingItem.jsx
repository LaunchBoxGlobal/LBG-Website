"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

const WhatIsNotWorkingItem = ({ content, index, openFaq, setOpenFaq }) => {
  const isOpen = openFaq === index;

  const toggleFaq = () => {
    setOpenFaq(isOpen ? null : index);
  };
  return (
    <div
      className={`w-full rounded-3xl px-5 py-5 lg:px-10 lg:py-14 bg-[#F9F9F9] text-black mb-5`}
    >
      <button
        onClick={() => toggleFaq(index)}
        className="w-full text-start flex items-center justify-between outline-none"
      >
        <div className="w-full flex items-center">
          <div className="min-w-[10%]">
            <p className="text-[25px] font-medium leading-none">{`(0${
              index + 1
            })`}</p>
          </div>
          <div className="flex items-center justify-start gap-5">
            <div>
              <Image
                src={content?.icon}
                width={content?.width}
                height={content?.height}
                alt={content?.title}
              />
            </div>
            <h5 className="font-medium text-[20px] md:text-2xl lg:text-[35px] midlg:text-[50px] w-[90%]">
              <span className="w-full leading-none uppercase">
                {content?.title}
              </span>
            </h5>
          </div>
        </div>

        <Image
          src={"/faq-arrow-icon.png"}
          width={24}
          height={20}
          alt="arrow icon"
          className={`${
            openFaq === index ? "scale-y-[-1]" : "scale-y-[1]"
          } transition-all duration-700 w-[18px] h-[18px] lg:w-[24px] lg:h-[26px] lg:mt-3`}
        />
      </button>

      <motion.div
        initial={false}
        animate={{
          height: openFaq === index ? "auto" : 0,
          opacity: openFaq === index ? 1 : 0,
          marginTop: openFaq === index ? "18px" : 0,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="overflow-hidden w-full mt-10 flex flex-col items-end"
      >
        {content?.problems_and_solutions?.map((p, i) => {
          return (
            <div
              className="w-[90%] grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5 border p-5 rounded-[11px]"
              key={i}
            >
              <div className="flex items-center gap-4">
                <div>
                  <Image
                    src={"/new-project/caution-icon.png"}
                    width={29}
                    height={26}
                    alt="caution icon"
                  />
                </div>
                <div>
                  <p className="font-bold text-lg text-[#F40E00] uppercase">
                    Problem
                  </p>
                  <p className="font-bold text-base text-[#212121] leading-[1.2]">
                    {p?.problem}
                  </p>{" "}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <Image
                    src={"/new-project/bulb-icon.png"}
                    width={29}
                    height={30}
                    alt="bulb icon"
                  />
                </div>
                <div>
                  <p className="font-bold text-lg text-[#FFB400] uppercase">
                    Solution
                  </p>
                  <p className="font-bold text-base text-[#212121] leading-[1.2]">
                    {p?.solution}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default WhatIsNotWorkingItem;
