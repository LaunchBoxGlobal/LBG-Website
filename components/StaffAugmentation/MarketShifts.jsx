"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { MARKET_SHIFTS } from "@/constants/StaffAugmentation/market-shifts";
import Image from "next/image";
import AnimatedText from "./AnimatedText";

export const sliderSettings = {
  slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: false,
  // autoplay: {
  //   delay: 3000,
  // },
  loop: true,
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 1,
    },

    750: {
      slidesPerView: 2,
    },

    900: {
      slidesPerView: 2,
    },
    1100: {
      slidesPerView: 3,
    },
    1390: {
      slidesPerView: 4,
    },
  },
};

const MarketShifts = () => {
  return (
    <section className="w-full py-20 midlg:py-32 xl:py-40 bg-[#F9F9F9] overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center padding-x">
        <AnimatedText>
          <h2 className="section-heading lg:w-[90%] mx-auto">
            IT Staff Augmentation{" "}
            <span className="red-text">Market Shifts</span>
          </h2>
        </AnimatedText>
        <AnimatedText>
          <p className="section-paragraph lg:w-[90%] mx-auto">
            Our IT staff augmentation company provides the right tech talent
            when you need it skilled, affordable, and ready to work on your
            schedule.
          </p>
        </AnimatedText>
      </section>

      <section
        className={`w-full relative overflow-hidden mt-10 lg:mt-14 pl-4 md:pl-8 lg:pl-28 xl:pl-40 2xl:pl-[13%]`}
      >
        <Swiper
          {...sliderSettings}
          className="overflow-hidden h-full flex gap-4 relative"
        >
          {MARKET_SHIFTS?.map((value, index) => {
            return (
              <SwiperSlide key={index} className="w-[95%] lg:w-[320px]">
                <AnimatedText direction="left">
                  <div className="w-[95%] rounded-xl p-6 bg-white h-[386px] lg:w-[320px] flex flex-col items-start justify-start gap-2 mx-2">
                    <Image
                      src={value?.image}
                      width={value?.width}
                      height={value?.height}
                      alt={value?.title}
                      className="object-contain"
                    />
                    <h3 className="text-[18px] lg:text-[22px] tracking-tight mt-3 font-medium">
                      {value?.title}
                    </h3>
                    <p className="text-base lg:text-[18px] lg:leading-[24px] text-start font-light text-[#212121]">
                      {value?.description}
                    </p>
                  </div>
                </AnimatedText>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </section>
  );
};

export default MarketShifts;
