import { HOME_IDEA_01, HOME_IDEA_02 } from "@/constants/HomeIdeaToLaunch";
import Image from "next/image";
import React from "react";

const HomeIdeaToLaunch = () => {
  return (
    <section className="w-full padding-x py-10 lg:py-20">
      <section className="w-full flex flex-col items-center justify-center gap-5">
        <h2 className="section-heading">
          From Idea to <span className="red-text">Launch</span>
        </h2>
        <p className="text-base font-medium w-full lg:w-2/3 text-center leading-[19.2px] text-gray-500">
          From Brainstorming to launch, we have more innovative, scalable, and
          affordable Digital Solutions. Let’s turn your next big idea into
          something ordinary.
        </p>
      </section>

      <section className="w-full mt-16 grid grid-cols-1 lg:grid-cols-3 gap-x-2 gap-y-10">
        <div className="relative w-full flex flex-col items-start gap-5 lg:gap-14">
          {HOME_IDEA_01?.map((idea, index) => (
            <div className="w-full relative" key={index}>
              {/* <span className="text-[130px] font-extrabold text-gray-300 absolute -top-28 -left-1">
                0{index + 1}
              </span> */}
              <div className="w-full relative flex items-start gap-4">
                <div className="bg-[#F40E00] rounded-full flex items-center justify-center w-[96px] h-[96px]">
                  <Image
                    src={idea?.image}
                    width={40}
                    height={40}
                    className={`w-[${idea?.img_width}] h-[${idea?.img_height}]`}
                  />
                </div>
                <div className="flex flex-col items-start gap-2 w-[70%]">
                  <h3 className="text-[22px] font-semibold">{idea?.title}</h3>
                  <p className="font-medium text-gray-500 text-sm">
                    {idea?.desc} 
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden lg:flex items-center justify-center">
          <Image
            src={"/idea-to-launch-img.png"}
            width={351.01}
            height={350}
            className="w-[351.01px] h-[350px]"
          />
        </div>
        <div className="relative w-full flex flex-col items-start gap-5 lg:gap-14">
          {HOME_IDEA_02?.map((idea, index) => (
            <div className="w-full relative" key={index}>
              {/* <span className="text-[130px] font-extrabold text-gray-300 absolute -top-28 -right-1">
                0{index + 4}
              </span> */}
              <div className="w-full relative flex flex-row-reverse lg:flex-row items-start gap-4">
                <div className="flex flex-col items-start lg:items-end lg:text-end gap-2 w-[70%]">
                  <h3 className="text-[22px] font-semibold">{idea?.title}</h3>
                  <p className="font-medium text-gray-500 text-sm">
                    {idea?.desc} 
                  </p>
                </div>
                <div className="bg-[#F40E00] rounded-full flex items-center justify-center w-[96px] h-[96px]">
                  <Image
                    src={idea?.image}
                    width={40}
                    height={40}
                    className={`w-[${idea?.img_width}] h-[${idea?.img_height}]`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default HomeIdeaToLaunch;
