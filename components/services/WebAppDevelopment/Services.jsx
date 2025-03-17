"use client";
import { MOBILE_APP_DEVELOPMENT_SERVICES } from "@/constants/mobile-app-development/MobileAppDevelopmentServices";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoArrowDownSharp } from "react-icons/io5";
import Link from "next/link";
import { WEB_APP_DEVELOPMENT_SERVICES } from "@/constants/web-app-dvelopment/WebAppDevServices";

const Services = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  return (
    <section className="w-full pb-10 lg:pb-20 padding-x">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading">
          Web App <br /> Development <span className="red-text">Services</span>
        </h2>
        <p className="section-paragraph lg:w-[90%]">
          We provide web app development services that solve real problems. As a
          trusted web application service agency, we build apps that are simple,
          reliable, and ready to grow with your business.
        </p>
      </section>

      <section
        id="faqs"
        className="w-full mt-10 flex flex-col items-start lg:w-[90%] mx-auto"
      >
        {WEB_APP_DEVELOPMENT_SERVICES?.map((service, index) => (
          <div
            className={`w-full pt-5 lg:py-10 hover:bg-black rounded-3xl rounded-b-none hover:rounded-b-3xl hover:text-white transition-all duration-300 ${
              openFaq === index
                ? "bg-black text-white rounded-3xl"
                : "bg-[#fff] text-black border-b"
            }`}
            key={index}
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full text-start flex items-center justify-between outline-none"
            >
              <div className="w-full flex items-center justify-between px-5 lg:px-10">
                <div className="flex items-center justify-start gap-3 lg:gap-7 w-full">
                  <span className="text-[14px] lg:text-[25px] font-medium">{`(0${
                    index + 1
                  })`}</span>
                  <h5 className="font-medium text-[17px] md:text-3xl lg:text-[35px] 2xl:text-[40px] w-[85%]">
                    {service?.title}
                  </h5>
                </div>

                <IoArrowDownSharp
                  className={`${
                    openFaq === index ? "scale-y-[-1]" : "scale-y-[1] red-text"
                  } transition-all duration-700 text-2xl lg:text-4xl`}
                />
              </div>
            </button>

            <motion.div
              initial={false}
              animate={{
                height: openFaq === index ? "auto" : 0,
                opacity: openFaq === index ? 1 : 0,
                marginTop: openFaq === index ? "18px" : 0,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden w-full border-t pt-5 pb-5 lg:pb-0"
            >
              <p className="text-base lg:text-[20px] font-bold mb-3 lg:w-[75%] px-5 lg:px-[10%] xl:px-[10.5%]">
                {service?.subtitle}
              </p>
              <p className="text-base lg:text-[20px] font-normal lg:w-[75%] px-5 lg:px-[10%] xl:px-[10.5%]">
                {service?.description}
              </p>

              <div className="w-full px-5 lg:px-0">
                <Link
                  href={`/`}
                  className="lg:w-[192px] h-[47px] flex items-center justify-center rounded-[17px] text-lg font-medium border mt-5 lg:ml-[10.5%] hover:bg-white hover:text-black transition-all duration-300"
                >
                  Get In Touch
                </Link>
              </div>
            </motion.div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Services;
