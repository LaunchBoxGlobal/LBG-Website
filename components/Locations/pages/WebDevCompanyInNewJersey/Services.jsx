import { WEB_DEV_NEW_JERSEY_SERVICES } from "@/constants/locations/web-dev-company-new-jersey/web-dev-company-new-jersey-services";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <section className="w-full py-20 midlg:py-28 bg-[#fff] padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading lg:w-[90%] mx-auto">
          Advanced Development Solutions for
          <span className="red-text">New Jersey Businesses</span>
        </h2>

        <p className="section-paragraph lg:w-[90%] mx-auto">
          We build reliable, easy-to-use web apps that solve real business
          problems. From design to launch, our team delivers practical solutions
          that help New Jersey companies work smarter and grow faster.
        </p>
      </section>

      <section className="w-full flex items-start justify-center flex-wrap mt-14 gap-5 mx-auto">
        {WEB_DEV_NEW_JERSEY_SERVICES?.map((s, i) => {
          return (
            <div key={i} className="w-full md:w-[45%] lg:w-[32%] min-h-[300px]">
              <div className="w-full rounded-[16px] p-8 min-h-[370px] flex flex-col items-start gap-3 group bg-[#f9f9f9]">
                <Image
                  src={s?.icon}
                  width={s?.iconWidth}
                  height={s?.iconHeight}
                  alt={s?.title}
                  // className="group-hover:brightness-0 group-hover:invert"
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
