"use client";
import { VALUE_PROPOSITION } from "@/constants/HomeValueProposition";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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

    900: {
      slidesPerView: 2,
    },
    1100: {
      slidesPerView: 3,
    },
    1390: {
      slidesPerView: 4,
    },
    1900: {
      slidesPerView: 5,
    },
  },
};

const HomeValueProposition = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="w-full py-10 lg:pt-20 relative overflow-hidden bg-[#fff]">
      <section className="w-full flex flex-col items-center text-center justify-start gap-4 mb-7 padding-x">
        <h2 className="section-heading text-center">
          See How We Are <br /> <span className="red-text">Different</span>
        </h2>
        <p className="section-paragraph text-center mt-2 md:w-1/2 w-full">
          We bring you expert-driven, scalable, and affordable software
          solutions fast, reliable, and built for your success!
        </p>
      </section>

      <section
        className={`w-full relative overflow-visible h-[550px] mt-10 lg:mt-14`}
      >
        <Swiper
          modules={[Autoplay]}
          centeredSlides={true}
          slidesPerView={"auto"}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onSwiper={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="overflow-visible !px-[80px] h-full !flex !justify-center gap-4 relative"
        >
          {VALUE_PROPOSITION?.map((value, index) => {
            const isActive = index === activeIndex;

            return (
              <SwiperSlide
                key={index}
                className="!bg-transparent h-[507px] lg:!w-[320px] transition-transform duration-500 flex justify-center"
                style={{
                  transform: isActive ? "scale(1)" : "scale(0.9)",
                  transition: "transform 0.5s ease",
                  zIndex: isActive ? 10 : 1,
                }}
              >
                <div
                  style={{
                    backgroundColor: value.color,
                    width: "100%",
                    borderRadius: "12px",
                    height: "450px",
                    transition: "all 0.1s ease",
                    border: "1px solid rgba(255,255,255,0.2)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "8px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    className="flex items-center justify-center pt-8 px-6 gap-3 w-full"
                    style={{ textAlign: "center" }}
                  >
                    <h3 className="text-[18px] lg:text-[22px] text-white tracking-tight">
                      {value?.title}
                    </h3>
                  </div>

                  <p className="text-base px-6 text-center lg:leading-[24px] font-light text-white">
                    {value?.desc}
                  </p>

                 <div className="relative h-[280px] w-full flex items-center justify-center">
  <motion.div
    className="absolute top-20 flex items-center justify-center w-[80%] left-8"
    whileHover={{
      // scale: 1.05,
      y: [0, -15, 0], // smooth up-down motion
    }}
    transition={{
      duration: 1.4,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror",
    }}
  >
    <Image
      src={value.img}
      alt={value.title || "image"}
      className="object-contain select-none pointer-events-none"
      width={value.width}
      height={value.height}
    />
  </motion.div>
</div>

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
    <section className="w-max flex items-center justify-center gap-3 lg:gap-1 absolute bottom-[0px] left-1/2 -translate-x-1/2 mx-auto z-40">
      <button
        type="button"
        name="swipe left button"
        title="swipe left button"
        aria-label="value proposition swipe left button"
        onClick={() => swiper.slidePrev()}
        className="w-[40px] h-[40px] bg-black flex items-center justify-center rounded-full"
      >
        <MdOutlineKeyboardArrowLeft className="text-white text-xl" />
      </button>
      <button
        type="button"
        name="swipe right button"
        title="swipe right button"
        aria-label="value proposition swipe right button"
        onClick={() => swiper.slideNext()}
        className="w-[40px] h-[40px] bg-[#F40E00] flex items-center justify-center rounded-full"
      >
        <MdOutlineKeyboardArrowRight className="text-white text-xl" />
      </button>
    </section>
  );
}
