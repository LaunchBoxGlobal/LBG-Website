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
import { CUSTOM_SOFTWARE_INDUSTRIES } from "@/constants/custom-software-development/CustomSoftwareIndustries";

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
  return (
    <section className="w-full padding-x py-10 lg:pb-20 relative overflow-hidden">
      {/* heading */}
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading">
          Web Application Development Services for{" "}
          <span className="red-text"> Every Industry</span>
        </h2>
        <p className="section-paragraph lg:w-[90%]">
          We provide web application development services tailored to your
          industry needs. From startups to enterprises, our web app developers
          build fast, reliable, and user-friendly apps that solve real problems.
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
          {CUSTOM_SOFTWARE_INDUSTRIES?.map((value, index) => {
            const [isHovered, setIsHovered] = useState(false);
            return (
              <SwiperSlide
                key={index}
                className="w-full h-[300px]"
                style={{ width: "100%" }}
              >
                <div
                  className="w-full rounded-xl p-6 bg-white min-h-[340px] border flex flex-col items-start justify-start gap-3 group hover:bg-[#F40E00] hover:text-white transition-all duration-300"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <Image
                    src={isHovered ? value?.whiteIcon : value?.redIcon}
                    alt={value?.title}
                    width={29}
                    height={29}
                    className={`object-contain transition-all duration-300 group-hover:invert group-hover:brightness-0 group-hover:filter group-hover:contrast-200 ${
                      index === 3 && "w-[23px] h-[27px]"
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
