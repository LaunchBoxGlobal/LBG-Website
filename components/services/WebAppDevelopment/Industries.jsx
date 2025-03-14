"use client";
import React, { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { VALUE_PROPOSITION } from "@/constants/HomeValueProposition";
import { INDUSTRIES } from "@/constants/mobile-app-development/MobileAppDevIndustries";
import Image from "next/image";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

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

const Industries = () => {
  const [state, setState] = useState(false);
  return (
    <section className="w-full padding-x py-10 lg:py-20 relative overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading">
          Industry-Focused{" "}
          <span className="red-text">Mobile App Development</span> Company
        </h2>
        <p className="section-paragraph lg:w-[90%]">
          Our mobile app development company builds apps that solve real
          industry challenges. We focus on clear features, smooth performance,
          and updates that fit your needs. Let’s create apps that truly work.
        </p>
      </section>

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
                  className="w-full rounded-xl p-6 bg-white min-h-[360px] border flex flex-col items-start justify-start gap-3 group hover:bg-[#F40E00] hover:text-white transition-all duration-300"
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

export default Industries;

function SwiperButtons() {
  const swiper = useSwiper();
  return (
    <section className="w-full flex items-center justify-center gap-3 lg:gap-1 absolute bottom-1 left-0 z-40">
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
        className="w-[40px] h-[40px] lg:w-[59px] lg:h-[59px] bg-[#F40E00] flex items-center justify-center rounded-full"
      >
        <MdOutlineKeyboardArrowRight className="text-white text-3xl" />
      </button>
    </section>
  );
}
