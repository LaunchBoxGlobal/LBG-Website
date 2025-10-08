"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";

const CheyenneFaqs = ({ faqs }) => {
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
        <div
          className={`w-full rounded-3xl px-5 py-5 lg:px-10 lg:py-14 bg-[#F9F9F9] text-black`}
        >
          <button
            onClick={() => toggleFaq(faqs?.length + 1)}
            className="w-full text-start flex items-start justify-between outline-none"
          >
            <h5 className="font-medium text-[17px] md:text-2xl lg:text-[35px] 2xl:text-[40px] w-[90%]">
              <span className="w-full leading-7 lg:leading-10">
                How much do Cheyenne SEO services cost?
              </span>
            </h5>

            <img
              src={"/faq-arrow-icon.png"}
              width={24}
              height={20}
              alt="arrow icon"
              className={`${
                openFaq === faqs?.length + 1 ? "scale-y-[-1]" : "scale-y-[1]"
              } transition-all duration-700 w-[18px] h-[18px] lg:w-[24px] lg:h-[26px] lg:mt-3`}
            />
          </button>

          <motion.div
            initial={false}
            animate={{
              height: openFaq === faqs?.length + 1 ? "auto" : 0,
              opacity: openFaq === faqs?.length + 1 ? 1 : 0,
              marginTop: openFaq === faqs?.length + 1 ? "18px" : 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-base lg:text-[20px] font-normal lg:w-[90%]">
              Our SEO services are tailored to your business needs and goals.
              Pricing varies based on factors like local SEO, e-commerce, or
              technical SEO.{" "}
              <Link href={`/contact-us`} className="red-text">
                Contact us
              </Link>{" "}
              for a personalized quote and strategy that fits your business.
            </p>
          </motion.div>
        </div>
        <div
          className={`w-full rounded-3xl px-5 py-5 lg:px-10 lg:py-14 bg-[#F9F9F9] text-black`}
        >
          <button
            onClick={() => toggleFaq(faqs?.length + 2)}
            className="w-full text-start flex items-start justify-between outline-none"
          >
            <h5 className="font-medium text-[17px] md:text-2xl lg:text-[35px] 2xl:text-[40px] w-[90%]">
              <span className="w-full leading-7 lg:leading-10">
                What’s the best SEO company near me for Wyoming businesses?
              </span>
            </h5>

            <img
              src={"/faq-arrow-icon.png"}
              width={24}
              height={20}
              alt="arrow icon"
              className={`${
                openFaq === faqs?.length + 2 ? "scale-y-[-1]" : "scale-y-[1]"
              } transition-all duration-700 w-[18px] h-[18px] lg:w-[24px] lg:h-[26px] lg:mt-3`}
            />
          </button>

          <motion.div
            initial={false}
            animate={{
              height: openFaq === faqs?.length + 2 ? "auto" : 0,
              opacity: openFaq === faqs?.length + 2 ? 1 : 0,
              marginTop: openFaq === faqs?.length + 2 ? "18px" : 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-base lg:text-[20px] font-normal lg:w-[90%]">
              We’re a Cheyenne-based SEO company with proven Wyoming
              results—unlike national agencies. Our local expertise helped 50+
              businesses rank #1 for terms like “best restaurants in Cheyenne”
              and “Wyoming HVAC services” through our{" "}
              <Link href={`/services/digital-marketing`} className="red-text">
                digital marketing services.
              </Link>{" "}
              See our{" "}
              <Link href={`/case-studies`} className="red-text">
                case studies.
              </Link>
            </p>
          </motion.div>
        </div>
        {faqs?.map((faq, index) => (
          <div
            className={`w-full rounded-3xl px-5 py-5 lg:px-10 lg:py-14 bg-[#F9F9F9] text-black`}
            key={index}
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full text-start flex items-start justify-between outline-none"
            >
              <h5 className="font-medium text-[17px] md:text-2xl lg:text-[35px] 2xl:text-[40px] w-[90%]">
                <span className="w-full leading-7 lg:leading-10">
                  {faq?.question}
                </span>
              </h5>

              <img
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
              {faq?.list && (
                <ul className="my-4 list-disc">
                  {faq?.list?.map((item, i) => {
                    return (
                      <li
                        key={i}
                        className="text-base lg:text-[20px] font-normal lg:w-[90%] flex items-center gap-2 my-1"
                      >
                        <GoDotFill />
                        <span>{item}</span>
                      </li>
                    );
                  })}
                </ul>
              )}
              {faq?.text && (
                <p className="text-base lg:text-[20px] font-normal lg:w-[90%]">
                  {faq?.text}
                </p>
              )}
            </motion.div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default CheyenneFaqs;
