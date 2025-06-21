import Image from "next/image";
import React from "react";

const BannerAndImage = () => {
  return (
    <section id="whatareofflinegames" className="w-full relative mt-10">
      <section className="w-full z-0 relative">
        <Image
          src={"/blog-image-2.webp"}
          alt="blog-image-2"
          width={1270}
          height={593}
          className="w-full rounded-[40px] cover-image"
        />
        <Image
          src={"/blog-cover-image-shadow.webp"}
          alt="blog-cover-image"
          width={1611.68}
          height={164.64}
          className="w-[1611px] h-[7rem] lg:h-[14rem] rounded-[40px] cover-image absolute bottom-[-19%] lg:bottom-[-15%] inset-x-0 hidden lg:block"
        />
      </section>
      <section className="relative mt-5 lg:mt-0 lg:-top-[54px] xl:-top-[70px]">
        <h3 className="text-[8.6vw] md:text-[5.5vw] lg:text-[60px] font-bold text-center leading-none tracking-tight">
          What Are <span className="red-text">Offline Games?</span>
        </h3>
        <p className="text-[18px] lg:text-[22px] text-[#212121] leading-6 text-center mt-5">
          Offline games are custom software development that doesn't need strong
          internet connections to be played anywhere, anytime. They do not give
          the hassle to the user for downloading ads, and they don't wait for
          the servers to load while opening. Just tap and start playing. It
          refers to playing unlimited online games without any further internet
          connection. These games are for those looking to play solo, so they
          don't require interaction with other players. Moreover, we have
          collected some of the arcade-style fixes (Do Follow)* to hefty
          near-console style. Luckily, there are a lot of offline ones out
          there, whether you are playing on iOS or Android. 
        </p>
      </section>
    </section>
  );
};

export default BannerAndImage;
