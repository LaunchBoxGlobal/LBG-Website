import React from "react";
import { MOBILE_APP_DEVS_COMPANY_HOUSTON_INDUSTRIES } from "@/constants/locations/mobile-app-devs-in-houston/mobile-app-devs-in-houston-industries";
import { FiMinus } from "react-icons/fi";
import { LuPlus } from "react-icons/lu";
import "../../LocationComponents/industries.css";

const Industries = () => {
  return (
    <section className="w-full padding-x pb-10 lg:py-20 relative overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading w-full lg:w-[80%]">
          Industries We Serve in<span className="red-text"> Houston</span>
        </h2>
        <p className="section-paragraph lg:w-[80%]">
          We craft custom mobile apps for Houston's healthcare, real estate,
          fintech, e-commerce, travel and SaaS industries - solving local
          business challenges with scalable digital solutions that drive
          results.
        </p>
      </section>

      <section className="industries-wrapper w-full mt-10 lg:mt-16 flex flex-wrap gap-2">
        {MOBILE_APP_DEVS_COMPANY_HOUSTON_INDUSTRIES?.map((industry, index) => (
          <div
            className="industry-card h-[300px] md:h-[270px] midlg:h-[340px] xl:h-[300px] bg-[#F3F3F3] p-5 lg:p-8 rounded-[7px] flex flex-col justify-between group relative overflow-hidden md:w-[46%] lg:w-auto"
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

export default Industries;
