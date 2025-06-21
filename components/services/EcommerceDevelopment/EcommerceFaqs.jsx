"use client";
import { ECOMMERCE_FAQS } from "@/constants/ecommerce-develpment/ecommerce-faqs";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const EcommerceFaqs = () => {
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
        {ECOMMERCE_FAQS?.map((faq, index) => (
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
            onClick={() => toggleFaq(ECOMMERCE_FAQS.length)}
            className="w-full text-start flex items-start justify-between outline-none"
          >
            <h3 className="font-medium text-[17px] md:text-2xl lg:text-[35px] 2xl:text-[40px] w-[90%]">
              How does Launchbox Global ensure that eCommerce platforms are
              optimized for digital marketing success?
            </h3>

            <Image
              src={"/faq-arrow-icon.png"}
              width={24}
              height={20}
              alt="arrow icon"
              className={`${
                openFaq === ECOMMERCE_FAQS.length
                  ? "scale-y-[-1]"
                  : "scale-y-[1]"
              } transition-all duration-700 w-[18px] h-[18px] lg:w-[24px] lg:h-[26px] xl:mt-1.5`}
            />
          </button>

          <motion.div
            initial={false}
            animate={{
              height: openFaq === ECOMMERCE_FAQS.length ? "auto" : 0,
              opacity: openFaq === ECOMMERCE_FAQS.length ? 1 : 0,
              marginTop: openFaq === ECOMMERCE_FAQS.length ? "18px" : 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-base lg:text-[20px] font-normal lg:w-[90%]">
              We don’t just build high-performing eCommerce platforms—we
              engineer them to support your full digital marketing strategy from
              day one. Our development approach includes SEO-friendly
              architecture, fast load speeds, conversion-optimized design, and
              integrations with tools like Google Analytics, Meta Pixel, and
              email automation systems. To maximize your store’s visibility and
              revenue, we recommend pairing your build with our expert{" "}
              <Link href={`/services/digital-marketing`} className="red-text">
                Digital Marketing services
              </Link>
              , which drive targeted traffic and measurable ROI
            </p>
          </motion.div>
        </div>
      </section>
    </section>
  );
};

export default EcommerceFaqs;

ECOMMERCE_FAQS;
