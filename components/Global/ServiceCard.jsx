"use client";
import Link from "next/link";
import React, { useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import "./ServiceCard.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoMdArrowDown } from "react-icons/io";

const ServiceCard = ({ service, index, openFaq, toggleFaq }) => {
  const [state, setState] = useState(false);
  return (
    <button
      type="button"
      className={`w-full rounded-xl pt-5 2xl:pt-7 2xl:px-8 px-6 pb-[60px] 2xl:pb-[60px] flex flex-col items-start justify-between gap-4 group hover:bg-black ${
        openFaq === index ? "bg-[#000]" : "bg-white"
      } transition-all duration-300 h-auto relative overflow-visible mb-4`}
      key={index}
      onClick={() => {
        toggleFaq(index);
      }}
    >
      <div className="w-full flex items-start justify-between">
        <span className="text-[20px] font-medium text-gray-400 group-hover:text-white transition-all duration-300">{`(0${
          index + 1
        })`}</span>
        <Image
          src={service?.image}
          width={300}
          height={220}
          alt={service?.title}
          className={`2xl:left-[9%] -top-[46%] xl:w-[309px] 2xl:h-[230px] absolute lg:left-[2%] xl:left-[7%] transition-all duration-300 z-10 ${
            openFaq === index
              ? "lg:top-[14%] top-[10%] rotate-0 visible"
              : "-rotate-[22deg] invisible group-hover:visible"
          }`}
        />
        <div className="flex items-start justify-between w-[80%] lg:w-[60%] xl:w-[67%] 2xl:w-[67%]">
          <h3
            className={`text-lg text-start md:text-[34px] xl:text-[45px] 2xl:text-[55px] leading-[45px] tracking-tight font-light ${
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
        className="float-end relative lg:left-[40%] xl:left-[25.6%] 2xl:left-[15%] flex items-start justify-end overflow-hidden lg:w-[50%] xl:w-[67%]"
      >
        <div className="w-full border-t py-4 lg:w-[670px] float-end">
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
