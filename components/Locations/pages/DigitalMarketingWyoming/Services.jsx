import AnimatedText from "@/components/StaffAugmentation/AnimatedText";
import { MOBILE_APP_DEVELOPERS_HOUSTON_SERVICES } from "@/constants/locations/mobile-app-devs-in-houston/mobile-app-devs-in-houston-services";
import { WYOMING_DIGITAL_MARKETING_SERVICES } from "@/constants/locations/wyoming-digital-marketing/woyming-digital-marketing-services";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Services = () => {
  return (
    <section className="w-full py-20 midlg:py-28 bg-[#fff] padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <AnimatedText>
          <h2 className="section-heading lg:w-[90%] mx-auto">
            Wyoming Digital Marketing Services That{" "}
            <span className="red-text">Deliver Results</span>
          </h2>
        </AnimatedText>
        <AnimatedText>
          <p className="section-paragraph lg:w-[90%] mx-auto">
            We help Wyoming businesses grow with targeted strategies and
            measurable outcomes. While we're known as leading software companies
            in Houston, our digital marketing expertise drives success across
            the Mountain West.
          </p>
        </AnimatedText>
      </section>

      <section className="w-full flex items-start justify-center flex-wrap mt-14 gap-5 mx-auto">
        <div className="w-full md:w-[45%] lg:w-[32%]">
          <AnimatedText>
            <div className="w-full rounded-[16px] p-8 min-h-[320px] flex flex-col items-start gap-3 group bg-[#f9f9f9]">
              <Image
                src={`/locations/digital-marketing/content-marketing-service-icon.png`}
                width={`66`}
                height={`53`}
                alt={`cross-platform-app-development-service-icon`}
                className=""
              />
              <h3 className="font-bold service-heading leading-[1.2]">
                Content Marketing
              </h3>
              <p className="text-lg leading-[1.3]">
                <Link href={`/services/digital-marketing`} className="red-text">
                  Content Marketing{" "}
                </Link>
                creates valuable content that attracts Wyoming customers and
                builds trust. Our strategies boost engagement and organic
                traffic.
              </p>
            </div>
          </AnimatedText>
        </div>
        <div className="w-full md:w-[45%] lg:w-[32%]">
          <AnimatedText>
            <div className="w-full rounded-[16px] p-8 min-h-[320px] flex flex-col items-start gap-3 group bg-[#f9f9f9]">
              <Image
                src={`/locations/digital-marketing/email-marketing-service-icon.png`}
                width={`59`}
                height={`53`}
                alt={`cross-platform-app-development-service-icon`}
                className=""
              />
              <h3 className="font-bold service-heading leading-[1.2]">
                Email Marketing
              </h3>
              <p className="text-lg leading-[1.3]">
                The{" "}
                <Link href={`/services/digital-marketing`} className="red-text">
                  Email Marketing
                </Link>{" "}
                nurture leads with personalized emails designed for Wyoming
                demographics and buying habits.
              </p>
            </div>
          </AnimatedText>
        </div>
        {WYOMING_DIGITAL_MARKETING_SERVICES?.map((s, i) => {
          return (
            <div className="w-full md:w-[45%] lg:w-[32%]">
              <AnimatedText>
                <div
                  className="w-full rounded-[16px] p-8 min-h-[320px] flex flex-col items-start gap-3 group bg-[#f9f9f9]"
                  key={i}
                >
                  <Image
                    src={s?.icon}
                    width={s?.iconWidth}
                    height={s?.iconHeight}
                    alt={s?.title}
                    className=""
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
