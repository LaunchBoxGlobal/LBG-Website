import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./style.css";

const CTA = () => {
  return (
    <section className="w-full padding-x pb-20 pt-40 relative">
      <div className="w-full max-w-[1263px] mx-auto lg:min-h-[500px] real-estate-cta relative rounded-[17px] flex items-center justify-between overflow-hidden flex-col md:flex-row gap-x-10 pb-4">
        <div className="w-full md:w-[50%] py-10 px-7 lg:pl-14 flex flex-col items-start justify-center lg:h-full">
          <h2 className="text-white text-3xl lg:text-[40px] xl:text-[50px] font-bold leading-[1] z-10">
            Close Property Deals Faster with{" "}
            <span className="red-text">Real Estate Software</span>
          </h2>
          <p className="text-gray-200 text-sm md:text-base xl:text-lg leading-[1] mt-4 z-10">
            Your real estate business deserves more than just a platform. It
            deserves a solution that works as hard as you do. We create real
            estate apps and software that simplify operations, amaze your users,
            and take your growth to the next level.
          </p>

          <div className="mt-10 z-10">
            <Link
              href={`/contact-us`}
              className="text-sm lg:text-lg font-bold leading-none bg-[#F40E00] text-white rounded-md py-5 px-6 lg:px-8 z-10"
            >
              Start Your Project Now!
            </Link>
          </div>
        </div>

        <Image
          src={`/industries/real-estate/home-image.png`}
          alt="mid page cta mockup"
          width={589}
          height={540}
          loading="lazy"
          className="h-full absolute -right-[8%] bottom-0 opacity-75"
        />

        <Image
          src={`/industries/real-estate/cta-background-image.png`}
          alt="background image"
          width={1263}
          height={226}
          className="absolute bottom-0 inset-x-0 z-0"
        />
      </div>
    </section>
  );
};

export default CTA;
