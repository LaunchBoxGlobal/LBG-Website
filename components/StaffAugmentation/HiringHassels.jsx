"use client";
import { HIRING_HASSLES } from "@/constants/StaffAugmentation/hiring-hassles";
import { WEB_APP_DEV_FAQS } from "@/constants/web-app-dvelopment/WebAppDevFaqs";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import AnimatedText from "./AnimatedText";

const HiringHassels = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? 0 : index);
  };
  return (
    <section className="w-full py-20 midlg:py-32 xl:py-40 bg-white padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <AnimatedText>
          <h2 className="section-heading mx-auto">
            IT Staff Augmentation Services That Fix
            <span className="red-text"> Hiring Hassles</span>
          </h2>
        </AnimatedText>
        <AnimatedText>
          <p className="section-paragraph lg:w-[92%] mx-auto">
            Addressing the critical shortage of qualified IT professionals, our
            staff augmentation services deliver pre-vetted technical experts
            within days, enabling you to maintain business continuity and
            strategic focus.
          </p>
        </AnimatedText>
      </section>

      <section className="w-full mt-10 flex flex-col lg:flex-row items-start justify-start gap-3 lg:mt-14 gap-y-10">
        <div className="w-full hidden lg:block lg:min-w-[490px] lg:max-w-[500px]">
          <AnimatedText>
            <Image
              src={"/staff-augmentation/hiring-hassles-mockup.png"}
              width={490}
              height={825}
              alt="hiring-hassles-red-mockup"
              className="object-contain"
            />
          </AnimatedText>
        </div>
        <div id="faqs" className="w-full flex flex-col items-start lg:w-[90%]">
          {HIRING_HASSLES?.map((faq, index) => (
            <AnimatedText>
              <div
                className={`w-full text-black border-b ${
                  index === 0 ? "pb-5" : "py-5"
                }`}
                key={index}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  name="web app development faq"
                  className="w-full text-start flex items-center justify-between outline-none gap-[14px]"
                >
                  <div
                    className={`min-w-[48px] lg:min-w-[68px] h-[48px] lg:h-[68px] p-2 rounded-full flex items-center justify-center ${
                      openFaq === index ? "red-bg" : "bg-white border"
                    } transition-all duration-300`}
                  >
                    <Image
                      src={openFaq === index ? faq?.whiteIcon : faq?.icon}
                      width={faq?.width}
                      height={faq?.height}
                      alt={faq?.title}
                    />
                  </div>
                  <h5 className="font-medium text-[17px] md:text-2xl lg:text-[25px] 2xl:text-[40px] w-[90%] lg:leading-10">
                    {faq?.title}
                  </h5>

                  <Image
                    src={"/staff-augmentation/arrow.png"}
                    width={23}
                    height={13}
                    alt="arrow icon"
                    loading="lazy"
                    className={`${
                      openFaq === index ? "scale-y-[1]" : "scale-y-[-1]"
                    } transition-all duration-700 lg:mt-3`}
                  />
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? "auto" : 0,
                    opacity: openFaq === index ? 1 : 0,
                    marginTop: openFaq === index ? "0px" : 0,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="overflow-hidden pl-[62px] lg:pl-[82px]"
                >
                  <p className="text-base lg:text-[20px] font-normal lg:w-[90%]">
                    {faq?.description}
                  </p>
                </motion.div>
              </div>
            </AnimatedText>
          ))}
        </div>
      </section>
    </section>
  );
};

export default HiringHassels;
