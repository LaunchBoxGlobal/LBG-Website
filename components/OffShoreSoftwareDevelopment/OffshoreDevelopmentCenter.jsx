"use client";
import React, { useState } from "react";
import AnimatedText from "../StaffAugmentation/AnimatedText";
import { OFFSHORE_DEVELOPMENT_CENTER } from "@/constants/off-shore-development/off-shore-development-center";
import { motion } from "framer-motion";

const OffshoreDevelopmentCenter = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="w-full py-20 midlg:py-32 xl:py-40 bg-[#F9F9F9] padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <AnimatedText>
          <h2 className="section-heading lg:w-[90%] mx-auto">
            Your Complete Offshore{" "}
            <span className="red-text">Development Center</span>
          </h2>
        </AnimatedText>
        <AnimatedText>
          <p className="section-paragraph lg:w-[70%] mx-auto">
            Our dedicated offshore teams become an extension of your company,
            delivering end-to-end software solutions across time zones. We
            handle everything from initial concept to ongoing maintenance.
          </p>
        </AnimatedText>
      </section>

      <section className="w-full mt-10 lg:mt-14">
        {OFFSHORE_DEVELOPMENT_CENTER?.map((center, index) => {
          return (
            <AnimatedText>
              <div
                key={index}
                onClick={() => toggleFaq(index)}
                className="w-full relative border-b pt-6 pb-3 lg:py-8 border-gray-400 flex flex-col items-center gap-4 cursor-pointer"
              >
                <span className="text-[20px] text-gray-700 absolute left-0 top-9 hidden md:block">
                  0{index + 1}
                </span>
                <p className="text-[25px] lg:text-[60px] font-extrabold text-center leading-[1.1]">
                  {center.title}
                </p>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? "auto" : 0,
                    opacity: openFaq === index ? 1 : 0,
                    marginTop: openFaq === index ? "18px" : 0,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="text-lg lg:text-[26px]">
                    {center?.description}
                  </p>
                </motion.div>
              </div>
            </AnimatedText>
          );
        })}
      </section>
    </section>
  );
};

export default OffshoreDevelopmentCenter;
