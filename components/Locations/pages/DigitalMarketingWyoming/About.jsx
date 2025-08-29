import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <section className="w-full py-20 midlg:py-32 xl:py-40 bg-[#fff] padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="text-[25px] font-semibold red-text lg:w-[90%] mx-auto">
          About LaunchBox Global – Wyoming's Digital Growth Partner
        </h2>

        <p className="text-2xl md:text-3xl lg:text-[36px] text-gray-500 lg:w-[90%] mx-auto leading-[3] font-normal">
          Building a business in Wyoming comes with its own set of challenges so
          if you’re looking for digital marketing services that just understand
          your needs, we’ve got you covered. Our Wyoming digital marketing
          approach is all about keeping things simple and effective. We create
          strategies that genuinely connect with your audience and run campaigns
          that produce genuine results. We are not just another digital media
          company; we understand your needs. Whether you’re just starting or
          looking to expand, we’ll ensure your brand stands out in the Wyoming
          market and beyond through our{" "}
          <Link
            href={`https://launchboxglobal.com/services/digital-marketing`}
            className="underline"
          >
            digital marketing services.
          </Link>
        </p>
      </section>
    </section>
  );
};

export default About;

// 2096
