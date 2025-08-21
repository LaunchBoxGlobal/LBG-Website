"use client";
import React from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { CUSTOM_SOFTWARE_INDUSTRIES } from "@/constants/custom-software-development/CustomSoftwareIndustries";
import { LuPlus } from "react-icons/lu";
import { FiMinus } from "react-icons/fi";

const Industries = () => {
  return (
    <section className="w-full padding-x py-10 lg:pb-20 lg:pt-40 relative overflow-hidden">
      {/* heading */}
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading">
          Software Development Services for{" "}
          <span className="red-text"> Every Industry</span>
        </h2>
        <p className="section-paragraph lg:w-[93%]">
          Every industry has unique challenges, and we’re here to solve them.
          From startups to enterprises, we build tailored software solutions
          that drive efficiency, innovation, and growth. Whether you’re in
          healthcare, finance, retail, or any other sector, we create technology
          that works seamlessly for your business.
        </p>
      </section>

      <section className="industries-wrapper w-full mt-10 lg:mt-16 flex flex-wrap gap-2">
        {CUSTOM_SOFTWARE_INDUSTRIES?.map((industry, index) => (
          <div
            className="industry-card h-[300px] md:h-[280px] lg:h-[330px] midlg:h-[340px] xl:max-h-[340px] bg-[#F3F3F3] p-5 lg:p-8 rounded-[7px] flex flex-col justify-between group relative overflow-hidden"
            key={index}
          >
            <h3 className="text-[26px] font-semibold leading-[1]">
              {industry?.title}
            </h3>
            <div className="flex items-start justify-between gap-2 relative flex-1 mt-5 overflow-hidden">
              <div className="max-w-[85%]">
                <p className="text-base xl:text-lg font-normal lg:text-start leading-[1.2] xl:leading-[1.2] hidden group-hover:block transition-all duration-300">
                  {industry?.description}
                </p>
              </div>
            </div>

            <button
              type="button"
              className="min-w-[30px] min-h-[30px] max-w-[30px] max-h-[30px] bg-[#f40e00] group-hover:bg-white transition-all duration-300 rounded flex items-center justify-center absolute right-5 bottom-5"
            >
              <LuPlus className="text-white group-hover:hidden block transition-all duration-300" />
              <FiMinus className="text-black group-hover:block hidden transition-all duration-300" />
            </button>
          </div>
        ))}
        {/* <div className="industry-card h-[300px] md:h-[280px] lg:h-[330px] midlg:h-[340px] xl:max-h-[340px] bg-[#F3F3F3] p-5 lg:p-8 rounded-[7px] flex flex-col justify-between group relative overflow-hidden">
          <h3 className="text-[26px] font-semibold leading-[1]">E-commerce</h3>
          <div className="flex items-start justify-between gap-2 relative flex-1 mt-5">
            <div className="max-w-[85%]">
              <p className="text-sm lg:text-base xl:text-lg font-normal lg:text-start leading-[1] xl:leading-[1.2] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                We build e‑commerce web apps that simplify shopping, payments,
                and order tracking for you. We design e-commerce apps with
                smooth checkouts, real-time order updates, and frustration-free
                navigation. As a trusted web application development agency, we
                also offer{" "}
                <Link
                  href={`https://launchboxglobal.com/services/ecommerce-development`}
                  className="underline"
                >
                  E‑commerce development services
                </Link>{" "}
                separately, creating fast, reliable apps.
              </p>
            </div>
          </div>

          <button
            type="button"
            className="min-w-[30px] min-h-[30px] max-w-[30px] max-h-[30px] bg-[#f40e00] group-hover:bg-white transition-all duration-300 rounded flex items-center justify-center absolute right-5 bottom-5"
          >
            <LuPlus className="text-white group-hover:hidden block transition-all duration-300" />
            <FiMinus className="text-black group-hover:block hidden transition-all duration-300" />
          </button>
        </div> */}
      </section>

      {/* swiper */}
      {/* <section
        className={`w-full relative overflow-hidden mt-10 lg:mt-16 h-[447px]`}
      >
        <Swiper
          {...sliderSettings}
          modules={[Autoplay]}
          className="overflow-hidden h-[447px] w-full"
          style={{ width: "100%", height: "100%" }}
        >
          {CUSTOM_SOFTWARE_INDUSTRIES?.map((value, index) => {
            const [isHovered, setIsHovered] = useState(false);
            return (
              <SwiperSlide
                key={index}
                className="w-full h-[360px]"
                style={{ width: "100%" }}
              >
                <div
                  className="w-full rounded-xl p-6 bg-white min-h-[360px] border flex flex-col items-start justify-start gap-3 group hover:bg-[#F40E00] hover:text-white transition-all duration-300"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <Image
                    src={isHovered ? value?.whiteIcon : value?.redIcon}
                    alt={value?.title}
                    width={29}
                    height={29}
                    className={`transition-all duration-300 group-hover:invert group-hover:brightness-0 group-hover:filter group-hover:contrast-200 max-h-[29px]`}
                  />
                  <h3 className="text-[22px] lg:text-[26px] font-semibold tracking-tight">
                    {value?.title}
                  </h3>
                  <p className="text-lg lg:text-[19px] lg:leading-[24px] text-start font-light text-gray-400 group-hover:text-white">
                    {value?.description}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
          <SwiperButtons />
        </Swiper>
      </section> */}
    </section>
  );
};

export default Industries;

function SwiperButtons() {
  const swiper = useSwiper();
  return (
    <section className="w-full flex items-center justify-center gap-3 lg:gap-1 absolute bottom-0 left-0 z-40">
      <button
        type="button"
        onClick={() => swiper.slidePrev()}
        className="w-[40px] h-[40px] lg:w-[59px] lg:h-[59px] bg-black flex items-center justify-center rounded-full"
      >
        <MdOutlineKeyboardArrowLeft className="text-white text-3xl" />
      </button>
      <button
        type="button"
        onClick={() => swiper.slideNext()}
        className="w-[40px] h-[40px] lg:w-[59px] lg:h-[59px] bg-[#F40E00] flex items-center justify-center rounded-full"
      >
        <MdOutlineKeyboardArrowRight className="text-white text-3xl" />
      </button>
    </section>
  );
}
