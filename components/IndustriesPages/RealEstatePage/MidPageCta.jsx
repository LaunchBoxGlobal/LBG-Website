import Image from "next/image";
import Link from "next/link";
import React from "react";

const MidPageCta = () => {
  return (
    <section className="w-full padding-x pb-20 pt-40 relative">
      <div className="w-full max-w-[1263px] mx-auto lg:min-h-[500px] bg-black relative rounded-[17px] flex items-center justify-center flex-col md:flex-row gap-x-10 pb-4">
        <div className="w-full md:w-[50%] py-10 px-7 lg:pl-14 flex flex-col items-start justify-center lg:h-full">
          <h2 className="text-white text-3xl lg:text-[40px] xl:text-[50px] font-bold leading-[1]">
            Your Real Estate Goals Deserve{" "}
            <span className="red-text">Powerful Tools</span>
          </h2>
          <p className="text-gray-200 text-sm md:text-base xl:text-lg leading-none mt-4">
            Looking to connect traditional property dealings with modern digital
            solutions? Our team is here to help you build flexible,
            user-friendly, and secure real estate apps designed to simplify
            operations, engage users, and grow your business with confidence.
          </p>

          <div className="mt-10">
            <Link
              href={`/contact-us`}
              className="text-sm lg:text-lg font-bold leading-none bg-[#F40E00] text-white rounded-md py-5 px-6 lg:px-10"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
        <div className="w-full md:w-[50%] lg:w-[40%] lg:h-[500px] relative px-4 midlg:px-0">
          <Image
            src={`/industries/real-estate/cta-mockup.png`}
            alt="mid page cta mockup"
            width={449}
            height={540}
            loading="lazy"
            className="object-contain midlg:hidden"
          />
          <Image
            src="/industries/real-estate/cta-left-card.png"
            alt="/industries/real-estate"
            width={167}
            height={72}
            className="absolute z-10 top-[-5%] left-[0%] hidden midlg:block"
          />

          <Image
            src="/industries/real-estate/cta-right-card.png"
            alt="cta-right-card"
            width={203}
            height={170}
            className="absolute z-10 right-[-8%] top-[-27%] hidden midlg:block"
          />
          <Image
            src="/industries/real-estate/mid-page-cta-mobile-mockup.png"
            alt="cta mobile mockup"
            width={276}
            height={520}
            className="object-contain mx-auto relative -top-24 hidden midlg:block"
          />
        </div>
      </div>
    </section>
  );
};

export default MidPageCta;
