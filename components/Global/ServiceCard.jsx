"use client";
import Link from "next/link";
import React, { useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import "./ServiceCard.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoMdArrowDown } from "react-icons/io";

const ServiceCard = ({ service, index, openFaq, toggleFaq }) => {
  return (
    <button
      type="button"
      className={`w-full rounded-xl pt-5 2xl:pt-7 2xl:px-8 px-6 pb-[40px] 2xl:pb-[50px] flex flex-col items-start justify-between gap-4 ${
        openFaq === index ? "bg-[#000]" : "bg-white"
      } transition-all duration-300 h-auto relative overflow-y-visible mb-4`}
      key={index}
      onClick={() => toggleFaq(index)}
    >
      <div className="w-full flex items-start justify-between">
        <span className="text-[20px] font-medium text-gray-400 group-hover:text-white transition-all duration-300">{`(0${
          index + 1
        })`}</span>
        <div className="flex items-start justify-between w-[80%] lg:w-[750px]">
          <h3
            className={`text-lg md:text-[34px] lg:text-[40px] xl:text-[45px] 2xl:text-[55px] leading-[45px] tracking-tight font-light ${
              openFaq === index ? "text-white" : "text-gray-400"
            } font-normal transition-all duration-300`}
          >
            {service?.title}
          </h3>
          <IoMdArrowDown
            className={`w-[31px] h-[31px] ${
              openFaq === index
                ? "text-[#fff] opacity-100 scale-y-[-1]"
                : "text-[#F40E00] opacity-60 scale-y-[1]"
            } transition-all duration-300`}
          />
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{
          height: openFaq === index ? "auto" : 0,
          opacity: openFaq === index ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-[970px] relative xl:left-[3%] flex items-start gap-10 overflow-hidden"
      >
        <Image
          src={service?.image}
          width={300}
          height={220}
          alt={service?.title}
          className="transition-all duration-300 2xl:left-[12%] -top-[46%] 2xl:-top-[44%] xl:w-[306px] 2xl:h-[230px]"
        />

        <div className="w-full border-t py-4 lg:w-[670px]">
          <p className="text-white text-start text-lg font-light">
            {service?.desc}
          </p>
        </div>
      </motion.div>
    </button>
  );
};

export default ServiceCard;

{
  /* <motion.div
                    initial={false}
                    animate={{
                      height: openFaq === index ? "auto" : 0,
                      opacity: openFaq === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-[20px] font-normal text-start leading-[24px] tracking-tight text-gray-900 w-[90%]">
                      {process?.text}
                    </p>
                  </motion.div> */
}
