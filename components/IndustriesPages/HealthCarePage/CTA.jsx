import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <section className="w-full padding-x py-20 relative">
      <div className="w-full lg:h-[500px] bg-black relative rounded-[17px] flex items-center justify-between flex-wrap gap-10 pb-4">
        <div className="w-full md:w-[55%] py-10 px-7 lg:pl-20 flex flex-col items-start justify-center lg:h-full">
          <h2 className="text-white text-3xl lg:text-[50px] font-bold leading-[1]">
            Encourage <span className="red-text">Next</span> Steps —{" "}
            <span className="red-text">Friction-Free</span>
          </h2>
          <p className="text-gray-200 text-sm md:text-base lg:text-lg leading-none mt-4">
            Whether you're modernizing an old system or launching a next-gen RPM
            app, LaunchBox Global is your partner in secure healthcare
            innovation.
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
          className="object-contain md:absolute right-0 top-0 md:w-[55%] lg:w-[45%] midlg:w-[50%]"
        />
      </div>
    </section>
  );
};

export default CTA;
