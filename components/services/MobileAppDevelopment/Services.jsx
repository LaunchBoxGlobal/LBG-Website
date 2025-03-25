"use client";
import { MOBILE_APP_DEVELOPMENT_SERVICES } from "@/constants/mobile-app-development/MobileAppDevelopmentServices";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoArrowDownSharp } from "react-icons/io5";
import Link from "next/link";
import ServiceCard from "@/components/Global/ServiceCard";

const Services = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const [modal, setModal] = useState({ active: false, index: 0 });

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  return (
    <section className="w-full pb-10 lg:pb-20 lg:pt-10 padding-x">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading">
          Mobile App <br /> Development{" "}
          <span className="red-text">Services</span>
        </h2>
        <p className="section-paragraph lg:w-[90%]">
          We build apps that solve real-world problems and keep users coming
          back. Our mobile app development services focus on simple designs,
          fast performance, and updates that make sense. We work with you to
          create apps that grow as you do. Let’s make an app that truly works
          for your goals.
        </p>
      </section>

      <section className="w-full flex flex-col flex-wrap items-start justify-center gap-y-4 mt-8 lg:mt-24 overflow-y-visible">
        {MOBILE_APP_DEVELOPMENT_SERVICES?.map((service, index) => (
          <ServiceCard
            service={service}
            index={index}
            key={index}
            setModal={setModal}
            openFaq={openFaq}
            setOpenFaq={setOpenFaq}
            toggleFaq={toggleFaq}
          />
        ))}
      </section>

      {/* <section
        id="faqs"
        className="w-full mt-10 flex flex-col items-start lg:w-[90%] mx-auto"
      >
        {MOBILE_APP_DEVELOPMENT_SERVICES?.map((service, index) => (
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
              <p className="text-base lg:text-[20px] font-normal lg:w-[95%] px-5 lg:px-[10%] xl:px-[10.5%]">
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
      </section> */}
    </section>
  );
};

export default Services;
