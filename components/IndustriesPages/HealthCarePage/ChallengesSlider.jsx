"use client";
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
  spaceBetween: 10,
  centeredSlides: true,
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

    1020: {
      slidesPerView: 2,
    },
    1100: {
      slidesPerView: 3,
    },
    1390: {
      slidesPerView: 3,
    },
    1900: {
      slidesPerView: 4,
    },
  },
};

const ChallengesSlider = ({ Challenges }) => {
  return (
    <section className="w-full py-10 lg:pt-20 relative overflow-hidden bg-[#fff]">
      <Swiper
        {...sliderSettings}
        modules={[Autoplay]}
        className="overflow-hidden flex gap-4 min-h-[540px] relative"
      >
        {Challenges?.map((t, i) => {
          return (
            <SwiperSlide key={i} className="w-[95%] lg:w-[320px]">
              <div className="w-full min-h-[440px] bg-[#F6F6F6] rounded-[21px] p-7 flex flex-col items-start gap-3 relative overflow-hidden">
                <img
                  src={t?.bg_image}
                  alt={`${t?.title} image`}
                  width={t?.bg_image_width}
                  height={t?.bg_image_height}
                  className="absolute z-0 top-0 right-0 object-contain opacity-75"
                />
                <img
                  src={t?.icon}
                  alt={`${t?.title} image`}
                  width={t?.width}
                  height={t?.height}
                  className="z-10"
                />
                <h3 className="font-semibold text-[22px] leading-none z-10 mt-3 mb-10">
                  {t?.title}
                </h3>
                <p className="text-lg leading-[1.2] z-10">{t?.description}</p>
              </div>
            </SwiperSlide>
          );
        })}
        <SwiperButtons />
      </Swiper>
    </section>
  );
};

export default ChallengesSlider;

function SwiperButtons() {
  const swiper = useSwiper();
  return (
    <section className="w-max flex items-center justify-center gap-3 lg:gap-1 absolute bottom-[0px] left-1/2 -translate-x-1/2 mx-auto z-40">
      <button
        type="button"
        name="swipe left button"
        title="swipe left button"
        aria-label="value proposition swipe left button"
        onClick={() => swiper.slidePrev()}
        className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] bg-black flex items-center justify-center rounded-full"
      >
        <MdOutlineKeyboardArrowLeft className="text-white text-xl lg:text-2xl" />
      </button>
      <button
        type="button"
        name="swipe right button"
        title="swipe right button"
        aria-label="value proposition swipe right button"
        onClick={() => swiper.slideNext()}
        className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] bg-[#F40E00] flex items-center justify-center rounded-full"
      >
        <MdOutlineKeyboardArrowRight className="text-white text-xl lg:text-2xl" />
      </button>
    </section>
  );
}
