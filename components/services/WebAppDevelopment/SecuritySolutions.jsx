import { SECURITY_SOLUTIONS } from "@/constants/web-app-dvelopment/security-solutions";
import React from "react";
import { GoDotFill } from "react-icons/go";

const SecuritySolutions = () => {
  return (
    <section className="w-full padding-x py-10 lg:py-20 relative overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading w-full">
          Reliable Security Solutions for Your{" "}
          <span className="red-text">Web Applications</span>
        </h2>
        <p className="section-paragraph lg:w-[85%]">
          Security is at the heart of every web app we build. As a trusted web
          application development firm, we create resilient web apps that
          protect your business from risks. Our team follows best practices,
          integrates the latest technologies, and ensures your applications
          remain reliable, scalable, and safe at every step.
        </p>
      </section>

      <section className="w-full mt-10 lg:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {SECURITY_SOLUTIONS?.map((model, index) => {
          return (
            <div key={index} className="w-full">
              <div className="w-full min-h-[405px] lg:min-h-[370px] bg-[#F3F3F3] rounded-[17px] p-7 midlg:p-10 flex flex-col items-center gap-4">
                <img
                  src={model?.icon}
                  width={114}
                  height={114}
                  alt={model?.title}
                />
                <h3 className="text-center font-bold text-xl midlg:text-[28px]">
                  {model?.title}
                </h3>
                {/* <p className="text-lg text-gray-700">{model?.description}</p> */}
                <ul className="w-full">
                  {model?.benefits?.map((benefit, i) => {
                    return (
                      <li
                        key={i}
                        className="flex items-center justify-start gap-2"
                      >
                        <GoDotFill className="text-xl text-gray-700" />
                        <span className="text-lg text-gray-700">{benefit}</span>
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
