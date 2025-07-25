import Image from "next/image";
import React from "react";

const HeroAnimation = () => {
  return (
    <div className="w-full h-[380px] lg:h-[546px] relative flex items-center justify-center overflow-hidden">
      <div className="w-full absolute z-20 h-2 mobile-app-dev-glow top-0 inset-x-0"></div>
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

        {/* HTML icon wrapper animate-spin-slow*/}
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
        {/* red dot */}
        <div className="absolute inset-0 animate-spin-slow">
          <div className="w-[20px] h-[20px] rounded-full bg-[#F40E00] custom-shadow absolute bottom-[45%] left-[-1%] red-shadow"></div>
        </div>
        {/* red dot right*/}
        <div className="absolute inset-0 animate-spin-slow">
          <div className="w-[20px] h-[20px] rounded-full bg-[#F40E00] custom-shadow absolute bottom-[25%] right-[5%] red-shadow"></div>
        </div>
      </div>

      <div className="lg:w-[1000px] lg:h-[1000px] xl:w-[1290px] xl:h-[1290px] rounded-full border-[6px] border-gray-100 absolute lg:-bottom-[29%] xl:-bottom-[34%] left-1/2 -translate-x-1/2 hidden lg:block">
        {/* firebase icon animate-spin-slower*/}
        <div className="absolute inset-0 animate-spin-slower">
          <div className="w-[90px] h-[90px] midlg:w-[130px] midlg:h-[130px] rounded-full bg-white custom-shadow absolute bottom-[20%] right-[1%] opacity-100 flex items-center justify-center">
            {/* mobile-app-dev-firebase-icon */}
            <img
              src="/mobile-app-dev-firebase-icon.png"
              alt="mobile-app-dev-firebase-icon"
              width={108}
              height={100}
              className="w-[70%] object-contain"
            />
          </div>
        </div>
        {/* typescript icon animate-spin-slower*/}
        <div className="absolute inset-0 animate-spin-slower">
          <div className="w-[70px] h-[70px] midlg:w-[100px] midlg:h-[100px] rounded-full bg-white custom-shadow absolute bottom-[45%] left-[-4%] opacity-100 p-5 flex items-center justify-center">
            <img
              src="/mobile-app-dev-typescript-icon.png"
              alt="mobile-app-dev-typescript-icon"
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
          <div className="w-[20px] h-[20px] rounded-full bg-[#F40E00] custom-shadow absolute bottom-[20%] left-[8.4%] red-shadow"></div>
        </div>
      </div>

      {/* mobile app mockup */}
      <div className="absolute bottom-[-30%] left-1/2 -translate-x-1/2 z-10 flex items-end justify-center h-[446px] lg:h-[646px] mockup-container">
        <img
          src="/mobile-app-mockup-mobile-app-development-1.png"
          alt="mobile-app-mockup-mobile-app-development"
          width={318}
          height={646}
        />
        <img
          src="/mobile-app-mockup-mobile-app-development-2.png"
          alt="mobile-app-mockup-mobile-app-development"
          width={318}
          height={646}
        />
        <img
          src="/mobile-app-mockup-mobile-app-development-3.png"
          alt="mobile-app-mockup-mobile-app-development"
          width={318}
          height={646}
        />
        <img
          src="/mobile-app-mockup-mobile-app-development-4.png"
          alt="mobile-app-mockup-mobile-app-development"
          width={318}
          height={646}
        />
        {/* mobile-app-mockup-mobile-app-development-2
        mobile-app-mockup-mobile-app-development-3
        mobile-app-mockup-mobile-app-development-4
         */}
      </div>
    </div>
  );
};

export default HeroAnimation;
