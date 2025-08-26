import React from "react";

const AboutSection = () => {
  return (
    <section className="w-full pb-10 lg:pb-20 pt-20 lg:pt-40 bg-[#fff] padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="text-[25px] font-semibold red-text lg:w-[90%] mx-auto">
          Facts about Launchbox Global
        </h2>
        <p className="text-2xl md:text-3xl lg:text-[36px] text-gray-500 lg:w-[90%] mx-auto leading-[3] font-normal">
          Launchbox Global is a team of experts from a trusted digital media
          company who provide professional SEO services and PPC services to
          entrepreneurs, startups, and businesses that want to upgrade their
          digital presence without wasting money or time. And don't hold back if
          you're a small business; we gladly offer our digital marketing
          services for small business as well. We are not just another company
          promising the impossible; we ensure you achieve what you've been
          planning for. Many founders and business owners don't know how to
          start or where to start. Some are worried about limited budgets, but
          that's not a big problem.
        </p>
      </section>
    </section>
  );
};

export default AboutSection;
