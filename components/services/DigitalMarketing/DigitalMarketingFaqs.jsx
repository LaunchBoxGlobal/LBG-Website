"use client";
import { DIGITAL_MARKETING_FAQS } from "@/constants/digital-marketing/DigitalMarketingFaqs";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const DigitalMarketingFaqs = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  return (
    <section
      className="w-full py-10 lg:pt-20 lg:pb-32 padding-x flex flex-col items-center"
      id="faqs"
    >
      <h2 className="section-heading text-center">
        Frequently Asked Questions
      </h2>

      <section className="w-full mt-10 lg:mt-24 flex flex-col items-start gap-4 lg:w-[90%]">
        {DIGITAL_MARKETING_FAQS?.map((faq, index) => (
          <div
            className={`w-full rounded-3xl px-5 py-5 lg:px-10 lg:py-14 bg-[#F9F9F9] text-black`}
            key={index}
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full text-start flex items-start justify-between outline-none"
            >
              <h5 className="font-medium text-[17px] md:text-2xl lg:text-[35px] 2xl:text-[40px] w-[90%]">
                <span className="w-full leading-[1] lg:leading-[1.1]">
                  {faq?.question}
                </span>
              </h5>

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
              className="overflow-hidden"
            >
              <p className="text-base lg:text-[20px] font-normal lg:w-[90%]">
                {faq?.answer}
              </p>
            </motion.div>
          </div>
        ))}
        <div className="w-full rounded-3xl px-5 py-5 lg:px-10 lg:py-14 bg-[#F9F9F9] text-black">
          <button
            onClick={() => toggleFaq(DIGITAL_MARKETING_FAQS.length)}
            className="w-full text-start flex items-start justify-between outline-none"
          >
            <h3 className="font-medium text-[17px] md:text-2xl lg:text-[35px] 2xl:text-[40px] w-[90%]">
              Why is strong branding & designing essential for successful
              digital marketing campaigns?
            </h3>

            <Image
              src={"/faq-arrow-icon.png"}
              width={24}
              height={20}
              alt="arrow icon"
              className={`${
                openFaq === DIGITAL_MARKETING_FAQS.length
                  ? "scale-y-[-1]"
                  : "scale-y-[1]"
              } transition-all duration-700 w-[18px] h-[18px] lg:w-[24px] lg:h-[26px] xl:mt-1.5`}
            />
          </button>

          <motion.div
            initial={false}
            animate={{
              height: openFaq === DIGITAL_MARKETING_FAQS.length ? "auto" : 0,
              opacity: openFaq === DIGITAL_MARKETING_FAQS.length ? 1 : 0,
              marginTop: openFaq === DIGITAL_MARKETING_FAQS.length ? "18px" : 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-base lg:text-[20px] font-normal lg:w-[90%]">
              Effective digital marketing goes beyond just traffic and
              clicks—it’s about building a lasting brand impression. Strong
              branding & designing ensures your campaigns are visually
              compelling, emotionally resonant, and instantly recognizable
              across platforms. From ad creatives to landing pages, consistency
              in visual identity drives higher engagement and conversion rates.
              At Launchbox Global, we tightly align digital strategies with our{" "}
              <Link href={`/services/digital-marketing`} className="red-text">
                Branding & Designing services
              </Link>{" "}
              to help brands stand out and stay memorable in crowded markets.
            </p>
          </motion.div>
        </div>
      </section>
    </section>
  );
};

export default DigitalMarketingFaqs;
