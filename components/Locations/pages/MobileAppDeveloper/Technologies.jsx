import { FLUTTER_TECH_STACK } from "@/constants/flutter-app-development/techstack";
import { REACT_NATIVE_TECH_STACK } from "@/constants/react-native-app-development-services/react-native-tech-stack";
import Image from "next/image";
import React from "react";

const Technologies = () => {
  return (
    <>
      <section className="w-full flex items-center flex-wrap justify-center gap-2">
        {FLUTTER_TECH_STACK?.map((t, i) => {
          return (
            <div className="" key={i}>
              <div
                className="border px-[16px] py-[14px] lg:py-[24px] rounded-[10px] flex items-center justify-center gap-2 group"
                // key={i}
                style={{ width: t?.boxWidth }}
              >
                <img
                  src={t?.icon}
                  width={t?.width}
                  height={t?.height}
                  alt={t?.title}
                  className="grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <span className="text-sm md:text-lg lg:text-[22px] font-medium text-gray-500">
                  {t?.title}
                </span>
              </div>
            </div>
          );
        })}
        {REACT_NATIVE_TECH_STACK?.map((t, i) => {
          return (
            <div className="" key={i}>
              <div
                className="react-native-tech-stack-card border px-[16px] py-[14px] lg:py-[24px] rounded-[10px] flex items-center justify-center gap-2 group"
                // key={i}
                // style={{ width: t?.boxWidth }}
              >
                <img
                  src={t?.icon}
                  width={t?.width}
                  height={t?.height}
                  alt={t?.title}
                  className="grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <span className="text-sm md:text-lg lg:text-[22px] font-medium text-gray-500 whitespace-nowrap">
                  {t?.title}
                </span>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Technologies;
