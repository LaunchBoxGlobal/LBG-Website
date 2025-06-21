import Image from "next/image";
import React from "react";

const CoverImage = () => {
  return (
    <section className="w-full relative">
      <section className="w-full z-0 relative overflow-visible">
        <Image
          src={"/blog-cover-image.webp"}
          alt="blog-cover-image"
          width={1270}
          height={593}
          priority
          className="w-full rounded-[40px] cover-image"
        />
        <Image
          src={"/blog-cover-image-shadow.webp"}
          alt="blog-cover-image"
          width={1611.68}
          height={164.64}
          priority
          className="w-[1500px] h-[7rem] md:h-[10rem] lg:h-[14rem] rounded-[40px] cover-image absolute bottom-[-20%] lg:bottom-[-19%] xl:bottom-[-13%] inset-x-0 hidden lg:block"
        />
      </section>
      <section className="relative mt-5 lg:mt-0 lg:top-[-55px] xl:-top-[70px]">
        <h1 className="text-[28px] md:text-[48px] lg:text-[60px] xl:text-[80px] font-bold text-center leading-none tracking-tight">
          The Best Offline Games To Play{" "}
          <span className="red-text">When Your Wifi Dies</span>
        </h1>
      </section>
    </section>
  );
};

export default CoverImage;
