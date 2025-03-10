import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { REVIEWS } from "@/constants/Reviews";
import CustomerReviewCard from "./CustomerReviewCard";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

export const sliderSettings = {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
  },
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

const CustomerReviewsMobileVersion = () => {
  return (
    <section className="w-full overflow-hidden block lg:hidden relative">
      <Swiper
        {...sliderSettings}
        modules={[Autoplay, Navigation, Pagination]}
        className="w-full h-[340px]"
      >
        {REVIEWS?.map((review, index) => {
          return (
            <SwiperSlide key={index} className="">
              <CustomerReviewCard index={1} key={index} text={review} />
            </SwiperSlide>
          );
        })}
        <Buttons />
      </Swiper>
    </section>
  );
};

export default CustomerReviewsMobileVersion;

export const Buttons = () => {
  const swiper = useSwiper();
  return (
    <div className="w-full flex items-center justify-center gap-2 absolute bottom-[25px] z-10">
      <button
        type="button"
        onClick={() => swiper.slidePrev()}
        className="w-[31px] h-[31px] rounded-full bg-black flex items-center justify-center"
      >
        <MdOutlineKeyboardArrowLeft className="text-white text-xl" />
      </button>
      <button
        type="button"
        onClick={() => swiper.slideNext()}
        className="w-[31px] h-[31px] rounded-full bg-[#F40E00] flex items-center justify-center"
      >
        <MdOutlineKeyboardArrowRight className="text-white text-xl" />
      </button>
    </div>
  );
};
