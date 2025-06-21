import { KOTLIN_APP_DEVELOPMENT_SERVICES } from "@/constants/kotlin-app-development-content/KotlinServices";
import Image from "next/image";
import React from "react";

const KotlinServices = () => {
  return (
    <section className="w-full py-10 lg:py-20 lg:pt-40">
      <section className="w-full padding-x flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading">
          Core Kotlin Development <span className="kotlin-text">Services</span>
        </h2>
        <p className="section-paragraph lg:w-[90%]">
          Kotlin application development services focused on creating Android
          apps with a strong foundation that ensures seamless scalability and
          optimal performance.
        </p>
      </section>

      <section className="w-full flex items-start justify-center gap-8 flex-wrap mt-14 padding-x mx-auto">
        {KOTLIN_APP_DEVELOPMENT_SERVICES?.map((s, i) => {
          return (
            <div
              className="w-full kotlin-services-card rounded-[16px] p-8 md:w-[45%] lg:w-[30%] min-h-[400px] h-[440px] flex flex-col items-start gap-3 group"
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

export default KotlinServices;
