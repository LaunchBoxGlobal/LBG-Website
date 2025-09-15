import React from "react";
import "./style.css";
import Image from "next/image";

const HeroAnimation = () => {
  return (
    <div className="w-full max-w-[1260px] relative">
      <Image
        src={"/industries/real-estate/hero-section-mockup.png"}
        alt="hero-section-mockup"
        width={1262}
        height={707}
        className="mx-auto object-contain"
      />

      {/* secure payment */}
      {/* <div className="bg-white min-w-[230px] p-4 rounded-[17px] custom-shadow absolute top-7 right-[6%] z-10">
        <span className="font-medium text-lg text-gray-600 text-nowrap">
          Secure Payment Gateway
        </span>
      </div> */}

      {/* Interactive Dashboards */}
      {/* <div className="bg-white min-w-[210px] p-4 rounded-[17px] custom-shadow absolute bottom-[39%] right-[3%] z-10">
        <span className="font-medium text-lg text-gray-600 text-nowrap">
          Interactive Dashboards
        </span>
      </div> */}

      {/* Interactive Dashboards */}
      {/* <div className="bg-white min-w-[210px] p-4 rounded-[17px] custom-shadow absolute bottom-[59%] left-[1%] z-10">
        <span className="font-medium text-lg text-gray-600 text-nowrap">
          Advanced Lead Management
        </span>
      </div> */}
    </div>
  );
};

export default HeroAnimation;
