import { DIGITAL_TRANSFORMATION } from "@/constants/industries/healthcare-page-content/digital-transformation";
import React from "react";

const DigitalTransformation = () => {
  return (
    <section className="w-full py-20 midlg:py-32 xl:pt-40 bg-[#fff] padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading lg:w-[90%] mx-auto">
          Healthcare’s Digital <span className="red-text">Transformation</span>
        </h2>

        <p className="section-paragraph lg:w-[90%] mx-auto">
          The healthcare world is evolving. So we are developing medical
          software that simplifies patient care and enhances efficiency.
          Healthcare is undergoing numerous digital changes. Patients expect
          more, and rules are evolving. Our solutions help health providers
          embrace digital transformation.
        </p>
      </section>

      <div className="w-full flex items-center justify-center flex-wrap gap-5 midlg:gap-8 mt-16">
        {DIGITAL_TRANSFORMATION?.map((t, i) => {
          return (
            <div
              className="w-full md:w-[45%] lg:w-[30%] min-h-[550px] bg-[#F6F6F6] rounded-[21px] px-7 pb-7 pt-20 flex flex-col items-start gap-3 relative group hover:-translate-y-4 hover:shadow-[5px_10px_15px_#F40E0040] transition-all duration-300"
              key={i}
            >
              <div className="w-[52px] h-[52px] border-[8px] border-white rounded-full flex items-center justify-center absolute top-5 left-5">
                <span className="text-lg font-bold">0{i + 1}</span>
              </div>
              <div className="w-full lg:min-h-[110px] midlg:min-h-[130px]">
                <img
                  src={t?.icon}
                  alt={t?.alt_tag}
                  width={t?.width}
                  height={t?.height}
                  className="mx-auto lg:max-w-[100px]"
                />
              </div>
              <h3 className="font-semibold text-[22px] leading-none">
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

export default DigitalTransformation;
