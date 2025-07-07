import { FLUTTER_APP_DEVELOPMENT_SERVICES } from "@/constants/flutter-app-development/FlutterAppServices";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <section className="w-full py-10 lg:py-20">
      <section className="w-full padding-x flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading">
          Full-Stack Flutter App Development{" "}
          <span className="blueText">Services</span>
        </h2>
        <p className="section-paragraph lg:w-[90%]">
          As a trusted Flutter development company, we create custom solutions
          for businesses. Our team delivers top-quality Flutter app development
          services, tailored to your needs. Let's bring your app idea to life.
        </p>
      </section>

      <section className="w-full flex items-start justify-center gap-8 flex-wrap mt-14 padding-x mx-auto">
        {FLUTTER_APP_DEVELOPMENT_SERVICES?.map((s, i) => {
          return (
            <div
              className="w-full bg-[#F6F6F6] rounded-[16px] p-8 md:w-[45%] lg:w-[30%] min-h-[470px] h-[490px] flex flex-col items-start gap-3 group hover:bg-[#5290f1] hover:text-white transition-all duration-300"
              key={i}
            >
              <Image
                src={s?.image}
                width={s?.width}
                height={s?.height}
                alt={s?.title}
                className="transition-all duration-300 group-hover:brightness-0 group-hover:invert"
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

export default Services;
