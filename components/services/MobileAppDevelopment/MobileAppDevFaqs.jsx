"use client";
import { MobileAppFaqs } from "@/constants/mobile-app-development/MobileAppDevFaqs";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const MobileAppDevFaqs = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [faq, setFaq] = useState(false);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  return (
    <section
      className="w-full pb-10 pt-20 lg:pt-28 lg:pb-32 padding-x flex flex-col items-center"
      id="faqs"
    >
      <h2 className="section-heading text-center">
        Got Questions? <br /> We've Got You{" "}
        <span className="red-text">Covered!</span>
      </h2>
      <section
        id="faqs"
        className="w-full mt-10 lg:mt-24 flex flex-col items-start gap-4 lg:w-[90%]"
      >
        {/* 1 */}
        <div
          className={`w-full rounded-3xl px-5 py-5 lg:px-10 lg:py-14 bg-[#F9F9F9] text-black`}
        >
          <button
            onClick={() => toggleFaq(1)}
            className="w-full text-start flex items-start justify-between outline-none"
          >
            <h3 className="font-medium text-[17px] md:text-2xl lg:text-[35px] 2xl:text-[40px] w-[90%]">
              <span className="leading-[1.1]">
                How much does it cost to create an app in 2025?
              </span>
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
              App development costs in 2025 depend on complexity, features,
              design, and chosen platforms. Since every mobile app project is
              unique, providing one fixed cost isn’t possible. For accurate
              estimates, connect with our experts and get tailored guidance by
              <Link href={`/contact-us`} className="red-text">
                contacting us.
              </Link>
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
            <h3 className="font-medium text-[17px] md:text-2xl lg:text-[35px] 2xl:text-[40px] w-[90%]">
              <span className="leading-[1.1]">
                What is the process of mobile app development?
              </span>
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
              The process of mobile app development includes several key stages
              to ensure success. From idea validation to launch, every step
              matters:
            </p>
            <ul className="space-y-2 list-disc pl-5 mt-5">
              {[
                "Requirement gathering",
                "Wireframing",
                "UI/UX design",
                "Core development",
                "Testing & QA",
                "Launch",
                "Post-launch support & updates",
              ]?.map((f, i) => {
                return (
                  <li
                    key={i}
                    className="text-base lg:text-[20px] font-normal lg:w-[90%]"
                  >
                    {f}
                  </li>
                );
              })}
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
            <h3 className="font-medium text-[17px] md:text-2xl lg:text-[35px] 2xl:text-[40px] w-[90%]">
              <span className="leading-[1.1]">How to get an app built?</span>
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
              To build a mobile app, start with a clear idea, then follow these
              steps:
            </p>
            <ul className="space-y-2 list-disc pl-5 mt-5">
              {[
                "Define your app idea on paper",
                "Choose between Native app or PWA",
                "Select the right app development method",
                "Create your app with a No Code app builder",
                "Test your app on iOS and Android devices",
                "Submit and publish your app on the stores",
                "Improve and update your app continuously",
              ]?.map((f, i) => {
                return (
                  <li
                    key={i}
                    className="text-base lg:text-[20px] font-normal lg:w-[90%]"
                  >
                    {f}
                  </li>
                );
              })}
            </ul>
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
            <h3 className="font-medium text-[17px] md:text-2xl lg:text-[35px] 2xl:text-[40px] w-[90%]">
              <span className="leading-[1.1]">Can AI build me an app?</span>
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
              Yes, AI can generate apps, but it often misses important features,
              performance improvements, and usability. This is where our{" "}
              <Link
                href={`/software-project-rescue-service`}
                className="red-text"
              >
                AI-built App Rescue service
              </Link>{" "}
              helps. Through vibe coding, we refine AI-generated apps, ensuring
              they’re fully functional, user-friendly, and business-ready.
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
            <h3 className="font-medium text-[17px] md:text-2xl lg:text-[35px] 2xl:text-[40px] w-[90%]">
              <span className="leading-[1.1]">
                What language is used in Android development?
              </span>
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
              Android mobile app development typically uses Kotlin and Java.
              However, many businesses choose cross-platform options like
              Flutter, Swift, or Ionic for flexibility. Learn more about our{" "}
              <Link
                href={`https://launchboxglobal.com/development-technologies/flutter-app-development`}
                className="red-text"
              >
                Flutter App Development
              </Link>
              ,{" "}
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
              , and{" "}
              <Link
                href={`https://launchboxglobal.com/development-technologies/ionic-app-development`}
                className="red-text"
              >
                Ionic App Development
              </Link>{" "}
              services to select the right approach.
            </p>
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
            <h3 className="font-medium text-[17px] md:text-2xl lg:text-[35px] 2xl:text-[40px] w-[90%]">
              <span className="leading-[1.1]">
                Do you specifically provide mobile app development services in
                Florida, Houston, and Texas?
              </span>
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
              Yes, we provide expert mobile app development services in multiple
              locations. Our team specializes in delivering high-quality apps
              for diverse industries. Explore our tailored solutions for{" "}
              <Link
                href={`https://launchboxglobal.com/mobile-app-developer-in-florida`}
                className="red-text"
              >
                Mobile App Development in Florida
              </Link>
              ,{" "}
              <Link
                href={`https://launchboxglobal.com/mobile-app-developers-in-houston`}
                className="red-text"
              >
                Mobile App Development in Houston
              </Link>
              , and{" "}
              <Link
                href={`https://launchboxglobal.com/mobile-app-development-company-in-texas`}
                className="red-text"
              >
                Mobile App Development in Texas
              </Link>{" "}
              today.
            </p>
          </motion.div>
        </div>
      </section>
    </section>
  );
};

export default MobileAppDevFaqs;
