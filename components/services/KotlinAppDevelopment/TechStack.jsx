import { KOTLIN_TECH_STACK } from "@/constants/kotlin-app-development-content/KotlinTechStack";
import Image from "next/image";
import React from "react";

const TechStack = () => {
  return (
    <section className="w-full padding-x py-10 lg:py-20">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading">
          Our Development
          <span className="kotlin-text"> Tools</span>
        </h2>
        <p className="section-paragraph lg:w-[90%]">
          We choose reliable tools for Kotlin application development services
          that build apps running smoothly for years. Our Kotlin web dev
          approach uses just what's needed, no extra fluff, just working
          solutions.
        </p>
      </section>
      <section className="w-full flex flex-wrap justify-center gap-3 mt-10 lg:mt-14">
        {KOTLIN_TECH_STACK?.map((t, i) => {
          return (
            <div
              className="border px-4 py-4 rounded-lg flex items-center justify-center gap-2 group hover:border-[#00AEFF] hover:shadow-xl shadow-[#00AEFF40] transition-all duration-300"
              key={i}
            >
              <Image
                src={t?.icon}
                width={t?.iconWidth}
                height={t?.iconHeight}
                alt={t?.title}
                className="h-[30px] grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              <p className="text-sm lg:text-xl font-medium">{t?.title}</p>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default TechStack;
