import Image from "next/image";
import React from "react";

const GrayCta = () => {
  return (
    <section className="w-full relative padding-x py-20">
      <div className="w-full bg-[#F6F6F6] rounded-[17px] px-10 py-20 flex flex-col items-center gap-4">
        <h2 className="font-semibold text-[33px] lg:text-[50px] leading-[1] text-center">
          Built something with vibe coding or <br className="hidden lg:block" />
          <span className="red-text">no code</span>
        </h2>
        <p className="text-center text-base lg:text-[20px] leading-[1.2]">
          You made a smart move so let’s turn your AI assisted coding into real
          software
        </p>

        <div className="w-full max-w-[830px] h-[203px] md:h-[473px] md:mt-10 relative">
          <Image
            src={`/new-project/cta-image.png`}
            alt="cta-image"
            width={830}
            height={472}
            className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-0"
          />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 spin-tire">
            <Image
              src={`/new-project/cta-rotating-circle.png`}
              alt="cta-rotating-circle"
              width={383}
              height={383}
              className=""
            />
          </div>
          <Image
            src={`/new-project/launchboxgbloal-logo-cta.png`}
            alt="launchboxgbloal-logo-cta"
            width={233}
            height={233}
            className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 w-[70px] md:w-[170px] lg:w-[210px]"
          />
          {/* animated svgs right*/}
          <div className="w-[20px] md:w-[50px] h-[20px] lg:h-[50px] bg-white border-2 border-gray-300 rounded-xl absolute right-[12%] lg:right-[14%] top-[20%] lg:top-[12%]"></div>
          <div className="w-[20px] md:w-[50px] h-[20px] lg:h-[50px] bg-white border-2 border-gray-300 rounded-xl absolute right-[7%] top-[53.6%] lg:top-[56.5%]"></div>
          <div className="w-[20px] md:w-[50px] h-[20px] lg:h-[50px] bg-white border-2 border-gray-300 rounded-xl absolute right-[18%] lg:right-[20%] bottom-[19%] lg:bottom-[11%]"></div>
          {/* animated svgs left*/}
          <div className="w-[20px] md:w-[50px] h-[20px] lg:h-[50px] bg-white border-2 border-gray-300 rounded-xl absolute left-[13.8%] lg:left-[14.8%] top-[22%] lg:top-[14%]"></div>
          <div className="w-[20px] md:w-[50px] h-[20px] lg:h-[50px] bg-white border-2 border-gray-300 rounded-xl absolute left-[7%] top-[55.7%] lg:top-[59%]"></div>
          <div className="w-[20px] md:w-[50px] h-[20px] lg:h-[50px] bg-white border-2 border-gray-300 rounded-xl absolute left-[21%] lg:left-[22%] bottom-[19%] md:bottom-[17%] lg:bottom-[11%]"></div>
        </div>
      </div>
    </section>
  );
};

export default GrayCta;
