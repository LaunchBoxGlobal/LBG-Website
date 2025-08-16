"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { WEB_APP_DEV_FAQS } from "@/constants/web-app-dvelopment/WebAppDevFaqs";
import Link from "next/link";

const MobileAppDevFaqs = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  return (
    <section
      className="w-full pb-10 pt-20 lg:pt-28 lg:pb-32 padding-x flex flex-col items-center"
      id="faqs"
    >
      <h2 className="section-heading text-center">
        Frequently Asked Questions
      </h2>
      <section
        id="faqs"
        className="w-full mt-10 lg:mt-24 flex flex-col items-start gap-4 lg:w-[90%]"
      >
        {WEB_APP_DEV_FAQS?.map((faq, index) => (
          <div
            className={`w-full rounded-3xl px-5 py-5 lg:px-10 lg:py-14 bg-[#F9F9F9] text-black`}
            key={index}
          >
            <button
              onClick={() => toggleFaq(index)}
              name="web app development faq"
              className="w-full text-start flex items-start justify-between outline-none"
            >
              <h5 className="font-medium text-[17px] md:text-2xl lg:text-[35px] 2xl:text-[40px] w-[90%] lg:leading-[1.1]">
                {faq?.question}
              </h5>

              <Image
                src={"/faq-arrow-icon.webp"}
                width={24}
                height={20}
                alt="arrow icon"
                loading="lazy"
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
            onClick={() => toggleFaq(WEB_APP_DEV_FAQS?.length)}
            name="web app development faq"
            className="w-full text-start flex items-start justify-between outline-none"
          >
            <h5 className="font-medium text-[17px] md:text-2xl lg:text-[35px] 2xl:text-[40px] w-[90%] lg:leading-[1.1]">
              What technologies are commonly used in web app development?
            </h5>

            <Image
              src={"/faq-arrow-icon.webp"}
              width={24}
              height={20}
              alt="arrow icon"
              loading="lazy"
              className={`${
                openFaq === WEB_APP_DEV_FAQS?.length
                  ? "scale-y-[-1]"
                  : "scale-y-[1]"
              } transition-all duration-700 w-[18px] h-[18px] lg:w-[24px] lg:h-[26px] lg:mt-3`}
            />
          </button>

          <motion.div
            initial={false}
            animate={{
              height: openFaq === WEB_APP_DEV_FAQS?.length ? "auto" : 0,
              opacity: openFaq === WEB_APP_DEV_FAQS?.length ? 1 : 0,
              marginTop: openFaq === WEB_APP_DEV_FAQS?.length ? "18px" : 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-base lg:text-[20px] font-normal lg:w-[90%]">
              Web apps often use HTML, CSS, JavaScript,{" "}
              <Link
                href={`https://launchboxglobal.com/development-technologies/react-native-app-development`}
                className="underline"
              >
                React
              </Link>
              , Angular, Node.js, and more. Our web app developers choose the
              right tech stack to match your project’s needs—whether it’s a fast
              prototype, a secure enterprise app, or a feature-rich platform.
            </p>
          </motion.div>
        </div>

        <div
          className={`w-full rounded-3xl px-5 py-5 lg:px-10 lg:py-14 bg-[#F9F9F9] text-black`}
        >
          <button
            onClick={() => toggleFaq(WEB_APP_DEV_FAQS?.length + 1)}
            name="web app development faq"
            className="w-full text-start flex items-start justify-between outline-none"
          >
            <h5 className="font-medium text-[17px] md:text-2xl lg:text-[35px] 2xl:text-[40px] w-[90%] lg:leading-[1.1]">
              Can you work with businesses outside New Jersey?
            </h5>

            <Image
              src={"/faq-arrow-icon.webp"}
              width={24}
              height={20}
              alt="arrow icon"
              loading="lazy"
              className={`${
                openFaq === WEB_APP_DEV_FAQS?.length + 1
                  ? "scale-y-[-1]"
                  : "scale-y-[1]"
              } transition-all duration-700 w-[18px] h-[18px] lg:w-[24px] lg:h-[26px] lg:mt-3`}
            />
          </button>

          <motion.div
            initial={false}
            animate={{
              height: openFaq === WEB_APP_DEV_FAQS?.length + 1 ? "auto" : 0,
              opacity: openFaq === WEB_APP_DEV_FAQS?.length + 1 ? 1 : 0,
              marginTop: openFaq === WEB_APP_DEV_FAQS?.length + 1 ? "18px" : 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-base lg:text-[20px] font-normal lg:w-[90%]">
              Absolutely. While we have a strong presence as a{" "}
              <Link
                href={`https://launchboxglobal.com/web-development-company-in-new-jersey`}
                className="underline"
              >
                web app development company in New Jersey,
              </Link>{" "}
              our client base spans across the globe. Regardless of your time
              zone or location, we deliver the same level of quality,
              transparency, and support as we do for local projects.
            </p>
          </motion.div>
        </div>
      </section>
    </section>
  );
};

export default MobileAppDevFaqs;
