import { MOBILE_APP_DEVELOPERS_HOUSTON_SERVICES } from "@/constants/locations/mobile-app-devs-in-houston/mobile-app-devs-in-houston-services";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Services = () => {
  return (
    <section className="w-full py-20 midlg:py-28 bg-[#fff] padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading lg:w-[90%] mx-auto">
          Mobile App Development Services in{" "}
          <span className="red-text">Houston</span>
        </h2>

        <p className="section-paragraph lg:w-[90%] mx-auto">
          As leading Mobile App Developers in Houston, we deliver custom
          solutions tailored for local businesses. Whether you need a startup
          MVP or enterprise-grade app, our mobile app development company in
          Houston builds high-performance digital products designed for Texas
          users.
        </p>
      </section>

      <section className="w-full flex items-start justify-center flex-wrap mt-14 gap-5 mx-auto">
        <div className="w-full md:w-[45%] lg:w-[32%] min-h-[300px]">
          <div className="w-full rounded-[16px] p-8 min-h-[370px] flex flex-col items-start gap-3 group bg-[#f9f9f9]">
            <Image
              src={`/locations/mobile-app-developer/cross-platform-app-development-icon.webp`}
              width={`50`}
              height={`53`}
              loading="lazy"
              alt={`cross-platform-app-development-service-icon`}
              className=""
            />
            <h3 className="font-bold service-heading leading-[1.2]">
              Cross-Platform App Development
            </h3>
            <p className="text-lg leading-[1.3]">
              Build once, deploy everywhere. We create apps that work seamlessly
              on iOS and Android, saving Houston businesses time and development
              costs. Learn more about our{" "}
              <Link
                href={`/services/mobile-app-development`}
                className="red-text"
              >
                cross-platform approach.
              </Link>
            </p>
          </div>
        </div>
        {MOBILE_APP_DEVELOPERS_HOUSTON_SERVICES?.map((s, i) => {
          return (
            <div className="w-full md:w-[45%] lg:w-[32%] min-h-[300px]">
              <div
                className="w-full rounded-[16px] p-8 min-h-[370px] flex flex-col items-start gap-3 group bg-[#f9f9f9]"
                key={i}
              >
                <Image
                  src={s?.icon}
                  width={s?.iconWidth}
                  height={s?.iconHeight}
                  alt={s?.title}
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
        <div className="w-full md:w-[45%] lg:w-[32%] min-h-[300px]">
          <div className="w-full rounded-[16px] p-8 min-h-[370px] flex flex-col items-start gap-3 group bg-[#f9f9f9]">
            <Image
              src={`/locations/mobile-app-developer/ui-ux-design-service-icon.png`}
              width={`51`}
              height={`53`}
              alt={`cross-platform-app-development-service-icon`}
              className=""
            />
            <h3 className="font-bold service-heading leading-[1.2]">
              UI/UX Design Services
            </h3>
            <p className="text-lg leading-[1.3]">
              User-friendly designs that engage and convert. Our Houston team
              creates intuitive interfaces tailored to your audience’s
              preferences. Explore our{" "}
              <Link href={`/services/branding-and-design`} className="red-text">
                design process.
              </Link>
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Services;
