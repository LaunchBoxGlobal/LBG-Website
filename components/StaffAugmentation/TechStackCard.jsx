import Image from "next/image";
import React from "react";
import AnimatedText from "./AnimatedText";

const TechStackCard = ({ tech, index }) => {
  return (
    <div className="w-full max-w-[189px]">
      <AnimatedText>
        <div
          className={`w-full max-w-[189px] h-[205px] bg-[#F9F9F9] transition-all duration-200 flex flex-col items-center justify-center gap-4 rounded relative overflow-hidden group`}
        >
          <div
            className={`w-[88px] h-[88px] bg-transparent group-hover:w-full group-hover:h-full group-hover:inset-0 group-hover:rounded group-hover:bg-[#F40E00] transition-all duration-200 absolute z-0 top-[17.2%]`}
          />
          <div
            className={`w-[88px] h-[88px] bg-[#F40E00] rounded-full flex items-center justify-center z-10`}
          >
            <Image
              src={tech?.icon}
              alt={tech?.title}
              width={tech?.width}
              height={tech?.height}
              className="z-10"
            />
          </div>
          <p
            className={`text-lg font-medium group-hover:text-white transition-all duration-200 z-10`}
          >
            {tech?.title}
          </p>
        </div>
      </AnimatedText>
    </div>
  );
};

export default TechStackCard;
