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
      <div className="absolute lg:top-2 midlg:top-4 xl:top-7 lg:right-[8%] xl:right-[6%] z-10 lg:w-[300px] midlg:w-[350px] xl:w-[400px] hidden lg:flex justify-end">
        <Image
          src={`/industries/real-estate/secure-payment-border-line.png`}
          width={276}
          height={42}
          alt="border line"
          className="object-contain absolute top-[40%] left-[-17%]"
        />
        <div className="bg-white max-w-[240px] p-4 rounded-[17px] hero-card-shadow z-10">
          <span className="font-medium xl:text-lg text-gray-600 text-nowrap">
            Secure Payment Gateway
          </span>
        </div>
      </div>

      {/* Interactive Dashboards interactive-dashboard-border-line.png */}
      <div className="absolute lg:bottom-[32%] midlg:bottom-[36%] xl:bottom-[37%] lg:right-[5%] midlg:right-[4%] xl:right-[3%] z-10 lg:w-[300px] midlg:w-[350px] xl:w-[400px] hidden lg:flex justify-end">
        <Image
          src={`/industries/real-estate/interactive-dashboard-border-line.png`}
          width={246}
          height={101}
          alt="border line"
          className="object-contain absolute top-[-120%] left-[-17%]"
        />

        <div className="bg-white min-w-[210px] p-4 rounded-[17px] hero-card-shadow z-10">
          <span className="font-medium text-lg text-gray-600 text-nowrap">
            Interactive Dashboards
          </span>
        </div>
      </div>

      {/* Interactive Dashboards */}
      <div className="absolute bottom-[59%] left-[1%] z-10 lg:w-[300px] midlg:w-[350px] xl:w-[400px] hidden lg:flex justify-start">
        <Image
          src={`/industries/real-estate/lead-management-border-line.png`}
          width={276}
          height={42}
          alt="border line"
          className="object-contain absolute top-[40%] lg:right-[-20%] midlg:right-[-16%] xl:right-[-14%]"
        />
        <div className="bg-white min-w-[210px] p-4 rounded-[17px] hero-card-shadow z-10">
          <span className="font-medium text-lg text-gray-600 text-nowrap">
            Advanced Lead Management
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroAnimation;
