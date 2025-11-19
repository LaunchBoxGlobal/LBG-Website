import Image from "next/image";
import React from "react";

const Timeline = () => {
  return (
    <div className="w-full padding-x">
      <div
        className="w-full flex flex-col lg:flex-row hover:border-[#E9B44C] lg:items-center items-start justify-between 
        tracking-tight lg:border rounded-full md:px-6 min-h-[107px] my-20 fit110-red-border 
        gap-4 transition-all duration-300 ease-in-out 
        hover:shadow-[0_0_25px_rgba(233,180,76,0.5)]
 "
      >
        {/* Time */}
        <div className="flex items-center gap-3">
          <div className="min-w-[66px] h-[66px]  rounded-full flex items-center justify-center">
            <Image
              src="/case-studies/jetezee/time.png"
              alt="time-icon"
              width={40}
              height={40}
              priority
            />
          </div>
          <div className="flex flex-col items-start gap-1">
            <p className="text-lg text-gray-500">The Milestones</p>
            <p className="text-[18px] lg:text-[20px] font-bold">
             28 Weeks of Strategic Design and Validation 
            </p>
          </div>
        </div>

        {/* Sector */}
        <div className="flex items-center gap-3">
          <div className="min-w-[66px] h-[66px] fit110-red-bg rounded-full flex items-center justify-center">
            <Image
              src="/case-studies/jetezee/globe.png"
              alt="globe-icon"
              width={40}
              height={40}
              priority
            />
          </div>
          <div className="flex flex-col items-start gap-1">
            <p className="text-lg text-gray-500">The Sector</p>
            <p className="text-[18px] lg:text-[20px] font-bold">
             Luxury Aviation Marketplace 
            </p>
          </div>
        </div>

        {/* What We Did */}
        <div className="flex items-center gap-3">
          <div className="min-w-[66px] h-[66px] fit110-red-bg rounded-full flex items-center justify-center">
            <Image
              src="/case-studies/jetezee/user.png"
              alt="user-icon"
              width={44}
              height={40}
              priority
            />
          </div>
          <div className="flex flex-col items-start gap-1">
            <p className="text-lg text-gray-500">Services</p>
            <p className="text-[18px] lg:text-[20px] font-bold">
              Web App Development, Admin Dashboard Prototyping and UI/UX Design
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
