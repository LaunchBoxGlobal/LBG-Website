import React from "react";
import AnimatedText from "../StaffAugmentation/AnimatedText";
import Image from "next/image";

const augment = [
  {
    icon: "/on-demand-talent/mvp-development-icon.png",
    width: 76,
    height: 75,
    title: "MVP Development",
    description:
      "Accelerate your product launch with experienced developers who hit the ground running perfect for proving concepts fast.",
    image1: "/on-demand-talent/mvp-development-bg-image.png",
    image2: "/on-demand-talent/mvp-development-bg-2.png",
    width1: 440,
    height1: 300,
    width2: 131,
    height2: 95,
  },
  {
    icon: "/on-demand-talent/skills-gap-icon.png",
    width: 83,
    height: 75,
    title: "Skill Gaps",
    description:
      "Fill temporary expertise shortages without long-term hires, whether you need niche tech skills or extra hands.",
    image1: "/on-demand-talent/skills-gap-bg-1.png",
    image2: "/on-demand-talent/skills-gap-bg-2.png",
    width1: 419,
    height1: 269,
    width2: 500,
    height2: 44,
  },
  {
    icon: "/on-demand-talent/growth-outbreaks-icon.png",
    width: 75,
    height: 75,
    title: "Growth outbreaks",
    description:
      "Scale your team overnight to handle increased workloads or new projects—flexible staffing for unpredictable demand.",
    image1: "/on-demand-talent/growth-outbreaks-bg-1.png",
    image2: "/on-demand-talent/growth-outbreaks-bg-2.png",
    width1: 470,
    height1: 418,
    width2: 149,
    height2: 132,
  },
  {
    icon: "/on-demand-talent/tech-trials-icon.png",
    width: 70,
    height: 75,
    title: "Tech Trials",
    description:
      "Test new technologies or approaches with specialized talent, no need to retrain your core team.",
    image1: "/on-demand-talent/tech-trialsbg.png",
    image2: "/on-demand-talent/tech-trials-bg-2.png",
    width1: 473,
    height1: 461,
    width2: 489,
    height2: 95,
  },
  {
    icon: "/on-demand-talent/crunsh-time-icon.png",
    width: 71,
    height: 75,
    title: "Crunch Time",
    description:
      "Meet tight deadlines with additional vetted professionals who integrate seamlessly with your existing workflows.",
    image1: "/on-demand-talent/crunch-time-bg-1.png",
    image2: "/on-demand-talent/crunsh-time-bg-2.png",
    width1: 396,
    height1: 270,
    width2: 370,
    height2: 36,
  },
];

const AugmentYourTeam = () => {
  return (
    <section className="w-full py-20 midlg:py-32 xl:py-40 bg-[#F9F9F9] padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <AnimatedText>
          <h2 className="section-heading lg:w-[90%] mx-auto">
            When On-Demand Talent Works <span className="red-text">Best</span>
          </h2>
        </AnimatedText>
        <AnimatedText>
          <p className="section-paragraph lg:w-[90%] mx-auto">
            Here are the most common situations where our flexible staffing
            solutions deliver the greatest value.
          </p>
        </AnimatedText>
      </section>

      <section className="w-full mt-10 lg:mt-14 flex items-center justify-center gap-5 flex-wrap">
        {augment?.map((a, i) => {
          return (
            <div key={i} className="w-full md:w-[320px] lg:max-w-[390px]">
              <AnimatedText>
                <div
                  className={`w-full max-w-[390px] min-h-[270px] bg-white hover:bg-[#F40E00] transition-all duration-300 relative group rounded-[17px]`}
                >
                  <div className="w-full h-full absolute inset-0 flex flex-col items-center justify-center gap-5 group-hover:hidden transition-all duration-300">
                    <Image
                      src={a?.icon}
                      alt={a?.title}
                      width={a?.width}
                      height={a?.height}
                      className="z-10"
                    />
                    <h3 className="text-xl lg:text-[32px] font-bold z-10">
                      {a?.title}
                    </h3>
                    <Image
                      src={a?.image1}
                      width={a?.width1}
                      height={a?.height1}
                      alt="background image"
                      className={`absolute h-full w-full inset-0 z-0 object-cover ${
                        i === 3 ? "opacity-10" : "opacity-100"
                      }`}
                    />
                  </div>
                  <div className="w-full h-full p-7 absolute inset-0 hidden flex-col items-start justify-start gap-5 group-hover:flex transition-all duration-300">
                    <h3 className="text-xl lg:text-[32px] font-bold text-white z-10">
                      {a?.title}
                    </h3>
                    <p className="text-[18px] text-white leading-[1.1] z-10">
                      {a?.description}
                    </p>
                    <Image
                      src={a?.image2}
                      width={a?.width2}
                      height={a?.height2}
                      alt="background image"
                      className="absolute bottom-0 right-0 z-0 object-contain"
                    />
                  </div>
                </div>
              </AnimatedText>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default AugmentYourTeam;
