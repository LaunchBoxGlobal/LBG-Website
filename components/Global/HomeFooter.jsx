import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiFacebookFill, RiLinkedinFill, RiTwitterXFill } from "react-icons/ri";
import FooterLocations from "./FooterLocations";

const HomeFooter = () => {
  return (
    <footer className="w-full pt-12 pb-6 lg:pt-20 bg-black text-white overflow-hidden">
      <section className="w-full padding-x">
        <section className="flex flex-col lg:flex-row items-start justify-between gap-4">
          <div className="w-full lg:w-[80%] py-4 lg:py-0 lg:h-[196px] bg-[#3D3C3F] rounded-full overflow-hidden flex items-center justify-center relative">
            <h2 class="text-[18px] lg:text-[75px] font-bold leading-[36px] lg:leading-[55px] inline-block mx-4 lg:hidden">
              Ready to Build Something Great?
            </h2>
            <div className="hidden lg:flex whitespace-nowrap animate-scroll-footer">
              <h2 class="text-[32px] lg:text-[75px] font-bold leading-[36px] lg:leading-[55px] inline-block mx-4">
                Ready to Build Something Great?
              </h2>
              <h2 class="text-[32px] lg:text-[75px] font-bold leading-[36px] lg:leading-[55px] inline-block mx-4">
                Ready to Build Something Great?
              </h2>
              <h2 class="text-[32px] lg:text-[75px] font-bold leading-[36px] lg:leading-[55px] inline-block mx-4">
                Ready to Build Something Great?
              </h2>
              <h2 class="text-[32px] lg:text-[75px] font-bold leading-[36px] lg:leading-[55px] inline-block mx-4">
                Ready to Build Something Great?
              </h2>
              <h2 class="text-[32px] lg:text-[75px] font-bold leading-[36px] lg:leading-[55px] inline-block mx-4">
                Ready to Build Something Great?
              </h2>
              <h2 class="text-[32px] lg:text-[75px] font-bold leading-[36px] lg:leading-[55px] inline-block mx-4">
                Ready to Build Something Great?
              </h2>
              <h2 class="text-[32px] lg:text-[75px] font-bold leading-[36px] lg:leading-[55px] inline-block mx-4">
                Ready to Build Something Great?
              </h2>
              <h2 class="text-[32px] lg:text-[75px] font-bold leading-[36px] lg:leading-[55px] inline-block mx-4">
                Ready to Build Something Great?
              </h2>
              <h2 class="text-[32px] lg:text-[75px] font-bold leading-[36px] lg:leading-[55px] inline-block mx-4">
                Ready to Build Something Great?
              </h2>
              <h2 class="text-[32px] lg:text-[75px] font-bold leading-[36px] lg:leading-[55px] inline-block mx-4">
                Ready to Build Something Great?
              </h2>
              <h2 class="text-[32px] lg:text-[75px] font-bold leading-[36px] lg:leading-[55px] inline-block mx-4">
                Ready to Build Something Great?
              </h2>
            </div>
          </div>
          <Link
            href={"/contact-us"}
            className="w-[109px] h-[109px] lg:w-[195px] lg:h-[195px] rounded-full border border-white text-base lg:text-[25px] flex flex-col gap-2 uppercase items-center justify-center hover:border-[#f40e00] hover:bg-[#f40e00] transition-all duration-300"
          >
            let's <br /> talk
            <Image
              src={"/footer-cta-icon.png"}
              width={28}
              height={24}
              className="w-[18px] h-[15px] lg:w-[28px] lg:h-[24px]"
            />
          </Link>
        </section>
      </section>

      <section className="w-full padding-x flex flex-col lg:flex-row items-start justify-between gap-x-20 mt-10">
        <div className="">
          <h3 className="text-[18px] font-bold uppercase">quick links</h3>
          <ul className="flex flex-col items-start gap-3 mt-5">
            <li>
              <Link
                href={"/"}
                className="text-white opacity-90 hover:opacity-100 underline transition-all duration-200 uppercase"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"#services"}
                className="text-white opacity-90 hover:opacity-100 underline transition-all duration-200 uppercase"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href={"#workflow"}
                className="text-white opacity-90 hover:opacity-100 underline transition-all duration-200 uppercase"
              >
                Workflow
              </Link>
            </li>
            <li>
              <Link
                href={"#teckstack"}
                className="text-white opacity-90 hover:opacity-100 underline transition-all duration-200 uppercase"
              >
                Tech Stack
              </Link>
            </li>
            <li>
              <Link
                href={"#testimonials"}
                className="text-white opacity-90 hover:opacity-100 underline transition-all duration-200 uppercase"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                href={"#faqs"}
                className="text-white opacity-90 hover:opacity-100 underline transition-all duration-200 uppercase"
              >
                FAQs
              </Link>
            </li>
          </ul>
        </div>
        <div className="">
          <h3 className="text-sm lg:text-[18px] font-bold uppercase">
            Contact us
          </h3>
          <ul className="flex flex-col items-start gap-3 mt-5">
            <li>
              <Link
                href={"/"}
                className="text-white opacity-90 hover:opacity-100 underline transition-all duration-200"
              >
                hello@launchboxglobal.com
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="text-white opacity-90 hover:opacity-100 underline transition-all duration-200"
              >
                +66 2399 1145
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="text-white opacity-90 hover:opacity-100 underline transition-all duration-200"
              >
                Facebook
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="text-white opacity-90 hover:opacity-100 underline transition-all duration-200"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="text-white opacity-90 hover:opacity-100 underline transition-all duration-200"
              >
                Instagram
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="text-white opacity-90 hover:opacity-100 underline transition-all duration-200"
              >
                Twitter
              </Link>
            </li>
          </ul>
        </div>
        <FooterLocations />
      </section>

      <section className="w-full flex flex-col items-center gap-5 justify-center mt-10 lg:mt-16 relative">
        <Image
          src={"/footer-lb-image.png"}
          alt="footer-lb-image"
          width={1919}
          height={142}
          className="w-full absolute z-0 -bottom-2"
        />
        <p className="text-sm md:text-base font-semibold opacity-70 z-10">
          © 2025 LaunchBox Global. All Rights Reserved.
        </p>

        <div className="flex items-center justify-end gap-3 z-10">
          <Link
            href={"/https://www.facebook.com/"}
            target="_blank"
            className="w-[35px] h-[35px] md:w-[45px] md:h-[45px] flex items-center justify-center rounded-full border border-gray-600"
          >
            <RiFacebookFill className="text-white w-[16.96px] h-[21.35px]" />
          </Link>
          <Link
            href={"/"}
            className="w-[35px] h-[35px] md:w-[45px] md:h-[45px] flex items-center justify-center rounded-full border border-gray-600"
          >
            <RiLinkedinFill className="text-white w-[19.93px] h-[19.93px]" />
          </Link>
          <Link
            href={"/"}
            className="w-[35px] h-[35px] md:w-[45px] md:h-[45px] flex items-center justify-center rounded-full border border-gray-600"
          >
            <RiTwitterXFill className="text-white w-[18.5px] h-[15.66px]" />
          </Link>
        </div>
      </section>
    </footer>
  );
};

export default HomeFooter;
