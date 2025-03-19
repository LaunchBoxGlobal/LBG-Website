"use client";
import { VALUE_PROPOSITION } from "@/constants/HomeValueProposition";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
      slidesPerView: 4,
    },
  },
};

const HomeValueProposition = () => {
  return (
    <section className="w-full py-10 lg:pt-20 relative overflow-hidden bg-[#fff]">
      <section className="w-full flex flex-col items-center text-center lg:text-start lg:items-start justify-start gap-4 mb-7 padding-x">
        <h2 className="section-heading text-center lg:text-start">
          See How We Are <br /> <span className="red-text">Different</span>
        </h2>
        <p className="section-paragraph text-center lg:text-start mt-2 lg:w-1/2 w-full">
          We bring you expert-driven, scalable, and affordable software
          solutions fast, reliable, and built for your success!
        </p>
      </section>

      <section
        className={`w-full relative overflow-hidden h-[280px] mt-10 pl-4 md:pl-8 lg:pl-28 xl:pl-40 2xl:pl-[13%]`}
      >
        <Swiper
          {...sliderSettings}
          modules={[Autoplay]}
          className="overflow-hidden h-full"
        >
          {VALUE_PROPOSITION?.map((value, index) => {
            return (
              <SwiperSlide key={index} className="w-[95%] lg:w-[320px]">
                <div className="w-[95%] rounded-xl p-6 bg-white h-[197px] lg:w-[320px] border flex flex-col items-center justify-start">
                  <div className="flex items-center justify-center lg:justify-start gap-3 w-full">
                    <div
                      className={`lg:w-[22px] lg:h-[22px] w-[20px] h-[20px] ${
                        index % 2 === 0 ? "bg-red-600" : "bg-black"
                      }`}
                    ></div>
                    <h3 className="text-[25px] lg:text-[22px] tracking-tight">
                      {value?.title}
                    </h3>
                  </div>
                  <p className="text-lg lg:text-[18px] lg:leading-[24px] mt-3 text-center lg:text-start font-light text-gray-400">
                    {value?.desc}
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

export default HomeValueProposition;

function SwiperButtons() {
  const swiper = useSwiper();
  return (
    <section className="w-full flex items-center justify-center lg:justify-start gap-3 lg:gap-1 absolute bottom-[0px] left-0 z-40">
      <button
        type="button"
        onClick={() => swiper.slidePrev()}
        className="w-[40px] h-[40px] bg-black flex items-center justify-center rounded-full"
      >
        <MdOutlineKeyboardArrowLeft className="text-white text-xl" />
      </button>
      <button
        type="button"
        onClick={() => swiper.slideNext()}
        className="w-[40px] h-[40px] bg-[#F40E00] flex items-center justify-center rounded-full"
      >
        <MdOutlineKeyboardArrowRight className="text-white text-xl" />
      </button>
    </section>
  );
}
