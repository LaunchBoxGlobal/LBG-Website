import { SECURITY_AND_COMPLIANCE } from "@/constants/industries/healthcare-page-content/security-and-compliance";
import React from "react";

const SecurityAndCompliance = () => {
  return (
    <section className="w-full py-20 midlg:py-20 bg-[#fff] padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading lg:w-[90%] mx-auto">
          Healthcare Data Security &{" "}
          <span className="red-text">Compliance</span>
        </h2>

        <p className="section-paragraph lg:w-[90%] mx-auto">
          Our medical software developer designs healthcare software with
          security and compliance built in from the start. Your data stays
          protected, your workflows remain efficient, and your startup earns the
          trust of patients, providers, and regulators.
        </p>
      </section>

      <div className="w-full flex items-center justify-center flex-wrap gap-5 mt-16">
        {SECURITY_AND_COMPLIANCE?.map((t, i) => {
          return (
            <div
              className="w-full lg:w-[23%] min-h-[530px] bg-[#F6F6F6] rounded-[21px] px-7 pb-7 pt-20 flex flex-col items-center text-center gap-3 relative group hover:bg-[#F40E00] hover:text-white transition-all duration-300"
              key={i}
            >
              <img
                src="/industries/healthcare/security-and-compliance-card-image.png"
                alt="security-and-compliance-card-image"
                width={80}
                height={114}
                className="absolute top-7 right-7 z-0 transition duration-300 group-hover:invert group-hover:brightness-0"
              />
              <div className="w-full">
                <img
                  src={t?.icon}
                  alt={t?.alt_tag}
                  width={t?.width}
                  height={t?.height}
                  className="mx-auto object-contain transition duration-300 group-hover:invert group-hover:brightness-0"
                />
              </div>
              <h3 className="font-semibold text-[22px] leading-none mt-5">
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

export default SecurityAndCompliance;
