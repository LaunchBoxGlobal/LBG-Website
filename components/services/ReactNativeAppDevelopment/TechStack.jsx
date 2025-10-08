import { REACT_NATIVE_TECH_STACK } from "@/constants/react-native-app-development-services/react-native-tech-stack";
import Image from "next/image";
import React from "react";

const TechStack = () => {
  return (
    <section className="w-full padding-x py-10 lg:py-20 relative overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading">
          Tools We Work With
          {/* <span className="blueText"> Apps</span> */}
        </h2>
        <p className="section-paragraph lg:w-[93%]">
          We use top-notch tech to build smooth React Native mobile apps. From
          coding to testing, our stack ensures your app runs fast and works
          right every time.
        </p>
      </section>
      <section className="mt-10 w-full flex items-center justify-center flex-wrap gap-3">
        {REACT_NATIVE_TECH_STACK?.map((t, i) => {
          return (
            <div
              className="react-native-tech-stack-card px-[16px] py-[14px] lg:py-[24px] rounded-[10px] flex items-center justify-center gap-2 group"
              key={i}
              // style={{ width: t?.boxWidth }}
            >
              <Image
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
          );
        })}
      </section>
    </section>
  );
};

export default TechStack;
