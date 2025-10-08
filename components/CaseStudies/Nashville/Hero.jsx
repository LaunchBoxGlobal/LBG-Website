import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full bg-white relative pt-36 2xl:pt-52 flex flex-col items-center justify-start gap-5 overflow-hidden padding-x">
      <Image
        src={"/case-studies/nashville/nashville-logo.png"}
        width={109}
        height={109}
        alt="bloom logo"
      />
      <h1 className="font-bold text-[40px] lg:text-[80px] leading-[1.1] text-center">
        Now You Know <span className="text-[#407BA7]">Nashville</span>
      </h1>
      <h2 className="text-[22px] font-medium">Overview</h2>
      <p className="text-xl text-center lg:w-[90%]">
        Now You Know Nashville helps students and young locals explore the
        city’s best spots from live music joints to historic landmarks. Built
        through thoughtful mobile app development, this guide sorts Nashville’s
        gems into 11 easy categories. Users pick what interests them, with
        options to unlock deeper local experiences. The app’s clean design and
        smart search make wandering the city stress-free. For tourists and
        residents alike, it’s become the go-to digital sidekick for discovering
        Nashville’s true vibe.
      </p>
      <div className="flex items-center justify-center gap-2">
        <Link href="/" aria-label="Download on the App Store">
          <Image
            src="/app-store-button-image.webp"
            alt="Download on the App Store"
            width={239}
            height={57}
            quality={90}
            sizes="(max-width: 640px) 45vw, 
             (max-width: 1024px) 30vw, 
             239px"
            className="h-auto w-full max-w-[239px]"
            priority
          />
        </Link>

        <Link href="/" aria-label="Get it on Google Play">
          <Image
            src="/google-play-button-image.webp"
            alt="Get it on Google Play"
            width={239}
            height={57}
            quality={90}
            sizes="(max-width: 640px) 45vw, 
             (max-width: 1024px) 30vw, 
             239px"
            className="h-auto w-full max-w-[239px]"
            priority
          />
        </Link>
      </div>

      <div className="w-full flex lg:items-center gap-4 flex-col lg:flex-row items-start justify-between tracking-tight lg:border border-[#407BA7] rounded-full md:px-8 min-h-[107px] my-20 blueShadow">
        <div className="flex items-center gap-3">
          <div className="min-w-[66px] h-[66px] bg-[#407BA7] rounded-full flex items-center justify-center">
            <Image
              src={"/case-studies/time-icon.webp"}
              alt="time-icon"
              width={40}
              height={40}
              priority
            />
          </div>
          <div className="flex flex-col items-start gap-1">
            <p className="text-lg text-gray-500">The Milestones</p>
            <p className="text-[18px] lg:text-[20px] font-bold">
              152 days of progress
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="min-w-[66px] h-[66px] bg-[#407BA7] rounded-full flex items-center justify-center">
            <Image
              src={"/case-studies/globe-icon.webp"}
              alt="time-icon"
              width={40}
              height={40}
              priority
            />
          </div>
          <div className="flex flex-col items-start gap-1">
            <p className="text-lg text-gray-500">The Sector</p>
            <p className="text-[18px] lg:text-[20px] font-bold">
              Tourism & City Exploration
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="min-w-[66px] h-[66px] bg-[#407BA7] rounded-full flex items-center justify-center">
            <Image
              src={"/case-studies/constribution-icon.webp"}
              alt="time-icon"
              width={44}
              height={40}
              priority
            />
          </div>
          <div className="flex flex-col items-start gap-1">
            <p className="text-lg text-gray-500">What We Did</p>
            <p className="text-[18px] lg:text-[20px] font-bold">
              Mobile App Development, Branding & UI/UX Design
            </p>
          </div>
        </div>
      </div>
      <Image
        src="/case-studies/nashville-banner-1.webp"
        alt="Nashville case study banner showcasing project details"
        width={1270}
        height={593}
        quality={85}
        priority
        sizes="(max-width: 640px) 100vw, 
         (max-width: 1024px) 90vw, 
         1270px"
        className="w-full h-auto"
      />
    </section>
  );
};

export default Hero;

// @media screen and (min-width: 1024px) {
//   .prupleShadow:hover {
//     box-shadow: #fce7f9 0px 0px 30px;
//     transition: all 0.3s;
//   }
// }
