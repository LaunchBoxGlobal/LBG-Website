"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaQuoteLeft } from "react-icons/fa6";
import Image from "next/image";



const Testimonials = ({testimonials  , desc , btn}) => {
  return (
    <section className="w-full py-20 midlg:py-32 bg-[#fff]">
      <section className="w-full flex flex-col items-center justify-center gap-6 padding-x text-center">
        <h2 className="section-heading lg:w-[90%] mx-auto">
          What Our <span className="red-text">Clients Say</span>
        </h2>

        <p className="section-paragraph lg:w-[90%] mx-auto">
          {desc}
        </p>

        <section className="w-full max-w-[1305px] mx-auto mt-16">
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            pagination={{ clickable: true, el: ".custom-pagination" }}
            slidesPerView={3}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="mySwiper"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide className="!bg-transparent" key={index}>
                <div
                  className={`group flex flex-col justify-between  rounded-3xl p-8 text-left transition-all duration-300 shadow-md ${item.bg} ${item.text} hover:bg-[#212121] hover:text-white`}
                >
                  <div>
                    <div className="text-[40px] font-bold leading-[0.8] mb-4">
                      <FaQuoteLeft className="text-[#f40e00]" />
                    </div>
                    <p className="text-lg h-[300px] leading-[1.6]">{item.quote}</p>
                  </div>

                  {/* Signature Section with Image */}
                  <div className="mt-6 flex items-center gap-3">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={100}
                      height={100}
                      className=" rounded-full !w-12 !h-12 object-cover border border-gray-300 group-hover:border-white transition-all duration-300"
                    />
                    <div>
                      <p className="font-semibold text-base group-hover:text-white">
                       {item.name}
                      </p>
                      <p className="text-sm text-gray-600 group-hover:text-gray-300">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-pagination flex justify-center mt-6"></div>

          <div className="mt-10 flex justify-center">
            <a
              href="/contact-us"
              className="bg-[#F40E00] text-white font-semibold text-base px-8 py-3 rounded-full transition-all duration-300 hover:bg-[#212121]"
            >
              {btn}
            </a>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Testimonials;
