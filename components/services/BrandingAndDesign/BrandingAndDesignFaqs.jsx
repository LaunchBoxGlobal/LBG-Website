"use client";
import { BRANDING_AND_DESIGN_FAQS } from "@/constants/branding-and-design/branding-and-design-faqs";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const BrandingAndDesignFaqs = () => {
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
        {/* 1 */}
        <div className="w-full rounded-3xl px-5 py-5 lg:px-10 lg:py-14 bg-[#F9F9F9] text-black">
          <button
            onClick={() => toggleFaq(1)}
            className="w-full text-start flex items-start justify-between outline-none"
          >
            <h3 className="font-medium text-[17px] md:text-2xl lg:text-[35px] 2xl:text-[40px] w-[90%]">
              What comes under branding design?
            </h3>

            <Image
              src={"/faq-arrow-icon.png"}
              width={24}
              height={20}
              alt="arrow icon"
              className={`${
                openFaq === 1 ? "scale-y-[-1]" : "scale-y-[1]"
              } transition-all duration-700 w-[18px] h-[18px] lg:w-[24px] lg:h-[26px] xl:mt-1.5`}
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
              Branding design includes all visual and strategic elements that
              represent your business. From logo, typography, and color palette
              to digital assets, packaging, and promotional materials, it
              ensures a consistent identity that resonates with your audience
              and communicates your brand’s values effectively.
            </p>
          </motion.div>
        </div>
        {/* 2 */}
        <div className="w-full rounded-3xl px-5 py-5 lg:px-10 lg:py-14 bg-[#F9F9F9] text-black">
          <button
            onClick={() => toggleFaq(2)}
            className="w-full text-start flex items-start justify-between outline-none"
          >
            <h3 className="font-medium text-[17px] md:text-2xl lg:text-[35px] 2xl:text-[40px] w-[90%]">
              Is branding worth it?
            </h3>

            <Image
              src={"/faq-arrow-icon.png"}
              width={24}
              height={20}
              alt="arrow icon"
              className={`${
                openFaq === 2 ? "scale-y-[-1]" : "scale-y-[1]"
              } transition-all duration-700 w-[18px] h-[18px] lg:w-[24px] lg:h-[26px] xl:mt-1.5`}
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
              Absolutely! Strong branding differentiates your business, builds
              trust, and drives customer loyalty. Every interaction reflects
              your identity. Ready to elevate your brand? Book a{" "}
              <Link href={`/contact-us`} className="red-text">
                free consultation
              </Link>{" "}
              with our experts and see how strategic design can transform your
              business.
            </p>
          </motion.div>
        </div>
        {/* 3 */}
        <div className="w-full rounded-3xl px-5 py-5 lg:px-10 lg:py-14 bg-[#F9F9F9] text-black">
          <button
            onClick={() => toggleFaq(3)}
            className="w-full text-start flex items-start justify-between outline-none"
          >
            <h3 className="font-medium text-[17px] md:text-2xl lg:text-[35px] 2xl:text-[40px] w-[90%]">
              What do you mean by branding services?
            </h3>

            <Image
              src={"/faq-arrow-icon.png"}
              width={24}
              height={20}
              alt="arrow icon"
              className={`${
                openFaq === 3 ? "scale-y-[-1]" : "scale-y-[1]"
              } transition-all duration-700 w-[18px] h-[18px] lg:w-[24px] lg:h-[26px] xl:mt-1.5`}
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
              Our branding services cover everything your business needs to
              shine:
            </p>
            <ul className="mt-5 space-y-2 pl-5 list-disc">
              {[
                "Brand Identity Design",
                "Brand Strategy & Positioning",
                "Brand Consultation & Planning",
                "Marketing & Social Media Creatives",
                "Pitch Decks & Business Collateral",
                "UI/UX Design",
                "Website & App Visual Design",
                "Packaging & Product Design",
                "Motion Graphics & Brand Animation",
              ]?.map((p, i) => {
                return (
                  <li
                    className="text-base lg:text-[20px] font-normal lg:w-[90%]"
                    key={i}
                  >
                    {p}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>
        {/* 4 */}
        <div className="w-full rounded-3xl px-5 py-5 lg:px-10 lg:py-14 bg-[#F9F9F9] text-black">
          <button
            onClick={() => toggleFaq(4)}
            className="w-full text-start flex items-start justify-between outline-none"
          >
            <h3 className="font-medium text-[17px] md:text-2xl lg:text-[35px] 2xl:text-[40px] w-[90%]">
              Are branding and digital marketing the same?
            </h3>

            <Image
              src={"/faq-arrow-icon.png"}
              width={24}
              height={20}
              alt="arrow icon"
              className={`${
                openFaq === 4 ? "scale-y-[-1]" : "scale-y-[1]"
              } transition-all duration-700 w-[18px] h-[18px] lg:w-[24px] lg:h-[26px] xl:mt-1.5`}
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
              Not quite. Branding focuses on creating your identity, while
              digital marketing spreads your message to your audience. Together,
              they reinforce each other. See how we combine both for maximum
              impact on our{" "}
              <Link href={`/services/digital-marketing`} className="red-text">
                Digital Marketing
              </Link>{" "}
              page.
            </p>
          </motion.div>
        </div>
        {/* 5 */}
        <div className="w-full rounded-3xl px-5 py-5 lg:px-10 lg:py-14 bg-[#F9F9F9] text-black">
          <button
            onClick={() => toggleFaq(5)}
            className="w-full text-start flex items-start justify-between outline-none"
          >
            <h3 className="font-medium text-[17px] md:text-2xl lg:text-[35px] 2xl:text-[40px] w-[90%]">
              What is the process of branding and designing?
            </h3>

            <Image
              src={"/faq-arrow-icon.png"}
              width={24}
              height={20}
              alt="arrow icon"
              className={`${
                openFaq === 5 ? "scale-y-[-1]" : "scale-y-[1]"
              } transition-all duration-700 w-[18px] h-[18px] lg:w-[24px] lg:h-[26px] xl:mt-1.5`}
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
              Branding and designing are a structured journey to define,
              visualize, and communicate your identity. The process usually
              includes:
            </p>
            <ul className="mt-5 space-y-2 pl-5 list-disc">
              {[
                "Research and analysis of brand, audience, and competitors",
                "Concept development and design drafts",
                "Feedback, refinements, and approval",
                "Final delivery of brand assets and guidelines",
              ]?.map((p, i) => {
                return (
                  <li
                    className="text-base lg:text-[20px] font-normal lg:w-[90%]"
                    key={i}
                  >
                    {p}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>
        {/* 6 */}
        <div className="w-full rounded-3xl px-5 py-5 lg:px-10 lg:py-14 bg-[#F9F9F9] text-black">
          <button
            onClick={() => toggleFaq(6)}
            className="w-full text-start flex items-start justify-between outline-none"
          >
            <h3 className="font-medium text-[17px] md:text-2xl lg:text-[35px] 2xl:text-[40px] w-[90%]">
              Why is branding crucial for online stores?
            </h3>

            <Image
              src={"/faq-arrow-icon.png"}
              width={24}
              height={20}
              alt="arrow icon"
              className={`${
                openFaq === 6 ? "scale-y-[-1]" : "scale-y-[1]"
              } transition-all duration-700 w-[18px] h-[18px] lg:w-[24px] lg:h-[26px] xl:mt-1.5`}
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
              Strong branding sets your ecommerce business apart, builds trust,
              and encourages repeat purchases. From website visuals to packaging
              and promotional graphics, a consistent brand identity drives
              conversions and customer loyalty. Explore our{" "}
              <Link
                href={`/services/ecommerce-development`}
                className="red-text"
              >
                Ecommerce Development
              </Link>{" "}
              service.
            </p>
          </motion.div>
        </div>
      </section>
    </section>
  );
};

export default BrandingAndDesignFaqs;
