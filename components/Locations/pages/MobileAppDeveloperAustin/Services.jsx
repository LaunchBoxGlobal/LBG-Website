import { MOBILE_APP_DEVELOPMENT_AUSTIN_SERVICES } from "@/constants/locations/mobile-app-development-austin/mobile-app-dev-austin-services";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Services = () => {
  return (
    <section className="w-full py-20 midlg:py-28 bg-[#fff] padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading lg:w-[90%] mx-auto">
          App Development Services for Austin-Based{" "}
          <span className="red-text">Businesses</span>
        </h2>

        <p className="section-paragraph lg:w-[90%] mx-auto">
          Our Austin mobile app development company provides comprehensive
          services, encompassing custom design and development, testing, and
          support, to create user-friendly, reliable, and customized apps that
          meet the unique needs of every business.
        </p>
      </section>

      <section className="w-full flex items-start justify-center flex-wrap mt-14 gap-5 mx-auto">
        {MOBILE_APP_DEVELOPMENT_AUSTIN_SERVICES?.slice(0, 2)?.map((s, i) => {
          return (
            <div className="w-full md:w-[45%] lg:w-[32%] min-h-[320px]">
              <div
                className="w-full rounded-[16px] p-8 min-h-[390px] flex flex-col items-start gap-3 group bg-[#f9f9f9]"
                key={i}
              >
                <Image
                  src={s?.icon}
                  width={s?.iconWidth}
                  height={s?.iconHeight}
                  alt={s?.title}
                  loading="lazy"
                  className=""
                />
                <h3 className="font-bold service-heading leading-[1.2]">
                  {s?.title}
                </h3>
                <p className="text-lg leading-[1.3]">{s?.description}</p>
              </div>
            </div>
          );
        })}
        <div className="w-full md:w-[45%] lg:w-[32%] min-h-[320px]">
          <div className="w-full rounded-[16px] p-8 min-h-[390px] flex flex-col items-start gap-3 group bg-[#f9f9f9]">
            <Image
              src={`/locations/mobile-app-developer/ios-app-development-icon.webp`}
              width={43}
              height={53}
              alt={`iOS app development service icon`}
              loading="lazy"
              className=""
            />
            <h3 className="font-bold service-heading leading-[1.2]">
              iOS App Development Services
            </h3>
            <p className="text-lg leading-[1.3]">
              Our iOS app development services create apps for iPhones and iPads
              that run smoothly and look great. As a trusted mobile app
              development company Austin Texas, we focus on clean code, simple
              design, and thorough testing. Learn more about{" "}
              <Link
                href={`/development-technologies/swift-app-development`}
                className="underline"
              >
                Swift development
              </Link>{" "}
              for native iOS apps.
            </p>
          </div>
        </div>
        {MOBILE_APP_DEVELOPMENT_AUSTIN_SERVICES?.slice(2, 6)?.map((s, i) => {
          return (
            <div className="w-full md:w-[45%] lg:w-[32%] min-h-[320px]">
              <div
                className="w-full rounded-[16px] p-8 min-h-[390px] flex flex-col items-start gap-3 group bg-[#f9f9f9]"
                key={i}
              >
                <Image
                  src={s?.icon}
                  width={s?.iconWidth}
                  height={s?.iconHeight}
                  alt={s?.title}
                  loading="lazy"
                  className=""
                />
                <h3 className="font-bold service-heading leading-[1.2]">
                  {s?.title}
                </h3>
                <p className="text-lg leading-[1.3]">{s?.description}</p>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default Services;
