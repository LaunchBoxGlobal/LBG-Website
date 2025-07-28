import Image from "next/image";
import React from "react";
import HeroSlidingMobileMockups from "./HeroSlidingMobileMockups";

const HeroAnimation = () => {
  return (
    <div className="w-full h-[300px] md:h-[496px] lg:h-[596px] relative flex items-center justify-center overflow-hidden">
      {/* shadow/glow image on */}
      <img
        src="/white-glow.png"
        alt="white-glow"
        className="w-[110%] -top-[6%] xl:-top-[10%] absolute inset-x-0 z-20 hidden lg:block 2xl:top-[-17%]"
      />
      {/* inner circle */}
      <div className="lg:w-[800px] lg:h-[800px] xl:w-[1013px] xl:h-[1013px] rounded-full border-[6px] border-gray-100 absolute -bottom-[10%] left-1/2 -translate-x-1/2 hidden lg:block">
        {/* Angular icon wrapper animate-spin-slow*/}
        <div className="absolute inset-0 animate-spin-slow">
          <div className="w-[87px] h-[87px] midlg:w-[107px] midlg:h-[107px] rounded-full bg-white custom-shadow absolute bottom-[45%] right-[-5%] flex items-center justify-center">
            <img
              src="/mobile-app-dev-angular-icon.png"
              alt="mobile-app-dev-angular-icon"
              width={63}
              height={67}
              className="object-contain"
            />
          </div>
        </div>
        {/* github */}
        <div className="absolute inset-0 animate-spin-slow">
          <div className="w-[42px] h-[42px] midlg:w-[62px] midlg:h-[62px] rounded-full bg-white custom-shadow absolute bottom-[85%] right-[15%] flex items-center justify-center">
            <img
              src="/mobile-app-dev-github-icon.png"
              alt="mobile-app-dev-github-icon"
              width={35}
              height={35}
              className="object-contain w-[40px] -rotate-[75deg]"
            />
          </div>
        </div>
        {/* apple */}
        <div className="absolute inset-0 animate-spin-slow">
          <div className="w-[42px] h-[42px] midlg:w-[62px] midlg:h-[62px] rounded-full bg-white custom-shadow absolute top-[-3%] right-[50%] flex items-center justify-center">
            <img
              src="/ios-icon.png"
              alt="ios-icon"
              width={35}
              height={35}
              className="object-contain w-[40px] rotate-90"
            />
          </div>
        </div>

        {/* HTML icon wrapper animate-spin-slow-1*/}
        <div className="absolute inset-0 animate-spin-slow">
          <div className="w-[60px] h-[60px] midlg:w-[80px] midlg:h-[80px] rounded-full bg-white custom-shadow absolute bottom-[15%] left-[6%] flex items-center justify-center">
            <img
              src="/mobile-app-dev-html-icon.png"
              alt="mobile-app-dev-html-icon"
              width={37}
              height={42}
              className="object-contain"
            />
          </div>
        </div>
        {/* red dot animate-spin-slow-1*/}
        <div className="absolute inset-0 animate-spin-slow">
          <div className="w-[20px] h-[20px] rounded-full bg-[#F40E00] custom-shadow absolute bottom-[-0.5%] left-[40%] red-shadow"></div>
        </div>
        {/* iconic icon wrapper animate-spin-slow-1*/}
        <div className="absolute inset-0 animate-spin-slow">
          <div className="w-[60px] h-[60px] midlg:w-[80px] midlg:h-[80px] rounded-full bg-white custom-shadow absolute bottom-[5%] right-[16%] flex items-center justify-center">
            <img
              src="/ionic-icon.png"
              alt="ionic-icon"
              width={37}
              height={42}
              className="object-contain"
            />
          </div>
        </div>
        {/* Swift icon wrapper animate-spin-slow-1*/}
        <div className="absolute inset-0 animate-spin-slow">
          <div className="w-[60px] h-[60px] midlg:w-[80px] midlg:h-[80px] rounded-full bg-white custom-shadow absolute bottom-[75%] left-[5%] flex items-center justify-center">
            <img
              src="/swift-icon.png"
              alt="swift-icon"
              width={42}
              height={42}
              className="object-contain"
            />
          </div>
        </div>
        {/* red dot */}
        <div className="absolute inset-0 animate-spin-slow">
          <div className="w-[20px] h-[20px] rounded-full bg-[#F40E00] custom-shadow absolute bottom-[45%] left-[-1%] red-shadow"></div>
        </div>
        {/* red dot right*/}
        {/* swift-icon */}
        <div className="absolute inset-0 animate-spin-slow">
          <div className="w-[20px] h-[20px] rounded-full bg-[#F40E00] custom-shadow absolute bottom-[25%] right-[5%] red-shadow"></div>
        </div>
      </div>
      {/* outer circle */}
      <div className="lg:w-[1000px] lg:h-[1000px] xl:w-[1290px] xl:h-[1290px] rounded-full border-[6px] border-gray-100 absolute lg:-bottom-[29%] xl:-bottom-[34%] left-1/2 -translate-x-1/2 hidden lg:block">
        {/* firebase icon animate-spin-slower*/}
        <div className="absolute inset-0 animate-spin-slower">
          <div className="w-[90px] h-[90px] midlg:w-[110px] midlg:h-[110px] rounded-full bg-white custom-shadow absolute bottom-[20%] right-[2.5%] opacity-100 flex items-center justify-center">
            {/* mobile-app-dev-firebase-icon */}
            <img
              src="/mobile-app-dev-firebase-icon.png"
              alt="mobile-app-dev-firebase-icon"
              width={98}
              height={88}
              className="w-[70%] object-contain"
            />
          </div>
        </div>
        <div className="absolute inset-0 animate-spin-slower">
          <div className="w-[20px] h-[20px] rounded-full bg-[#F40E00] custom-shadow absolute bottom-[90%] left-[20%] red-shadow"></div>
        </div>
        {/* typescript icon animate-spin-slower*/}
        <div className="absolute inset-0 animate-spin-slower">
          <div className="w-[70px] h-[70px] midlg:w-[100px] midlg:h-[100px] rounded-full bg-white custom-shadow absolute bottom-[60%] left-[-2%] opacity-100 p-5 flex items-center justify-center">
            <img
              src="/mobile-app-dev-typescript-icon.png"
              alt="mobile-app-dev-typescript-icon"
              width={66}
              height={66}
              className="object-contain"
            />
          </div>
        </div>
        {/* javascript icon animate-spin-slower*/}
        <div className="absolute inset-0 animate-spin-slower">
          <div className="w-[50px] h-[50px] midlg:w-[70px] midlg:h-[70px] rounded-full bg-white custom-shadow absolute bottom-[95%] left-[32%] opacity-100 p-5 flex items-center justify-center">
            <img
              src="/javascript-icon.png"
              alt="javascript-icon"
              width={66}
              height={66}
              className="object-contain"
            />
          </div>
        </div>
        {/* flutter icon animate-spin-slower*/}
        <div className="absolute inset-0 animate-spin-slower">
          <div className="w-[50px] h-[50px] midlg:w-[70px] midlg:h-[70px] rounded-full bg-white custom-shadow absolute bottom-[85%] right-[14%] opacity-100 p-5 flex items-center justify-center">
            <img
              src="/flutter-icon.png"
              alt="flutter-icon"
              width={66}
              height={66}
              className="object-contain"
            />
          </div>
        </div>
        {/* react-icon */}
        <div className="absolute inset-0 animate-spin-slower">
          <div className="w-[50px] h-[50px] midlg:w-[70px] midlg:h-[70px] rounded-full bg-white custom-shadow absolute bottom-[15%] left-[8%] opacity-100 p-5 flex items-center justify-center">
            <img
              src="/react-icon.png"
              alt="react-icon"
              width={66}
              height={66}
              className="object-contain"
            />
          </div>
        </div>
        <div className="absolute inset-0 animate-spin-slower">
          <div className="w-[20px] h-[20px] rounded-full bg-[#F40E00] custom-shadow absolute bottom-[50%] right-[-1%] red-shadow"></div>
        </div>
        <div className="absolute inset-0 animate-spin-slower">
          <div className="w-[20px] h-[20px] rounded-full bg-[#F40E00] custom-shadow absolute bottom-[40%] left-[0%] red-shadow"></div>
        </div>
        <div className="absolute inset-0 animate-spin-slower">
          <div className="w-[20px] h-[20px] rounded-full bg-[#F40E00] custom-shadow absolute bottom-[-1%] right-[50%] red-shadow"></div>
        </div>
      </div>

      <HeroSlidingMobileMockups />
    </div>
  );
};

export default HeroAnimation;
