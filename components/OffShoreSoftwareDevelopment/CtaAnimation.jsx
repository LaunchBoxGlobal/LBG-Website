import Image from "next/image";
import React from "react";

const CtaAnimation = () => {
  return (
    <div className="items-center justify-center hidden lg:flex w-[456px] h-[446px] relative">
      <span className="animate-ping transition-all duration-500 absolute inline-flex h-[140px] w-[140px] rounded-full bg-[#E1E1E1] opacity-75 z-0"></span>
      <span className="animate-ping transition-all duration-500 absolute inline-flex h-[180px] w-[180px] rounded-full bg-[#E1E1E1] opacity-50 z-0"></span>
      <span className="animate-ping transition-all duration-500 absolute inline-flex h-[220px] w-[220px] rounded-full bg-[#E1E1E1] opacity-35 z-0"></span>
      <Image
        src={"/off-shore/lbg-logo.webp"}
        alt="footer-cta-image"
        width={100}
        height={100}
        className="relative inline-flex z-10"
      />

      <div className="w-full h-full absolute inset-0">
        <Image
          src={"/off-shore/footer-cta-icons.webp"}
          alt="off shore cta icons"
          width={408}
          height={296}
          className="absolute right-16 top-10"
        />
      </div>
    </div>
  );
};

export default CtaAnimation;
