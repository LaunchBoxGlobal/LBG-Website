"use client";
import ContactButton from "@/components/Global/ContactButton";
import {
  ECOMMERCE_WHY_CHOOSE_US2,
  ECOMMERCE_WHY_CHOOSE_US_1,
} from "@/constants/ecommerce-develpment/ecommerceWhyChooseUs";
import Image from "next/image";
import React, { useState } from "react";

const WhyChooseUs = () => {
  const [isHovered, setIsHovered] = useState(null);
  const [isCardHovered, setIsCardHovered] = useState(null);
  return (
    <section className="w-full py-10 lg:py-20 padding-x">
      <div className="w-full flex flex-col items-center gap-5">
        <h2 className="red-text font-semibold text-[25px]">
          Customer-Centric Approach
        </h2>
        <h3 className="section-heading text-center">
          Why Choose LaunchBox <br className="hidden lg:block" />{" "}
          <span className="red-text">Global?</span>
        </h3>
        <p className="section-paragraph text-center mx-auto lg:w-[90%]">
          Generic ecommerce platforms slow you down. They’re packed with
          features you’ll never use and lack the flexibility you need. Our
          custom-built solutions are tailored to your store. Fast, functional,
          and optimized to convert at every step.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14">
        {ECOMMERCE_WHY_CHOOSE_US_1?.map((c, i) => {
          return (
            <div
              className={`w-full flex flex-col items-center justify-start text-center gap-6 p-5 xl:px-6 xl:py-8 hover:bg-[#F40E00] hover:text-white transition-all duration-300 ${
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
                src={i === isHovered ? c?.whiteIcon : c?.icon}
                width={c?.iconWidth}
                height={c?.iconHeight}
                alt={c?.title}
              />
              <p className="text-lg">{c?.description}</p>
            </div>
          );
        })}
        {ECOMMERCE_WHY_CHOOSE_US2?.map((c, i) => {
          return (
            <div
              className={`w-full flex flex-col items-center justify-start text-center gap-6 p-5 xl:px-6 xl:py-8 hover:bg-[#F40E00] hover:text-white transition-all duration-300 ${
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
                src={i === isCardHovered ? c?.whiteIcon : c?.icon}
                width={c?.iconWidth}
                height={c?.iconHeight}
                alt={c?.title}
              />
              <p className="text-lg">{c?.description}</p>
            </div>
          );
        })}
      </div>

      <section className="w-full mt-10 lg:mt-16 flex justify-center lg:justify-start lg:pl-[26%] xl:pl-[32%]">
        <ContactButton text={"Get started - We’re Ready to build!"} />
      </section>
    </section>
  );
};

export default WhyChooseUs;
