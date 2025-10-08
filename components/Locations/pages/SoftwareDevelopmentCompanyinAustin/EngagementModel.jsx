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
          Flexible Engagement Models for{" "}
          <span className="red-text">Austin Businesses</span>
        </h2>
        <p className="section-paragraph lg:w-[85%]">
          As a custom software development company in Austin, we understand that
          every business has unique needs. That’s why our engagement models are
          flexible. Whether you need a dedicated team, project-based work, or
          long-term support, we adapt to fit your goals and growth.
        </p>
      </section>

      <section className="w-full my-10 lg:mt-16 lg:mb-28 flex flex-col lg:flex-row gap-y-10 items-center justify-center">
        {/* Card 1 - Software Development Outsourcing */}
        <div
          onMouseEnter={() => setHoveredIndex(0)}
          onMouseLeave={() => setHoveredIndex(null)}
          className={`w-[90%] md:w-[60%] lg:w-[400px] min-h-[480px] rounded-[14px] custom-shadow flex flex-col items-center justify-center gap-6 group text-center p-10 relative transition-all duration-300 hover:scale-110 overflow-hidden ${
            hoveredIndex === 0
              ? "bg-[#F40E00] text-white"
              : "bg-white text-black"
          } ${0 === 0 ? "lg:-rotate-6 z-10 lg:top-5 hover:rotate-0 hover:top-0" : "z-20"}`}
        >
          <Image
            src={"/custom-software-journey-card-texture-image.webp"}
            alt="custom-software-journey-card-texture-image"
            width={500}
            height={580}
            className="w-[150%] h-[150%] absolute inset-0 z-0 opacity-[0.02]"
          />
          <h4 className="text-[25px] font-bold leading-[1.1] z-10">
            Software Development Outsourcing
          </h4>
          <p className="text-base z-10">
            If building software is on your list but you’d rather skip the
            traditional service model, our{" "}
            <Link
              href="https://launchboxglobal.com/off-shore-software-development"
              className="underline"
            >
              offshore developers
            </Link>{" "}
            have you covered. We provide professionals who work as an extension
            of your team, delivering efficient, high-quality solutions that fuel
            business growth.
          </p>
          <Link
            href="/contact-us"
            className={`w-[149px] z-10 h-[46px] py-4 rounded-full flex items-center justify-center font-semibold text-base transition-all duration-300 ${
              hoveredIndex === 0
                ? "bg-white text-[#F40E00]"
                : "bg-[#F40E00] text-white"
            }`}
          >
            Get In Touch!
          </Link>
        </div>

        {/* Card 2 - Dedicated Software Development Team */}
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
            Dedicated Software Development Team
          </h4>
          <p className="text-base z-10">
            Build your custom software with a dedicated team that works only on
            your project. We provide{" "}
            <Link
              href="https://launchboxglobal.com/on-demand-talent"
              className="underline"
            >
              outsourcing staff
            </Link>{" "}
            and proven processes to ensure smooth development, high-quality
            results, and timely delivery, so you can focus on growing your
            business.
          </p>
          <Link
            href="/contact-us"
            className={`w-[149px] z-10 h-[46px] py-4 rounded-full flex items-center justify-center font-semibold text-base transition-all duration-300 ${
              hoveredIndex === 1
                ? "bg-white text-[#F40E00]"
                : "bg-[#F40E00] text-white"
            }`}
          >
            Get In Touch!
          </Link>
        </div>

        {/* Card 3 - Team Augmentation */}
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
            Team Augmentation
          </h4>
          <p className="text-base z-10">
            Sometimes your project just needs an extra boost. We connect you
            with skilled professionals through{" "}
            <Link
              href="https://launchboxglobal.com/staff-augmentation"
              className="underline"
            >
              staff augmentation
            </Link>
            , who integrate into your team for coding, design, or management,
            ensuring faster progress and smoother collaboration without the
            hassle of hiring.
          </p>
          <Link
            href="/contact-us"
            className={`w-[149px] z-10 h-[46px] py-4 rounded-full flex items-center justify-center font-semibold text-base transition-all duration-300 ${
              hoveredIndex === 2
                ? "bg-white text-[#F40E00]"
                : "bg-[#F40E00] text-white"
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
