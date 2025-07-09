import React from "react";
import Image from "next/image";
import HeroSearchInput from "./HeroSearchInput";

const Hero = () => {
  return (
    <section className="w-full relative overflow-hidden bg-white min-h-[95vh]">
      <section className="w-full relative pt-36 2xl:pt-52 padding-x flex flex-col items-center justify-start gap-5 lg:gap-3 overflow-hidden z-10">
        <h1 className="font-extrabold text-[8.5vw] md:text-[5.5vw] lg:text-[70px] xl:text-[70px] text-center tracking-normal leading-[1.1] w-full z-10">
          <span>Talent Augmentation – The Right Skills, Exactly When You</span>{" "}
          <span className="red-text">Need Them</span>
        </h1>
        <p className="text-base md:text-lg lg:text-[22px] my-2 2xl:text-[26px] font-medium text-gray-500 text-center md:w-2/3 lg:w-[75%] leading-7 mx-auto z-10">
          Grow your team instantly with our talent augmentation and add skilled
          professionals exactly when you need them. No long-term commitments,
          just the right help at the right time.
        </p>

        <HeroSearchInput />
      </section>

      <div className="absolute -left-28 top-20 w-[300px] h-[570px] hidden midlg:flex justify-start z-0">
        <Image
          src="/on-demand-talent/hero-left-gray-dots-image.webp"
          alt="dots"
          width={252}
          height={406}
        />

        {/* Group A */}
        <div className="absolute w-full h-full animate-fade1">
          <Image
            src="/on-demand-talent/hero-left-icon-1.webp"
            alt="icon-1"
            width={54}
            height={56}
            className="absolute right-[35%] top-0 group-a-icon-1"
          />
          <Image
            src="/on-demand-talent/javascript-icon.svg"
            alt="js"
            width={54}
            height={56}
            className="absolute left-[17%] top-28 group-a-icon-2"
          />
          <Image
            src="/on-demand-talent/html-icon.webp"
            alt="html"
            width={54}
            height={56}
            className="absolute right-[7%] top-28 group-a-icon-3"
          />
        </div>

        {/* Group B */}
        <div className="absolute w-full h-full animate-fade2">
          <Image
            src="/on-demand-talent/chat-gpt-icon.webp"
            alt="chat-gpt"
            width={54}
            height={56}
            className="absolute left-[15%] top-[46%] group-b-icon-1"
          />
          <Image
            src="/on-demand-talent/hero-php-icon.webp"
            alt="php"
            width={54}
            height={56}
            className="absolute right-[22%] top-[39%] group-b-icon-2"
          />
          <Image
            src="/on-demand-talent/dot-net-left-icon.webp"
            alt="dotnet"
            width={54}
            height={56}
            className="absolute left-[20%] top-[60%] group-b-icon-3"
          />
        </div>

        {/* Group C */}
        <div className="absolute w-full h-full animate-fade3">
          <Image
            src="/on-demand-talent/hero-vuejs-icon.webp"
            alt="vuejs"
            width={74}
            height={76}
            className="absolute right-[0%] top-[70%] group-c-icon-1"
          />
          <Image
            src="/on-demand-talent/hero-left-icon-9.webp"
            alt="icon-9"
            width={54}
            height={56}
            className="absolute right-[35%] bottom-[5%] group-c-icon-2"
          />
        </div>
      </div>

      {/* right section */}
      <div className="absolute -right-28 top-20 w-[300px] h-[570px] hidden midlg:flex justify-end z-0">
        {/* Dots image */}
        <Image
          src="/on-demand-talent/hero-right-gray-dots-image.webp"
          alt="hero-right-gray-dots-image"
          width={262}
          height={456}
        />

        {/* Group A */}
        <Image
          src="/on-demand-talent/python-hero-icon.webp"
          width={54}
          height={56}
          alt="python-hero-icon"
          className="absolute top-0 left-[45%] right-group-a-1"
        />

        <div className="w-[54px] h-[54px] flex items-center justify-center rounded absolute top-[15%] right-[15%] bg-black right-group-a-2">
          <Image
            src="/on-demand-talent/hero-right-icon-2.webp"
            width={33}
            height={33}
            alt="hero-right-icon-2"
            className="object-contain"
          />
        </div>

        <Image
          src="/on-demand-talent/firebase-icon.webp"
          width={64}
          height={66}
          alt="firebase-icon"
          className="absolute top-[19%] left-[17%] right-group-a-3"
        />

        {/* Group B */}
        <Image
          src="/on-demand-talent/hero-icon-7.webp"
          width={54}
          height={56}
          alt="icon-7"
          className="absolute bottom-[-5%] left-[40%] right-group-b-1"
        />

        <Image
          src="/on-demand-talent/dot-net-core-icon.webp"
          width={54}
          height={56}
          alt="dot-net-core-icon"
          className="absolute bottom-[23%] right-[27%] right-group-b-2"
        />

        <Image
          src="/on-demand-talent/android-icon.webp"
          width={54}
          height={56}
          alt="android-icon"
          className="absolute bottom-[39%] right-[17%] right-group-b-3"
        />

        <Image
          src="/on-demand-talent/typescript-icon.webp"
          width={54}
          height={56}
          alt="typescript-icon"
          className="absolute bottom-[45%] right-[45%] right-group-b-4"
        />
      </div>
    </section>
  );
};

export default Hero;
