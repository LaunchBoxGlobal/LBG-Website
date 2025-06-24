import Image from "next/image";
import Link from "next/link";
import React from "react";
import PageBreadcrumb from "@/components/Common/PageBreadcrumb";

const Hero = () => {
  return (
    <section className="w-full bg-white relative pt-36 2xl:pt-52 flex flex-col items-center justify-start gap-5 overflow-hidden padding-x">
      {/* <PageBreadcrumb
        pageLink={"/case-studies/now-you-know-nashville"}
        pageTitle={"Now You Know Nashville"}
        primaryLink={"/case-studies"}
        primaryPageTitle={"Case Studies"}
      /> */}
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
        <Link href={"/"}>
          <Image
            src={"/app-store-button-image.png"}
            width={239}
            height={57}
            alt="app-store-button-image"
          />
        </Link>
        <Link href={"/"}>
          <Image
            src={"/google-play-button-image.png"}
            width={239}
            height={57}
            alt="google-play-button-image"
          />
        </Link>
      </div>

      <div className="w-full flex lg:items-center gap-4 flex-col lg:flex-row items-start justify-between tracking-tight lg:border border-[#407BA7] rounded-full md:px-8 min-h-[107px] my-20 blueShadow">
        <div className="flex items-center gap-3">
          <div className="min-w-[66px] h-[66px] bg-[#407BA7] rounded-full flex items-center justify-center">
            <Image
              src={"/case-studies/time-icon.png"}
              alt="time-icon"
              width={40}
              height={40}
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
              src={"/case-studies/globe-icon.png"}
              alt="time-icon"
              width={40}
              height={40}
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
              src={"/case-studies/constribution-icon.png"}
              alt="time-icon"
              width={44}
              height={40}
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
        src={"/case-studies/nashville-banner-1.png"}
        alt="nashville-banner-1"
        width={1270}
        height={593}
        className=""
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
