import Image from "next/image";
import Link from "next/link";
import React from "react";

const GrayCta = () => {
  return (
    <section className="w-full relative padding-x py-20">
      <div className="w-full bg-[#fff] rounded-[17px] flex flex-col items-center gap-4">
        <h2 className="font-semibold text-[33px] lg:text-[50px] leading-[1] text-center">
          Your No Code Build Worked, Let's <br className="hidden lg:block" />{" "}
          Make it <span className="red-text">Fully Functional</span>
        </h2>
        <p className="text-center text-base lg:text-[20px] leading-[1.2]">
          We appreciate the effort behind your creation and are excited to help
          it reach its full potential.
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
          <div className="w-[20px] md:w-[50px] h-[20px] lg:h-[50px] bg-white border-2 border-gray-300 rounded-xl absolute right-[12%] lg:right-[14%] top-[20%] lg:top-[12%] flex items-center justify-center">
            <img
              src="/new-project/animated-check-icon.gif"
              alt="animated-tick-icon"
              width={35}
              height={35}
            />
          </div>
          <div className="w-[20px] md:w-[50px] h-[20px] lg:h-[50px] bg-white border-2 border-gray-300 rounded-xl absolute right-[7%] top-[53.6%] lg:top-[56.5%] flex items-center justify-center">
            <img
              src="/new-project/animated-settings-icon.gif"
              alt="animated-settings-icon"
              width={45}
              height={45}
            />
          </div>
          <div className="w-[20px] md:w-[50px] h-[20px] lg:h-[50px] bg-white border-2 border-gray-300 rounded-xl absolute right-[18%] lg:right-[20%] bottom-[19%] lg:bottom-[11%] flex items-center justify-center">
            <img
              src="/new-project/animated-shaking-hands.gif"
              alt="animated-shaking-hands"
              width={35}
              height={35}
            />
          </div>
          {/* animated svgs left*/}
          <div className="w-[20px] md:w-[50px] h-[20px] lg:h-[50px] bg-white border-2 border-gray-300 rounded-xl absolute left-[13.8%] lg:left-[14.8%] top-[22%] lg:top-[14%] flex items-center justify-center">
            <img
              src="/new-project/bolt-ai-icon.png"
              alt="bolt ai icon"
              width={35}
              height={35}
            />
          </div>
          {/* animated-settings-icon */}
          <div className="w-[20px] md:w-[50px] h-[20px] lg:h-[50px] bg-white border-2 border-gray-300 rounded-xl absolute left-[7%] top-[55.7%] lg:top-[59%] flex items-center justify-center">
            <img
              src="/new-project/lovable-icon.png"
              alt="lovale icon"
              width={35}
              height={35}
            />
          </div>
          <div className="w-[20px] md:w-[50px] h-[20px] lg:h-[50px] bg-white border-2 border-gray-300 rounded-xl absolute left-[21%] lg:left-[22%] bottom-[19%] md:bottom-[17%] lg:bottom-[11%] flex items-center justify-center">
            <img
              src="/new-project/google-firebase-icon.png"
              alt="google firebase icon"
              width={30}
              height={30}
            />
          </div>
        </div>

        <div className="w-full flex flex-col items-center gap-3 justify-center mt-6">
          <Link
            href={`/contact-us`}
            className="bg-[#F40E00] rounded-[11px] text-white py-3 px-6 text-base lg:text-[20px] font-medium hover:bg-black transition-all duration-300"
          >
            Connect With Experts
          </Link>
          <p className="lg:text-lg text-center">
            You focus on your next build, and we’ll take care of this one.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GrayCta;
