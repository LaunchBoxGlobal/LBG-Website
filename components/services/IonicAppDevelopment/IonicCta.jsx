import Image from "next/image";
import Link from "next/link";
import React from "react";

const IonicCta = () => {
  return (
    <section className="w-full padding-x py-10 lg:pt-20">
      <div className="w-full rounded-[17px] p-16 flex items-center justify-center flex-col gap-6 flex-wrap relative ionic-bg text-white overflow-hidden">
        <Image
          src={"/technology-cta-map-image.png"}
          alt="technology-cta-map-image"
          width={1330}
          height={677}
          className="absolute inset-0 z-0 object-cover"
        />
        <h3 className="text-[28px] md:text-[38px] lg:text-[50px] leading-[1.3] font-bold text-center z-10">
          Apps for All Devices
        </h3>
        <p className="text-center text-xl md:w-[70%] lg:w-[60%]">
          Work with ionic development experts to build an app that works
          properly on any screen.
        </p>
        <Link
          href={"/contact-us"}
          className="bg-[#fff] text-[#478aff] hover:bg-black hover:text-white transition-all duration-300 text-sm md:text-lg font-bold px-5 py-4 rounded-[9px] lg:h-[66px] lg:w-[279px] flex items-center justify-center text-center z-10"
        >
          Book a Free Call
        </Link>
      </div>
    </section>
  );
};

export default IonicCta;
