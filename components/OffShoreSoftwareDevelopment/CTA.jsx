import Link from "next/link";
import React from "react";
import CtaAnimation from "./CtaAnimation";

const CTA = () => {
  return (
    <section className="w-full py-10 lg:py-32 xl:py-40 padding-x overflow-hidden">
      <div className="w-full relative bg-[#000] text-white rounded-[17px] flex items-start">
        <div className="w-full lg:w-[60%] flex flex-col items-start justify-center gap-5 p-10 midlg:p-20">
          <h2 className="text-[25px] md:text-[35px] lg:text-[50px] font-bold leading-[1.1]">
            Estimate Your Offshore Software Development Costs Now
          </h2>
          <p className="text-lg font-normal leading-[1.2]">
            Share basic details about your project and receive a transparent
            cost estimate from our offshore development company with no
            obligations, just valuable insights.
          </p>
          <div className="mt-5">
            <Link
              href={"/contact-us"}
              className="text-base lg:text-lg font-bold text-white red-bg px-10 py-3.5 rounded-[7px]"
            >
              Speak With an Expert
            </Link>
          </div>
        </div>
        <div className="w-[40%] pr-20 hidden lg:block">
          <CtaAnimation />
        </div>
      </div>
    </section>
  );
};

export default CTA;
