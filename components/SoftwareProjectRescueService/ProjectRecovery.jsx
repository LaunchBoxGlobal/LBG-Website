import Image from "next/image";
import React from "react";

export const recovery_content = [
  {
    title:
      "We got the demo with low code, but we don’t have the final product.",
    icon: "/new-project/project-recovery-icon-1.png",
    width: 33,
    height: 30,
  },
  {
    title: "We launched but users are dropping.",
    icon: "/new-project/project-recovery-icon-2.png",
    width: 27,
    height: 28,
  },
  {
    title: "The devs disappeared. Now we’re stuck.",
    icon: "/new-project/project-recovery-icon-3.png",
    width: 25,
    height: 25,
  },
  {
    title: "We used Webflow/FlutterFlow, but now can’t scale.",
    icon: "/new-project/project-recovery-icon-4.png",
    width: 25,
    height: 25,
  },
  {
    title: "The backend is a mess and we don’t know where to begin.",
    icon: "/new-project/project-recovery-icon-5.png",
    width: 30,
    height: 25,
  },
];

const ProjectRecovery = () => {
  return (
    <section className="w-full py-20 midlg:py-32 xl:py-40 bg-[#fff] padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading lg:w-[90%] mx-auto">
          What Founders Need for Software{" "}
          <span className="red-text">Project Recovery</span>
        </h2>

        <p className="section-paragraph lg:w-[90%] mx-auto">
          Ai based coding has been fascinating for a lot of startups, since it
          feels possible to build what once felt out of reach. However, it’s
          common to pause with a half-built product, that’s simply part of the
          journey. A lot of founders and startups come to us with:
        </p>
      </section>

      <section className="w-full flex items-center justify-center flex-wrap gap-5 mt-10 lg:mt-16">
        {recovery_content?.map((r, i) => {
          return (
            <div
              key={i}
              className="w-full md:w-[45%] lg:w-[32%] bg-[#F6F6F6] rounded-[17px] p-5 lg:p-7 flex flex-col items-start justify-start gap-2 min-h-[200px]"
            >
              <div className="w-[54px] h-[54px] bg-[#F40E00] rounded-full flex items-center justify-center">
                <Image
                  src={r?.icon}
                  width={r?.width}
                  height={r?.height}
                  alt={r?.title}
                />
              </div>
              <h3 className="font-semibold text-[22px] midlg:text-[26px] leading-[1]">
                {r?.title}
              </h3>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default ProjectRecovery;
