import Image from "next/image";
import React from "react";

const Timeline = () => {
  return (
    <div className="w-full padding-x">
      <div className="w-full flex flex-col lg:flex-row lg:items-center items-start justify-between tracking-tight lg:border rounded-full md:px-6 min-h-[107px] my-20 fit110-red-border timeline-shadow gap-4">
        <div className="flex items-center gap-3">
          <div className="min-w-[66px] h-[66px] fit110-red-bg rounded-full flex items-center justify-center">
            <Image
              src={"/case-studies/time-icon.png"}
              alt="time-icon"
              width={40}
              height={40}
            />
          </div>
          <div className="flex flex-col items-start gap-1">
            <p className="text-lg text-gray-500">The Milestones</p>
            <p className="text-[18px] lg:text-[20px] font-bold">
              Built in 672 Dedicated Hours
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="min-w-[66px] h-[66px] fit110-red-bg rounded-full flex items-center justify-center">
            <Image
              src={"/case-studies/globe-icon.png"}
              alt="time-icon"
              width={40}
              height={40}
            />
          </div>
          <div className="flex flex-col items-start gap-1">
            <p className="text-lg text-gray-500">The Sector</p>
            <p className="text-[18px] lg:text-[20px] font-bold">
              E-commerce Development
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="min-w-[66px] h-[66px] fit110-red-bg rounded-full flex items-center justify-center">
            <Image
              src={"/case-studies/constribution-icon.png"}
              alt="time-icon"
              width={44}
              height={40}
            />
          </div>
          <div className="flex flex-col items-start gap-1">
            <p className="text-lg text-gray-500">What We Did</p>
            <p className="text-[18px] lg:text-[20px] font-bold">
              E-Commerce, Branding & Digital Marketing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
