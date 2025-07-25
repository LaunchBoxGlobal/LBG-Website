import Image from "next/image";
import React from "react";

const MarketingSection = () => {
  return (
    <section className="w-full relative">
      <section className="w-full relative padding-x max-w-[1270px] mx-auto min-h-[523px]">
        <div className="fit110-red-bg w-full lg:w-[422px] h-[121px] rounded-[19px]  mx-auto lg:absolute lg:left-1/2 lg:-translate-x-1/2 z-10 flex items-center justify-center fit110-marketing">
          <h2 className="text-[22px] lg:text-[30px] font-bold text-center text-white leading-[1]">
            When Marketing Meets Structure
          </h2>
        </div>
        <Image
          src={"/case-studies/fit110/marketing-section-lines.png"}
          alt="marketing-section-lines"
          width={996}
          height={249}
          className="mx-auto z-0 relative top-[80px] hidden lg:block"
        />
        {/* <div className="h-[220px] hidden lg:block midlg:hidden"></div> */}

        <div className="w-full flex flex-col lg:flex-row items-start justify-center lg:gap-4 mt-10 lg:mt-20 midlg:mt-20">
          <div className="w-full lg:w-[240px] midlg:w-[284px] xl:w-[304px] p-5 rounded-[17px] h-[188px] border-[4px] border-white flex items-center justify-center bg-gray-100 lg:bg-transparent z-20">
            <p className="text-base xl:text-[18px] leading-[1.2] text-center">
              We didn’t overlook marketing in the process. We set the foundation
              of fitness marketing for long-term visibility.
            </p>
          </div>
          <div className="w-full lg:w-[240px] midlg:w-[284px] xl:w-[304px] p-5 rounded-[17px] h-[188px] border-[4px] border-white flex items-center justify-center bg-gray-100 lg:bg-transparent z-20">
            <p className="text-base xl:text-[18px] leading-[1.2] text-center">
              We started with keyword research to make sure Fit 110 appears
              where it matters in the functional fitness equipment market.
            </p>
          </div>
        </div>
        {/* card 01 */}
        <div className="w-full lg:w-[240px] midlg:w-[284px] xl:w-[304px] p-5 rounded-[17px] h-[188px] border-[4px] border-white flex items-center justify-center bg-gray-100 lg:bg-transparent z-20 lg:absolute top-[180px] left-0 2xl:top-[160px]">
          <p className="text-base xl:text-[18px] leading-[1.2] text-center">
            Then came product sourcing, spotlighting the right health gadgets
            and medical gadgets for the audience.
          </p>
        </div>
        <div className="w-full lg:w-[240px] midlg:w-[284px] xl:w-[304px] p-5 rounded-[17px] h-[188px] border-[4px] border-white flex items-center justify-center bg-gray-100 lg:bg-transparent z-20 lg:absolute top-[180px] right-0 2xl:top-[160px]">
          <p className="text-base xl:text-[18px] leading-[1.2] text-center">
            Our initial SEO setup handled all the essentials. Covering the
            basics like metadata and setting up Health and wellness SEO.
          </p>
        </div>
      </section>
      <Image
        src={"/case-studies/fit110/glow-circle.png"}
        alt="glow-circle"
        width={536}
        height={563}
        className="absolute right-[10%] bottom-[-40%] z-0 h-[40vw] w-[50vw] rotate-90"
      />
      <Image
        src={"/case-studies/fit110/glow-circle.png"}
        alt="glow-circle"
        width={536}
        height={563}
        className="absolute left-1/2 -translate-x-1/2 bottom-[-30%] z-0 h-[40vw] w-[50vw] rotate-90"
      />
      <Image
        src={"/case-studies/fit110/glow-circle.png"}
        alt="glow-circle"
        width={536}
        height={563}
        className="absolute left-[10%] bottom-[-30%] z-0 h-[40vw] w-[50vw] rotate-90"
      />
      <Image
        src={"/case-studies/fit110/fit110-glow-right.png"}
        alt="fit110-glow-right"
        width={536}
        height={563}
        className="absolute right-0 top-[-50%] z-0 h-[40vw] w-[50vw]"
      />
      <Image
        src={"/case-studies/fit110/fit110-glow-right.png"}
        alt="fit110-glow-right"
        width={536}
        height={563}
        className="absolute right-0 -bottom-40 z-0 h-[40vw] w-[50vw]"
      />
      <Image
        src={"/case-studies/fit110/fit110-glow-left.png"}
        alt="fit110-glow-left"
        width={536}
        height={563}
        className="absolute left-0 -bottom-40 z-10 h-[40vw] w-[50vw]"
      />
      <Image
        src={"/case-studies/fit110/fit110-glow-left.png"}
        alt="fit110-glow-left"
        width={536}
        height={563}
        className="absolute left-0 top-[-50%] z-10 h-[40vw] w-[50vw]"
      />
      <Image
        src={"/case-studies/fit110/fit110-glow-left.png"}
        alt="fit110-glow-left"
        width={536}
        height={563}
        className="absolute left-0 top-[0%] z-10 h-[40vw] w-[50vw]"
      />
      <Image
        src={"/case-studies/fit110/fit110-glow-right.png"}
        alt="fit110-glow-left"
        width={536}
        height={563}
        className="absolute right-0 top-[0%] z-10 h-[40vw] w-[50vw]"
      />
    </section>
  );
};

export default MarketingSection;

export const MarketingCard = () => {
  return (
    <div className="w-full lg:w-[304px] p-5 rounded-[17px] h-[188px] border-[4px] border-black flex items-center justify-center glass-card">
      <p className="text-lg lg:text-[20px] leading-[1.2] text-center">
        We didn’t overlook marketing in the process. We set the foundation of
        fitness marketing for long-term visibility.
      </p>
    </div>
  );
};
