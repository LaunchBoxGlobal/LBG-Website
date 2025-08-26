"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const DigitalMarketingServicesForEveryBusiness = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="w-full padding-x pt-10 lg:py-20 relative overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading w-full">
          Flexible Digital Marketing Services for{" "}
          <span className="red-text">Every Project</span>
        </h2>
        <p className="section-paragraph lg:w-[85%]">
          When you need extra support without long-term commitments, we provide
          skilled professionals through our flexible staff augmentation
          services, helping your digital marketing projects scale efficiently
          and achieve better results.
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
            Digital Marketing Outsourcing
          </h4>
          <p className="text-base z-10">
            Get expert digital marketing professionals without the hassle of
            hiring in-house. As a leading digital marketing agency, we deliver
            custom solutions that match your vision. With our{" "}
            <Link
              href={`/off-shore-software-development`}
              className="underline z-10"
            >
              offshore development
            </Link>{" "}
            our team works as an extension of your business to improve results.
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
            Dedicated Digital Marketing Team
          </h4>
          <p className="text-base z-10">
            Build your online store with a dedicated team focused solely on your
            project. Our{" "}
            <Link href={`/on-demand-talent`} className="underline">
              outsourcing staff
            </Link>{" "}
            specializes in custom marketing IT services, delivering efficient
            processes, high-quality results, and on-time completion so your
            business grows with confidence.
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
            Need extra hands on deck? You can use digital marketing as a service
            too but we also provide skilled professionals through flexible{" "}
            <Link href={`/staff-augmentation`} className="underline">
              team augmentation services.
            </Link>{" "}
            Whether it’s campaign management, content creation, SEO, or social
            media strategy, our approach ensures smooth collaboration, faster
            results, and expert guidance every step of the way.
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

export default DigitalMarketingServicesForEveryBusiness;
