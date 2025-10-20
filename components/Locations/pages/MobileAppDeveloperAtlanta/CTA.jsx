import Image from "next/image";
import Link from "next/link";
import React from "react";

function CTA() {
  return (
    <section className="padding-x w-[95%] p-10 md:w-[80%] text-center flex  justify-center flex-col gap-5  mx-auto rounded-2xl bg-[#f40e00] text-white relative">
      <Image
             src="/locations/mobile-app-company-francisco/cta-bg.png"
        alt="cta"
        fill
        className="absolute inset-0 object-cover z-0"
        priority
      />
      <div className="md:w-[60%] mx-auto relative z-10 space-y-5">
        <h1 className="text-4xl font-bold">
          Your Business Deserves an App Built by Experts.
        </h1>
        <p className="capitalize">
          Your idea deserves to be in users’ hands, not stuck on paper. Let’s build it before someone else does, because the sooner you launch, the faster you win your market.
        </p>
        <button className=" bg-white hover:bg-black hover:text-white transition-all ease-linear relative z-10 text-[#f40e00] rounded-2xl px-10 py-3 ">
          <Link href="/contact-us">
            <span className="font-semibold">Don’t Miss Your Moment</span>
          </Link>
        </button>
      </div>
    </section>
  );
}

export default CTA;
