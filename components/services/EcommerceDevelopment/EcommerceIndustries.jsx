import { ECOMMERCE_INDUSTRIES } from "@/constants/ecommerce-develpment/ecommerceIndustries";
import React from "react";
import { FiMinus } from "react-icons/fi";
import { LuPlus } from "react-icons/lu";
import "./industries.css";

const EcommerceIndustries = () => {
  return (
    <section className="w-full padding-x pb-10 lg:py-20 relative overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="red-text font-semibold text-lg lg:text-[25px] text-center">
          Serious About eCommerce?
        </h2>
        <h3 className="section-heading w-full">
          Work with a Development Company That Knows
          <span className="red-text"> Your Industry</span>
        </h3>
        <p className="section-paragraph lg:w-[80%]">
          We’re a dev eCommerce company that understands your industry. whether
          it’s fashion, electronics, beauty, or more. We build online stores and
          apps that boost sales, keep customers engaged, and help your business
          grow.
        </p>
      </section>

      <section className="industries-wrapper w-full mt-10 lg:mt-16 flex flex-wrap gap-2">
        {ECOMMERCE_INDUSTRIES?.map((industry, index) => (
          <div
            className="industry-card h-[400px] md:h-[370px] lg:h-[330px] midlg:h-[340px] xl:h-[370px] bg-[#F3F3F3] p-5 lg:p-8 rounded-[7px] flex flex-col justify-between group relative overflow-hidden md:w-[46%] lg:w-auto"
            key={index}
          >
            <h3 className="text-[26px] font-semibold leading-[1]">
              {industry?.title}
            </h3>
            <div className="flex items-start justify-between gap-2 relative flex-1 mt-5 overflow-hidden">
              <div className="max-w-[85%]">
                <p className="text-base xl:text-lg font-normal lg:text-start leading-[1.2] xl:leading-[1.2] hidden group-hover:block transition-all duration-300">
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

export default EcommerceIndustries;
