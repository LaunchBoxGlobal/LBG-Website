import Link from "next/link";
import React from "react";
import FooterCtaAnimation from "./FooterCtaAnimation";

const FooterCta = () => {
  return (
    <section className="w-full py-10 lg:py-32 xl:py-40 padding-x overflow-hidden">
      <div className="w-full relative bg-[#000] text-white rounded-[17px] flex items-start">
        <div className="w-full lg:w-[60%] flex flex-col items-start justify-center gap-5 p-10 midlg:p-20">
          <h2 className="text-35px lg:text-[50px] font-bold leading-[1.1]">
            Get Started With IT Staff Augmentation Today
          </h2>
          <p className="text-lg font-normal leading-[1.2]">
            Need skilled developers fast? Get on-demand tech talent in 48 hours.
            No contracts, no hassle, just the right expertise when you need it.
          </p>
          <div className="mt-5">
            <a
              href={"#buildmyteam"}
              className="text-base lg:text-lg font-bold text-white red-bg px-10 py-3.5 rounded-[7px]"
            >
              Build My Team
            </a>
          </div>
        </div>
        <div className="w-[40%] pr-20 hidden lg:block">
          <FooterCtaAnimation />
        </div>
      </div>
    </section>
  );
};

export default FooterCta;
