import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiFacebookFill, RiLinkedinFill, RiTwitterXFill } from "react-icons/ri";

const HomeFooter = () => {
  return (
    <footer className="w-full padding-x py-12 lg:pt-20 bg-black text-white">
      <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
        <section className="flex flex-col xl:flex-row items-start gap-10">
          <h2 className="text-2xl lg:text-[50px] font-bold lg:leading-[55px]">
            Ready to Build <br /> Something <br /> Great?
          </h2>
          <Link
            href={"/contact-us"}
            className="w-[156px] h-[156px] rounded-full border border-white text-[25px] flex flex-col gap-2 uppercase items-center justify-center hover:border-[#f40e00] hover:bg-[#f40e00] transition-all duration-300"
          >
            let's <br /> talk
            <Image
              src={"/footer-cta-icon.png"}
              width={28}
              height={24}
              className=""
            />
          </Link>
        </section>
        <section className="flex flex-col gap-y-10 lg:flex-row items-start gap-x-20">
          <div className="">
            <h3 className="text-[18px] font-bold uppercase">quick links</h3>
            <ul className="flex flex-col items-start gap-3 mt-5">
              <li>
                <Link
                  href={"/"}
                  className="text-white opacity-80 hover:opacity-100 transition-all duration-200 uppercase"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={"#services"}
                  className="text-white opacity-80 hover:opacity-100 transition-all duration-200 uppercase"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href={"#workflow"}
                  className="text-white opacity-80 hover:opacity-100 transition-all duration-200 uppercase"
                >
                  Workflow
                </Link>
              </li>
              <li>
                <Link
                  href={"#teckstack"}
                  className="text-white opacity-80 hover:opacity-100 transition-all duration-200 uppercase"
                >
                  Tech Stack
                </Link>
              </li>
              <li>
                <Link
                  href={"#testimonials"}
                  className="text-white opacity-80 hover:opacity-100 transition-all duration-200 uppercase"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href={"#faqs"}
                  className="text-white opacity-80 hover:opacity-100 transition-all duration-200 uppercase"
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
                  className="text-white opacity-80 hover:opacity-100 transition-all duration-200"
                >
                  hello@launchboxglobal.com
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="text-white opacity-80 hover:opacity-100 transition-all duration-200"
                >
                  +66 2399 1145
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </section>

      <div className="w-full border mt-8 border-gray-600" />

      <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
        <section className="">
          <h3 className="text-[20px] font-normal">Our Presense</h3>
          <ul className="flex flex-col lg:flex-row items-start gap-6 lg:gap-14 mt-5">
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
                4700 Millenia Blvd Suite# 500, Orlando FL 32839
              </Link>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.7555282936764!2d-81.43643949999999!3d28.4869082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77eafa8a55555%3A0x581fad0a30cde538!2s4700%20Millenia%20Blvd%20Suite%20500%2C%20Orlando%2C%20FL%2032839%2C%20USA!5e0!3m2!1sen!2s!4v1740460099542!5m2!1sen!2s"
                // width="491"
                // height="227"
                style={{ borderRadius: "20px" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="mt-5 w-full lg:w-[350px] xl:w-[490px] h-[227px]"
              />
            </li>
          </ul>
        </section>
        <section className="">
          <h3 className="text-[20px] font-normal text-black">Our Presence</h3>
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
                Emarah Suites, Sharah-e-Faisal, Suite# 301, Karachi
              </Link>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.120869308278!2d67.05240119999999!3d24.859721099999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f2ac9ab4ba1%3A0xd7fb808390cbecd0!2sLaunchBox%20Pakistan!5e0!3m2!1sen!2s!4v1740459898336!5m2!1sen!2s"
                // width="491"
                // height="227"
                style={{ borderRadius: "20px" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="mt-5 w-full lg:w-[370px] xl:w-[490px] h-[227px]"
              />
            </li>
          </ul>
        </section>
      </section>

      <div className="w-full border mt-10 border-gray-600" />

      <section className="w-full flex flex-col items-start lg:flex-row lg:items-center gap-5 justify-between mt-10">
        <Link href={"/"}>
          <Image
            src={`/white-logo.png`}
            width={310}
            height={55}
            alt="launchbox global logo"
            className="w-[200px] lg:w-[230]"
          />
        </Link>

        <p className="text-sm md:text-base font-semibold opacity-70">
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

export default HomeFooter;
