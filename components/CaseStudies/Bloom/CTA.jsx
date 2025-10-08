import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <section className="w-full padding-x pb-10">
      <div className="w-full bg-[#F4F2F1] rounded-[17px] p-9 flex items-center justify-center md:justify-between gap-5 flex-wrap">
        <h3 className="text-[24px] lg:text-[30px] leading-6 font-medium">
          Ready to Build Your App?
        </h3>
        <Link
          href={"/contact-us"}
          className="bg-[#F40E00] text-white hover:bg-black hover:text-white transition-all duration-300 text-lg font-bold px-5 py-4 rounded-[9px] h-[56.74px] w-[259.99px] text-center"
        >
          Get a Free Consultation
        </Link>
      </div>
    </section>
  );
};

export default CTA;
