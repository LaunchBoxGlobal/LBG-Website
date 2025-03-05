"use client";
import React from "react";
import "./ServiceCard.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoMdArrowDown } from "react-icons/io";

const ServiceCard = ({ service, index, openFaq, toggleFaq }) => {
  return (
    <button
      type="button"
      className={`w-full px-4 pb-0 lg:pt-6 lg:pb-[50px] lg:px-7 rounded-xl flex flex-col items-start justify-between gap-x-4 group hover:bg-black ${
        openFaq === index ? "bg-[#000]" : "bg-white"
      } transition-all duration-300 h-auto relative overflow-visible mb-0`}
      key={index}
      onClick={() => {
        toggleFaq(index);
      }}
    >
      <div className={`w-full flex items-start justify-between`}>
        <div className="flex items-start pt-2.5">
          <span
            className={`text-[15px] lg:text-[20px] font-medium text-gray-400 group-hover:text-white transition-all duration-300 ${
              openFaq === index && "text-white"
            }`}
          >{`(0${index + 1})`}</span>
        </div>
        <Image
          src={service?.image}
          width={300}
          height={220}
          alt={service?.title}
          className={`2xl:left-[9%] -top-[46%] xl:w-[309px] 2xl:h-[230px] hidden lg:block absolute lg:left-[2%] xl:left-[7%] z-10 ${
            openFaq === index
              ? "lg:top-[14%] top-[10%] rotate-0 visible"
              : "-rotate-[22deg] invisible group-hover:visible"
          }`}
        />
        <div className="flex flex-col items-center w-[80%] lg:w-[60%] xl:w-[67%] 2xl:w-[67%]">
          <div className="w-full flex items-center lg:items-start justify-between mb-0 py-0">
            <h3
              className={`text-lg text-start md:text-[34px] xl:text-[45px] 2xl:text-[55px] leading-[45px] tracking-tight font-light ${
                openFaq === index ? "text-white" : "text-gray-400"
              } font-normal transition-all duration-300`}
            >
              {service?.title}
            </h3>
            <IoMdArrowDown
              className={`w-[15px] block lg:mt-1 lg:w-[31px] h-[15px] lg:h-[31px] ${
                openFaq === index
                  ? "text-[#fff] opacity-100 scale-y-[-1]"
                  : "text-[#F40E00] opacity-60 scale-y-[1]"
              } transition-all duration-300`}
            />
          </div>
          <motion.div
            initial={false}
            animate={{
              height: openFaq === index ? "auto" : 0,
              opacity: openFaq === index ? 1 : 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative flex items-start justify-start overflow-hidden w-full pl-0.5 mt-2 md:mt-4"
          >
            <div className="w-full lg:w-[70%] border-t py-4">
              <p className="text-white text-start text-lg font-light">
                {service?.desc}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </button>
  );
};

export default ServiceCard;
