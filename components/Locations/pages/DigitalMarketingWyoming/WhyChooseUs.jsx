import Image from "next/image";
import Link from "next/link";
import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="w-full py-20 midlg:py-32 xl:py-40 padding-x">
      <div className="w-full flex flex-col items-center gap-5">
        <h2 className="section-heading text-center mx-auto">
          Why Wyoming Businesses Choose Our{" "}
          <span className="red-text">Digital Marketing</span>
        </h2>
        <p className="section-paragraph text-center mx-auto lg:w-[70%]">
          We're not just another agency. Here's what makes us different for
          Wyoming digital marketing success:
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14">
        <div
          className={`w-full flex flex-col items-center group justify-start text-center gap-6 py-8 px-5 hover:bg-[#F40E00] hover:text-white transition-all duration-300 lg:border-r lg:border-b group`}
        >
          <h3 className="font-semibold text-[20px] xl:text-[22px]">
            Wyoming Market Experts
          </h3>
          <img
            src={`/locations/digital-marketing/marketing-experts-icon.webp`}
            width={71}
            height={70}
            loading="lazy"
            alt={` Wyoming Market Experts icon`}
            className="transition duration-300 group-hover:invert group-hover:brightness-0"
          />
          <p className="text-lg">
            We understand Casper's energy sector, Jackson's tourism economy and
            Cheyenne's business landscape unlike national firms that treat
            Wyoming as an afterthought. You can also go through our tourism
            related case study{" "}
            <Link
              href={`/case-studies/now-you-know-nashville`}
              className="text-[#F40E00] group-hover:text-white transition-all duration-300"
            >
              Now you know Nashville.
            </Link>
          </p>
        </div>
        <div
          className={`w-full flex flex-col items-center group justify-start text-center gap-6 py-8 px-5 hover:bg-[#F40E00] hover:text-white transition-all duration-300 lg:border-b`}
        >
          <h3 className="font-semibold text-[20px] xl:text-[22px]">
            Real Campaign Results
          </h3>
          <img
            src={`/locations/digital-marketing/campaign-icon-why-choose-us.webp`}
            width={75}
            height={70}
            loading="lazy"
            alt={`Real Campaign Results icon`}
            className="transition duration-300 group-hover:invert group-hover:brightness-0"
          />
          <p className="text-lg">
            Our strategies deliver measurable outcomes, like the 58% lead
            increase we drove for a Sheridan ranch equipment company last
            quarter.
          </p>
        </div>
        <div
          className={`w-full flex flex-col items-center group justify-start text-center gap-6 py-8 px-5 hover:bg-[#F40E00] hover:text-white transition-all duration-300 lg:border-l lg:border-b`}
        >
          <h3 className="font-semibold text-[20px] xl:text-[22px]">
            Transparent Pricing
          </h3>
          <img
            src={`/locations/digital-marketing/transparent-pricing-icon.webp`}
            width={74}
            height={70}
            loading="lazy"
            alt={`Transparent Pricing icon`}
            className="transition duration-300 group-hover:invert group-hover:brightness-0"
          />
          <p className="text-lg">
            No hidden fees or confusing contracts, just clear packages starting
            at $1,500/month. View pricing.
          </p>
        </div>
        <div
          className={`w-full flex flex-col items-center group justify-start text-center gap-6 py-8 px-5 hover:bg-[#F40E00] hover:text-white transition-all duration-300 `}
        >
          <h3 className="font-semibold text-[20px] xl:text-[22px]">
            Fast Local Support
          </h3>
          <img
            src={`/locations/digital-marketing/fast-local-support-icon.webp`}
            width={50}
            height={70}
            loading="lazy"
            alt={` Fast Local Support icon`}
            className="transition duration-300 group-hover:invert group-hover:brightness-0"
          />
          <p className="text-lg">
            When your ad account gets flagged on a Friday afternoon, we answer
            no waiting until Monday.
          </p>
        </div>
        <div
          className={`w-full flex flex-col items-center group justify-start text-center gap-6 py-8 px-5 hover:bg-[#F40E00] hover:text-white transition-all duration-300 lg:border-r lg:border-l`}
        >
          <h3 className="font-semibold text-[20px] xl:text-[22px]">
            Content That Converts
          </h3>
          <img
            src={`/locations/digital-marketing/content-that-converts-icon.webp`}
            width={78}
            height={70}
            alt={`Content That Converts icon`}
            loading="lazy"
            className="transition duration-300 group-hover:invert group-hover:brightness-0"
          />
          <p className="text-lg">
            We create authentic Wyoming stories, not generic AI posts. See
            examples of our ranch-to-table content approach.
          </p>
        </div>
        <div
          className={`w-full flex flex-col items-center group justify-start text-center gap-6 py-8 px-5 hover:bg-[#F40E00] hover:text-white transition-all duration-300`}
        >
          <h3 className="font-semibold text-[20px] xl:text-[22px]">
            Dual Expertise
          </h3>
          <img
            src={`/locations/digital-marketing/dual-expertise-icon.webp`}
            width={70}
            height={70}
            loading="lazy"
            alt={`dual-expertise-icon`}
            className="transition duration-300 group-hover:invert group-hover:brightness-0"
          />
          <p className="text-lg">
            Combines Houston's tech savvy (our software development roots) with
            Wyoming's business culture understanding.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
