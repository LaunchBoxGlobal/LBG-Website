"use client";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Autoplay } from "swiper/modules";
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

const SecurityAndComplianceSlider = ({ content }) => {
  return (
    <section className="w-full py-10 lg:pt-20 relative overflow-hidden bg-[#fff]">
      <Swiper
        {...sliderSettings}
        modules={[Autoplay]}
        className="overflow-hidden flex gap-4 min-h-[540px] relative"
      >
        {content?.map((t, i) => {
          return (
            <SwiperSlide key={i} className="w-[95%] lg:w-[320px]">
              <div
                className="w-full min-h-[420px] bg-[#F6F6F6] rounded-[21px] px-7 pb-7 pt-16 flex flex-col items-center text-center gap-3 relative group hover:bg-[#F40E00] hover:text-white transition-all duration-300"
                key={i}
              >
                <img
                  src="/industries/healthcare/security-and-compliance-card-image.png"
                  alt="security-and-compliance-card-image"
                  width={80}
                  height={114}
                  className="absolute top-7 right-7 z-0 transition duration-300 group-hover:invert group-hover:brightness-0"
                />
                <div className="w-full">
                  <img
                    src={t?.icon}
                    alt={t?.alt_tag}
                    width={t?.width}
                    height={t?.height}
                    className="mx-auto object-contain transition duration-300 group-hover:invert group-hover:brightness-0"
                  />
                </div>
                <h3 className="font-semibold text-[22px] leading-none mt-5">
                  {t?.title}
                </h3>
                <p className="text-lg leading-[1.2]">{t?.description}</p>
              </div>
            </SwiperSlide>
          );
        })}
        <SwiperButtons />
      </Swiper>
    </section>
  );
};

export default SecurityAndComplianceSlider;

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
