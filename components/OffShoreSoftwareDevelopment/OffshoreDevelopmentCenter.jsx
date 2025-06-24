"use client";
import React, { useState } from "react";
import AnimatedText from "../StaffAugmentation/AnimatedText";
import { OFFSHORE_DEVELOPMENT_CENTER } from "@/constants/off-shore-development/off-shore-development-center";
import { motion } from "framer-motion";
import Image from "next/image";
import { TALENT_AUGMENTATION } from "@/constants/on-demand-talent-content/talent-augmentation";

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

      <section className="w-full mt-10 lg:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-5 pl-5 overflow-hidden">
        {TALENT_AUGMENTATION?.map((talent, index) => {
          return (
            <div key={index} className="w-full">
              <AnimatedText>
                <div className="w-full flex flex-col items-start justify-between gap-3 bg-[#fff] rounded-[29px] p-7 min-h-[558px] relative">
                  <div className="w-[11px] h-[93px] red-bg rounded-l-2xl absolute left-[-10px]" />
                  <div className="flex flex-col items-start gap-3">
                    <div className="rounded-full red-bg w-[71px] lg:w-[91px] h-[71px] lg:h-[91px] flex items-center justify-center">
                      <Image
                        src={talent?.icon}
                        width={talent?.width}
                        height={talent?.height}
                        alt={`${talent?.title} icon`}
                      />
                    </div>
                    <h3 className="text-[27px] font-semibold">
                      {talent?.title}
                    </h3>
                    <p className="text-xl lg:text-[23px] leading-[1.1] font-light">
                      {talent?.description}
                    </p>
                  </div>
                  <Image
                    src={talent?.techIcons}
                    width={talent?.iconWidth}
                    height={talent?.iconHeight}
                    alt={`${talent?.title} icon`}
                    className=""
                  />
                </div>
              </AnimatedText>
            </div>
          );
        })}
      </section>

      {/* <section className="w-full mt-10 lg:mt-14">
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
      </section> */}
    </section>
  );
};

export default OffshoreDevelopmentCenter;
