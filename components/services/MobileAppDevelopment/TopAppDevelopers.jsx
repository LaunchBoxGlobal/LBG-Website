"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const TopAppDevelopers = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="w-full padding-x pt-10 lg:py-20 relative overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading w-full">
          Top Application​ Developers for{" "}
          <span className="red-text">Every Project</span>
        </h2>
        <p className="section-paragraph lg:w-[85%]">
          When you need extra help without long-term contracts, we can provide
          you with a skilled mobile app development team through our flexible
          staff augmentation services.
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
            Mobile App Development Outsourcing
          </h4>
          <p className="text-base z-10">
            Get expert developers without the hassle of hiring in-house. As one
            of the top mobile app development companies, we help you build
            scalable mobile applications that match your vision. With our{" "}
            <Link
              href={`/off-shore-software-development`}
              className="underline z-10"
            >
              offshore development
            </Link>{" "}
            model, our team works as an extension of your business.
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
            Dedicated Mobile App Development Team
          </h4>
          <p className="text-base z-10">
            Build your mobile app with top application developers​ who work
            exclusively on your project. We specialize in custom mobile app
            development and offer{" "}
            <Link href={`/on-demand-talent`} className="underline">
              outsourcing staff
            </Link>{" "}
            to ensure a smooth process, high-quality results, and on-time
            delivery—so you can focus on scaling your business.
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
            Team Augmentation
          </h4>
          <p className="text-base z-10">
            Need extra hands on deck? With our mobile app development expertise,
            we provide skilled professionals through flexible{" "}
            <Link href={`/staff-augmentation`} className="underline">
              team augmentation services
            </Link>{" "}
            From frontend and backend development to mobile-specific UI/UX
            design and project management, our approach ensures better
            collaboration, faster app development, and expert guidance every
            step of the way.
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

export default TopAppDevelopers;
