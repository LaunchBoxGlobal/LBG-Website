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
                <span className="w-full leading-[1.1]">{faq?.question}</span>
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
            onClick={() => toggleFaq(ECOMMERCE_FAQS.length + 1)}
            className="w-full text-start flex items-start justify-between outline-none"
          >
            <h3 className="font-medium text-[17px] md:text-2xl lg:text-[35px] 2xl:text-[40px] w-[90%]">
              <span className="leading-[1.1]">
                How to make a website to sell stuff?
              </span>
            </h3>

            <Image
              src={"/faq-arrow-icon.png"}
              width={24}
              height={20}
              alt="arrow icon"
              className={`${
                openFaq === ECOMMERCE_FAQS.length + 1
                  ? "scale-y-[-1]"
                  : "scale-y-[1]"
              } transition-all duration-700 w-[18px] h-[18px] lg:w-[24px] lg:h-[26px] xl:mt-1.5`}
            />
          </button>

          <motion.div
            initial={false}
            animate={{
              height: openFaq === ECOMMERCE_FAQS.length + 1 ? "auto" : 0,
              opacity: openFaq === ECOMMERCE_FAQS.length + 1 ? 1 : 0,
              marginTop: openFaq === ECOMMERCE_FAQS.length + 1 ? "18px" : 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-base lg:text-[20px] font-normal lg:w-[90%]">
              Creating a website to sell items requires planning, design, and
              the right tools. Ecommerce tools simplify product management,
              payment, and shipping while enhancing user experience and boosting
              sales.
            </p>
            <p className="text-base lg:text-[20px] font-medium lg:w-[90%] my-3">
              Steps:
            </p>
            <ul className="list-disc pl-5">
              {[
                "Choose suitable ecommerce tools",
                "Design clear product pages",
                "Set up secure checkout",
                "Manage inventory and shipping",
              ]?.map((ele, index) => {
                return (
                  <li
                    className="text-base lg:text-[20px] font-normal lg:w-[90%]"
                    key={index}
                  >
                    {ele}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>
        <div className="w-full rounded-3xl px-5 py-5 lg:px-10 lg:py-14 bg-[#F9F9F9] text-black">
          <button
            onClick={() => toggleFaq(ECOMMERCE_FAQS.length + 2)}
            className="w-full text-start flex items-start justify-between outline-none"
          >
            <h3 className="font-medium text-[17px] md:text-2xl lg:text-[35px] 2xl:text-[40px] w-[90%]">
              <span className="leading-[1.1]">
                How to make a website to sell products?
              </span>
            </h3>

            <Image
              src={"/faq-arrow-icon.png"}
              width={24}
              height={20}
              alt="arrow icon"
              className={`${
                openFaq === ECOMMERCE_FAQS.length + 2
                  ? "scale-y-[-1]"
                  : "scale-y-[1]"
              } transition-all duration-700 w-[18px] h-[18px] lg:w-[24px] lg:h-[26px] xl:mt-1.5`}
            />
          </button>

          <motion.div
            initial={false}
            animate={{
              height: openFaq === ECOMMERCE_FAQS.length + 2 ? "auto" : 0,
              opacity: openFaq === ECOMMERCE_FAQS.length + 2 ? 1 : 0,
              marginTop: openFaq === ECOMMERCE_FAQS.length + 2 ? "18px" : 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-base lg:text-[20px] font-normal lg:w-[90%]">
              A website to sell products can be built using platforms like
              Shopify. Shopify development ensures responsive design, secure
              payments, and smooth customer experiences, making it easier to
              launch and manage your online store.
            </p>
            <p className="text-base lg:text-[20px] font-medium lg:w-[90%] my-3">
              Steps:
            </p>
            <ul className="list-disc pl-5">
              {[
                "Select Shopify for development",
                "Create product listings and categories",
                "Enable secure payment gateways",
                "Optimize for mobile and speed",
              ]?.map((ele, index) => {
                return (
                  <li
                    className="text-base lg:text-[20px] font-normal lg:w-[90%]"
                    key={index}
                  >
                    {ele}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>
        <div className="w-full rounded-3xl px-5 py-5 lg:px-10 lg:py-14 bg-[#F9F9F9] text-black">
          <button
            onClick={() => toggleFaq(ECOMMERCE_FAQS.length + 3)}
            className="w-full text-start flex items-start justify-between outline-none"
          >
            <h3 className="font-medium text-[17px] md:text-2xl lg:text-[35px] 2xl:text-[40px] w-[90%]">
              <span className="leading-[1.1]">
                What technologies do you use for ecommerce app development?
              </span>
            </h3>

            <Image
              src={"/faq-arrow-icon.png"}
              width={24}
              height={20}
              alt="arrow icon"
              className={`${
                openFaq === ECOMMERCE_FAQS.length + 3
                  ? "scale-y-[-1]"
                  : "scale-y-[1]"
              } transition-all duration-700 w-[18px] h-[18px] lg:w-[24px] lg:h-[26px] xl:mt-1.5`}
            />
          </button>

          <motion.div
            initial={false}
            animate={{
              height: openFaq === ECOMMERCE_FAQS.length + 3 ? "auto" : 0,
              opacity: openFaq === ECOMMERCE_FAQS.length + 3 ? 1 : 0,
              marginTop: openFaq === ECOMMERCE_FAQS.length + 3 ? "18px" : 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-base lg:text-[20px] font-normal lg:w-[90%]">
              As a leading e-commerce agency, we use a range of technologies to
              build high-performing apps:{" "}
              <Link
                href={`https://launchboxglobal.com/development-technologies/react-native-app-development`}
                className="underline"
              >
                Native
              </Link>
              ,{" "}
              <Link
                href={`https://launchboxglobal.com/development-technologies/flutter-app-development`}
                className="underline"
              >
                Flutter
              </Link>
              ,{" "}
              <Link
                href={`https://launchboxglobal.com/development-technologies/swift-app-development`}
                className="underline"
              >
                Swift
              </Link>
              ,{" "}
              <Link
                href={`https://launchboxglobal.com/development-technologies/ionic-app-development`}
                className="underline"
              >
                Ionic
              </Link>{" "}
              App Development, and more. This ensures reliable, secure, and
              user-friendly mobile shopping experiences.
            </p>
          </motion.div>
        </div>
      </section>
    </section>
  );
};

export default EcommerceFaqs;

ECOMMERCE_FAQS;
