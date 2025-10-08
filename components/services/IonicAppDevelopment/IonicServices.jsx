import { IONIC_APP_DEVELOPMENT_SERVICES } from "@/constants/ionic-app-development-content/ionic-services";
import Image from "next/image";
import React from "react";

const IonicServices = () => {
  return (
    <section className="w-full py-10 lg:py-20 lg:pt-40">
      <section className="w-full padding-x flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading">
          Top Ionic Development <span className="ionic-text">Services</span>
        </h2>
        <p className="section-paragraph lg:w-[90%]">
          Our Ionic app development services create cross-platform apps running
          smoothly on all devices. We focus on what users need.
        </p>
      </section>

      <section className="w-full flex items-start justify-center gap-8 flex-wrap mt-14 padding-x mx-auto">
        {IONIC_APP_DEVELOPMENT_SERVICES?.map((s, i) => {
          return (
            <div
              className="w-full bg-[#F6F6F6] hover:bg-[#478AFF] hover:text-white rounded-[16px] p-8 md:w-[45%] lg:w-[30%] min-h-[400px] flex flex-col items-start gap-3 group transition-all duration-300"
              key={i}
            >
              <Image
                src={s?.image}
                width={s?.width}
                height={s?.height}
                alt={s?.title}
                className="group-hover:brightness-0 group-hover:invert"
              />
              <h3 className="font-bold service-heading leading-[1.2]">
                {s?.title}
              </h3>
              <p className="text-lg leading-[1.3]">{s?.description}</p>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default IonicServices;
