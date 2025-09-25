import { ECOMMERCE_DEVELOPMENT_OBSTACLES } from "@/constants/industries/ecommerce-industry-content/ecommerce-development-obstacles";
import React from "react";

const DevelopmentObstacles = () => {
  return (
    <section className="w-full py-20 midlg:py-32 bg-[#fff] padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading lg:w-[90%] mx-auto">
          How We Overcome Ecommerce{" "}
          <span className="red-text">Development Obstacles</span>
        </h2>

        <p className="section-paragraph lg:w-[90%] mx-auto">
          Being an expert ecommerce mobile app development company, we help
          startups and businesses overcome every obstacle in their online store
          journey. Our expert team designs and implements solutions that ensure
          smooth, efficient, and high-performing ecommerce experiences that
          increase sales and enhance customer satisfaction.
        </p>
      </section>

      <div className="w-full flex items-center justify-center flex-wrap gap-8 mt-16">
        {ECOMMERCE_DEVELOPMENT_OBSTACLES?.map((t, i) => {
          return (
            <div
              className="w-full md:w-[45%] lg:w-[30%] min-h-[800px] bg-[#F6F6F6] rounded-[21px] px-7 pb-7 pt-10 flex flex-col items-center text-center gap-3 relative group hover:scale-[1.05] transition-all duration-300"
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

export default DevelopmentObstacles;
