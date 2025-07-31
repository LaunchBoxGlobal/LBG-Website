import Link from "next/link";
import React from "react";

const BlackCta = () => {
  return (
    <section className="w-full padding-x py-20 relative">
      <div className="w-full bg-black rounded-[17px] text-white flex flex-col items-center justify-center text-center gap-4 p-20">
        <p className="font-medium text-[20px]">
          Started solo with low code or vibe coding
        </p>
        <h2 className="font-bold text-[32px] lg:text-[50px] leading-[1] lg:w-[70%]">
          We respect the effort and help{" "}
          <span className="text-[#FE8761]">transform it into</span> a scalable{" "}
          <span className="text-[#FF3916]">launch-ready</span> product
        </h2>
        <div className="mt-8">
          <Link
            href={`/contact-us`}
            className="rounded-[7px] text-white bg-[#F40E00] text-lg font-bold py-5 px-8"
          >
            Upgrade My Project Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlackCta;
