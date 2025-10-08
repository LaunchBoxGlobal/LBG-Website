import Image from "next/image";
import React from "react";

const LocationServices = ({ heading, redText, description, services }) => {
  return (
    <section className="w-full py-20 midlg:py-28 bg-[#fff] padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading lg:w-[90%] mx-auto">
          {heading} <span className="red-text">{redText}</span>
        </h2>

        <p className="section-paragraph lg:w-[90%] mx-auto">{description}</p>
      </section>

      <section className="w-full flex items-start justify-center flex-wrap mt-14 gap-5 mx-auto">
        {services?.map((s, i) => {
          return (
            <div className="w-full md:w-[45%] lg:w-[32%] min-h-[320px]">
              <div
                className="w-full rounded-[16px] p-8 min-h-[390px] flex flex-col items-start gap-3 group bg-[#f9f9f9]"
                key={i}
              >
                <img
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

export default LocationServices;
