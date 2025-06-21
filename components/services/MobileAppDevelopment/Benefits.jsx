import ContactButton from "@/components/Global/ContactButton";
import React from "react";
import BenefitsMobileVersion from "./BenefitsMobileVersion";
import BenefitsTable from "./BenefitsTable";

const Benefits = () => {
  return (
    <section className="w-full padding-x py-10 lg:py-20 relative overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading">
          What Sets Us Apart in{" "}
          <span className="red-text">Mobile App Development</span>
        </h2>
        <p className="section-paragraph lg:w-[90%]">
          As a trusted mobile app development company, we focus on clear
          planning, clean coding, and thorough testing. Our mobile app
          development services ensure your app is fast, reliable, and built to
          grow with your business needs.
        </p>
      </section>

      <section className="w-full mt-10 hidden xl:block">
        <BenefitsTable />
      </section>

      <section className="w-full xl:hidden">
        <BenefitsMobileVersion />
      </section>

      <section className="w-full flex justify-center mt-10 lg:mt-6">
        <ContactButton text={"Get Started – 100% Risk-Free"} />
      </section>
    </section>
  );
};

export default Benefits;

{
  /* <div className="col-span-1">
<div className="bg-[#F40E00]">
  <Image
    src={"/lb-white-logo.png"}
    width={188}
    height={33}
    alt="launchbox global logo"
    className="w-[188px] h-[33px]"
  />
</div>
{[1, 2, 3, 4, 5, 6, 7, 8]?.map((icon, i) => {
  return (
    <div className="w-full py-2" key={i}>
      <div className="w-[40px] h-[40px] rounded-full bg-[#078F40] p-2">
        <FaCheck className="text-white w-full h-full" />
      </div>
    </div>
  );
})}
</div> */
}
