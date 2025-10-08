import React from "react";
import Image from "next/image";

export const points = [
  {
    icon1: "/on-demand-talent/get-started-icon.webp",
    title1: "Get started in 48 hours or less",
    icon2: "/on-demand-talent/calendar-icon.webp",
    title2: "Weeks to months to hire",
  },
  {
    icon1: "/on-demand-talent/clock-icon.webp",
    title1: "Pay only for hours worked",
    icon2: "/on-demand-talent/fixed-salaries-icon.webp",
    title2: "Fixed salaries + benefits",
  },
  {
    icon1: "/on-demand-talent/long-term-contracts-icon.webp",
    title1: "Flexible, no long-term contracts",
    icon2: "/on-demand-talent/lon-term-commitment-icon.webp",
    title2: "Long-term commitment required",
  },
  {
    icon1: "/on-demand-talent/easily-scales-icon.webp",
    title1: "Easily scale skills up or down",
    icon2: "/on-demand-talent/limited-skills-adjustment-icon.webp",
    title2: "Limited skill adjustments",
  },
  {
    icon1: "/on-demand-talent/fees-icon.webp",
    title1: "We manage contracts and payments",
    icon2: "/on-demand-talent/high-recruitment-icon.webp",
    title2: "Contracts and taxes handled",
  },
  //
  {
    icon1: "/on-demand-talent/fees-icon.webp",
    title1: "Remote pros provide own workspace",
    icon2: "/on-demand-talent/high-recruitment-icon.webp",
    title2: "Office space costs add up",
  },
  {
    icon1: "/on-demand-talent/fees-icon.webp",
    title1: "Talent uses their own equipment",
    icon2: "/on-demand-talent/high-recruitment-icon.webp",
    title2: "You provide IT and tools",
  },
];

const SpecializedTalent = () => {
  return (
    <section className="w-full py-20 midlg:py-32 xl:py-40 bg-[#fff] padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading lg:w-[90%] mx-auto">
          Specialized Talent Without The <span className="red-text">Wait</span>
        </h2>
        <p className="section-paragraph lg:w-[90%] mx-auto">
          Traditional hiring means weeks of interviews and onboarding delays.
          With on-demand talent augmentation, you get pre-vetted software
          development professionals who integrate directly into your workflow
          saving time and cutting overhead. Whether you need offshore staff
          augmentation or local experts, scale your team instantly without
          long-term commitments.
        </p>
      </section>

      <section className="w-full mt-10 lg:mt-14 flex flex-col items-start gap-5">
        <div className="w-full red-bg flex flex-col lg:flex-row rounded-[16px] py-2">
          <div className="w-full lg:border-r border-gray-400/80 h-[69px] lg:h-[110px] flex items-center justify-center">
            <h3 className="text-white text-[20px] lg:text-[31px] font-semibold">
              On Demand Talent
            </h3>
          </div>
          <div className="w-full hidden lg:flex items-center justify-center">
            <h3 className="text-white text-[31px] font-semibold">
              Traditional Hiring
            </h3>
          </div>
        </div>
        {points?.map((p, i) => {
          return (
            <div
              key={i}
              className={`w-full border ${
                i % 2 === 0 ? "bg-white" : "bg-gray-50"
              } grid grid-cols-1 lg:grid-cols-2 h-[85px] py-2 rounded-[16px]`}
            >
              <div className="w-full flex items-center justify-start lg:justify-center px-5 gap-4 border-r">
                <Image
                  src={p?.icon1}
                  alt={p?.title1}
                  width={i === 0 ? 14 : 24}
                  height={24}
                  className="object-contain"
                />
                <h3 className="text-[18px] lg:text-[28px] font-medium max-w-[80%] leading-[1]">
                  {p?.title1}
                </h3>
              </div>
              <div className="w-full hidden lg:flex items-center justify-center gap-4">
                <Image
                  src={p?.icon2}
                  alt={p?.title1}
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <h3 className="text-[18px] lg:text-[28px] font-medium max-w-[80%] leading-[1]">
                  {p?.title2}
                </h3>
              </div>
            </div>
          );
        })}

        <div className="w-full flex items-center justify-center lg:hidden h-[69px] lg:h-[105px] red-bg rounded-[16px] mt-6">
          <h3 className="text-white text-[20px] lg:text-[31px] font-semibold">
            Traditional Hiring
          </h3>
        </div>
        {points?.map((p, i) => {
          return (
            <div
              key={i}
              className={`w-full border lg:hidden ${
                i % 2 === 0 ? "bg-white" : "bg-gray-50"
              } grid grid-cols-1 lg:grid-cols-2 h-[85px] py-2 rounded-[16px]`}
            >
              <div className="w-full hidden lg:flex items-center justify-start lg:justify-center px-5 gap-4 border-r">
                <Image
                  src={p?.icon1}
                  alt={p?.title1}
                  width={i === 0 ? 14 : 24}
                  height={24}
                  className="object-contain"
                />
                <h3 className="text-[18px] lg:text-[28px] font-medium leading-[1]">
                  {p?.title1}
                </h3>
              </div>
              <div className="w-full flex items-center justify-start lg:justify-center px-5 gap-4">
                <Image
                  src={p?.icon2}
                  alt={p?.title1}
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <h3 className="text-[18px] lg:text-[28px] font-medium leading-[1]">
                  {p?.title2}
                </h3>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default SpecializedTalent;
