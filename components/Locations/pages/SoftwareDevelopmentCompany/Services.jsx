import AnimatedText from "@/components/StaffAugmentation/AnimatedText";
import { SOFTWARE_DEV_FLORIDA_SERVICES } from "@/constants/locations/software-dev-company-florida/software-dev-florida-services";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Services = () => {
  return (
    <section className="w-full py-20 midlg:py-28 bg-[#fff] padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <AnimatedText>
          <h2 className="section-heading lg:w-[90%] mx-auto">
            App Development Services for Florida-Based{" "}
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
        {SOFTWARE_DEV_FLORIDA_SERVICES?.map((s, i) => {
          return (
            <div key={i} className="w-full md:w-[45%] lg:w-[32%] min-h-[300px]">
              <AnimatedText>
                <div className="w-full rounded-[16px] p-8 min-h-[370px] flex flex-col items-start gap-3 group bg-[#f9f9f9]">
                  <Image
                    src={s?.icon}
                    width={s?.iconWidth}
                    height={s?.iconHeight}
                    alt={s?.title}
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
        <div className="w-full md:w-[45%] lg:w-[32%] min-h-[300px]">
          <AnimatedText>
            <div className="w-full rounded-[16px] p-8 min-h-[370px] flex flex-col items-start gap-3 group bg-[#f9f9f9]">
              <Image
                src={`/locations/software-development-company/uiux-design-icon.png`}
                width={53}
                height={53}
                alt={"software-development-company uiux-design-icon"}
                // className="group-hover:brightness-0 group-hover:invert"
              />
              <h3 className="font-bold service-heading leading-[1.2]">
                UI/UX Design & Prototyping
              </h3>
              <p className="text-lg leading-[1.3]">
                We deliver intuitive{" "}
                <Link href={`/services/ui-ux-design`}>UI and UX design</Link>{" "}
                that resonates with Florida users, prioritizing accessibility
                and engagement through wireframes and interactive prototypes.
              </p>
            </div>
          </AnimatedText>
        </div>
      </section>
    </section>
  );
};

export default Services;
