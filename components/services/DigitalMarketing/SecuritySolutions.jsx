import { DIGITAL_MARKETING_SECURITY_SOLUTIONS } from "@/constants/digital-marketing/digital-marketing-security-solutions";
import React from "react";
import { GoDotFill } from "react-icons/go";

const SecuritySolutions = () => {
  return (
    <section className="w-full padding-x py-10 lg:py-20 relative overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading w-full">
          Reliable Security Solutions for{" "}
          <span className="red-text">Digital Marketing</span>
        </h2>
        <p className="section-paragraph lg:w-[85%]">
          Security is at the core of everything we do. As a trusted digital
          media company, we create resilient digital marketing solutions that
          protect your business from risks. Our team uses advanced tools,
          follows best practices, and ensures your campaigns and operations
          remain reliable, secure, and future-ready at every step
        </p>
      </section>

      <section className="w-full mt-10 lg:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {DIGITAL_MARKETING_SECURITY_SOLUTIONS?.map((model, index) => {
          return (
            <div key={index} className="w-full">
              <div className="w-full lg:min-h-[380px] midlg:h-[400px] bg-[#F3F3F3] rounded-[17px] p-7 midlg:p-10 flex flex-col items-center gap-4">
                <img
                  src={model?.icon}
                  width={114}
                  height={114}
                  alt={model?.title}
                />
                <h3 className="text-center font-bold text-xl midlg:text-[24px] xl:text-[28px]">
                  {model?.title}
                </h3>
                {/* <p className="text-lg text-gray-700">{model?.description}</p> */}
                <ul className="w-full space-y-3">
                  {model?.benefits?.map((benefit, i) => {
                    return (
                      <li
                        key={i}
                        className="flex items-start justify-start gap-2"
                      >
                        <div className="min-w-6">
                          <GoDotFill className="text-xl text-gray-700 relative" />
                        </div>
                        <span className="text-lg text-gray-700 leading-[1.1]">
                          {benefit}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default SecuritySolutions;
