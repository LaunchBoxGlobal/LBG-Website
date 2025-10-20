"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const EngagementModel = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="w-full padding-x pt-10 lg:pt-20 lg:pb-14 relative overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading w-full">
          Flexible Engagement Models for Atlanta{" "}
          <span className="red-text">Businesses</span>
        </h2>
        <p className="section-paragraph lg:w-[85%]">
          We provide three flexible engagement models: staff augmentation,
          on-demand talent, and offshore development — designed to fit your
          project needs. With mobile application development expertise, our
          approach connects you with top mobile app developers in Atlanta, GA,
          ensuring adaptability, cost efficiency, and faster execution.
        </p>
      </section>

      <section className="w-full my-10 lg:mt-16 lg:mb-28 flex flex-col lg:flex-row gap-y-10 items-center justify-center">
        {/* Card 1 */}
        <div
          onMouseEnter={() => setHoveredIndex(0)}
          onMouseLeave={() => setHoveredIndex(null)}
          className={`w-[90%] md:w-[60%] lg:w-[400px] min-h-[480px] rounded-[14px] custom-shadow flex flex-col items-center justify-center gap-6 group text-center p-10 relative transition-all duration-300 hover:scale-110 overflow-hidden ${
            hoveredIndex === 0
              ? "bg-[#F40E00] text-white"
              : "bg-white text-black"
          } ${
            0 === 0
              ? "lg:-rotate-6 z-10 lg:top-5 hover:rotate-0 hover:top-0"
              : "z-20"
          }`}
        >
          <Image
            src={"/custom-software-journey-card-texture-image.webp"}
            alt="custom-software-journey-card-texture-image"
            width={500}
            height={580}
            className="w-[150%] h-[150%] absolute inset-0 z-0 opacity-[0.02]"
          />
          <h4 className="text-[25px] font-bold leading-[1.1] z-10">
            Staff Augmentation
          </h4>
          <p className="text-base z-10">
            Quickly expand your team with skilled app developers in Atlanta, GA
            through our{" "}
            <Link
              href={`https://launchboxglobal.com/staff-augmentation`}
              className="underline"
            >
              staff augmentation model
            </Link>
            . We fill skill gaps with the right talent to speed up delivery,
            reduce overhead, and maintain flexibility — all without long-term
            hiring commitments.
          </p>
          <Link
            href="/contact-us"
            className={`w-[149px] z-10 h-[46px] py-4 rounded-full flex items-center justify-center font-semibold text-base transition-all duration-300 ${
              hoveredIndex === 0
                ? "bg-white text-[#F40E00] hover:bg-white"
                : "bg-[#F40E00] text-white hover:bg-[#F40E00]"
            }`}
          >
            Get In Touch!
          </Link>
        </div>

        {/* Card 2 */}
        <div
          onMouseEnter={() => setHoveredIndex(1)}
          onMouseLeave={() => setHoveredIndex(null)}
          className={`w-[90%] md:w-[60%] lg:w-[400px] min-h-[480px] rounded-[14px] custom-shadow flex flex-col items-center justify-center gap-6 group text-center p-10 relative transition-all duration-300 hover:scale-110 overflow-hidden z-20 ${
            hoveredIndex === 1
              ? "bg-[#F40E00] text-white"
              : "bg-white text-black"
          }`}
        >
          <Image
            src={"/custom-software-journey-card-texture-image.webp"}
            alt="custom-software-journey-card-texture-image"
            width={500}
            height={580}
            className="w-[150%] h-[150%] absolute inset-0 z-0 opacity-[0.02]"
          />
          <h4 className="text-[25px] font-bold leading-[1.1] z-10">
            On-Demand Talent
          </h4>
          <p className="text-base z-10">
            When searching for Atlanta mobile app developers, finding the right
            match can be challenging. Our{" "}
            <Link
              href={`https://launchboxglobal.com/on-demand-talent`}
              className="underline"
            >
              on-demand talent model
            </Link>{" "}
            gives you instant access to skilled professionals — offering
            agility, faster project execution, and dependable support without
            the limitations of traditional hiring.
          </p>
          <Link
            href="/contact-us"
            className={`w-[149px] z-10 h-[46px] py-4 rounded-full flex items-center justify-center font-semibold text-base transition-all duration-300 ${
              hoveredIndex === 1
                ? "bg-white text-[#F40E00] hover:bg-white"
                : "bg-[#F40E00] text-white hover:bg-[#F40E00]"
            }`}
          >
            Get In Touch!
          </Link>
        </div>

        {/* Card 3 */}
        <div
          onMouseEnter={() => setHoveredIndex(2)}
          onMouseLeave={() => setHoveredIndex(null)}
          className={`w-[90%] md:w-[60%] lg:w-[400px] min-h-[480px] rounded-[14px] custom-shadow flex flex-col items-center justify-center gap-6 group text-center p-10 relative transition-all duration-300 hover:scale-110 overflow-hidden ${
            hoveredIndex === 2
              ? "bg-[#F40E00] text-white"
              : "bg-white text-black"
          } ${hoveredIndex === 2 ? "rotate-0 z-20" : "lg:rotate-6 z-10"}`}
        >
          <Image
            src={"/custom-software-journey-card-texture-image.webp"}
            alt="custom-software-journey-card-texture-image"
            width={500}
            height={580}
            className="w-[150%] h-[150%] absolute inset-0 z-0 opacity-[0.02]"
          />
          <h4 className="text-[25px] font-bold leading-[1.1] z-10">
            Offshore Development
          </h4>
          <p className="text-base z-10">
            Our{" "}
            <Link
              href={`https://launchboxglobal.com/off-shore-software-development`}
              className="underline"
            >
              offshore development model
            </Link>{" "}
            blends global talent with local insight, delivering reliable
            solutions at reduced costs. With mobile application development
            Atlanta expertise, we ensure flexibility, quality, and efficiency
            while keeping your projects aligned with business goals.
          </p>
          <Link
            href="/contact-us"
            className={`w-[149px] z-10 h-[46px] py-4 rounded-full flex items-center justify-center font-semibold text-base transition-all duration-300 ${
              hoveredIndex === 2
                ? "bg-white text-[#F40E00] hover:bg-white"
                : "bg-[#F40E00] text-white hover:bg-[#F40E00]"
            }`}
          >
            Get In Touch!
          </Link>
        </div>
      </section>
    </section>
  );
};

export default EngagementModel;
