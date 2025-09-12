"use client";
import { HEALTHCARE_FAQS } from "@/constants/industries/healthcare-page-content/healthcare-faqs";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const HealthcareFaqs = () => {
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
        {HEALTHCARE_FAQS?.map((faq, index) => (
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
        <div
          className={`w-full rounded-3xl px-5 py-5 lg:px-10 lg:py-14 bg-[#F9F9F9] text-black`}
        >
          <button
            onClick={() => toggleFaq(HEALTHCARE_FAQS + 1)}
            className="w-full text-start flex items-start justify-between outline-none"
          >
            <h5 className="font-medium text-[17px] md:text-2xl lg:text-[35px] 2xl:text-[40px] w-[90%]">
              <span className="w-full leading-7 lg:leading-10">
                Do you offer custom solutions or use pre-built templates?
              </span>
            </h5>

            <Image
              src={"/faq-arrow-icon.png"}
              width={24}
              height={20}
              alt="arrow icon"
              className={`${
                openFaq === HEALTHCARE_FAQS + 1 ? "scale-y-[-1]" : "scale-y-[1]"
              } transition-all duration-700 w-[18px] h-[18px] lg:w-[24px] lg:h-[26px] lg:mt-3`}
            />
          </button>

          <motion.div
            initial={false}
            animate={{
              height: openFaq === HEALTHCARE_FAQS + 1 ? "auto" : 0,
              opacity: openFaq === HEALTHCARE_FAQS + 1 ? 1 : 0,
              marginTop: openFaq === HEALTHCARE_FAQS + 1 ? "18px" : 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-base lg:text-[20px] font-normal lg:w-[90%]">
              We prioritize{" "}
              <Link
                href={`https://launchboxglobal.com/services/custom-software-development`}
                className="red-text"
              >
                custom built solutions
              </Link>{" "}
              tailored to the unique needs of each healthcare provider or the
              startup. Templates may reduce the cost but often limit the
              scalability, compliance and innovation. Our approach makes sure
              that every application is designed to address the specific
              workflows, compliance requirements and patient engagement goals.
              With the focus on flexibility, our solutions would grow alongside
              your organization, enabling long term adaptability and sustaining
              the value.
            </p>
          </motion.div>
        </div>

        <div
          className={`w-full rounded-3xl px-5 py-5 lg:px-10 lg:py-14 bg-[#F9F9F9] text-black`}
        >
          <button
            onClick={() => toggleFaq(HEALTHCARE_FAQS + 2)}
            className="w-full text-start flex items-start justify-between outline-none"
          >
            <h5 className="font-medium text-[17px] md:text-2xl lg:text-[35px] 2xl:text-[40px] w-[90%]">
              <span className="w-full leading-7 lg:leading-10">
                Do you work with healthcare startups as well as hospitals?
              </span>
            </h5>

            <Image
              src={"/faq-arrow-icon.png"}
              width={24}
              height={20}
              alt="arrow icon"
              className={`${
                openFaq === HEALTHCARE_FAQS + 2 ? "scale-y-[-1]" : "scale-y-[1]"
              } transition-all duration-700 w-[18px] h-[18px] lg:w-[24px] lg:h-[26px] lg:mt-3`}
            />
          </button>

          <motion.div
            initial={false}
            animate={{
              height: openFaq === HEALTHCARE_FAQS + 2 ? "auto" : 0,
              opacity: openFaq === HEALTHCARE_FAQS + 2 ? 1 : 0,
              marginTop: openFaq === HEALTHCARE_FAQS + 2 ? "18px" : 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-base lg:text-[20px] font-normal lg:w-[90%]">
              Absolutely. Our healthcare{" "}
              <Link
                href={`https://launchboxglobal.com/services/mobile-app-development`}
                className="red-text"
              >
                app development company
              </Link>{" "}
              works with both emerging startups and established hospital
              networks. For startups, we bring guidance on compliance,
              scalability, and cost-effective MVP development. For hospitals and
              enterprises, we deliver full-scale healthcare application
              development services that integrate into complex environments. No
              matter the size, we tailor our solutions to meet organizational
              goals, regulatory demands, and patient needs while ensuring
              long-term growth potential.
            </p>
          </motion.div>
        </div>
      </section>
    </section>
  );
};

export default HealthcareFaqs;
