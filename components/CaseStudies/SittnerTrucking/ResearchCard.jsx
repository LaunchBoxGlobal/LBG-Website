import Image from "next/image";
import React from "react";

const ResearchCard = ({ research, index }) => {
  return (
    <div
      className={`w-full max-w-[295px] bg-white rounded-[29px] px-6 py-12 relative flex flex-col items-center justify-start text-center custom-shadow gap-5 ${
        index === 0
          ? "-rotate-12 top-4"
          : index === 1
          ? "rotate-6"
          : "-rotate-6 lg:rotate-6"
      }`}
    >
      <div className="rounded-full sittner-primary-bg w-[88px] h-[88px] flex items-center justify-center">
        <Image
          src={research?.icon}
          width={research?.width}
          height={research?.height}
          alt={`${research?.title} icon`}
          className="object-contain"
        />
      </div>
      <h3 className="font-medium text-[22px] leading-none">
        {research?.title}
      </h3>
      <p className="text-lg leading-[1.2]">{research?.description}</p>
    </div>
  );
};

export default ResearchCard;
