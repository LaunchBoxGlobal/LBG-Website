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
        <div
          className={`w-full rounded-3xl px-5 py-5 lg:px-10 lg:py-14 bg-[#F9F9F9] text-black`}
        >
          <button
            onClick={() => toggleFaq(1)}
            className="w-full text-start flex items-start justify-between outline-none"
          >
            <h5 className="font-medium text-[17px] md:text-2xl lg:text-[35px] 2xl:text-[40px] w-[90%]">
              <span className="w-full leading-[1] lg:leading-[1.1]">
                Who needs digital marketing services?
              </span>
            </h5>

            <Image
              src={"/faq-arrow-icon.png"}
              width={24}
              height={20}
              alt="arrow icon"
              className={`${
                openFaq === 1 ? "scale-y-[-1]" : "scale-y-[1]"
              } transition-all duration-700 w-[18px] h-[18px] lg:w-[24px] lg:h-[26px] lg:mt-3`}
            />
          </button>

          <motion.div
            initial={false}
            animate={{
              height: openFaq === 1 ? "auto" : 0,
              opacity: openFaq === 1 ? 1 : 0,
              marginTop: openFaq === 1 ? "18px" : 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-base lg:text-[20px] font-normal lg:w-[90%]">
              Digital Marketing services are essential for anyone looking to
              grow online. Startups, local businesses, and even larger companies
              benefit from increased visibility, better engagement, and higher
              sales. These services help you reach your audience efficiently and
              compete effectively in today’s digital marketplace. We provide
              Digital marketing services for small business and enterprises etc.
            </p>
          </motion.div>
        </div>
        {/* 2 */}
        <div
          className={`w-full rounded-3xl px-5 py-5 lg:px-10 lg:py-14 bg-[#F9F9F9] text-black`}
        >
          <button
            onClick={() => toggleFaq(2)}
            className="w-full text-start flex items-start justify-between outline-none"
          >
            <h5 className="font-medium text-[17px] md:text-2xl lg:text-[35px] 2xl:text-[40px] w-[90%]">
              <span className="w-full leading-[1] lg:leading-[1.1]">
                What are digital marketing services?
              </span>
            </h5>

            <Image
              src={"/faq-arrow-icon.png"}
              width={24}
              height={20}
              alt="arrow icon"
              className={`${
                openFaq === 1 ? "scale-y-[-1]" : "scale-y-[1]"
              } transition-all duration-700 w-[18px] h-[18px] lg:w-[24px] lg:h-[26px] lg:mt-3`}
            />
          </button>

          <motion.div
            initial={false}
            animate={{
              height: openFaq === 2 ? "auto" : 0,
              opacity: openFaq === 2 ? 1 : 0,
              marginTop: openFaq === 2 ? "18px" : 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-base lg:text-[20px] font-normal lg:w-[90%]">
              Digital marketing services help businesses promote products and
              services online. They cover multiple strategies to boost
              visibility, engagement, and conversions. Key services include:
            </p>
            <ul className="mt-5 list-disc pl-5">
              <li className="text-base lg:text-[20px] font-normal lg:w-[90%]">
                <span className="font-medium">Professional SEO services</span>{" "}
                for organic ranking growth
              </li>
              <li className="text-base lg:text-[20px] font-normal lg:w-[90%]">
                <span className="font-medium">PPC management services</span> to
                optimize ad campaigns effectively
              </li>
            </ul>
          </motion.div>
        </div>
        {/* 3 */}
        <div
          className={`w-full rounded-3xl px-5 py-5 lg:px-10 lg:py-14 bg-[#F9F9F9] text-black`}
        >
          <button
            onClick={() => toggleFaq(3)}
            className="w-full text-start flex items-start justify-between outline-none"
          >
            <h5 className="font-medium text-[17px] md:text-2xl lg:text-[35px] 2xl:text-[40px] w-[90%]">
              <span className="w-full leading-[1] lg:leading-[1.1]">
                Which tool is used for digital marketing?
              </span>
            </h5>

            <Image
              src={"/faq-arrow-icon.png"}
              width={24}
              height={20}
              alt="arrow icon"
              className={`${
                openFaq === 1 ? "scale-y-[-1]" : "scale-y-[1]"
              } transition-all duration-700 w-[18px] h-[18px] lg:w-[24px] lg:h-[26px] lg:mt-3`}
            />
          </button>

          <motion.div
            initial={false}
            animate={{
              height: openFaq === 3 ? "auto" : 0,
              opacity: openFaq === 3 ? 1 : 0,
              marginTop: openFaq === 3 ? "18px" : 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-base lg:text-[20px] font-normal lg:w-[90%]">
              Digital marketing relies on a variety of tools depending on your
              goals. Popular options include Google Analytics for tracking,
              SEMrush for SEO, HubSpot for marketing automation, Canva for
              design, and social media platforms’ native tools. These help
              manage campaigns, measure performance, and optimize strategies
              effectively. You can{" "}
              <Link href={`/contact-us`} className="red-text">
                talk to our experts
              </Link>{" "}
              for more details.
            </p>
          </motion.div>
        </div>
        {/* 4 */}
        <div
          className={`w-full rounded-3xl px-5 py-5 lg:px-10 lg:py-14 bg-[#F9F9F9] text-black`}
        >
          <button
            onClick={() => toggleFaq(4)}
            className="w-full text-start flex items-start justify-between outline-none"
          >
            <h5 className="font-medium text-[17px] md:text-2xl lg:text-[35px] 2xl:text-[40px] w-[90%]">
              <span className="w-full leading-[1] lg:leading-[1.1]">
                Why is social media marketing important?
              </span>
            </h5>

            <Image
              src={"/faq-arrow-icon.png"}
              width={24}
              height={20}
              alt="arrow icon"
              className={`${
                openFaq === 1 ? "scale-y-[-1]" : "scale-y-[1]"
              } transition-all duration-700 w-[18px] h-[18px] lg:w-[24px] lg:h-[26px] lg:mt-3`}
            />
          </button>

          <motion.div
            initial={false}
            animate={{
              height: openFaq === 4 ? "auto" : 0,
              opacity: openFaq === 4 ? 1 : 0,
              marginTop: openFaq === 4 ? "18px" : 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-base lg:text-[20px] font-normal lg:w-[90%]">
              A social media marketing service helps businesses connect directly
              with their audience. It builds brand awareness, drives traffic,
              and boosts sales. By engaging users on platforms like Instagram,
              Facebook, and LinkedIn, you can create loyal followers and
              meaningful interactions that support long-term growth.
            </p>
          </motion.div>
        </div>
        {/* 5 */}
        <div
          className={`w-full rounded-3xl px-5 py-5 lg:px-10 lg:py-14 bg-[#F9F9F9] text-black`}
        >
          <button
            onClick={() => toggleFaq(5)}
            className="w-full text-start flex items-start justify-between outline-none"
          >
            <h5 className="font-medium text-[17px] md:text-2xl lg:text-[35px] 2xl:text-[40px] w-[90%]">
              <span className="w-full leading-[1] lg:leading-[1.1]">
                How does digital marketing work?
              </span>
            </h5>

            <Image
              src={"/faq-arrow-icon.png"}
              width={24}
              height={20}
              alt="arrow icon"
              className={`${
                openFaq === 1 ? "scale-y-[-1]" : "scale-y-[1]"
              } transition-all duration-700 w-[18px] h-[18px] lg:w-[24px] lg:h-[26px] lg:mt-3`}
            />
          </button>

          <motion.div
            initial={false}
            animate={{
              height: openFaq === 5 ? "auto" : 0,
              opacity: openFaq === 5 ? 1 : 0,
              marginTop: openFaq === 5 ? "18px" : 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-base lg:text-[20px] font-normal lg:w-[90%]">
              Digital marketing works by promoting products and services across
              online channels to reach your target audience. Key steps include:
            </p>
            <ul className="mt-5 list-disc pl-5">
              <li className="text-base lg:text-[20px] font-normal lg:w-[90%]">
                Defining goals and target customers
              </li>
              <li className="text-base lg:text-[20px] font-normal lg:w-[90%]">
                Creating engaging content and campaigns
              </li>
              <li className="text-base lg:text-[20px] font-normal lg:w-[90%]">
                Utilizing SEO, PPC, and email strategies
              </li>
              <li className="text-base lg:text-[20px] font-normal lg:w-[90%]">
                Monitoring results and optimizing for better performance
              </li>
            </ul>
          </motion.div>
        </div>
        {/* 6 */}
        <div
          className={`w-full rounded-3xl px-5 py-5 lg:px-10 lg:py-14 bg-[#F9F9F9] text-black`}
        >
          <button
            onClick={() => toggleFaq(6)}
            className="w-full text-start flex items-start justify-between outline-none"
          >
            <h5 className="font-medium text-[17px] md:text-2xl lg:text-[35px] 2xl:text-[40px] w-[90%]">
              <span className="w-full leading-[1] lg:leading-[1.1]">
                Do you provide digital marketing services in Wyoming and
                Cheyenne specifically?
              </span>
            </h5>

            <Image
              src={"/faq-arrow-icon.png"}
              width={24}
              height={20}
              alt="arrow icon"
              className={`${
                openFaq === 1 ? "scale-y-[-1]" : "scale-y-[1]"
              } transition-all duration-700 w-[18px] h-[18px] lg:w-[24px] lg:h-[26px] lg:mt-3`}
            />
          </button>

          <motion.div
            initial={false}
            animate={{
              height: openFaq === 6 ? "auto" : 0,
              opacity: openFaq === 6 ? 1 : 0,
              marginTop: openFaq === 6 ? "18px" : 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-base lg:text-[20px] font-normal lg:w-[90%]">
              Yes! We provide customized digital marketing services in Wyoming
              and Cheyenne. Check out our{" "}
              <Link href={`/wyoming-digital-marketing`} className="red-text">
                Digital Marketing Company in Wyoming{" "}
              </Link>
              and{" "}
              <Link href={`/cheyenne-seo-company`} className="red-text">
                SEO Company in Cheyenne
              </Link>{" "}
              pages to learn how we help local businesses grow online with
              customized strategies.
            </p>
          </motion.div>
        </div>
      </section>
    </section>
  );
};

export default DigitalMarketingFaqs;
