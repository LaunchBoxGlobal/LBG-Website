import { REAL_ESTATE_TECH } from "@/constants/industries/real-estate-content/real-estate-tech";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const mobile_app_icons = [
  {
    image: "/industries/healthcare/react-icon.png",
    width: 84,
    height: 34,
    link: `/development-technologies/react-native-app-development`,
  },
  {
    image: "/on-demand-talent/flutter-icon.webp",
    width: 84,
    height: 34,
    link: `/development-technologies/flutter-app-development`,
  },
  {
    image: "/on-demand-talent/kotlin-icon.webp",
    width: 84,
    height: 34,
    link: `/development-technologies/kotlin-app-development`,
  },
  {
    image: "/on-demand-talent/swift-icon.webp",
    width: 84,
    height: 34,
    link: `/development-technologies/swift-app-development`,
  },
];

const RealEstateTech = () => {
  return (
    <section className="w-full py-20 midlg:py-32 bg-[#fff] padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading lg:w-[90%] mx-auto">
          The Tech Behind Your Real{" "}
          <span className="red-text">Estate Software</span>
        </h2>

        <p className="section-paragraph lg:w-[90%] mx-auto">
          We work with modern frameworks, cloud tools, and smooth integrations
          to give your real estate software the speed, security, and flexibility
          every growing startup needs.
        </p>
      </section>

      <section className="w-full mt-10 lg:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-5 pl-5 overflow-hidden">
        <div className="w-full">
          <div className="w-full flex flex-col items-start justify-between gap-3 bg-[#F6F6F6] group rounded-[29px] p-7 min-h-[418px] md:min-h-[508px] relative">
            <div className="w-[11px] h-[93px] red-bg rounded-l-2xl absolute left-[-10px] group-hover:translate-y-16 transition-all duration-300" />
            <div className="flex flex-col items-start gap-3">
              <Image
                src={`/industries/healthcare/mobile-app-development-icon.png`}
                width={57}
                height={57}
                alt={`Mobile app development service icon`}
              />
              <h3 className="text-[20px] font-semibold leading-none">
                Mobile App Development
              </h3>
              <p className="text-sm md:text-base lg:text-[18px] leading-[1.1] font-light">
                Our real estate app developers work with frameworks like{" "}
                <Link
                  href={`https://launchboxglobal.com/development-technologies/flutter-app-development`}
                >
                  Flutter
                </Link>
                ,{" "}
                <Link
                  href={`https://launchboxglobal.com/development-technologies/react-native-app-development`}
                >
                  React Native
                </Link>
                ,{" "}
                <Link
                  href={`https://launchboxglobal.com/development-technologies/swift-app-development`}
                >
                  Swift
                </Link>
                ,{" "}
                <Link
                  href={`https://launchboxglobal.com/development-technologies/kotlin-app-development`}
                >
                  Kotlin
                </Link>
                , and{" "}
                <Link
                  href={`https://launchboxglobal.com/development-technologies/ionic-app-development`}
                >
                  Ionic
                </Link>
                , we create apps that feel smooth and reliable on any device.
                Your startup gets flexibility and speed to market without
                compromising on quality.
              </p>
            </div>
            <div className="w-full min-h-[80px] flex items-start flex-wrap gap-2">
              {mobile_app_icons?.map((i, index) => {
                return (
                  <Link href={i?.link}>
                    <Image
                      src={i?.image}
                      width={i?.width}
                      height={i?.height}
                      alt={`icon`}
                      className=""
                    />
                  </Link>
                );
              })}

              {/* <Link
                href={`/development-technologies/react-native-app-development`}
              >
                <Image
                  src={`/industries/healthcare/react-icon.png`}
                  width={85}
                  height={34}
                  alt={` icon`}
                  className=""
                />
              </Link>
              <Link href={`/development-technologies/kotlin-app-development`}>
                <Image
                  src={`/industries/healthcare/kotlin-icon.png`}
                  width={86}
                  height={34}
                  alt={` icon`}
                  className=""
                />
              </Link>
              <Link href={`/development-technologies/swift-app-development`}>
                <Image
                  src={`/industries/healthcare/swift-icon.png`}
                  width={82}
                  height={34}
                  alt={` icon`}
                  className=""
                />
              </Link> */}
            </div>
          </div>
        </div>
        {REAL_ESTATE_TECH?.map((talent, index) => {
          return (
            <div key={index} className="w-full">
              <div className="w-full flex flex-col items-start justify-between gap-3 bg-[#F6F6F6] group rounded-[29px] p-7 min-h-[418px] md:min-h-[508px] relative">
                <div className="w-[11px] h-[93px] red-bg rounded-l-2xl absolute left-[-10px] group-hover:translate-y-16 transition-all duration-300" />
                <div className="flex flex-col items-start gap-3">
                  <Image
                    src={talent?.icon}
                    width={57}
                    height={57}
                    alt={`${talent?.title} icon`}
                  />
                  <h3 className="text-[20px] font-semibold leading-none">
                    {talent?.title}
                  </h3>
                  <p className="text-sm md:text-base lg:text-[18px] leading-[1.1] font-light">
                    {talent?.description}
                  </p>
                </div>
                <div className="w-full min-h-[80px] flex items-start flex-wrap gap-2">
                  {talent?.icons?.map((i, k) => {
                    return i?.link ? (
                      <Link href={i?.link} key={k}>
                        <Image
                          src={i?.image}
                          width={i?.width}
                          height={i?.height}
                          alt={`${i?.image} icon`}
                          className=""
                        />
                      </Link>
                    ) : (
                      <Image
                        key={k}
                        src={i?.image}
                        width={i?.width}
                        height={i?.height}
                        alt={`${i?.image} icon`}
                        className=""
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default RealEstateTech;
