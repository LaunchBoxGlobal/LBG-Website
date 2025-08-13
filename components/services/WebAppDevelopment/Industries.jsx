"use client";
import React from "react";
import { WEB_APP_DEVELOPMENT_INDUSTRIES } from "@/constants/web-app-dvelopment/WebAppIndustries";
import { FiMinus } from "react-icons/fi";
import { LuPlus } from "react-icons/lu";

const Industries = () => {
  return (
    <section className="w-full padding-x pb-10 pt-20 lg:pb-20 lg:pt-36 relative overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading lg:w-full">
          Web Application Development Services for{" "}
          <span className="red-text"> Every Industry</span>
        </h2>
        <p className="section-paragraph lg:w-[90%]">
          We provide web application development services tailored to your
          industry needs. From startups to enterprises, our web app developers
          build fast, reliable, and user-friendly apps that solve real problems.
        </p>
      </section>

      <section className="industries-wrapper w-full mt-10 lg:mt-16 flex flex-wrap gap-2">
        {WEB_APP_DEVELOPMENT_INDUSTRIES?.map((industry, index) => (
          <div
            className="industry-card bg-[#F3F3F3] p-5 lg:p-8 rounded-[7px] flex flex-col justify-between group relative overflow-hidden"
            key={index}
          >
            <h3 className="text-[26px] font-semibold leading-[1]">
              {industry?.title}
            </h3>
            <div className="flex items-start justify-between gap-2 relative flex-1 mt-5">
              <div className="max-w-[85%]">
                <p className="text-lg font-normal text-justify leading-[1.2] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {industry?.description}
                </p>
              </div>
            </div>

            <button
              type="button"
              className="min-w-[30px] min-h-[30px] max-w-[30px] max-h-[30px] bg-[#f40e00] group-hover:bg-white transition-all duration-300 rounded flex items-center justify-center absolute right-5 bottom-5"
            >
              <LuPlus className="text-white group-hover:hidden block transition-all duration-300" />
              <FiMinus className="text-black group-hover:block hidden transition-all duration-300" />
            </button>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Industries;
