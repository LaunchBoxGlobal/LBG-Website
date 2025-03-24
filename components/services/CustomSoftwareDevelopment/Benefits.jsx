import ContactButton from "@/components/Global/ContactButton";
import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const benefits = [
  "Flexible & Fast Development (Agile Workflow)",
  "Functionality-First Approach",
  "World Class Talents",
  "Rapid Prototyping (Test Ideas Faster)",
  "Real-Time Progress Tracking",
  "Scalable Web Architecture",
  "Industry-Specific Expertise",
  "Custom Build Solution",
  "High-Performance Backend Engineers",
  "Post Launch Support & Maintenance",
  "Latest Technologies & Best Practices",
  "Transparent Pricing (no hidden fees)",
  "24/7 Customer Support",
  "Always Affordable",
];

const Benefits = () => {
  return (
    <section className="w-full padding-x py-10 lg:py-20 relative overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading">
          Your Reliable Web Application Development
          <span className="red-text"> Partner</span>
        </h2>
        <p className="section-paragraph lg:w-[90%]">
          Struggling with slow, unclear app projects? Our web app development
          services use Agile methods to break work into clear steps, deliver
          updates fast, and keep you involved every step of the way.
        </p>
      </section>

      <section className="w-full mt-10 lg:mt-20 border-black flex items-start gap-0">
        <div className="w-[70%] lg:w-[40%] flex flex-col items-start">
          <p className="h-[62px] pt-4 px-4 text-lg font-semibold">
            Features / Metric
          </p>

          <div className="w-full">
            {benefits?.map((b, i) => {
              return (
                <div
                  key={i}
                  className={`border px-4 rounded-l-xl w-full border-r-0 mb-1.5 flex items-start h-[74px] relative ${
                    i % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <span className="block absolute top-1/2 -translate-y-1/2 text-base lg:text-lg font-medium">
                    {b}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-[30%] lg:w-[15%]">
          <div className="w-[110px] px-3 lg:w-[219px] h-[62px] bg-[#F40E00] flex items-center justify-center rounded-t-2xl">
            <Image
              src={"/lb-white-logo.png"}
              width={188}
              height={33}
              alt="launchbox global logo"
            />
          </div>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]?.map((_, i) => {
            return (
              <div
                key={i}
                className={`bg-white px-4 w-[110px] lg:w-[219px]  shadow z-10 border-none relative ${
                  i === 14 ? "rounded-b-2xl h-[70px]" : "h-[80px]"
                }`}
              >
                {i !== 14 && (
                  <div className="w-[40px] h-[40px] rounded-full bg-[#078F40] p-2 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                    <FaCheck className="text-white w-full h-full" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="w-full lg:w-[15%] hidden lg:flex flex-col justify-start items-center">
          <p className="h-[62px] flex items-center justify-center px-4 text-lg font-semibold text-center lg:leading-6 lg:pl-14">
            Local <br /> Companies
          </p>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]?.map((b, i) => {
            return (
              <div
                key={i}
                className={`border-t border-b px-4 w-full border-r-0 mb-1.5 h-[74px] relative ${
                  i % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <div
                  className={`w-[40px] h-[40px] rounded-full lg:ml-[11%] ${
                    i === 0 || i === 5 || i === 6 || i === 7 || i === 10
                      ? "bg-[#078F40]"
                      : "bg-[#F40E00]"
                  } p-2 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2`}
                >
                  {i === 0 || i === 5 || i === 6 || i === 7 || i === 10 ? (
                    <FaCheck className="text-white w-full h-full" />
                  ) : (
                    <IoClose className="text-white w-full h-full" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full lg:w-[15%] hidden lg:flex flex-col justify-start items-center">
          <p className="h-[62px] flex items-center px-4 justify-center text-lg font-semibold text-center lg:leading-6 lg:pl-[20%]">
            Traditional <br /> Firms
          </p>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]?.map((b, i) => {
            return (
              <div
                key={i}
                className={`border-t border-b px-4 w-full border-r-0 mb-1.5 h-[74px] relative ${
                  i % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <div
                  className={`w-[40px] h-[40px] rounded-full lg:ml-[6%] ${
                    i === 6 || i === 7 || i === 9 || i === 12
                      ? "bg-[#078F40]"
                      : "bg-[#F40E00]"
                  } p-2 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2`}
                >
                  {i === 6 || i === 7 || i === 9 || i === 12 ? (
                    <FaCheck className="text-white w-full h-full" />
                  ) : (
                    <IoClose className="text-white w-full h-full" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full lg:w-[15%] hidden lg:flex flex-col justify-start items-center">
          <p className="h-[62px] flex items-center justify-center px-4 text-lg font-semibold text-center lg:leading-6">
            Freelance <br /> Agencies 
          </p>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]?.map((b, i) => {
            return (
              <div
                key={i}
                className={`border-t border-b border-r rounded-r-xl px-4 w-full mb-1.5 h-[74px] relative ${
                  i % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <div
                  className={`w-[40px] h-[40px] rounded-full ${
                    i === 0 ||
                    i === 2 ||
                    i === 4 ||
                    i === 5 ||
                    i === 7 ||
                    i === 8 ||
                    i === 10 ||
                    i === 11 ||
                    i === 12 ||
                    i === 13
                      ? "bg-[#078F40]"
                      : "bg-[#F40E00]"
                  } p-2 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2`}
                >
                  {i === 0 ||
                  i === 2 ||
                  i === 4 ||
                  i === 5 ||
                  i === 7 ||
                  i === 8 ||
                  i === 10 ||
                  i === 11 ||
                  i === 12 ||
                  i === 13 ? (
                    <FaCheck className="text-white w-full h-full" />
                  ) : (
                    <IoClose className="text-white w-full h-full" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="w-full mt-14 flex justify-center lg:justify-start lg:pl-[32%]">
        <ContactButton text={"Get started - We’re Ready to build!"} />
      </section>
    </section>
  );
};

export default Benefits;
