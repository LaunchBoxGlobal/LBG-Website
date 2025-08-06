"use client";
import Image from "next/image";
import React, { useState } from "react";
import ChallengesSlider from "./ChallengesSlider";
import SolutionsSlider from "./SolutionsSlider";

const ChallengesAndSolutions = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [permanentIndex, setPermanentIndex] = useState(0);

  return (
    <section className="w-full  pb-20 midlg:pb-28">
      <div className="w-full padding-x flex flex-col items-center">
        <h2 className="section-heading text-center">Challenges & Solutions</h2>
        <p className="text-center lg:w-[90%] text-base lg:text-xl mt-7">
          We built My Garage Outlet to feel effortless, a mobile app development
          project that made garage sale hunting actually enjoyable rather than
          frustrating. Here's how we tackled each challenge:
        </p>
      </div>

      <div className="w-full mt-10 padding-x">
        <div className="flex items-center gap-2">
          <Image
            src={"/case-studies/my-garage-outlet/problem-icon.webp"}
            width={38}
            height={36}
            loading="lazy"
            alt="problem-icon"
          />
          <h3 className="text-[#F40E00] font-normal text-[30px] md:text-[40px] lg:text-[50px]">
            Problems
          </h3>
        </div>

        <div className="w-full">
          <ChallengesSlider
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            permanentIndex={permanentIndex}
            setPermanentIndex={setPermanentIndex}
          />
        </div>

        <div className="flex items-center gap-2 justify-end mt-10">
          <Image
            src={"/case-studies/my-garage-outlet/solutions-icon.webp"}
            width={38}
            height={36}
            loading="lazy"
            alt="problem-icon"
          />
          <h3 className="text-[#F7BE56] font-normal text-[35px] md:text-[40px] lg:text-[50px]">
            Solutions
          </h3>
        </div>
        <div className="w-full">
          <SolutionsSlider
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            permanentIndex={permanentIndex}
            setPermanentIndex={setPermanentIndex}
          />
        </div>
      </div>
    </section>
  );
};

export default ChallengesAndSolutions;
