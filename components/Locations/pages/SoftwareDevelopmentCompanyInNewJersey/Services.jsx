import AnimatedText from "@/components/StaffAugmentation/AnimatedText";
import { SOFTWARE_DEV_NEW_JERSEY_SERVICES } from "@/constants/locations/software-dev-company-new-jersey/software-dev-company-new-jersey-services";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Services = () => {
  return (
    <section className="w-full py-20 midlg:py-28 bg-[#fff] padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <AnimatedText>
          <h2 className="section-heading lg:w-[90%] mx-auto">
            Tailored Software Solutions for New Jersey{" "}
            <span className="red-text">Businesses</span>
          </h2>
        </AnimatedText>
        <AnimatedText>
          <p className="section-paragraph lg:w-[90%] mx-auto">
            Here's a polished App Development Services section tailored for your
            Florida-based software development brand, incorporating your
            keywords naturally while maintaining readability and local
            relevance:
          </p>
        </AnimatedText>
      </section>

      <section className="w-full flex items-start justify-center flex-wrap mt-14 gap-5 mx-auto">
        <div className="w-full md:w-[45%] lg:w-[32%] min-h-[300px]">
          <AnimatedText>
            <div className="w-full rounded-[16px] p-8 min-h-[370px] flex flex-col items-start gap-3 group bg-[#f9f9f9]">
              <Image
                src={`/locations/software-dev-company-new-jersey/custom-software-development-icon.png`}
                width={`56`}
                height={`55`}
                alt={`Custom Software Development Services icon`}
                // className="group-hover:brightness-0 group-hover:invert"
              />
              <h3 className="font-bold service-heading leading-[1.2]">
                Custom Software Development Services
              </h3>
              <p className="text-lg leading-[1.3]">
                We focus on providing{" "}
                <Link
                  href={`/services/custom-software-development`}
                  className="red-text"
                >
                  custom software development services
                </Link>{" "}
                that satisfy your business's unique requirements. We develop our
                solutions to improve productivity and run operations smoothly
                for New Jersey-based companies.
              </p>
            </div>
          </AnimatedText>
        </div>
        {SOFTWARE_DEV_NEW_JERSEY_SERVICES?.map((s, i) => {
          return (
            <div key={i} className="w-full md:w-[45%] lg:w-[32%] min-h-[300px]">
              <AnimatedText>
                <div className="w-full rounded-[16px] p-8 min-h-[370px] flex flex-col items-start gap-3 group bg-[#f9f9f9]">
                  <Image
                    src={s?.icon}
                    width={s?.iconWidth}
                    height={s?.iconHeight}
                    alt={`${s?.title} icon`}
                    // className="group-hover:brightness-0 group-hover:invert"
                  />
                  <h3 className="font-bold service-heading leading-[1.2]">
                    {s?.title}
                  </h3>
                  <p className="text-lg leading-[1.3]">{s?.description}</p>
                </div>
              </AnimatedText>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default Services;
