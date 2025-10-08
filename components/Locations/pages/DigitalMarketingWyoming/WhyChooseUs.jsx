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
            Functionality First- Approach
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
            We emphasize real-world functionality to ensure your digital
            marketing solutions deliver true value. As a digital marketing
            agency Cheyenne Wyoming, we craft strategies that strengthen
            usability and drive lasting growth.
          </p>
        </div>
        <div
          className={`w-full flex flex-col items-center group justify-start text-center gap-6 py-8 px-5 hover:bg-[#F40E00] hover:text-white transition-all duration-300 lg:border-b`}
        >
          <h3 className="font-semibold text-[20px] xl:text-[22px]">
            Flexible & Fast Solutions
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
            We continuously refine your digital marketing projects to keep them
            on track. Through our conversion rate optimization services, every
            update is designed to enhance engagement and maximize conversions.
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
            We offer transparent, upfront pricing with no hidden fees or
            surprise charges. Our digital marketing agency services give you
            full clarity on costs, making it easier to manage and plan your
            budget confidently.
          </p>
        </div>
        <div
          className={`w-full flex flex-col items-center group justify-start text-center gap-6 py-8 px-5 hover:bg-[#F40E00] hover:text-white transition-all duration-300 `}
        >
          <h3 className="font-semibold text-[20px] xl:text-[22px]">
            World-Class Talent
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
            Our skilled team applies global experience to deliver top-quality
            solutions customized for your business. With our best digital
            marketing services, we design strategies and campaigns that enhance
            engagement and generate greater conversions.
          </p>
        </div>
        <div
          className={`w-full flex flex-col items-center group justify-start text-center gap-6 py-8 px-5 hover:bg-[#F40E00] hover:text-white transition-all duration-300 lg:border-r lg:border-l`}
        >
          <h3 className="font-semibold text-[20px] xl:text-[22px]">
            Industry-Specific Expertise
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
            Our team recognizes the specific challenges within your industry.
            Combining our expertise in web design and digital marketing, we
            develop strategies that captivate your audience and drive
            sustainable business growth.
          </p>
        </div>
        <div
          className={`w-full flex flex-col items-center group justify-start text-center gap-6 py-8 px-5 hover:bg-[#F40E00] hover:text-white transition-all duration-300`}
        >
          <h3 className="font-semibold text-[20px] xl:text-[22px]">
            Scalable & Future-Proof Solutions
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
            We create digital marketing strategies and solutions built to grow
            alongside your business, ensuring long-term adaptability. Our
            services emphasize flexible approaches that adjust to market shifts,
            keeping your brand competitive and future-ready.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
