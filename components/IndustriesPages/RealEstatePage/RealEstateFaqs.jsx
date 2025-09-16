"use client";
import { REAL_ESTATE_FAQS } from "@/constants/industries/real-estate-content/real-estate-faqs";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const RealEstateFaqs = () => {
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
        {REAL_ESTATE_FAQS?.map((faq, index) => (
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
            onClick={() => toggleFaq(REAL_ESTATE_FAQS?.length)}
            className="w-full text-start flex items-start justify-between outline-none"
          >
            <h5 className="font-medium text-[17px] md:text-2xl lg:text-[35px] 2xl:text-[40px] w-[90%]">
              <span className="w-full leading-7 lg:leading-10">
                Do you build MLS/IDX-integrated real estate apps?
              </span>
            </h5>

            <Image
              src={"/faq-arrow-icon.png"}
              width={24}
              height={20}
              alt="arrow icon"
              className={`${
                openFaq === REAL_ESTATE_FAQS?.length
                  ? "scale-y-[-1]"
                  : "scale-y-[1]"
              } transition-all duration-700 w-[18px] h-[18px] lg:w-[24px] lg:h-[26px] lg:mt-3`}
            />
          </button>

          <motion.div
            initial={false}
            animate={{
              height: openFaq === REAL_ESTATE_FAQS?.length ? "auto" : 0,
              opacity: openFaq === REAL_ESTATE_FAQS?.length ? 1 : 0,
              marginTop: openFaq === REAL_ESTATE_FAQS?.length ? "18px" : 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-base lg:text-[20px] font-normal lg:w-[90%]">
              Absolutely! Our team specializes in creating real estate apps with
              MLS/IDX integrations, giving agents and brokers real-time access
              to property listings. By combining our expertise in{" "}
              <Link
                href={`https://launchboxglobal.com/services/custom-software-development`}
                className="red-text"
              >
                custom software development
              </Link>{" "}
              with industry best practices, we ensure seamless, reliable, and
              user-friendly solutions. This integration makes it easier to
              manage large inventories, provide accurate property details, and
              keep listings up to date automatically. If you’re looking for a
              tailored solution that fits your specific business needs, don’t
              hesitate to{" "}
              <Link href={`/contact-us`} className="red-text">
                contact us
              </Link>{" "}
              to discuss your project.
            </p>
          </motion.div>
        </div>

        <div
          className={`w-full rounded-3xl px-5 py-5 lg:px-10 lg:py-14 bg-[#F9F9F9] text-black`}
        >
          <button
            onClick={() => toggleFaq(REAL_ESTATE_FAQS?.length + 1)}
            className="w-full text-start flex items-start justify-between outline-none"
          >
            <h5 className="font-medium text-[17px] md:text-2xl lg:text-[35px] 2xl:text-[40px] w-[90%]">
              <span className="w-full leading-7 lg:leading-10">
                Do you offer MVPs for proptech startups?
              </span>
            </h5>

            <Image
              src={"/faq-arrow-icon.png"}
              width={24}
              height={20}
              alt="arrow icon"
              className={`${
                openFaq === REAL_ESTATE_FAQS?.length + 1
                  ? "scale-y-[-1]"
                  : "scale-y-[1]"
              } transition-all duration-700 w-[18px] h-[18px] lg:w-[24px] lg:h-[26px] lg:mt-3`}
            />
          </button>

          <motion.div
            initial={false}
            animate={{
              height: openFaq === REAL_ESTATE_FAQS?.length + 1 ? "auto" : 0,
              opacity: openFaq === REAL_ESTATE_FAQS?.length + 1 ? 1 : 0,
              marginTop: openFaq === REAL_ESTATE_FAQS?.length + 1 ? "18px" : 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-base lg:text-[20px] font-normal lg:w-[90%]">
              Absolutely! We work with startups to build MVPs that validate
              ideas quickly while keeping costs and development time manageable.
              Using a{" "}
              <Link
                href={`https://launchboxglobal.com/services/mobile-app-development`}
                className="red-text"
              >
                mobile app development
              </Link>{" "}
              approach, we focus on the core features first, allowing you to
              test market demand, gather user feedback, and iterate before a
              full-scale launch. This approach minimizes risk while creating a
              functional platform that can grow with your business.
            </p>
          </motion.div>
        </div>

        <div
          className={`w-full rounded-3xl px-5 py-5 lg:px-10 lg:py-14 bg-[#F9F9F9] text-black`}
        >
          <button
            onClick={() => toggleFaq(REAL_ESTATE_FAQS?.length + 2)}
            className="w-full text-start flex items-start justify-between outline-none"
          >
            <h5 className="font-medium text-[17px] md:text-2xl lg:text-[35px] 2xl:text-[40px] w-[90%]">
              <span className="w-full leading-7 lg:leading-10">
                How long does a real estate app take to build?
              </span>
            </h5>

            <Image
              src={"/faq-arrow-icon.png"}
              width={24}
              height={20}
              alt="arrow icon"
              className={`${
                openFaq === REAL_ESTATE_FAQS?.length + 2
                  ? "scale-y-[-1]"
                  : "scale-y-[1]"
              } transition-all duration-700 w-[18px] h-[18px] lg:w-[24px] lg:h-[26px] lg:mt-3`}
            />
          </button>

          <motion.div
            initial={false}
            animate={{
              height: openFaq === REAL_ESTATE_FAQS?.length + 2 ? "auto" : 0,
              opacity: openFaq === REAL_ESTATE_FAQS?.length + 2 ? 1 : 0,
              marginTop: openFaq === REAL_ESTATE_FAQS?.length + 2 ? "18px" : 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-base lg:text-[20px] font-normal lg:w-[90%]">
              Development timelines vary based on complexity and features. For
              standard apps with property listings, lead management, and
              analytics dashboards, the process usually takes 12–16 weeks.
              Advanced solutions with{" "}
              <Link
                href={`https://launchboxglobal.com/development-technologies/swift-app-development`}
                className="red-text"
              >
                Swift App Development
              </Link>
              ,{" "}
              <Link
                href={`https://launchboxglobal.com/development-technologies/kotlin-app-development`}
                className="red-text"
              >
                Kotlin App Development
              </Link>
              , MLS/IDX integrations, AR/VR features, or custom dashboards may
              take longer. Throughout the process, we provide clear milestones,
              progress updates, and frequent demos to ensure transparency and
              alignment with your goals.
            </p>
          </motion.div>
        </div>
      </section>
    </section>
  );
};

export default RealEstateFaqs;
