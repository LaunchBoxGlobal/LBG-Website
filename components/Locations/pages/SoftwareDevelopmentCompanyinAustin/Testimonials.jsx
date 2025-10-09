"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaQuoteLeft } from "react-icons/fa6";
import Image from "next/image";

const TESTIMONIALS = [
  {
    quote:
      "LaunchBox Global did more than just code for us. They acted like true partners. Their software development consultancy helped us prioritize features, avoid costly mistakes, and launch faster than expected. Our app hit 10k users in three months, which felt impossible before working with them.",
    name: "Megan Ross",
    role: "Product Manager at HealthTrack",
    image: "/testimonials/e1.png", 
    bg: "bg-[#F5F5F5]",
    text: "text-black",
  },
  {
    quote:
      "We talked to several tech companies in Austin TX, but LaunchBox Global worked differently. They actually listened, understood our plan, and built something practical instead of overcomplicating it. Since launch, our customer retention rate has doubled, and scaling feels a lot less overwhelming now.",
    name: "Daniel Price",
    role: "CEO at TaskFlow",
    image: "/testimonials/e2.png", 
    bg: "bg-[#F5F5F5]",
    text: "text-black",
  },
  {
    quote:
      "We’d worked with a couple of local software companies before, but the experience wasn’t great. LaunchBox changed that completely. Their team blended right in with ours, answered every question, and delivered on time. They made the process smoother than we imagined.",
    name: "Laura Kim",
    role: "COO at RetailEdge",
    image: "/testimonials/e3.png", 
    bg: "bg-[#F5F5F5]",
    text: "text-black",
  },
];


const Testimonials = () => {
  return (
    <section className="w-full py-20 midlg:py-32 bg-[#fff]">
      <section className="w-full flex flex-col items-center justify-center gap-6 padding-x text-center">
        <h2 className="section-heading lg:w-[90%] mx-auto">
          What Our <span className="red-text">Clients Say</span>
        </h2>

        <p className="section-paragraph lg:w-[90%] mx-auto">
          Client experiences matter because they show the real impact of our
          work. When people search for a software development agency near me,
          these testimonials highlight why startups and businesses trust us to
          deliver reliable, growth-focused solutions.
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
            {TESTIMONIALS.map((item, index) => (
              <SwiperSlide className="!bg-transparent" key={index}>
                <div
                  className={`group flex flex-col justify-between h-[360px] lg:h-[400px] rounded-[20px] p-8 text-left transition-all duration-300 shadow-md ${item.bg} ${item.text} hover:bg-[#212121] hover:text-white`}
                >
                  <div>
                    <div className="text-[40px] font-bold leading-[0.8] mb-4">
                      <FaQuoteLeft className="text-[#f40e00]" />
                    </div>
                    <p className="text-base leading-[1.6]">{item.quote}</p>
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
              Be Our Next Success Story
            </a>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Testimonials;
