import ContactButton from "@/components/Global/ContactButton";
import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const benefits = [
  "Custom Build Solution",
  "Post Launch Support & Maintenance",
  "Agile Workflow",
  "Knowledge-First Approach",
  "Staying Ahead with New Technologies",
  "24/7 Customer Support",
  "Affordable without sacrificing quality",
  "Global Tech Experts",
];

const Benefits = () => {
  return (
    <section className="w-full padding-x py-10 lg:py-20 relative overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading">
          What Sets Us Apart in{" "}
          <span className="red-text">Mobile App Development</span>
        </h2>
        <p className="section-paragraph lg:w-[90%]">
          We follow a proven process to turn your ideas into successful apps. we
          focus on clear steps, regular updates, and your feedback. we stay to
          fix issues, add features, and keep your app growing.
        </p>
      </section>

      <section className="w-full mt-10 lg:mt-20 border-black grid grid-cols-3 lg:grid-cols-6 gap-0">
        <div className="w-full col-span-2 lg:col-span-2 flex flex-col items-start">
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
        <div className="w-full col-span-1">
          <div className="w-[110px] px-3 lg:w-[219px] h-[62px] bg-[#F40E00] flex items-center justify-center rounded-t-2xl">
            <Image
              src={"/lb-white-logo.png"}
              width={188}
              height={33}
              alt="launchbox global logo"
            />
          </div>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9]?.map((_, i) => {
            return (
              <div
                key={i}
                className={`bg-white px-4 w-[110px] lg:w-[219px]  shadow z-10 border-none relative ${
                  i === 8 ? "rounded-b-2xl h-[70px]" : "h-[80px]"
                }`}
              >
                {i !== 8 && (
                  <div className="w-[40px] h-[40px] rounded-full bg-[#078F40] p-2 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                    <FaCheck className="text-white w-full h-full" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="w-full col-span-1 hidden lg:flex flex-col justify-start items-center">
          <p className="h-[62px] flex items-center justify-center px-4 text-lg font-semibold text-center lg:leading-6">
            Local <br /> Companies
          </p>
          {[1, 2, 3, 4, 5, 6, 7, 8]?.map((b, i) => {
            return (
              <div
                key={i}
                className={`border-t border-b px-4 w-full border-r-0 mb-1.5 h-[74px] relative ${
                  i % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <div
                  className={`w-[40px] h-[40px] rounded-full ${
                    i === 0 || i === 2 ? "bg-[#F40E00]" : "bg-[#078F40]"
                  } p-2 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2`}
                >
                  {i === 0 || i === 2 ? (
                    <IoClose className="text-white w-full h-full" />
                  ) : (
                    <FaCheck className="text-white w-full h-full" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full col-span-1 hidden lg:flex flex-col justify-start items-center">
          <p className="h-[62px] flex items-center px-4 justify-center text-lg font-semibold text-center lg:leading-6">
            Traditional <br /> Firms
          </p>
          {[1, 2, 3, 4, 5, 6, 7, 8]?.map((b, i) => {
            return (
              <div
                key={i}
                className={`border-t border-b px-4 w-full border-r-0 mb-1.5 h-[74px] relative ${
                  i % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <div
                  className={`w-[40px] h-[40px] rounded-full ${
                    i === 2 || i === 3 || i === 4 || i === 6 || i === 7
                      ? "bg-[#F40E00]"
                      : "bg-[#078F40]"
                  } p-2 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2`}
                >
                  {i === 2 || i === 3 || i === 4 || i === 6 || i === 7 ? (
                    <IoClose className="text-white w-full h-full" />
                  ) : (
                    <FaCheck className="text-white w-full h-full" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full col-span-1 hidden lg:flex flex-col justify-start items-center">
          <p className="h-[62px] flex items-center justify-center px-4 text-lg font-semibold text-center lg:leading-6">
            Freelance <br /> Agencies 
          </p>
          {[1, 2, 3, 4, 5, 6, 7, 8]?.map((b, i) => {
            return (
              <div
                key={i}
                className={`border-t border-b border-r rounded-r-xl px-4 w-full mb-1.5 h-[74px] relative ${
                  i % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <div
                  className={`w-[40px] h-[40px] rounded-full ${
                    i === 1 ||
                    i === 2 ||
                    i === 3 ||
                    i === 5 ||
                    i === 6 ||
                    i === 7
                      ? "bg-[#F40E00]"
                      : "bg-[#078F40]"
                  } p-2 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2`}
                >
                  {i === 1 ||
                  i === 2 ||
                  i === 3 ||
                  i === 5 ||
                  i === 6 ||
                  i === 7 ? (
                    <IoClose className="text-white w-full h-full" />
                  ) : (
                    <FaCheck className="text-white w-full h-full" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="w-full mt-14 flex justify-center">
        <ContactButton text={"Get Started – 100% Risk-Free"} />
      </section>
    </section>
  );
};

export default Benefits;

{
  /* <div className="col-span-1">
<div className="bg-[#F40E00]">
  <Image
    src={"/lb-white-logo.png"}
    width={188}
    height={33}
    alt="launchbox global logo"
    className="w-[188px] h-[33px]"
  />
</div>
{[1, 2, 3, 4, 5, 6, 7, 8]?.map((icon, i) => {
  return (
    <div className="w-full py-2" key={i}>
      <div className="w-[40px] h-[40px] rounded-full bg-[#078F40] p-2">
        <FaCheck className="text-white w-full h-full" />
      </div>
    </div>
  );
})}
</div> */
}
