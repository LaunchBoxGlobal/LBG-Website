import { TECH_NEEDS } from "@/constants/StaffAugmentation/tech-needs";
import Image from "next/image";
import React from "react";
import AnimatedText from "./AnimatedText";
import Link from "next/link";

const TechNeed = () => {
  return (
    <section className="w-full py-20 midlg:py-32 xl:py-40 bg-[#F9F9F9] padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading lg:w-[90%] mx-auto">
          Staff Augmentation for Every Tech{" "}
          <span className="red-text">Need</span>
        </h2>

        <p className="section-paragraph lg:w-[80%] mx-auto">
          Get skilled professionals for all your development projects. We
          provide expert talent across every major tech service to complement
          your team.
        </p>
      </section>
      <section className="w-full mt-10 lg:mt-14 flex flex-wrap items-start justify-center gap-5">
        <div className="w-full md:w-[318px]">
          <div
            className={`w-full md:w-[318px] min-h-[330px] p-7 rounded-[16px] bg-[#fff] flex flex-col items-start gap-4`}
          >
            <Image
              src={`/staff-augmentation/mobile-app-development-icon.webp`}
              alt={`Mobile App Development Service Icon`}
              width={47}
              height={55}
            />
            <h3 className="text-[28px] font-bold leading-[1.1] mt-3">
              Mobile App Development
            </h3>
            <p className="text-lg text-[#212121] leading-[1.2]">
              Our{" "}
              <Link
                href={`/services/mobile-app-development`}
                className="underline"
              >
                mobile app development
              </Link>{" "}
              company provides iOS/Android experts to build high-performance
              applications for your business.
            </p>
          </div>
        </div>
        <div className="w-full md:w-[318px]">
          <div
            className={`w-full md:w-[318px] min-h-[330px] p-7 rounded-[16px] bg-[#fff] flex flex-col items-start gap-4`}
          >
            <Image
              src={`/staff-augmentation/web-app-development-icon.webp`}
              alt={`Web App Development Service Icon`}
              width={71}
              height={55}
            />
            <h3 className="text-[28px] font-bold leading-[1.1] mt-3">
              Web App Development
            </h3>
            <p className="text-lg text-[#212121] leading-[1.2]">
              Access top talent for{" "}
              <Link
                href={`/services/web-app-development`}
                className="underline"
              >
                web app development services,
              </Link>{" "}
              creating scalable and secure solutions for any industry.
            </p>
          </div>
        </div>
        <div className="w-full md:w-[318px]">
          <div
            className={`w-full md:w-[318px] min-h-[330px] p-7 rounded-[16px] bg-[#fff] flex flex-col items-start gap-4`}
          >
            <Image
              src={`/staff-augmentation/custom-software-development-icon.webp`}
              alt={`Custom Software Development Service Icon`}
              width={62}
              height={55}
            />
            <h3 className="text-[28px] font-bold leading-[1.1] mt-3">
              Custom Software Development
            </h3>
            <p className="text-lg text-[#212121] leading-[1.2]">
              Get specialized developers for{" "}
              <Link
                href={`/services/custom-software-development`}
                className="underline"
              >
                custom software development{" "}
              </Link>
              tailored to your unique business requirements.
            </p>
          </div>
        </div>
        <div className="w-full md:w-[318px]">
          <div
            className={`w-full md:w-[318px] min-h-[330px] p-7 rounded-[16px] bg-[#fff] flex flex-col items-start gap-4`}
          >
            <Image
              src={`/staff-augmentation/ecommerce-app-development-icon.webp`}
              alt={`Ecommerce App Development Service Icon`}
              width={54}
              height={55}
            />
            <h3 className="text-[28px] font-bold leading-[1.1] mt-3">
              Ecommerce Development
            </h3>
            <p className="text-lg text-[#212121] leading-[1.2]">
              Build powerful online stores with our{" "}
              <Link
                href={`/services/ecommerce-development`}
                className="underline"
              >
                ecommerce development{" "}
              </Link>
              experts skilled in all major platforms.
            </p>
          </div>
        </div>
        <div className="w-full md:w-[318px]">
          <div
            className={`w-full md:w-[318px] min-h-[330px] p-7 rounded-[16px] bg-[#fff] flex flex-col items-start gap-4`}
          >
            <Image
              src={`/staff-augmentation/digital-marketing-service-icon.webp`}
              alt={`Digital Marketing Service Icon`}
              width={69}
              height={55}
            />
            <h3 className="text-[28px] font-bold leading-[1.1] mt-3">
              Digital Marketing
            </h3>
            <p className="text-lg text-[#212121] leading-[1.2]">
              Complement your tech team with our{" "}
              <Link href={`/services/digital-marketing`} className="underline">
                digital marketing services{" "}
              </Link>
              professionals for full-project support.
            </p>
          </div>
        </div>
        <div className="w-full md:w-[318px]">
          <div
            className={`w-full md:w-[318px] min-h-[330px] p-7 rounded-[16px] bg-[#fff] flex flex-col items-start gap-4`}
          >
            <Image
              src={`/staff-augmentation/branding-and-design-icon.webp`}
              alt={`Branding & Design Service Icon`}
              width={47}
              height={55}
            />
            <h3 className="text-[28px] font-bold leading-[1.1] mt-3">
              Branding & Design
            </h3>
            <p className="text-lg text-[#212121] leading-[1.2]">
              Enhance your products with creative experts in{" "}
              <Link
                href={`/services/branding-and-design`}
                className="underline"
              >
                branding and design
              </Link>{" "}
              for cohesive user experiences.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default TechNeed;
