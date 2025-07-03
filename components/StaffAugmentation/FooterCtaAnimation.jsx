import Image from "next/image";
import React from "react";

const FooterCtaAnimation = () => {
  return (
    <div className="items-center justify-center hidden lg:flex w-[456px] h-[446px] relative">
      <span className="animate-ping transition-all duration-500 absolute inline-flex h-[140px] w-[140px] rounded-full bg-[#E1E1E1] opacity-75 z-0"></span>
      <span className="animate-ping transition-all duration-500 absolute inline-flex h-[180px] w-[180px] rounded-full bg-[#E1E1E1] opacity-50 z-0"></span>
      <span className="animate-ping transition-all duration-500 absolute inline-flex h-[220px] w-[220px] rounded-full bg-[#E1E1E1] opacity-35 z-0"></span>

      <div className="w-full h-full absolute inset-0">
        <Image
          src={"/staff-augmentation/final-cta-mockup.png"}
          alt="final cta icons image"
          width={391}
          height={377}
          className="absolute left-1/2 -translate-x-1/2 top-5"
        />
      </div>
    </div>
  );
};

export default FooterCtaAnimation;
