import { CHEYENNE_COMPANY_SERVICES } from "@/constants/locations/cheyenne-company/cheyenne-company-services";
import { WYOMING_DIGITAL_MARKETING_SERVICES } from "@/constants/locations/wyoming-digital-marketing/woyming-digital-marketing-services";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Services = () => {
  return (
    <section className="w-full py-20 midlg:py-28 bg-[#fff] padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading lg:w-[90%] mx-auto">
          Cheyenne SEO Company <span className="red-text">Services</span>
        </h2>

        <p className="section-paragraph lg:w-[90%] mx-auto">
          With customized SEO tactics, we provide Wyoming businesses with
          concrete results. Being a top Cheyenne, Wyoming SEO company, we
          concentrate on what genuinely improves your visibility. Our
          proficiency with{" "}
          <Link
            href={`/services/custom-software-development`}
            className="red-text"
          >
            custom software
          </Link>{" "}
          guarantees that your SEO success is supported by your technical
          foundation.
        </p>
      </section>

      <section className="w-full flex items-start justify-center flex-wrap mt-14 gap-5 mx-auto">
        {CHEYENNE_COMPANY_SERVICES?.map((s, i) => {
          return (
            <div className="w-full md:w-[45%] lg:w-[32%]">
              <div
                className="w-full rounded-[16px] p-8 min-h-[320px] flex flex-col items-start gap-3 group bg-[#f9f9f9]"
                key={i}
              >
                <img
                  src={s?.icon}
                  width={s?.iconWidth}
                  height={s?.iconHeight}
                  alt={s?.title}
                  className=""
                  loading="lazy"
                />
                <h3 className="font-bold service-heading leading-[1.2]">
                  {s?.title}
                </h3>
                <p className="text-lg leading-[1.3]">{s?.description}</p>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default Services;
