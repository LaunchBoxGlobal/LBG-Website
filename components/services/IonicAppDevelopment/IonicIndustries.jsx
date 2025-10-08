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
import { IONIC_NDUSTRIES } from "@/constants/ionic-app-development-content/ionic-industries";

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

const IonicIndustries = () => {
  return (
    <section className="w-full padding-x py-10 lg:py-20 relative overflow-hidden">
      {/* heading */}
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading">
          Apps That Work Everywhere for{" "}
          <span className="kotlin-text"> Your Business</span>
        </h2>
        <p className="section-paragraph lg:w-[93%]">
          Trusted development partner for multi-platform apps across industries.
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
          {IONIC_NDUSTRIES?.map((value, index) => {
            const [isHovered, setIsHovered] = useState(false);
            return (
              <SwiperSlide
                key={index}
                className="w-full h-[360px]"
                style={{ width: "100%" }}
              >
                <div
                  className="w-full rounded-xl p-6 min-h-[360px] border flex flex-col items-start justify-start gap-3 group hover:bg-[#478aff]"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <Image
                    src={value?.icon}
                    alt={value?.title}
                    width={29}
                    height={29}
                    className={`object-contain group-hover:brightness-0 group-hover:invert group-hover:filter group-hover:contrast-200 ${
                      index === 0 && "w-[23px] h-[27px]"
                    }`}
                  />
                  <h3 className="text-[22px] lg:text-[26px] font-semibold tracking-tight group-hover:text-white">
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

export default IonicIndustries;

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
        className="w-[40px] h-[40px] lg:w-[59px] lg:h-[59px] ionic-bg flex items-center justify-center rounded-full"
      >
        <MdOutlineKeyboardArrowRight className="text-white text-3xl" />
      </button>
    </section>
  );
}
