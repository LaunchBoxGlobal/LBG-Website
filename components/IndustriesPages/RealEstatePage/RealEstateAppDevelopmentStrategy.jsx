import { HEALTHCARE_SOLUTION_PHILOSOPHY } from "@/constants/industries/healthcare-page-content/solution-philosophy";
import Link from "next/link";
import React from "react";

const RealEstateAppDevelopmentStrategy = () => {
  return (
    <section className="w-full py-20 midlg:py-32 bg-[#fff] padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading lg:w-[90%] mx-auto">
          Our Strategy for Real Estate{" "}
          <span className="red-text">App Development</span>
        </h2>

        <p className="section-paragraph lg:w-[90%] mx-auto">
          Being one of the trusted real estate software development companies,
          we handle every challenge properly. We emphasize creating real estate
          development software that is user-friendly and can grow with your
          business over time.
        </p>
      </section>

      <div className="w-full flex items-center justify-center flex-wrap gap-8 mt-16">
        <div className="w-full md:w-[45%] lg:w-[30%] lg:h-[580px] midlg:h-[530px] bg-[#F6F6F6] rounded-[21px] px-7 pb-7 pt-10 flex flex-col items-center gap-3 relative group hover:scale-[1.05] transition-all duration-300 text-center">
          <div className="w-full">
            <img
              src={`/industries/healthcare/functionality-first-approach-icon.png`}
              alt={`functionality first approach icon`}
              width={175}
              height={175}
              className="mx-auto object-contain"
            />
          </div>
          <h3 className="font-semibold text-[22px] leading-none mt-5 text-center">
            Functionality-First
          </h3>
          <p className="text-lg leading-[1.2]">
            Unlike typical platforms, our{" "}
            <Link
              href={`/services/custom-software-development`}
              className="underline"
            >
              software
            </Link>{" "}
            and{" "}
            <Link
              href={`/services/mobile-app-development`}
              className="underline"
            >
              mobile app development
            </Link>{" "}
            for real estate focuses on both functionality and user experience.
            We build apps that simplify property search, facilitate listings
            management, and make client interactions interactive and efficient.
          </p>
        </div>
        {HEALTHCARE_SOLUTION_PHILOSOPHY?.map((t, i) => {
          return (
            <div
              className="w-full md:w-[45%] lg:w-[30%] lg:h-[580px] midlg:h-[530px] bg-[#F6F6F6] rounded-[21px] px-7 pb-7 pt-10 flex flex-col items-center gap-3 relative group hover:scale-[1.05] transition-all duration-300 text-center"
              key={i}
            >
              <div className="w-full">
                <img
                  src={t?.image}
                  alt={t?.alt_tag}
                  width={t?.width}
                  height={t?.height}
                  className="mx-auto object-contain"
                />
              </div>
              <h3 className="font-semibold text-[22px] leading-none mt-5 text-center">
                {t?.title}
              </h3>
              <p className="text-lg leading-[1.2]">{t?.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RealEstateAppDevelopmentStrategy;
