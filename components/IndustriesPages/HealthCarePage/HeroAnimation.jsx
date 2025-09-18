"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const HeroAnimation = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full max-w-[1366px] h-[250px] md:h-[380px] lg:h-[549px] relative flex flex-col items-center justify-center">
      {/* Background line */}
      <Image
        src={"/industries/healthcare/hero-section-border-lines.png"}
        alt="hero-section-border-lines"
        width={1043}
        height={619}
        className="absolute left-1/2 -translate-x-1/2 top-0 lg:-top-20 z-0"
      />

      {/* Stethoscope */}
      <Image
        src={`/industries/healthcare/stethoscope.png`}
        alt="stethoscope"
        width={1365}
        height={780}
        className="absolute left-1/2 -translate-x-1/2 bottom-0 z-10 hidden lg:block w-full lg:w-[85%] midlg:w-auto max-w-[95%]"
      />

      {/* ---- Screen 1 cards ---- */}
      <Image
        src={`/industries/healthcare/screen-one-card-1.png`}
        alt="screen-one-card-1"
        width={174}
        height={154}
        className={`absolute right-[-3%] bottom-[10%] z-10 transition-opacity duration-700 ${
          activeIndex === 0 ? "opacity-100" : "opacity-0"
        } hidden lg:block`}
      />
      <Image
        src={`/industries/healthcare/screen-one-card-2.png`}
        alt="screen-one-card-2"
        width={183}
        height={172}
        className={`absolute left-[-2%] top-[20%] z-10 transition-opacity duration-700 ${
          activeIndex === 0 ? "opacity-100" : "opacity-0"
        } hidden lg:block`}
      />

      {/* ---- Screen 2 cards ---- */}
      <Image
        src={`/industries/healthcare/screen-two-card-1.png`}
        alt="screen-two-card-1"
        width={203}
        height={110}
        className={`absolute right-[-3%] bottom-[10%] z-10 transition-opacity duration-700 ${
          activeIndex === 1 ? "opacity-100" : "opacity-0"
        } hidden lg:block`}
      />
      <Image
        src={`/industries/healthcare/screen-two-card-2.png`}
        alt="screen-two-card-2"
        width={167}
        height={179}
        className={`absolute left-[-2%] top-[20%] z-10 transition-opacity duration-700 ${
          activeIndex === 1 ? "opacity-100" : "opacity-0"
        } hidden lg:block`}
      />

      {/* ---- Screen 3 cards ---- */}
      <Image
        src={`/industries/healthcare/screen-three-card-1.png`}
        alt="screen-three-card-1"
        width={147}
        height={174}
        className={`absolute right-[-3%] bottom-[10%] z-10 transition-opacity duration-700 ${
          activeIndex === 2 ? "opacity-100" : "opacity-0"
        } hidden lg:block`}
      />
      <Image
        src={`/industries/healthcare/screen-three-card-2.png`}
        alt="screen-three-card-2"
        width={191}
        height={174}
        className={`absolute left-[-2%] top-[20%] z-10 transition-opacity duration-700 ${
          activeIndex === 2 ? "opacity-100" : "opacity-0"
        } hidden lg:block`}
      />

      {/* iPad + Slider */}
      <div className="mt-16 relative mx-auto w-full max-w-[857px] h-[663px] z-20">
        {/* iPad mockup */}
        <Image
          src="/industries/healthcare/ipad-pro-space-gray-landscape.png"
          alt="iPad mockup"
          width={791}
          height={593}
          className="relative z-20 mx-auto w-full md:w-[87%] lg:w-[80%] midlg:w-[92%] h-full"
        />
        <div
          className="
      absolute left-1/2 -translate-x-1/2 
      top-[3%]
      w-[94%] sm:w-[93%] md:w-[82%] lg:w-[77%] midlg:w-[86%] h-full
      
      rounded-t-[12px] md:rounded-t-[15px]
      overflow-hidden z-10
    "
        >
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: false }}
            loop
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="w-full h-full"
          >
            <SwiperSlide>
              <Image
                src="/industries/healthcare/screen-1.png"
                alt="screen 1"
                width={791}
                height={593}
                className="w-full h-full"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/industries/healthcare/screen-2.png"
                alt="screen 2"
                width={791}
                height={593}
                className="w-full h-full"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/industries/healthcare/screen-3.png"
                alt="screen 3"
                width={791}
                height={593}
                className="w-full h-full"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HeroAnimation;
