import Image from "next/image";
import React from "react";

const ProcessCard = ({ process, index }) => {
  return (
    <div
      className={`w-full lg:w-[608px] h-[312px] bg-white rounded-[25px] custom-shadow ${
        index % 2 === 0 ? "px-10 py-10" : "py-10 px-14 ml-auto"
      } relative ${index !== 0 && "mt-16"}`}
    >
      <h3 className="font-medium text-[26px] lg:text-[39px] red-text leading-[1]">
        {process?.title}
      </h3>
      <p className="text-lg lg:text-[22px] leading-[1.2] mt-2 z-10 relative">
        {process?.description}
      </p>
      <p
        className={`text-[#DADADA] text-[84px] font-bold leading-none m-0 p-0 absolute right-6 bottom-4 z-0`}
      >
        0{index + 1}
      </p>
      <div
        className={`w-[70px] h-[70px] lg:w-[89px] lg:h-[89px] bg-white rounded-full p-2 absolute ${
          index % 2 === 0
            ? "-top-7 -right-4 lg:-top-7 lg:-right-7"
            : "-top-7 -left-4 lg:-top-8 lg:-left-8"
        }`}
      >
        <div className="w-full h-full red-bg rounded-full flex items-center justify-center p-3 lg:p-0">
          <img
            src={process?.icon}
            alt={process?.title}
            width={process?.iconWidth || 41}
            height={process?.iconHeight || 43}
            className="object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default ProcessCard;
