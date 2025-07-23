import React from "react";
import Hero from "./Hero";
import WorkApproach from "./WorkApproach";
import Challenges from "./Challenges";
import Research from "./Research";
import Solutions from "./Solutions";
import Image from "next/image";
import Userflow from "./Userflow";
import Wireframes from "./Wireframes";
import BrandIdentity from "./BrandIdentity";
import Outcomes from "./Outcomes";
import CTA from "./CTA";
import OtherCaseStudies from "./OtherCaseStudies";
import "./style.css";
import BloomCta from "./BloomCta";
import Admin from "./Admin";

const BloomCaseStudyPage = () => {
  return (
    <main className="w-full overflow-hidden flex flex-col gap-14 lg:gap-20 midlg:gap-28">
      <Hero />
      <section className="w-full padding-x">
        <div className="w-full flex lg:items-center gap-4 flex-col lg:flex-row items-start justify-between tracking-tight lg:border border-[#C04DB2] rounded-full md:px-8 min-h-[107px] prupleShadow">
          <div className="flex items-center gap-3">
            <div className="min-w-[66px] h-[66px] bloomBgColor rounded-full flex items-center justify-center">
              <Image
                src={"/case-studies/time-icon.png"}
                alt="time-icon"
                width={40}
                height={40}
              />
            </div>
            <div className="flex flex-col items-start gap-1">
              <p className="text-lg text-gray-500">Time Invested</p>
              <p className="text-[18px] lg:text-[20px] font-bold">
                213 Sunsets of Dedication
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="min-w-[66px] h-[66px] bloomBgColor rounded-full flex items-center justify-center">
              <Image
                src={"/case-studies/globe-icon.png"}
                alt="time-icon"
                width={40}
                height={40}
              />
            </div>
            <div className="flex flex-col items-start gap-1">
              <p className="text-lg text-gray-500">The Domain</p>
              <p className="text-[18px] lg:text-[20px] font-bold">
                Spiritual Ministry
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="min-w-[66px] h-[66px] bloomBgColor rounded-full flex items-center justify-center">
              <Image
                src={"/case-studies/constribution-icon.png"}
                alt="time-icon"
                width={44}
                height={40}
              />
            </div>
            <div className="flex flex-col items-start gap-1">
              <p className="text-lg text-gray-500">Our Contribution</p>
              <p className="text-[18px] lg:text-[20px] font-bold">
                Mobile App Development, Branding & UI/UX Design
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full padding-x">
        <Image
          src={"/case-studies/bloom-banner-1.png"}
          alt="bloom-banner"
          width={1270}
          height={593}
          className=""
        />
      </section>
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <WorkApproach />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      {/* <Challenges />
       */}
      <Research />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <Solutions />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <div className="w-full padding-x">
        <Image
          src={"/case-studies/bloom-banner-02.png"}
          alt="bloom-banner-02"
          width={1270}
          height={593}
          className="mx-auto h-auto lg:h-[593px]"
        />
      </div>
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <Userflow />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <Wireframes />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <BrandIdentity />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <Admin />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <Outcomes />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <div className="w-full padding-x">
        <Image
          src={"/case-studies/bloom_banner_04.png"}
          alt="bloom-banner-02"
          width={1270}
          height={593}
          className="mx-auto h-auto object-cover lg:h-[593px] midlg:h-[750px] rounded-[40px] midlg:w-[1220px]"
        />
      </div>
      <BloomCta />
      <OtherCaseStudies />
    </main>
  );
};

export default BloomCaseStudyPage;
