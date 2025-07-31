import React from "react";

const ProjectRecoveryServicesCard1 = () => {
  return (
    <div className="w-full max-w-[631px] bg-[#F6F6F6] rounded-[26px] flex items-start justify-between overflow-hidden">
      <div className="w-full lg:w-[60%] flex flex-col items-start gap-4 py-8 pl-8 pr-8 lg:pr-0">
        <div className="w-[54px] h-[54px] bg-red rounded-full bg-[#F40E00] flex items-center justify-center">
          <img
            src="/new-project/heart-icon.png"
            alt="heart-icon"
            width={29}
            height={25}
          />
        </div>
        <h3 className="font-semibold text-[26px] leading-[1]">
          Design & Vibe-Focused Projects
        </h3>
        <p className="text-lg" style={{ lineHeight: "1.5rem" }}>
          Through our software project rescue approach, we revive apps with
          strong design and emotional appeal. Our Project Recovery Services
          ensure your recovered projects are functional and fixed, keeping their
          soul intact.
        </p>
        <div className="flex items-center justify-start gap-2 flex-wrap">
          {[
            "Portfolio Websites",
            "Fashion Ecommerce Apps",
            "Journaling Tools",
            "Lifestyle Apps",
            "Habit Trackers",
          ]?.map((p, i) => {
            return (
              <p
                className="bg-[#E9E9E9] rounded-full font-medium text-sm lg:text-base px-3 py-1.5 whitespace-nowrap"
                key={i}
              >
                {p}
              </p>
            );
          })}
        </div>
      </div>
      <div className="w-full lg:w-[40%] relative h-full hidden lg:block">
        <div className="w-full h-full absolute right-0 top-[10%]">
          <img
            src="/new-project/design-and-vibe-focused-projects-image-1.png"
            alt="design-and-vibe-focused-projects-image-1"
            width={250}
            height={158}
            className="absolute top-0 z-10 right-4"
          />
          <img
            src="/new-project/design-and-vibe-focused-projects-image-2.png"
            alt="design-and-vibe-focused-projects-image-2"
            width={280}
            height={209}
            className="absolute top-[118px] z-20 right-0"
          />
          <img
            src="/new-project/design-and-vibe-focused-projects-image-3.png"
            alt="design-and-vibe-focused-projects-image-3"
            width={180}
            height={139}
            className="w-full h-full max-w-[200px] object-contain rounded-[26px] absolute right-[-8%] bottom-[2%] z-0"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectRecoveryServicesCard1;
