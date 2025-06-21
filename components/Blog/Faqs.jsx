"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { BLOG_FAQS } from "@/constants/blogs/blog01";

const Faqs = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  return (
    <section id="faqs" className="w-full flex flex-col items-center">
      <h2 className="text-[8.6vw] md:text-[5.5vw] lg:text-[60px] font-bold tracking-tight text-center">
        Frequently Asked <span className="red-text">Questions</span>
      </h2>
      <section
        id="faqs"
        className="w-full mt-10 lg:mt-24 flex flex-col items-start gap-4 lg:w-[90%]"
      >
        {BLOG_FAQS?.map((faq, index) => (
          <div
            className={`w-full rounded-3xl px-5 py-5 lg:px-10 lg:py-14 bg-[#F9F9F9] text-black`}
            key={index}
          >
            <button
              onClick={() => toggleFaq(index)}
              name={faq?.question}
              className="w-full text-start flex items-center justify-between outline-none"
            >
              <h3 className="font-medium text-[17px] md:text-2xl lg:text-[35px] 2xl:text-[40px] w-[90%]">
                <span className="w-full leading-7 lg:leading-10">
                  {faq?.question}
                </span>
              </h3>

              <Image
                src={"/faq-arrow-icon.webp"}
                width={24}
                height={20}
                alt="faq arrow icon"
                loading="lazy"
                className={`${
                  openFaq === index ? "scale-y-[-1]" : "scale-y-[1]"
                } transition-all duration-700 w-[18px] h-[18px] lg:w-[24px] lg:h-[26px]`}
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

              <ul className="w-full list-disc flex flex-col items-start gap-1 mt-3">
                {faq?.list?.map((l, i) => {
                  return (
                    <li key={i} className="list-disc">
                      {l}
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Faqs;
