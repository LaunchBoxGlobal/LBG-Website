"use client";
import ContactButton from "@/components/Global/ContactButton";
import {
  WHY_CHOOSE_US2,
  WHY_CHOOSE_US_1,
} from "@/constants/custom-software-development/WhyChooseUs";
import {
  WEB_APP_WHY_CHOOSE_US2,
  WEB_APP_WHY_CHOOSE_US_1,
} from "@/constants/web-app-dvelopment/WebAppWhyChooseUs";
import Image from "next/image";
import React, { useState } from "react";

const WhyChooseUs = () => {
  const [isHovered, setIsHovered] = useState(null);
  const [isCardHovered, setIsCardHovered] = useState(null);
  return (
    <section className="w-full py-10 lg:py-20 padding-x">
      <div className="w-full flex flex-col items-center gap-5">
        <h2 className="section-heading text-center">
          Why LaunchBox Global is a{" "}
          <span className="red-text">Smart Choice</span>
        </h2>
        <p className="section-paragraph text-center mx-auto">
          We’re the smart choice because we are one of the leading web app
          development companies that focus on what actually works for you: just
          straightforward solutions, hands-on expertise, and a commitment to
          your success.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14">
        {WEB_APP_WHY_CHOOSE_US_1?.map((c, i) => {
          return (
            <div
              className={`w-full group flex flex-col items-center justify-start text-center gap-6 py-8 px-5 hover:bg-[#F40E00] hover:text-white transition-all duration-300 ${
                i === 0
                  ? "lg:border-r lg:border-b "
                  : i === 1
                  ? "lg:border-r lg:border-b"
                  : i === 2
                  ? "lg:border-b"
                  : ""
              }`}
              key={i}
              onMouseEnter={() => setIsHovered(i)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <h3 className="font-semibold text-[20px] xl:text-[22px]">
                {c?.title}
              </h3>
              <Image
                src={c?.icon}
                width={c?.iconWidth}
                height={c?.iconHeight}
                alt={c?.title}
                className="transition duration-300 group-hover:invert group-hover:brightness-0"
              />
              <p className="text-lg">{c?.description}</p>
            </div>
          );
        })}
        {WEB_APP_WHY_CHOOSE_US2?.map((c, i) => {
          return (
            <div
              className={`w-full group flex flex-col items-center justify-start text-center gap-6 py-8 px-5 hover:bg-[#F40E00] hover:text-white transition-all duration-300 ${
                i === 0
                  ? "lg:border-r"
                  : i === 1
                  ? "lg:border-r"
                  : i === 2
                  ? ""
                  : ""
              }`}
              key={i}
              onMouseEnter={() => setIsCardHovered(i)}
              onMouseLeave={() => setIsCardHovered(null)}
            >
              <h3 className="font-semibold text-[20px] xl:text-[22px]">
                {c?.title}
              </h3>
              <Image
                src={c?.icon}
                width={c?.iconWidth}
                height={c?.iconHeight}
                alt={c?.title}
                className="transition duration-300 group-hover:invert group-hover:brightness-0"
              />
              <p className="text-lg">{c?.description}</p>
            </div>
          );
        })}
      </div>

      <section className="w-full mt-10 lg:mt-16 flex justify-center">
        <ContactButton text={"Get started - We’re Ready to build!"} />
      </section>
    </section>
  );
};

export default WhyChooseUs;
