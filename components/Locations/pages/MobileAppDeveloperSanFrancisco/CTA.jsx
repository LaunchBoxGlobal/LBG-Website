import Image from "next/image";
import Link from "next/link";
import React from "react";

function CTA() {
  return (
    <section className="padding-x w-[95%] p-10 md:w-[80%] text-center flex  justify-center flex-col gap-5  mx-auto rounded-2xl bg-[#f40e00] text-white relative">
      <Image
        src={"/locations/software-dev-company-francisco/cta-bg.png"}
        alt="cta"
        className="absolute object-cover md:block hidden"
        width={1000}
        height={1000}
      />
      <div className="md:w-[60%] mx-auto relative z-10 space-y-5">
        <h1 className="text-4xl font-bold">
          Build Your Dream App With San Francisco Experts
        </h1>
        <p className="capitalize">
          Take the next step today. Work with LaunchBox Global, a leading mobile
          app development company in San Francisco, and get a high-impact app
          that accelerates growth and keeps you ahead.
        </p>
        <button className=" bg-white hover:bg-black hover:text-white transition-all ease-linear relative z-10 text-[#f40e00] rounded-2xl px-10 py-3 ">
          <Link href="/contact-us">
            <span className="font-semibold">Talk to Our Experts</span>
          </Link>
        </button>
      </div>
    </section>
  );
}

export default CTA;
