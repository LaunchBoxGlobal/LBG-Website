import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowRight } from "react-icons/go";
import { RiFacebookFill, RiLinkedinFill, RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="w-full padding-x py-10 lg:pt-20 lg:pb-10 bg-black text-white">
      <section className="w-full" id="contact-us">
        <div className="lg:bg-[#2D323E] h-[118px] rounded-full w-full flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:px-10">
            <h2 className="text-2xl lg:text-[30px] font-medium text-[#F9FAFB] tracking-tight">
              Our Tech Team is just a click AWAY!
            </h2>
          </div>
          <div className="w-full lg:w-[477px] mt-3 lg:mt-0 rounded-full px-0 flex justify-end">
            <Link
              href={"/contact-us"}
              className="w-full lg:w-[467px] h-[64px] md:h-[118px] rounded-full bg-[#F40E00] text-lg md:text-[23px] font-medium flex items-center justify-center gap-4 hover:opacity-80 transition-all duration-300"
            >
              Get consultation <GoArrowRight className="text-white text-3xl" />
            </Link>
          </div>
        </div>
      </section>

      <section className="lg:px-20 mt-16 flex flex-col lg:flex-row items-start gap-x-20">
        {/* <div className="">
          <h3 className="text-[20px] font-bold uppercase">quick links</h3>
          <ul className="flex flex-col items-start gap-3 mt-5">
            <li>
              <Link
                href={"/"}
                className="text-white opacity-80 hover:opacity-100 transition-all duration-200 underline"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="text-white opacity-80 hover:opacity-100 transition-all duration-200 underline"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="text-white opacity-80 hover:opacity-100 transition-all duration-200 underline"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="text-white opacity-80 hover:opacity-100 transition-all duration-200 underline"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="text-white opacity-80 hover:opacity-100 transition-all duration-200 underline"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="">
          <h3 className="text-[20px] font-bold uppercase">Services</h3>
          <ul className="flex flex-col items-start gap-3 mt-5">
            <li>
              <Link
                href={"/"}
                className="text-white opacity-80 hover:opacity-100 transition-all duration-200 underline"
              >
                Mobile App Development
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="text-white opacity-80 hover:opacity-100 transition-all duration-200 underline"
              >
                Web App Development
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="text-white opacity-80 hover:opacity-100 transition-all duration-200 underline"
              >
                E-Commerce Development
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="text-white opacity-80 hover:opacity-100 transition-all duration-200 underline"
              >
                Software Development
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="text-white opacity-80 hover:opacity-100 transition-all duration-200 underline"
              >
                Branding & Designing
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="text-white opacity-80 hover:opacity-100 transition-all duration-200 underline"
              >
                Digital Marketing
              </Link>
            </li>
          </ul>
        </div> */}

        <div className="">
          <h3 className="text-[20px] font-bold uppercase">TALK TO US</h3>
          <ul className="flex flex-col items-start gap-3 mt-5">
            <li>
              <Link
                href={"/"}
                className="text-white opacity-80 hover:opacity-100 transition-all duration-200 underline"
              >
                hello@launchboxglobal.com
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="text-white opacity-80 hover:opacity-100 transition-all duration-200 underline"
              >
                +66 2399 1145
              </Link>
            </li>
          </ul>
        </div>

        <div className="">
          <h3 className="text-[20px] font-bold uppercase">Locations:</h3>
          <ul className="flex flex-col lg:flex-row items-start gap-6 lg:gap-14 mt-5">
            <li>
              <span className="text-xl font-bold flex items-center justify-start gap-2">
                Pakistan{" "}
                <Image
                  src={"/pakistan-flag.png"}
                  width={31.11}
                  height={23.33}
                  className="w-[31.11px] h-[23.33px]"
                />
              </span>
              <Link
                href={"/"}
                className="text-white opacity-80 hover:opacity-100 transition-all duration-200 underline"
              >
                Emarah Suites, Shara-e-Faisal, Suite# 301, Karachi
              </Link>
            </li>
            <li>
              <span className="text-xl font-bold flex items-center justify-start gap-2">
                USA{" "}
                <Image
                  src={"/usa-flag.png"}
                  width={31.11}
                  height={23.33}
                  className="w-[31.11px] h-[23.33px]"
                />
              </span>
              <Link
                href={"/"}
                className="text-white opacity-80 hover:opacity-100 transition-all duration-200 underline"
              >
                4700 Millenia Blvd Suite# 500, FL 32839 Orlando
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <div className="w-full border border-gray-600 mt-16" />

      <section className="w-full flex flex-col items-start lg:flex-row lg:items-center gap-5 justify-between mt-12">
        <Link href={"/"}>
          <Image
            src={`/white-logo.png`}
            width={310}
            height={55}
            alt="launchbox global logo"
            className="w-[160px] lg:w-[200]"
          />
        </Link>

        <p className="text-sm md:text-lg font-normal opacity-70">
          © 2025 LaunchBox Global. All Rights Reserved.
        </p>

        <div className="flex items-center justify-end gap-3">
          <Link
            href={"/"}
            className="w-[35px] h-[35px] md:w-[55px] md:h-[55px] flex items-center justify-center rounded-full border border-gray-600"
          >
            <RiFacebookFill className="text-white w-[16.96px] h-[21.35px]" />
          </Link>
          <Link
            href={"/"}
            className="w-[35px] h-[35px] md:w-[55px] md:h-[55px] flex items-center justify-center rounded-full border border-gray-600"
          >
            <RiLinkedinFill className="text-white w-[19.93px] h-[19.93px]" />
          </Link>
          <Link
            href={"/"}
            className="w-[35px] h-[35px] md:w-[55px] md:h-[55px] flex items-center justify-center rounded-full border border-gray-600"
          >
            <RiTwitterXFill className="text-white w-[18.5px] h-[15.66px]" />
          </Link>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
