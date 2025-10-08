import React from "react";
import { IDEAL_DEVELOPMENT_MODEL } from "@/constants/off-shore-development/development-model";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";

const DevelopmentModel = () => {
  return (
    <section className="w-full py-20 midlg:py-32 xl:py-40 bg-[#F9F9F9] padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        {/* <p className="text-[#F40E00] text-lg lg:text-[25px] font-semibold">
          Offshore vs Nearshore vs Onshore: What’s Best?
        </p> */}
        <h2 className="section-heading lg:w-[90%] mx-auto">
          Offshore vs Nearshore vs Onshore:{" "}
          <span className="red-text">What’s Best?</span>
        </h2>
        <p className="section-paragraph lg:w-[60%] mx-auto">
          Select between offshore, nearshore, or onshore based on your budget,
          timeline, and collaboration preferences.
        </p>
      </section>
      <section className="w-full mt-10 lg:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {IDEAL_DEVELOPMENT_MODEL?.map((model, index) => {
          return (
            <div key={index} className="w-full">
              <div className="w-full min-h-[405px] lg:min-h-[470px] bg-white rounded-[17px] p-7 midlg:p-10 xl:p-14 flex flex-col items-center gap-4">
                <Image
                  src={model?.icon}
                  width={114}
                  height={114}
                  alt={model?.title}
                />
                <h3 className="text-center font-bold text-xl midlg:text-[28px]">
                  {model?.title}
                </h3>
                <p className="text-lg text-gray-700">{model?.description}</p>
                <ul className="w-full">
                  {model?.benefits?.map((benefit, i) => {
                    return (
                      <li
                        key={i}
                        className="flex items-center justify-start gap-2"
                      >
                        <GoDotFill className="text-xl text-gray-700" />
                        <span className="text-lg text-gray-700">{benefit}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default DevelopmentModel;
