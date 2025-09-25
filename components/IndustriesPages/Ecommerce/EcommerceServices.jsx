import { ECOMMERCE_INDUSTRY_SERVICES } from "@/constants/industries/ecommerce-industry-content/ecommerce-industry-services";
import Link from "next/link";
import React from "react";

const EcommerceServices = () => {
  return (
    <section className="w-full py-20 midlg:py-32 bg-[#fff]">
      <section className="w-full flex flex-col items-center justify-center gap-6 padding-x text-center">
        <h2 className="section-heading lg:w-[90%] mx-auto">
          Building Smarter Stores with Ecommerce{" "}
          <span className="red-text">Development Services</span>
        </h2>

        <p className="section-paragraph lg:w-[90%] mx-auto">
          We provide end-to-end{" "}
          <Link href={`/services/ecommerce-development`} className="underline">
            ecommerce development services
          </Link>{" "}
          that simplify complexity, solve challenges, and build digital stores
          designed to grow with your business.
        </p>

        <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 midlg:grid-cols-3 gap-5 max-w-[1305px] mx-auto mt-16">
          {ECOMMERCE_INDUSTRY_SERVICES?.map((service, index) => {
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
          })}
        </section>
      </section>
    </section>
  );
};

export default EcommerceServices;
