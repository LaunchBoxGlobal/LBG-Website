import AnimatedText from "@/components/StaffAugmentation/AnimatedText";
import { CUSTOM_SFOTWARE_DEV_COMPANY_HOUSTON_SERVICES } from "@/constants/locations/software-dev-company-houston/software-dev-company-houston-services";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Services = () => {
  return (
    <section className="w-full py-20 midlg:py-28 bg-[#fff] padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <AnimatedText>
          <h2 className="section-heading lg:w-[90%] mx-auto">
            Custom Software Development Services in{" "}
            <span className="red-text">Houston</span>
          </h2>
        </AnimatedText>
        <AnimatedText>
          <p className="section-paragraph lg:w-[90%] mx-auto">
            We deliver tailored solutions for Houston businesses across
            industries combining technical expertise with local market
            understanding to solve your unique challenges.
          </p>
        </AnimatedText>
      </section>

      <section className="w-full flex items-start justify-center flex-wrap mt-14 gap-5 mx-auto">
        {CUSTOM_SFOTWARE_DEV_COMPANY_HOUSTON_SERVICES?.map((s, i) => {
          return (
            <div className="w-full md:w-[45%] lg:w-[32%] min-h-[320px]">
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
        <div className="w-full md:w-[45%] lg:w-[32%] min-h-[320px]">
          <AnimatedText>
            <div className="w-full rounded-[16px] p-8 min-h-[320px] flex flex-col items-start gap-3 group bg-[#f9f9f9]">
              <Image
                src={`/locations/software-dev-company-houston/mvp-development-service-icon.png`}
                width={68}
                height={53}
                alt={`mvp-development-service-icon`}
                className=""
              />
              <h3 className="font-bold service-heading leading-[1.2]">
                MVP Development
              </h3>
              <p className="text-lg leading-[1.3]">
                Validate ideas fast with a minimal viable product perfect for
                Houston startups needing investor-ready prototypes. See{" "}
                <Link
                  href={`https://appetiser.com.au/blog/minimum-viable-product-example/`}
                  className="red-text"
                  target="_blank"
                  rel="dofollow"
                >
                  MVP examples.
                </Link>{" "}
              </p>
            </div>
          </AnimatedText>
        </div>
      </section>
    </section>
  );
};

export default Services;
