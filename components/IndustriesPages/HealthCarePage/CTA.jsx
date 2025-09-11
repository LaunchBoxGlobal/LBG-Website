import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <section className="w-full padding-x py-20 relative">
      <div className="w-full lg:h-[600px] bg-black relative rounded-[17px] flex items-center justify-between flex-wrap gap-10 pb-4">
        <div className="w-full md:w-[55%] py-10 px-7 lg:pl-20 flex flex-col items-start justify-center lg:h-full">
          <h2 className="text-white text-3xl lg:text-[50px] font-bold leading-[1]">
            Transform Patient Care With Our{" "}
            <span className="red-text">Healthcare App Development</span>{" "}
            Services
          </h2>
          <p className="text-gray-200 text-sm md:text-base lg:text-lg leading-none mt-4">
            Partner with LaunchBox Global, a care app development company
            dedicated to delivering reliable, adaptable, and user-friendly
            solutions. Our healthcare app development services ensure
            compliance, reliability, and innovation. Whether upgrading systems
            or building new applications, we help you achieve growth and
            streamline patient care with confidence.
          </p>

          <div className="mt-10">
            <Link
              href={`/contact-us`}
              className="text-sm lg:text-lg font-bold leading-none bg-[#F40E00] text-white rounded-md py-5 px-6 lg:px-10"
            >
              Book a Free Strategy Call
            </Link>
          </div>
        </div>
        <img
          src="/industries/healthcare/cta-mockup.png"
          alt="cta-mockup"
          width={551}
          height={437}
          className="object-contain md:absolute right-0 top-0 md:w-[55%] lg:w-[45%] midlg:w-[48%]"
        />
      </div>
    </section>
  );
};

export default CTA;
