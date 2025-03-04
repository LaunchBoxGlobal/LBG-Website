import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { REVIEWS } from "@/constants/Reviews";
import CustomerReviewCard from "./CustomerReviewCard";

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
    <section className="w-full overflow-hidden block lg:hidden">
      <Swiper {...sliderSettings} modules={[Autoplay]} className="">
        {REVIEWS?.map((review, index) => {
          return (
            <SwiperSlide key={index} className="">
              <CustomerReviewCard index={1} key={index} text={review} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default CustomerReviewsMobileVersion;
