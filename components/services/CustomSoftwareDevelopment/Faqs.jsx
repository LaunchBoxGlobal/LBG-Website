"use client";
import { CUSTOM_SOFTWARE_FAQS } from "@/constants/custom-software-development/CustomSoftwareFaqs";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Faqs = () => {
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
        {/* {CUSTOM_SOFTWARE_FAQS?.map((faq, index) => (
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
        ))} */}
        <div className="w-full rounded-3xl px-5 py-5 lg:px-10 lg:py-14 bg-[#F9F9F9] text-black">
          <button
            onClick={() => toggleFaq(1)}
            className="w-full text-start flex items-start justify-between outline-none"
          >
            <h3 className="font-medium text-[17px] md:text-2xl lg:text-[35px] 2xl:text-[40px] w-[90%]">
              <span className="leading-[1.1]">
                What is the difference between Custom and SaaS?
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
            <ul className="flex flex-col items-start gap-2 list-disc pl-5">
              <li className="text-base lg:text-[20px] font-normal lg:w-[90%]">
                <span>
                  Custom software development creates tailored solutions for a
                  business’s unique processes, offering full control,
                  scalability, and flexibility
                </span>
              </li>
              <li className="text-base lg:text-[20px] font-normal lg:w-[90%]">
                <span>
                  SaaS (Software-as-a-Service) provides ready-made,
                  subscription-based applications with limited customization but
                  quicker deployment.
                </span>
              </li>
              <li className="text-base lg:text-[20px] font-normal lg:w-[90%]">
                <span>
                  Startups often begin with SaaS, but growing businesses benefit
                  from custom solutions to gain efficiency and competitive
                  advantage.
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
        {/* 02 */}
        <div className="w-full rounded-3xl px-5 py-5 lg:px-10 lg:py-14 bg-[#F9F9F9] text-black">
          <button
            onClick={() => toggleFaq(2)}
            className="w-full text-start flex items-start justify-between outline-none"
          >
            <h3 className="font-medium text-[17px] md:text-2xl lg:text-[35px] 2xl:text-[40px] w-[90%]">
              <span className="leading-[1.1]">
                Who needs custom software development services?
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
              Custom software development is ideal for startups, enterprises,
              and growing businesses that require solutions designed around
              their specific workflows rather than generic tools. It helps
              companies streamline operations, reduce inefficiencies, and scale
              with confidence. If your business needs tailor-made solutions,{" "}
              <Link href={`/contact-us`} className="red-text">
                Book a call
              </Link>{" "}
              today to explore how we can help.
            </p>
          </motion.div>
        </div>
        {/* 03 */}
        <div className="w-full rounded-3xl px-5 py-5 lg:px-10 lg:py-14 bg-[#F9F9F9] text-black">
          <button
            onClick={() => toggleFaq(3)}
            className="w-full text-start flex items-start justify-between outline-none"
          >
            <h3 className="font-medium text-[17px] md:text-2xl lg:text-[35px] 2xl:text-[40px] w-[90%]">
              <span className="leading-[1.1]">
                How to choose the right custom software development company?
              </span>
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
            <ul className="flex flex-col items-start gap-1 list-disc pl-5">
              <li className="text-base lg:text-[20px] font-normal lg:w-[90%]">
                <span className="font-semibold">Experience & Portfolio</span> –
                Review case studies and past work in your industry.
              </li>
              <li className="text-base lg:text-[20px] font-normal lg:w-[90%]">
                <span className="font-semibold">Technology Expertise</span> –
                Ensure they use modern frameworks and best practices.
              </li>
              <li className="text-base lg:text-[20px] font-normal lg:w-[90%]">
                <span className="font-semibold">
                  Communication & Transparency
                </span>{" "}
                – Look for clear collaboration models.
              </li>
              <li className="text-base lg:text-[20px] font-normal lg:w-[90%]">
                <span className="font-semibold">Support & Scalability</span> –
                Pick a partner who provides long-term maintenance and growth
                options.
              </li>
            </ul>
          </motion.div>
        </div>
        {/* 04 */}
        <div className="w-full rounded-3xl px-5 py-5 lg:px-10 lg:py-14 bg-[#F9F9F9] text-black">
          <button
            onClick={() => toggleFaq(4)}
            className="w-full text-start flex items-start justify-between outline-none"
          >
            <h3 className="font-medium text-[17px] md:text-2xl lg:text-[35px] 2xl:text-[40px] w-[90%]">
              <span className="leading-[1.1]">
                Can I get custom software development services locally?
              </span>
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
              Yes, you can. We provide custom software development services
              across multiple U.S. locations, making it easier for businesses to
              connect with a local partner they can trust. Whether you’re
              looking for a{" "}
              <Link
                href={`/software-development-company-in-florida`}
                className="red-text"
              >
                Software Development Company in Florida
              </Link>
              , a{" "}
              <Link
                href={`/software-development-company-in-new-jersey`}
                className="red-text"
              >
                Software Development Company in New Jersey
              </Link>
              , or need{" "}
              <Link
                href={`/custom-software-development-company-in-houston`}
                className="red-text"
              >
                Custom Software Development in Houston
              </Link>
              , our team offers region-specific expertise while delivering the
              same high-quality, scalable solutions that help companies grow
              with confidence.
            </p>
          </motion.div>
        </div>
        {/* 05 */}
        <div className="w-full rounded-3xl px-5 py-5 lg:px-10 lg:py-14 bg-[#F9F9F9] text-black">
          <button
            onClick={() => toggleFaq(5)}
            className="w-full text-start flex items-start justify-between outline-none"
          >
            <h3 className="font-medium text-[17px] md:text-2xl lg:text-[35px] 2xl:text-[40px] w-[90%]">
              <span className="leading-[1.1]">
                What technologies do you use for custom software development?
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
              We use a wide range of modern technologies to deliver custom
              software development solutions that are scalable, secure, and
              user-friendly. Depending on the project, our team works with{" "}
              <Link
                href={`/development-technologies/react-native-app-development`}
                className="red-text"
              >
                Native
              </Link>{" "}
              for high-performance solutions,{" "}
              <Link
                href={`/development-technologies/flutter-app-development`}
                className="red-text"
              >
                Flutter
              </Link>{" "}
              for cross-platform apps,{" "}
              <Link
                href={`/development-technologies/swift-app-development`}
                className="red-text"
              >
                Swift
              </Link>{" "}
              and{" "}
              <Link
                href={`/development-technologies/kotlin-app-development`}
                className="red-text"
              >
                Kotlin
              </Link>{" "}
              for smooth iOS and Android experiences, and{" "}
              <Link
                href={`/development-technologies/ionic-app-development`}
                className="red-text"
              >
                Ionic
              </Link>{" "}
              App Development for lightweight hybrid applications.
            </p>
          </motion.div>
        </div>
        {/* 06 */}
        <div className="w-full rounded-3xl px-5 py-5 lg:px-10 lg:py-14 bg-[#F9F9F9] text-black">
          <button
            onClick={() => toggleFaq(6)}
            className="w-full text-start flex items-start justify-between outline-none"
          >
            <h3 className="font-medium text-[17px] md:text-2xl lg:text-[35px] 2xl:text-[40px] w-[90%]">
              <span className="leading-[1.1]">
                Do you offer post-launch support for custom software?
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
              Yes, we provide complete post-launch support to ensure your custom
              software runs smoothly after deployment. This includes performance
              monitoring, security updates, bug fixes, and feature enhancements.
              Our goal is to keep your solution reliable, scalable, and aligned
              with your evolving business needs long after the initial launch.
              You can{" "}
              <Link href={`/contact-us`} className="red-text">
                talk to our experts
              </Link>{" "}
              for more details.
            </p>
          </motion.div>
        </div>
        {/* 07 */}
        <div className="w-full rounded-3xl px-5 py-5 lg:px-10 lg:py-14 bg-[#F9F9F9] text-black">
          <button
            onClick={() => toggleFaq(7)}
            className="w-full text-start flex items-start justify-between outline-none"
          >
            <h3 className="font-medium text-[17px] md:text-2xl lg:text-[35px] 2xl:text-[40px] w-[90%]">
              <span className="leading-[1.1]">
                What is custom software development?
              </span>
            </h3>

            <Image
              src={"/faq-arrow-icon.png"}
              width={24}
              height={20}
              alt="arrow icon"
              className={`${
                openFaq === 7 ? "scale-y-[-1]" : "scale-y-[1]"
              } transition-all duration-700 w-[18px] h-[18px] lg:w-[24px] lg:h-[26px] xl:mt-1.5`}
            />
          </button>

          <motion.div
            initial={false}
            animate={{
              height: openFaq === 7 ? "auto" : 0,
              opacity: openFaq === 7 ? 1 : 0,
              marginTop: openFaq === 7 ? "18px" : 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-base lg:text-[20px] font-normal lg:w-[90%]">
              Custom software development means building software designed
              around your specific business needs. Instead of using generic
              tools, it’s like creating a solution that fits ideally, while
              helping you work smarter, solve problems faster, and grow without
              being held back by one-size-fits-all software.
            </p>
          </motion.div>
        </div>
        {/* 08 */}
        <div className="w-full rounded-3xl px-5 py-5 lg:px-10 lg:py-14 bg-[#F9F9F9] text-black">
          <button
            onClick={() => toggleFaq(8)}
            className="w-full text-start flex items-start justify-between outline-none"
          >
            <h3 className="font-medium text-[17px] md:text-2xl lg:text-[35px] 2xl:text-[40px] w-[90%]">
              <span className="leading-[1.1]">
                Why is custom software development important?
              </span>
            </h3>

            <Image
              src={"/faq-arrow-icon.png"}
              width={24}
              height={20}
              alt="arrow icon"
              className={`${
                openFaq === 8 ? "scale-y-[-1]" : "scale-y-[1]"
              } transition-all duration-700 w-[18px] h-[18px] lg:w-[24px] lg:h-[26px] xl:mt-1.5`}
            />
          </button>

          <motion.div
            initial={false}
            animate={{
              height: openFaq === 8 ? "auto" : 0,
              opacity: openFaq === 8 ? 1 : 0,
              marginTop: openFaq === 8 ? "18px" : 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-base lg:text-[20px] font-normal lg:w-[90%]">
              Custom software development is important because it focuses on
              your specific business needs instead of generic solutions. It
              ensures you get tools that truly work for you by:
            </p>
            <ul className="flex flex-col items-start pl-5 gap-1 list-disc my-3">
              <li className="text-base lg:text-[20px] font-normal lg:w-[90%]">
                Simplifying processes and boosting efficiency
              </li>
              <li className="text-base lg:text-[20px] font-normal lg:w-[90%]">
                Scaling with your business growth
              </li>
              <li className="text-base lg:text-[20px] font-normal lg:w-[90%]">
                Offering stronger security and reliability
              </li>
            </ul>
            <p className="text-base lg:text-[20px] font-normal lg:w-[90%]">
              If you’d like more insights, you can always{" "}
              <Link href={`/contact-us`} className="red-text">
                talk to our experts.
              </Link>
            </p>
          </motion.div>
        </div>
      </section>
    </section>
  );
};

export default Faqs;
