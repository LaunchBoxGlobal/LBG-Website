import React from "react";
import { FiMinus } from "react-icons/fi";
import { LuPlus } from "react-icons/lu";
import "../../LocationComponents/industries.css";
import { MOBILE_APP_DEV_AUSTIN_INDUSTRIES } from "@/constants/locations/mobile-app-development-austin/mobile-app-dev-austin-industries";
import Link from "next/link";

const Industries = () => {
  return (
    <section className="w-full padding-x pb-10 lg:pt-28 lg:pb-32 relative overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading w-full lg:w-[80%]">
          Serving Industries in Austin with{" "}
          <span className="red-text">Custom Apps</span>
        </h2>
        <p className="section-paragraph lg:w-[80%]">
          Our Austin mobile developers create custom apps for businesses across
          various industries, including healthcare, finance, retail, and
          education. We understand the unique challenges of each sector and
          build solutions that improve efficiency, engage users, and support
          business success. Regardless of your industry, we create apps that
          perfectly fit your business needs.
        </p>
      </section>

      <section className="industries-wrapper w-full mt-10 lg:mt-16 flex flex-wrap gap-2">
        {MOBILE_APP_DEV_AUSTIN_INDUSTRIES?.map((industry, index) => (
          <div
            className="industry-card h-[320px] md:h-[340px] midlg:h-[340px] xl:h-[340px] bg-[#F3F3F3] p-5 lg:p-8 rounded-[7px] flex flex-col justify-between group relative overflow-hidden md:w-[46%] lg:w-auto"
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
        <div className="industry-card h-[320px] md:h-[340px] midlg:h-[340px] xl:h-[340px] bg-[#F3F3F3] p-5 lg:p-8 rounded-[7px] flex flex-col justify-between group relative overflow-hidden md:w-[46%] lg:w-auto">
          <h3 className="text-[26px] font-semibold leading-[1]">Ecommerce</h3>
          <div className="flex items-start justify-between gap-2 relative flex-1 mt-5 overflow-hidden">
            <div className="max-w-[85%]">
              <p className="text-base xl:text-lg font-normal lg:text-start leading-[1.2] xl:leading-[1.2] hidden group-hover:block transition-all duration-300">
                Make your store a mobile shopping destination with our
                e-commerce mobile app development solutions. Features such as
                product catalogs, order tracking, simple payment options, and
                personalized shopping experiences are included. You can increase
                revenue and reach more customers with our reliable{" "}
                <Link
                  href={`/services/mobile-app-development`}
                  className="underline"
                >
                  mobile app development services
                </Link>{" "}
                efficiently.
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
      </section>
    </section>
  );
};

export default Industries;
