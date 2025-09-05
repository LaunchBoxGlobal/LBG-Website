import { TECH_STACK_AND_STANDARDS } from "@/constants/industries/healthcare-page-content/tech-stack-and-standards";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TechStackAndStandards = () => {
  return (
    <section className="w-full py-20 midlg:py-32 bg-[#fff] padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading lg:w-[90%] mx-auto">
          The Tech Behind Your{" "}
          <span className="red-text">Healthcare Software</span>
        </h2>

        <p className="section-paragraph lg:w-[90%] mx-auto">
          We use proven frameworks, secure standards, and modern tools to keep
          your projects future-ready. Including compliance and scalability,
          every choice supports reliable healthcare app development services
          that grow with your startup and adapt as the industry evolves.
        </p>
      </section>

      <section className="w-full mt-10 lg:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-5 pl-5 overflow-hidden">
        {TECH_STACK_AND_STANDARDS?.map((talent, index) => {
          return (
            <div key={index} className="w-full">
              <div className="w-full flex flex-col items-start justify-between gap-3 bg-[#F6F6F6] rounded-[29px] p-7 min-h-[418px] md:min-h-[508px] relative">
                <div className="w-[11px] h-[93px] red-bg rounded-l-2xl absolute left-[-10px]" />
                <div className="flex flex-col items-start gap-3">
                  {/* <div className="rounded-full red-bg w-[71px] lg:w-[91px] h-[71px] lg:h-[91px] flex items-center justify-center"> */}
                  <Image
                    src={talent?.icon}
                    width={57}
                    height={57}
                    alt={`${talent?.title} icon`}
                  />
                  {/* </div> */}
                  <h3 className="text-[20px] font-semibold leading-none">
                    {talent?.title}
                  </h3>
                  <p className="text-sm md:text-base lg:text-[18px] leading-[1.1] font-light">
                    {talent?.description}
                  </p>
                </div>
                <div className="w-full flex items-center flex-wrap gap-2">
                  {talent?.icons?.map((i, k) => {
                    return i?.link ? (
                      <Link href={i?.link} key={k}>
                        <Image
                          src={i?.image}
                          width={i?.width}
                          height={i?.height}
                          alt={`${i?.image} icon`}
                          className=""
                        />
                      </Link>
                    ) : (
                      <Image
                        key={k}
                        src={i?.image}
                        width={i?.width}
                        height={i?.height}
                        alt={`${i?.image} icon`}
                        className=""
                      />
                    );
                  })}
                </div>
                {/* <Image
                  src={talent?.techIcons}
                  width={talent?.iconWidth}
                  height={talent?.iconHeight}
                  alt={`${talent?.title} icon`}
                  className=""
                /> */}
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default TechStackAndStandards;
