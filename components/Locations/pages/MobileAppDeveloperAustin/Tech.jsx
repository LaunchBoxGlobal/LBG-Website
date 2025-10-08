import React from "react";
import Image from "next/image";
import { MOBILE_APP_DEVELOPMENT_AUSTIN_TECH } from "@/constants/locations/mobile-app-development-austin/mobile-app-development-austin-tech";
import Link from "next/link";

const Tech = () => {
  return (
    <section className="w-full py-20 midlg:py-28 bg-[#fff] padding-x">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading lg:w-[80%] mx-auto">
          The Tech Behind Your <span className="red-text">Mobile Apps</span>
        </h2>
        <p className="section-paragraph lg:w-[90%] mx-auto">
          We use modern frameworks, cloud tools, and smooth integrations to give
          your apps speed, security, and flexibility. As one of the top app
          development companies in Austin, we build apps that perform reliably
          and grow with your business.
        </p>
      </section>

      <section className="w-full mt-10 lg:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-5 pl-5 overflow-hidden">
        {MOBILE_APP_DEVELOPMENT_AUSTIN_TECH?.map((talent, index) => {
          return (
            <div key={index} className="w-full">
              <div className="w-full flex flex-col items-start justify-between gap-3 bg-[#F6F6F6] rounded-[29px] p-7 min-h-[570px] relative group">
                <div className="w-[11px] h-[93px] red-bg rounded-l-2xl absolute left-[-10px] group-hover:translate-y-16 transition-all duration-300" />
                <div className="w-full flex flex-col items-start gap-3">
                  {/* <div className="rounded-full red-bg w-[71px] lg:w-[91px] h-[71px] lg:h-[91px] flex items-center justify-center"> */}
                  <Image
                    src={talent?.icon}
                    width={talent?.width}
                    height={talent?.height}
                    alt={`${talent?.title} icon`}
                  />
                  {/* </div> */}
                  <h3 className="text-[27px] font-semibold">{talent?.title}</h3>
                  <p className="text-sm md:text-base lg:text-[18px] leading-[1.1] font-light">
                    {talent?.description}
                  </p>
                </div>
                <div className="w-full min-h-[130px] flex items-end flex-wrap gap-2">
                  {talent?.icons?.map((ic, ind) => {
                    return (
                      <Image
                        src={ic?.image}
                        width={ic?.width}
                        height={ic?.height}
                        alt={`tech icon`}
                        key={ind}
                        style={{ minWidth: ic?.width }}
                        className="object-contain"
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
        <div className="w-full">
          <div className="w-full flex flex-col items-start justify-between gap-3 bg-[#F6F6F6] group rounded-[29px] p-7 min-h-[570px] relative">
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
                Our team of app developers Austin Texas builds mobile solutions
                with{" "}
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
                , and{" "}
                <Link
                  href={`https://launchboxglobal.com/development-technologies/kotlin-app-development`}
                >
                  Kotlin
                </Link>
                , delivering fast, dependable, and future-ready apps. With our
                mobile app development Austin TX expertise, your apps work
                smoothly across different devices.
              </p>
            </div>
            <div className="w-full min-h-[80px] flex items-end flex-wrap gap-2">
              <Link href={`/development-technologies/flutter-app-development`}>
                <Image
                  src={`/industries/healthcare/flutter-icon.png`}
                  width={86}
                  height={34}
                  alt={` icon`}
                  className=""
                />
              </Link>
              <Link
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
              </Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Tech;
