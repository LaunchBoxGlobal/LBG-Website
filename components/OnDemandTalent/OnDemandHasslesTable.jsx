import React from "react";
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const benefits = [
  "Speed to hire",
  "Skill vetting",
  "Team fit",
  "Flexibility",
  "Cost control",
  "Scalability",
  "Security/IP",
];

const OnDemandHasslesTable = () => {
  return (
    <section className="w-full mt-10 lg:mt-14 gap-0 lg:px-10 overflow-hidden">
      <div className="w-full flex-row gap-0 hidden lg:flex">
        <div className="min-w-[200px] lg:w-[30%]"></div>
        <div className="min-w-[200px] lg:w-[25%] h-[18px] bg-[#078F40] rounded-t-[15.33px]"></div>
        <div className="min-w-[200px] lg:w-[20%]"></div>
        <div className="min-w-[200px] lg:w-[20%]"></div>
        <div className="min-w-[200px] lg:w-[20%]"></div>
      </div>
      <div className="w-full flex flex-row gap-0 overflow-x-auto pb-10">
        <div className="min-w-[200px] lg:w-[30%] flex flex-col items-start">
          <div className="w-full bg-[#F40E00] text-white h-[129px] flex items-end px-4 pb-7 md:p-7 rounded-l-[15.33px]">
            <p className="text-base md:text-base lg:text-[22px] font-semibold text-white">
              Features / Metric
            </p>
          </div>
          {benefits?.map((b, i) => {
            return (
              <div
                key={i}
                className={`border px-4 rounded-l-xl w-full border-r-0 ${
                  i === 0 ? "mt-1 mb-1" : "my-1"
                } h-[74px] flex items-center pl-4 md:pl-11 relative ${
                  i % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <p className="block font-medium text-sm md:text-base lg:text-[20px]">
                  {b}
                </p>
              </div>
            );
          })}
        </div>
        <div className="min-w-[200px] lg:w-[25%]">
          <div className="w-full px-3 h-[129px] bg-[#078F40] flex items-center pb-7 flex-col justify-end gap-2 relative">
            <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-white">
              <FaCheck className="text-2xl text-[#078F40]" />
            </div>
            <p className="text-sm md:text-base lg:text-[22px] font-semibold text-white text-center">
              On Demand Talent
            </p>
          </div>
          {[
            "Less than 48 hrs",
            "Pre-screened",
            "Works as part of your team",
            "Adjust as needed",
            "Pay per use",
            "Grow or shrink fast",
            "NDA-protected",
            "",
          ]?.map((b, i) => {
            return (
              <div
                key={i}
                className={`bg-white px-4 w-full flex items-center justify-center shadow z-10 border-none relative ${
                  i === 7 ? "rounded-b-2xl h-[74px]" : "h-[82px]"
                }`}
              >
                <p className="text-sm md:text-base lg:text-[20px] text-center">
                  {b}
                </p>
              </div>
            );
          })}
        </div>
        <div className="min-w-[200px] lg:w-[20%] flex flex-col justify-start items-center">
          <div className="w-full px-3 h-[129px] bg-[#F40E00] flex items-center pb-7 flex-col justify-end gap-2 relative">
            <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-white">
              <IoClose className="text-2xl text-[#F40E00]" />
            </div>
            <p className="text-sm md:text-base lg:text-[22px] font-semibold text-white text-center">
              Full-Time Hiring
            </p>
          </div>
          {[
            "4–12 weeks",
            "Internal",
            "Full-time culture fit",
            "Fixed cost",
            "Salary+benefits",
            "Slow process",
            "Company-owned",
          ]?.map((b, i) => {
            return (
              <div
                key={i}
                className={`border-t border-b px-4 w-full my-1 h-[74px] relative flex items-center justify-center ${
                  i % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <p className="text-sm md:text-base lg:text-[20px] text-center">
                  {b}
                </p>
              </div>
            );
          })}
        </div>
        <div className="min-w-[200px] lg:w-[20%] flex flex-col justify-start items-center">
          <div className="w-full px-3 h-[129px] bg-[#F40E00] flex items-center pb-7 flex-col justify-end gap-2 relative">
            <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-white">
              <IoClose className="text-2xl text-[#F40E00]" />
            </div>
            <p className="text-sm md:text-base lg:text-[22px] font-semibold text-white text-center">
              Freelancers
            </p>
          </div>
          {[
            "Approx 1 week",
            "Hit or miss",
            "Inconsistent",
            "Short-term",
            "Low rates (but risky)",
            "One-time only",
            "Unsecured",
          ]?.map((b, i) => {
            return (
              <div
                key={i}
                className={`border-t border-b px-4 w-full my-1 h-[74px] relative flex items-center justify-center ${
                  i % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <p className="text-sm md:text-base lg:text-[20px] text-center">
                  {b}
                </p>
              </div>
            );
          })}
        </div>
        <div className="min-w-[200px] lg:w-[20%] flex flex-col justify-start items-center">
          <div className="w-full px-3 h-[129px] bg-[#F40E00] flex items-center p-7 rounded-r-[15.33px] flex-col justify-end gap-2 relative">
            <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-white">
              <IoClose className="text-2xl text-[#F40E00]" />
            </div>
            <p className="text-sm md:text-base lg:text-[22px] font-semibold text-white text-center">
              Outsourcing
            </p>
          </div>
          {[
            "1–3 weeks",
            "Agency-checked",
            "External team",
            "Contract-bound",
            "Fixed pricing",
            "Limited scaling",
            "Depends on vendor",
          ]?.map((b, i) => {
            return (
              <div
                key={i}
                className={`border-t border-b border-r rounded-r-xl px-4 w-full my-1 h-[74px] relative flex items-center justify-center ${
                  i % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <p className="text-sm md:text-base lg:text-[20px] text-center">
                  {b}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OnDemandHasslesTable;
