import { BLOOM_CHALLENGES } from "@/constants/case-studies/bloom/bloomChallenges";
import React from "react";

const Challenges = () => {
  return (
    <section className="w-full padding-x flex flex-col items-center">
      <h2 className="section-heading">Challenges</h2>
      <p className="text-center lg:w-[90%] text-base lg:text-xl mt-7">
        Building Bloom came with real challenges that tested our skills. The
        church needed something simple that could handle complex needs from
        event planning to media streaming. Through enterprise mobile app
        development, we tackled each hurdle while keeping the app easy for
        members to use. Here's what gave us the most trouble:
      </p>

      <section className="w-full flex items-start flex-wrap justify-center gap-x-6 gap-y-16 mt-20">
        {BLOOM_CHALLENGES?.map((approach, i) => {
          return (
            <div
              key={i}
              className="w-full md:w-[48%] lg:w-[31%] relative flex flex-col items-center justify-start border rounded-[17px] p-5 min-h-[238px] text-center group hover:bg-[#F40E00] transition-all duration-300"
            >
              <div className="w-[90px] h-[90px] bg-[#F40E00] rounded-full flex items-center justify-center absolute left-1/2 -translate-x-1/2 top-[-18%]">
                <span className="block text-[40px] font-bold text-white">
                  0{i + 1}
                </span>
              </div>
              <h3 className="text-lg text-[#F40E00] group-hover:text-white transition-all duration-300 font-bold mt-[12%]">
                {approach?.title}
              </h3>
              <p className="text-lg text-gray-600 group-hover:text-white transition-all duration-300 mt-2">
                {approach?.description}
              </p>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default Challenges;
