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
          LaunchBox Global is a full-service{" "}
          <Link href={`/services/digital-marketing`} className="red-text">
            digital marketing
          </Link>{" "}
          and software development partner helping Wyoming businesses succeed
          online. While we serve as one of the leading software companies in
          Houston, we specialize in helping Wyoming clients build
          revenue-generating digital products from custom websites to eCommerce
          platforms all optimized for local markets. Our agile approach combines
          data-driven marketing with technical excellence to deliver measurable
          results.
        </p>
      </section>
    </section>
  );
};

export default About;

// 2096
