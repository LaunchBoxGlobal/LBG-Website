import Image from "next/image";
import React from "react";

const HeroAnimation = () => {
  return (
    <div className="w-full h-[546px] relative flex items-center justify-center overflow-hidden">
      <div className="w-[1013px] h-[1013px] rounded-full border-[6px] border-gray-100 absolute -bottom-[10%] left-1/2 -translate-x-1/2">
        {/* angular icon */}
        <div className="w-[107px] h-[107px] rounded-full bg-white custom-shadow absolute bottom-[45%] right-[-5%] opacity-100"></div>
        {/* html icon */}
        <div className="w-[80px] h-[80px] rounded-full bg-white custom-shadow absolute bottom-[25%] left-[0%] opacity-100"></div>
      </div>

      <div className="w-[1290px] h-[1290px] rounded-full border-[6px] border-gray-100 absolute -bottom-[34%] left-1/2 -translate-x-1/2">
        {/* firebase icon */}
        <div className="w-[130px] h-[130px] rounded-full bg-white custom-shadow absolute bottom-[30%] right-[-2.5%] opacity-100"></div>
        {/* typescript icon */}
        <div className="w-[100px] h-[100px] rounded-full bg-white custom-shadow absolute bottom-[25%] left-[0%] opacity-100"></div>
      </div>

      {/* mobile app mockup */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 flex items-end justify-center">
        <Image
          src={"/mobile-app-mockup-mobile-app-development.png"}
          alt="mobile-app-mockup-mobile-app-development"
          width={318}
          height={646}
          className=""
        />
      </div>
    </div>
  );
};

export default HeroAnimation;
