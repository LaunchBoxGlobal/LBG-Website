"use client";
import React from "react";
import Image from "next/image";
import { MOBILE_APP_DEVELOPMENT_AUSTIN_TECH } from "@/constants/locations/mobile-app-development-austin/mobile-app-development-austin-tech";
import Link from "next/link";
import { MOBILE_APP_DEVELOPMENT_ATLANTA_TECH } from "@/constants/locations/mobile-app-development-atlanta/mobile-app-development-atlanta-tech";

const Tech = () => {
  return (
    <section className="w-full py-20 midlg:py-28 bg-[#fff] padding-x">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading lg:w-[80%] mx-auto">
          The Tech Behind App Development in <span className="red-text">Atlanta</span>
        </h2>
        <p className="section-paragraph lg:w-[90%] mx-auto">
        Great apps aren’t just coded, they’re created with purpose. At our studio, we mix clean design, powerful tech, and a founder-first mindset to help startups launch faster and smarter. As one of the top app developers Atlanta, we’re here to make sure your big idea turns into a product people love to use.
        </p>
      </section>

      <section className="w-full mt-10 lg:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-5 pl-5 overflow-hidden">
        {MOBILE_APP_DEVELOPMENT_ATLANTA_TECH?.map((talent, index) => {
          return (
            <div key={index} className="w-full">
              <div className="w-full flex flex-col items-start justify-between gap-3 bg-[#F6F6F6] rounded-[29px] p-7 min-h-[570px] relative group">
                <div className="w-[11px] h-[93px] red-bg rounded-l-2xl absolute left-[-10px] group-hover:translate-y-16 transition-all duration-300" />
                <div className="w-full flex flex-col items-start gap-3">
                  {/* <div className="rounded-full red-bg w-[71px] lg:w-[91px] h-[71px] lg:h-[91px] flex items-center justify-center"> */}
                  <Image
                    src={talent?.icon}
                    width={talent?.width}
                    height={talent?.height}
                    alt={`${talent?.title} icon`}
                  />
                  {/* </div> */}
                  <h3 className="text-[27px] font-semibold">{talent?.title}</h3>
                  <p className="text-sm md:text-base lg:text-[18px] leading-[1.1] font-light">
                    {talent?.description}
                  </p>
                </div>
                <div className="w-full min-h-[130px] flex items-end flex-wrap gap-2">
                  {talent?.icons?.map((i, k) => {
                    return i?.link ? (
                      <Link href={i?.link} key={k}>
                        <Image
                          src={i?.image}
                          width={i?.width}
                          height={i?.height}
                          alt={`${i?.image} icon`}
                          className=""
                        />
                      </Link>
                    ) : (
                      <Image
                        key={k}
                        src={i?.image}
                        width={i?.width}
                        height={i?.height}
                        alt={`${i?.image} icon`}
                        className=""
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
       
      </section>
    </section>
  );
};

export default Tech;
