"use client";
import React, { useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { INDUSTRIES } from "@/constants/mobile-app-development/MobileAppDevIndustries";

export const sliderSettings = {
  slidesPerView: 1,
  spaceBetween: 40,
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
  },
};

const SwiftIndustries = () => {
  return (
    <section className="w-full padding-x py-10 lg:py-20 relative overflow-hidden">
      {/* heading */}
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading">
          Industries We Power With{" "}
          <span className="text-[#FF5034]">iOS Apps</span>
        </h2>
        <p className="section-paragraph lg:w-[93%]">
          Our Swift app development company creates custom iOS solutions for
          businesses that need reliable, high-performing apps. Whether you're in
          healthcare, finance, or retail, we understand your industry's unique
          needs and build apps that actually solve problems.
        </p>
      </section>

      {/* swiper */}
      <section
        className={`w-full relative overflow-hidden mt-10 lg:mt-16 h-[447px]`}
      >
        <Swiper
          {...sliderSettings}
          modules={[Autoplay]}
          className="overflow-hidden h-[447px] w-full"
          style={{ width: "100%", height: "100%" }}
        >
          {INDUSTRIES?.map((value, index) => {
            const [isHovered, setIsHovered] = useState(false);
            return (
              <SwiperSlide
                key={index}
                className="w-full h-[360px]"
                style={{ width: "100%" }}
              >
                <div
                  className="w-full rounded-xl p-6 bg-white min-h-[360px] border flex flex-col items-start justify-start gap-3 group hover:bg-[#FF5034] hover:text-white transition-all duration-300"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <Image
                    src={isHovered ? value?.whiteIcon : value?.redIcon}
                    alt={value?.title}
                    width={29}
                    height={29}
                    className={`object-contain transition-all duration-300 group-hover:invert group-hover:brightness-0 group-hover:filter group-hover:contrast-200 ${
                      index === 0 && "w-[23px] h-[27px]"
                    }`}
                  />
                  <h3 className="text-[22px] lg:text-[26px] font-semibold tracking-tight">
                    {value?.title}
                  </h3>
                  <p className="text-lg lg:text-[19px] lg:leading-[24px] text-start font-light text-gray-400 group-hover:text-white">
                    {value?.description}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
          <SwiperButtons />
        </Swiper>
      </section>
    </section>
  );
};

export default SwiftIndustries;

function SwiperButtons() {
  const swiper = useSwiper();
  return (
    <section className="w-full flex items-center justify-center gap-3 lg:gap-1 absolute bottom-0 left-0 z-40">
      <button
        type="button"
        onClick={() => swiper.slidePrev()}
        className="w-[40px] h-[40px] lg:w-[59px] lg:h-[59px] bg-black flex items-center justify-center rounded-full"
      >
        <MdOutlineKeyboardArrowLeft className="text-white text-3xl" />
      </button>
      <button
        type="button"
        onClick={() => swiper.slideNext()}
        className="w-[40px] h-[40px] lg:w-[59px] lg:h-[59px] bg-[#FF5034] flex items-center justify-center rounded-full"
      >
        <MdOutlineKeyboardArrowRight className="text-white text-3xl" />
      </button>
    </section>
  );
}
