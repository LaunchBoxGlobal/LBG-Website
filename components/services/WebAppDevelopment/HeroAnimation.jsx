"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./HeroAnimation.css";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

function HeroAnimation() {
  const [activeIndex, setActiveIndex] = useState(0);

  const getRandomOffset = () => {
    return Math.random() > 0.5
      ? `${Math.floor(Math.random() * 10) + 80}px`
      : "0px";
  };

  return (
    <div className="w-full h-[525px] bg-white mx-auto flex items-center justify-center relative right-[-9%] lg:right-[-1%]">
      <img
        src="/macbook-mockup.png"
        alt=""
        className="w-[10.3rem] lg:w-[782px] h-[325px] lg:h-[502px] z-20 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
      />
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        // initialSlide={3}
        // loopAdditionalSlides={3}
        coverflowEffect={{
          rotate: 0,
          stretch: -20,
          depth: 150,
          modifier: 1.2,
          spaceBetween: 0,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        spaceBetween={0}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="relative h-[322px] lg:h-[502px] flex items-center"
      >
        <SwiperSlide
          className="w-[10rem] lg:w-[14rem] h-[325px] lg:h-[502px] relative rounded-[3rem] shadow-none"
          style={{ marginTop: "60px", width: "14rem" }}
        >
          <img
            src={"/mobile-mockup07.png"}
            alt={`slide_image}`}
            className="w-[10rem] lg:w-[13rem] h-[322px] lg:h-[500px] rounded-[2rem] object-cover shadow-none"
          />
        </SwiperSlide>
        <SwiperSlide
          className="w-[10rem] lg:w-[14rem] h-[325px] lg:h-[502px] relative rounded-[3rem] shadow-none"
          style={{ marginBottom: "60px", width: "14rem" }}
        >
          <img
            src={"/mobile-mockup02.png"}
            alt={`slide_image}`}
            className="w-[10rem] lg:w-[13rem] h-[322px] lg:h-[500px] rounded-[2rem] object-cover shadow-none"
          />
        </SwiperSlide>
        <SwiperSlide
          className="w-[10rem] lg:w-[14rem] h-[325px] lg:h-[502px] relative rounded-[3rem] shadow-none"
          style={{ marginTop: "60px", width: "14rem" }}
        >
          <img
            src={"/mobile-mockup03.png"}
            alt={`slide_image}`}
            className="w-[10rem] lg:w-[13rem] h-[322px] lg:h-[500px] rounded-[2rem] object-cover shadow-none"
          />
        </SwiperSlide>
        <SwiperSlide
          className="w-[10rem] lg:w-[14rem] h-[325px] lg:h-[502px] relative rounded-[3rem] shadow-none"
          style={{ marginBottom: "60px", width: "14rem" }}
        >
          <img
            src={"/mobile-mockup04.png"}
            alt={`slide_image}`}
            className="w-[10rem] lg:w-[13rem] h-[322px] lg:h-[500px] rounded-[2rem] object-cover shadow-none"
          />
        </SwiperSlide>
        <SwiperSlide
          className="w-[10rem] lg:w-[14rem] h-[325px] lg:h-[502px] relative rounded-[3rem] shadow-none"
          style={{ marginTop: "60px", width: "14rem" }}
        >
          <img
            src={"/mobile-mockup05.png"}
            alt={`slide_image}`}
            className="w-[10rem] lg:w-[13rem] h-[322px] lg:h-[500px] rounded-[2rem] object-cover shadow-none"
          />
        </SwiperSlide>
        <SwiperSlide
          className="w-[10rem] lg:w-[14rem] h-[325px] lg:h-[502px] relative rounded-[3rem] shadow-none"
          style={{ marginBottom: "60px", width: "14rem" }}
        >
          <img
            src={"/mobile-mockup06.png"}
            alt={`slide_image}`}
            className="w-[10rem] lg:w-[13rem] h-[322px] lg:h-[500px] rounded-[2rem] object-cover shadow-none"
          />
        </SwiperSlide>
        <SwiperSlide
          className="w-[10rem] lg:w-[14rem] h-[325px] lg:h-[502px] relative rounded-[3rem] shadow-none"
          style={{ marginTop: "60px", width: "14rem" }}
        >
          <img
            src={"/mobile-mockup01.png"}
            alt={`slide_image}`}
            className="w-[10rem] lg:w-[13rem] h-[322px] lg:h-[500px] rounded-[2rem] object-cover shadow-none"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HeroAnimation;

// {
//   [
//     "/mobile-mockup07.png",
//     "/mobile-mockup02.png",
//     "/mobile-mockup03.png",
//     "/mobile-mockup04.png",
//     "/mobile-mockup05.png",
//     "/mobile-mockup06.png",
//     "/mobile-mockup01.png",
//   ].map((image, index) => {
//     // Apply random offset only to non-centered slides
//     const isCentered = index === activeIndex;
//     const randomOffset = isCentered ? "0px" : getRandomOffset();
//     return (
//       <SwiperSlide
//         key={index}
//         className="w-[10rem] lg:w-[14rem] h-[325px] lg:h-[502px] relative rounded-[3rem] shadow-none"
//         style={{ marginTop: randomOffset, marginBottom: randomOffset }}
//       >
//         <img
//           src={image}
//           alt={`slide_image_${index + 1}`}
//           className="w-[10rem] lg:w-[13rem] h-[322px] lg:h-[500px] rounded-[2rem] object-cover shadow-none"
//         />
//       </SwiperSlide>
//     );
//   });
// }
