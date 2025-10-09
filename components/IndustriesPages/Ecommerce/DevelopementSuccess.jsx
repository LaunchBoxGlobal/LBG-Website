"use client";
import { ECOMMERCE_INDUSTRIES_FEATURES } from "@/constants/industries/ecommerce-industry-content/ecommerce-development-features";
import Image from "next/image";

import React from "react";
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const DevelopmentSuccess = () => {
  return (
    <section className="w-full py-20 midlg:py-32 bg-[#fff]">
      <section className="w-full flex flex-col items-center justify-center gap-6 padding-x text-center">
        <h2 className="section-heading lg:w-[90%] mx-auto">
          Features That Redefine Ecommerce Development
          <span className="red-text"> Success</span>
        </h2>

        <p className="section-paragraph lg:w-[90%] mx-auto">
          With the right features, your store isn’t just functional, it’s built
          to grow. As an ecommerce app builder, we design capabilities that
          directly connect to business outcomes, from smoother checkouts to
          smarter integrations, ensuring your ecommerce development journey
          delivers measurable success every step of the way.
        </p>

        <section className="w-full  gap-5 max-w-[1305px] mx-auto mt-16">
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            pagination={{ clickable: true, el: ".custom-pagination" }}
            slidesPerView={3} // default: show 3
            breakpoints={{
              0: { slidesPerView: 1 }, // mobile
              768: { slidesPerView: 2 }, // tablet
              1024: { slidesPerView: 3 }, // desktop
            }}
            className="mySwiper "
          >
            {ECOMMERCE_INDUSTRIES_FEATURES?.map((service, index) => (
              <SwiperSlide
                key={index}
                className="group !flex flex-col !justify-start !items-start !h-[500px] !bg-[#f6f6f6] p-5 rounded-[16px] text-left shadow-md transition-all duration-300 hover:!bg-[#f40e00]"
              >
                <h3 className="text-2xl text-start uppercase font-bold mb-3 text-black transition-colors duration-300 group-hover:text-white">
                  {service?.title}
                </h3>

                <p className="text-sm text-start font-normal text-gray-700 mb-4 transition-colors duration-300 group-hover:text-white">
                  {service?.description}
                </p>

                {/* Image aligned to the right but card text stays left */}
                <div className="absolute bottom-2 right-2">
                  <div className="w-[80px] transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={service.icon}
                      alt={service.title || "icon"}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-pagination flex justify-center mt-6"></div>

          {/* {ECOMMERCE_INDUSTRIES_FEATURES?.map((service, index) => {
            return (
              <div
                className="w-full bg-[#f6f6f6] p-5 lg:p-10 rounded-[16px] text-start"
                key={index}
              >
                <h3 className="text-[28px] font-bold leading-[1]">
                  {service?.title}
                </h3>
                <p className="text-lg font-normal leading-[1.2]">
                  {service?.description}
                </p>
              </div>
            );
          })} */}
        </section>
      </section>
    </section>
  );
};

export default DevelopmentSuccess;
