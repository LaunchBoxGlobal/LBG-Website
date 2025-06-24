import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiFacebookFill, RiLinkedinFill, RiTwitterXFill } from "react-icons/ri";
import FooterLocations from "./FooterLocations";

const HomeFooter = () => {
  return (
    <footer className="w-full pt-12 pb-6 lg:pt-20 bg-black text-white overflow-hidden">
      <section className="w-full padding-x">
        <section className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="w-full lg:w-[80%] py-4 lg:py-0 md:h-[95px] lg:h-[129px] xl:h-[196px] bg-[#3D3C3F] rounded-full overflow-hidden flex items-center justify-center relative">
            {/* <h2 className="text-[18px] lg:text-[75px] font-bold leading-[36px] lg:leading-[55px] inline-block mx-4 lg:hidden">
              Ready to Build Something Great?
            </h2> */}
            <div className="flex whitespace-nowrap animate-scroll-footer">
              <p className="text-[28px] lg:text-[42px] xl:text-[75px] font-bold leading-[36px] lg:leading-[55px] inline-block mx-4">
                Ready to Build Something Great?
              </p>
              <p className="text-[28px] lg:text-[42px] xl:text-[75px] font-bold leading-[36px] lg:leading-[55px] inline-block mx-4">
                Ready to Build Something Great?
              </p>
              <p className="text-[28px] lg:text-[42px] xl:text-[75px] font-bold leading-[36px] lg:leading-[55px] inline-block mx-4">
                Ready to Build Something Great?
              </p>
              <p className="text-[28px] lg:text-[42px] xl:text-[75px] font-bold leading-[36px] lg:leading-[55px] inline-block mx-4">
                Ready to Build Something Great?
              </p>
              <p className="text-[28px] lg:text-[42px] xl:text-[75px] font-bold leading-[36px] lg:leading-[55px] inline-block mx-4">
                Ready to Build Something Great?
              </p>
              <p className="text-[28px] lg:text-[42px] xl:text-[75px] font-bold leading-[36px] lg:leading-[55px] inline-block mx-4">
                Ready to Build Something Great?
              </p>
              <p className="text-[28px] lg:text-[42px] xl:text-[75px] font-bold leading-[36px] lg:leading-[55px] inline-block mx-4">
                Ready to Build Something Great?
              </p>
              <p className="text-[28px] lg:text-[42px] xl:text-[75px] font-bold leading-[36px] lg:leading-[55px] inline-block mx-4">
                Ready to Build Something Great?
              </p>
              <p className="text-[28px] lg:text-[42px] xl:text-[75px] font-bold leading-[36px] lg:leading-[55px] inline-block mx-4">
                Ready to Build Something Great?
              </p>
              <p className="text-[28px] lg:text-[42px] xl:text-[75px] font-bold leading-[36px] lg:leading-[55px] inline-block mx-4">
                Ready to Build Something Great?
              </p>
              <p className="text-[28px] lg:text-[42px] xl:text-[75px] font-bold leading-[36px] lg:leading-[55px] inline-block mx-4">
                Ready to Build Something Great?
              </p>
            </div>
          </div>
          <Link
            href={"/contact-us"}
            aria-label="link to contact us page"
            className="w-[109px] h-[109px] md:w-[110px] md:h-[90px] lg:w-[129px] lg:h-[129px] xl:w-[195px] xl:h-[195px] rounded-full border border-white text-xs lg:text-[25px] flex flex-col md:gap-2 uppercase items-center justify-center hover:border-[#f40e00] hover:bg-[#f40e00] transition-all duration-300 leading-5 lg:leading-8"
          >
            let's <br /> talk
            <Image
              src={"/footer-cta-icon.png"}
              width={28}
              height={24}
              loading="lazy"
              alt="footer contact us button arrow icon"
              className="w-[13px] h-[10px] lg:w-[28px] lg:h-[24px]"
            />
          </Link>
        </section>
      </section>

      <section className="w-full padding-x flex flex-wrap items-center lg:items-start justify-start lg:justify-between gap-y-10 mt-10 lg:mt-20">
        <div className="w-full lg:w-[18%]">
          <h3 className="text-[18px] xl:text-[21px] font-bold uppercase">
            Services
          </h3>
          <ul className="flex flex-col items-center lg:items-start gap-3 mt-5">
            <li>
              <Link
                href={"/services/mobile-app-development"}
                aria-label="link to home page"
                className="text-white opacity-90 hover:opacity-100 underline transition-all duration-200 lg:text-[16px] xl:text-[18px]"
              >
                Mobile App Development
              </Link>
            </li>
            <li>
              <Link
                href={"/services/web-app-development"}
                aria-label="link to services page"
                className="text-white opacity-90 hover:opacity-100 underline transition-all duration-200 lg:text-[16px] xl:text-[18px]"
              >
                Web App Development
              </Link>
            </li>
            <li>
              <Link
                href={"/services/custom-software-development"}
                aria-label="link to workflow section on home page"
                className="text-white opacity-90 hover:opacity-100 underline transition-all duration-200 lg:text-[16px] xl:text-[18px]"
              >
                Custom Software Development
              </Link>
            </li>
            <li>
              <Link
                href={"/services/ecommerce-development"}
                aria-label="link to technologies section"
                className="text-white opacity-90 hover:opacity-100 underline transition-all duration-200 lg:text-[16px] xl:text-[18px]"
              >
                E-commerce Development
              </Link>
            </li>
            <li>
              <Link
                href={"/services/digital-marketing"}
                aria-label="link to testimonials section"
                className="text-white opacity-90 hover:opacity-100 underline transition-all duration-200 lg:text-[16px] xl:text-[18px]"
              >
                Digital Marketing
              </Link>
            </li>
            <li>
              <Link
                href={"/services/branding-and-design"}
                aria-label="link to frequently asked questions"
                className="text-white opacity-90 hover:opacity-100 underline transition-all duration-200 lg:text-[16px] xl:text-[18px]"
              >
                Branding & Design
              </Link>
            </li>
          </ul>
          <h3 className="text-[18px] xl:text-[21px] font-bold uppercase mt-10">
            Staff Augmentation
          </h3>
          <ul className="flex flex-col items-center lg:items-start gap-3 mt-5">
            <li>
              <Link
                href={"/staff-augmentation"}
                aria-label="link to staff augmentation page"
                className="text-white opacity-90 hover:opacity-100 underline transition-all duration-200 lg:text-[16px] xl:text-[18px]"
              >
                Team Augmentation
              </Link>
            </li>
            <li>
              <Link
                href={"/off-shore-software-development"}
                aria-label="link to off-shore-software-development page"
                className="text-white opacity-90 hover:opacity-100 underline transition-all duration-200 lg:text-[16px] xl:text-[18px]"
              >
                Off-Shore Software Development
              </Link>
            </li>
            <li>
              <Link
                href={"/on-demand-talent"}
                aria-label="link to on-demand-talent page"
                className="text-white opacity-90 hover:opacity-100 underline transition-all duration-200 lg:text-[16px] xl:text-[18px]"
              >
                On-Demand Talent Augmentation
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-[20%] lg:px-10">
          <h3 className="text-[18px] xl:text-[21px] font-bold uppercase">
            Technology
          </h3>
          <ul className="flex flex-col items-center lg:items-start gap-3 mt-5">
            <li>
              <Link
                href={"/development-technologies/react-native-app-development"}
                aria-label="link to home page"
                className="text-white opacity-90 hover:opacity-100 underline transition-all duration-200 lg:text-[16px] xl:text-[18px]"
              >
                Native App Development
              </Link>
            </li>
            <li>
              <Link
                href={"/development-technologies/flutter-app-development"}
                aria-label="link to services page"
                className="text-white opacity-90 hover:opacity-100 underline transition-all duration-200 lg:text-[16px] xl:text-[18px]"
              >
                Flutter App Development
              </Link>
            </li>
            <li>
              <Link
                href={"/development-technologies/swift-app-development"}
                aria-label="link to workflow section on home page"
                className="text-white opacity-90 hover:opacity-100 underline transition-all duration-200 lg:text-[16px] xl:text-[18px]"
              >
                Swift App Development
              </Link>
            </li>
            <li>
              <Link
                href={"/development-technologies/kotlin-app-development"}
                aria-label="link to technologies section"
                className="text-white opacity-90 hover:opacity-100 underline transition-all duration-200 lg:text-[16px] xl:text-[18px]"
              >
                Kotlin App Development
              </Link>
            </li>
            <li>
              <Link
                href={"/development-technologies/ionic-app-development"}
                aria-label="link to testimonials section"
                className="text-white opacity-90 hover:opacity-100 underline transition-all duration-200 lg:text-[16px] xl:text-[18px]"
              >
                Ionic App Development
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-[20%]">
          <h3 className="text-[18px] xl:text-[21px] font-bold uppercase text-center lg:text-start">
            Resources
          </h3>
          <ul className="flex flex-col items-center lg:items-start gap-3 mt-5">
            <li>
              <Link
                href={"/blogs"}
                className="text-white opacity-90 hover:opacity-100 underline transition-all duration-200 lg:text-[16px] xl:text-[18px]"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href={`/case-studies`}
                aria-label="launchbox global phone number"
                className="text-white opacity-90 hover:opacity-100 underline transition-all duration-200 lg:text-[16px] xl:text-[18px]"
              >
                Case Studies
              </Link>
            </li>
          </ul>
          <h3 className="text-[18px] xl:text-[21px] font-bold uppercase text-center lg:text-start mt-10">
            Contact us
          </h3>
          <ul className="flex flex-col items-center lg:items-start gap-3 mt-5">
            <li>
              <Link
                href={"/"}
                aria-label="launchbox global email address"
                className="text-white opacity-90 hover:opacity-100 underline transition-all duration-200 lg:text-[16px] xl:text-[18px]"
              >
                hello@launchboxglobal.com
              </Link>
            </li>
            <li>
              <Link
                href={`tel:8888688385`}
                aria-label="launchbox global phone number"
                className="text-white opacity-90 hover:opacity-100 underline transition-all duration-200 lg:text-[16px] xl:text-[18px]"
              >
                (888) 868-8385
              </Link>
            </li>
          </ul>
        </div>

        <FooterLocations />
      </section>

      <section className="w-full flex flex-col items-center gap-5 justify-center mt-10 lg:mt-20 relative">
        <Image
          src={"/footer-lb-image.png"}
          alt="footer-lb-image"
          width={1919}
          height={142}
          loading="lazy"
          className="w-full absolute z-0 -bottom-2"
        />
        <p className="text-sm md:text-base font-semibold opacity-70 z-10">
          © 2025 LaunchBox Global. All Rights Reserved.
        </p>

        <div className="flex items-center justify-end gap-3 z-10">
          <Link
            href={"/https://www.facebook.com/"}
            target="_blank"
            aria-label="launchbox global facebook page link"
            className="w-[35px] h-[35px] md:w-[45px] md:h-[45px] flex items-center justify-center rounded-full bg-[#F40E00]"
          >
            <RiFacebookFill className="text-white w-[16.96px] h-[21.35px]" />
          </Link>
          <Link
            href={"/"}
            aria-label="launchbox global linkedin page link"
            className="w-[35px] h-[35px] md:w-[45px] md:h-[45px] flex items-center justify-center rounded-full bg-[#F40E00]"
          >
            <RiLinkedinFill className="text-white w-[19.93px] h-[19.93px]" />
          </Link>
          <Link
            href={"/"}
            aria-label="launchbox global twitter page link"
            className="w-[35px] h-[35px] md:w-[45px] md:h-[45px] flex items-center justify-center rounded-full bg-[#F40E00]"
          >
            <RiTwitterXFill className="text-white w-[18.5px] h-[15.66px]" />
          </Link>
        </div>
      </section>
    </footer>
  );
};

export default HomeFooter;
