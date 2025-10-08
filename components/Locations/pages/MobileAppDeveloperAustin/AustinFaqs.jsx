"use client";
import { MOBILE_APP_DEV_AUSTIN_FAQS } from "@/constants/locations/mobile-app-development-austin/mobile-app-dev-austin-faqs";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

const AustinFaqs = () => {
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
        {MOBILE_APP_DEV_AUSTIN_FAQS?.map((faq, index) => (
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
            </motion.div>
          </div>
        ))}

        <div
          className={`w-full rounded-3xl px-5 py-5 lg:px-10 lg:py-14 bg-[#F9F9F9] text-black`}
        >
          <button
            onClick={() => toggleFaq(MOBILE_APP_DEV_AUSTIN_FAQS?.length)}
            className="w-full text-start flex items-start justify-between outline-none"
          >
            <h5 className="font-medium text-[17px] md:text-2xl lg:text-[35px] 2xl:text-[40px] w-[90%]">
              <span className="w-full leading-7 lg:leading-10">
                Do you help with post-launch support and maintenance services?
              </span>
            </h5>

            <img
              src={"/faq-arrow-icon.png"}
              width={24}
              height={20}
              alt="arrow icon"
              className={`${
                openFaq === MOBILE_APP_DEV_AUSTIN_FAQS?.length
                  ? "scale-y-[-1]"
                  : "scale-y-[1]"
              } transition-all duration-700 w-[18px] h-[18px] lg:w-[24px] lg:h-[26px] lg:mt-3`}
            />
          </button>

          <motion.div
            initial={false}
            animate={{
              height:
                openFaq === MOBILE_APP_DEV_AUSTIN_FAQS?.length ? "auto" : 0,
              opacity: openFaq === MOBILE_APP_DEV_AUSTIN_FAQS?.length ? 1 : 0,
              marginTop:
                openFaq === MOBILE_APP_DEV_AUSTIN_FAQS?.length ? "18px" : 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-base lg:text-[20px] font-normal lg:w-[90%]">
              Yes. We provide ongoing maintenance, updates, bug fixes,
              performance optimization, and security enhancements. Our team
              ensures your app stays secure, efficient, and compatible with new
              OS versions, making us a trusted mobile app development company in
              Austin for long-term app support.{" "}
              <Link href={`/contact-us`} className="red-text">
                Contact us
              </Link>{" "}
              for more information.
            </p>
          </motion.div>
        </div>

        <div
          className={`w-full rounded-3xl px-5 py-5 lg:px-10 lg:py-14 bg-[#F9F9F9] text-black`}
        >
          <button
            onClick={() => toggleFaq(MOBILE_APP_DEV_AUSTIN_FAQS?.length + 1)}
            className="w-full text-start flex items-start justify-between outline-none"
          >
            <h5 className="font-medium text-[17px] md:text-2xl lg:text-[35px] 2xl:text-[40px] w-[90%]">
              <span className="w-full leading-7 lg:leading-10">
                How much experience do your app developers in Austin have in
                developing mobile apps?
              </span>
            </h5>

            <img
              src={"/faq-arrow-icon.png"}
              width={24}
              height={20}
              alt="arrow icon"
              className={`${
                openFaq === MOBILE_APP_DEV_AUSTIN_FAQS?.length + 1
                  ? "scale-y-[-1]"
                  : "scale-y-[1]"
              } transition-all duration-700 w-[18px] h-[18px] lg:w-[24px] lg:h-[26px] lg:mt-3`}
            />
          </button>

          <motion.div
            initial={false}
            animate={{
              height:
                openFaq === MOBILE_APP_DEV_AUSTIN_FAQS?.length + 1 ? "auto" : 0,
              opacity:
                openFaq === MOBILE_APP_DEV_AUSTIN_FAQS?.length + 1 ? 1 : 0,
              marginTop:
                openFaq === MOBILE_APP_DEV_AUSTIN_FAQS?.length + 1 ? "18px" : 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-base lg:text-[20px] font-normal lg:w-[90%]">
              Our app developers in Austin, Texas bring 5–10 years of experience
              across iOS, Android, and cross-platform development. They have
              worked in industries such as fintech, healthcare, e-commerce, and{" "}
              <Link href={`/on-demand-talent`} className="red-text">
                on-demand
              </Link>{" "}
              services, delivering feature-rich apps that meet diverse business
              requirements.
            </p>
          </motion.div>
        </div>

        <div
          className={`w-full rounded-3xl px-5 py-5 lg:px-10 lg:py-14 bg-[#F9F9F9] text-black`}
        >
          <button
            onClick={() => toggleFaq(MOBILE_APP_DEV_AUSTIN_FAQS?.length + 2)}
            className="w-full text-start flex items-start justify-between outline-none"
          >
            <h5 className="font-medium text-[17px] md:text-2xl lg:text-[35px] 2xl:text-[40px] w-[90%]">
              <span className="w-full leading-7 lg:leading-10">
                In which areas do you specialize in mobile app development?
              </span>
            </h5>

            <img
              src={"/faq-arrow-icon.png"}
              width={24}
              height={20}
              alt="arrow icon"
              className={`${
                openFaq === MOBILE_APP_DEV_AUSTIN_FAQS?.length + 2
                  ? "scale-y-[-1]"
                  : "scale-y-[1]"
              } transition-all duration-700 w-[18px] h-[18px] lg:w-[24px] lg:h-[26px] lg:mt-3`}
            />
          </button>

          <motion.div
            initial={false}
            animate={{
              height:
                openFaq === MOBILE_APP_DEV_AUSTIN_FAQS?.length + 2 ? "auto" : 0,
              opacity:
                openFaq === MOBILE_APP_DEV_AUSTIN_FAQS?.length + 2 ? 1 : 0,
              marginTop:
                openFaq === MOBILE_APP_DEV_AUSTIN_FAQS?.length + 2 ? "18px" : 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-base lg:text-[20px] font-normal lg:w-[90%]">
              We specialize in iOS, Android, and cross-platform apps across
              industries such as healthcare, fintech, eCommerce, education,
              travel, and SaaS. You can explore location-specific services like
              mobile app development in{" "}
              <Link
                href={`https://launchboxglobal.com/mobile-app-developers-in-houston`}
                className="red-text"
              >
                Houston
              </Link>
              ,{" "}
              <Link
                href={`https://launchboxglobal.com/mobile-app-developer-in-florida`}
                className="red-text"
              >
                Florida
              </Link>
              , and{" "}
              <Link
                href={`https://launchboxglobal.com/mobile-app-development-company-in-texas`}
                className="red-text"
              >
                Texas
              </Link>
              , to find solutions built for your business needs.
            </p>
          </motion.div>
        </div>
      </section>
    </section>
  );
};

export default AustinFaqs;
