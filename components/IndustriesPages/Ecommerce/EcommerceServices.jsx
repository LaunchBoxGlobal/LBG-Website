import { ECOMMERCE_INDUSTRY_SERVICES } from "@/constants/industries/ecommerce-industry-content/ecommerce-industry-services";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const icons = ["/industries/ecommerce/icons/tv.png","/industries/ecommerce/icons/taskbar.png","/industries/ecommerce/icons/shop1.png","/industries/ecommerce/icons/cart1.png","/industries/ecommerce/icons/mobile.png","/industries/ecommerce/icons/pipeline.png","/industries/ecommerce/icons/cloud.png","/industries/ecommerce/icons/health.png","/industries/ecommerce/icons/box1.png","/industries/ecommerce/icons/setting.png", ]
const EcommerceServices = () => {
  return (
    <section className="w-full py-20 midlg:py-32 bg-[#fff]">
      <section className="w-full flex flex-col items-center justify-center gap-6 padding-x text-center">
        <h2 className="section-heading lg:w-[90%] mx-auto">
          Building Smarter Stores with {" "}
          <span className="red-text">Ecommerce Development Services</span>
        </h2>

        <p className="section-paragraph lg:w-[90%] mx-auto">
          We provide end-to-end{" "}
          <Link href={`/services/ecommerce-development`} className="underline">
            ecommerce development services
          </Link>{" "}
          that simplify complexity, solve challenges, and build digital stores
          designed to grow with your business.
        </p>

        <section className="w-full flex flex-wrap justify-center gap-5 max-w-[1305px] mx-auto mt-16">
          {ECOMMERCE_INDUSTRY_SERVICES?.map((service, index) => {
            return (
              <div
                className=" group w-[280px] hover:bg-[#f40e00] transition-all ease-linear bg-[#f6f6f6] flex flex-col gap-6 p-5  rounded-[16px] text-start"
                key={index}
              >
                <Image src={icons[index]} alt="tv" width={50} height={50}  className="transition-all duration-300 group-hover:invert group-hover:brightness-0 group-hover:contrast-200"/>
                <h3 className="text-[22px] group-hover:text-white font-bold leading-[1]">
                  {service?.title}
                </h3>
                <p className="text-sm font-normal group-hover:text-white  text-[#212121] leading-[1.2]">
                  {service?.description}
                </p>
              </div>
            );
          })}
        </section>
      </section>
    </section>
  );
};

export default EcommerceServices;
