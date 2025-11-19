import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper core styles
import "swiper/css";
import "swiper/css/effect-cards";

// Swiper modules
import { EffectCards, Autoplay } from "swiper/modules";
import Image from "next/image";

export default function EmblaCarousel({ slides, color }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex justify-center items-center py-10">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Autoplay]}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        cardsEffect={{
          slideShadows: true,
          rotate: true,
          perSlideOffset: 12,
          perSlideRotate: 4,
          depth: 100,
        }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        className="!bg-transparent !w-[80%] md:!w-[50%]"
      >
        {slides.map((s, i) => {
          const isActive = i === activeIndex;

          return (
            <SwiperSlide
              key={i}
              className={`
    flex items-center justify-center rounded-2xl text-white 
    font-bold text-2xl transition-all duration-300 !bg-transparent
    ${isActive ? "border-4 scale-105 shadow-xl" : ""}
  `}
              style={isActive ? { borderColor: color } : {}}
            >
              <Image
                src={s}
                alt="image-card"
                width={700}
                height={700}
                className="!object-contain rounded-2xl"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
