import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiFacebookFill, RiLinkedinFill, RiTwitterXFill } from "react-icons/ri";
import FooterLocations from "./FooterLocations";
import {
  FOOTER_CONTACTS,
  FOOTER_RESOURCES,
  FOOTER_SERVICES,
  FOOTER_STAFF_AUGMENTATION_LINKS,
  FOOTER_TECH_LINKS,
} from "@/constants/footer/footerLinks";
import { FaInstagram } from "react-icons/fa";

const HomeFooter = () => {
  return (
    <footer className="w-full pt-12 pb-6 lg:pt-20 bg-black text-white overflow-hidden">
      <section className="w-full padding-x">
        <section className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
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

      <section className="w-full padding-x flex justify-between items-start flex-wrap gap-y-10 gap-x-0 mt-10 lg:mt-20">
        <div className="w-full md:w-1/2 lg:w-[25%]">
          <h3 className="text-[18px] xl:text-[21px] font-bold uppercase">
            Services
          </h3>
          <ul className="flex flex-col items-start gap-3 mt-5">
            {FOOTER_SERVICES?.map((service, index) => {
              return (
                <li key={index}>
                  <Link
                    href={service?.url}
                    aria-label={`${service?.title}`}
                    className="text-gray-200 opacity-90 hover:opacity-100 underline transition-all duration-200 lg:text-[16px] xl:text-[18px]"
                  >
                    {service?.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-[25%] lg:pl-3">
          <h3 className="text-[18px] xl:text-[21px] font-bold uppercase">
            Technology
          </h3>
          <ul className="flex flex-col items-start gap-3 mt-5">
            {FOOTER_TECH_LINKS?.map((service, index) => {
              return (
                <li key={index}>
                  <Link
                    href={service?.url}
                    aria-label={service?.title}
                    className="text-gray-200 opacity-90 hover:opacity-100 underline transition-all duration-200 lg:text-[16px] xl:text-[18px]"
                  >
                    {service?.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-[25%]">
          <h3 className="text-[18px] xl:text-[21px] font-bold uppercase">
            Staff Augmentation
          </h3>
          <ul className="flex flex-col items-start gap-3 mt-5">
            {FOOTER_STAFF_AUGMENTATION_LINKS?.map((service, i) => {
              return (
                <li key={i}>
                  <Link
                    href={service?.url}
                    aria-label={service?.title}
                    className="text-gray-200 opacity-90 hover:opacity-100 underline transition-all duration-200 lg:text-[16px] xl:text-[18px]"
                  >
                    {service?.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-[25%] lg:pl-10">
          <h3 className="text-[18px] xl:text-[21px] font-bold uppercase text-start">
            Resources
          </h3>
          <ul className="w-full flex flex-col items-start gap-3 mt-5">
            {FOOTER_RESOURCES?.map((resource, index) => {
              return (
                <li key={index}>
                  <Link
                    href={resource?.url}
                    className="text-gray-200 opacity-90 hover:opacity-100 underline transition-all duration-200 lg:text-[16px] xl:text-[18px]"
                  >
                    {resource?.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <h3 className="text-[18px] xl:text-[21px] font-bold uppercase text-start mt-10">
            Contact us
          </h3>
          <ul className="flex flex-col items-start gap-3 mt-5 w-full">
            {FOOTER_CONTACTS?.map((contact, index) => {
              return (
                <li key={index} className="w-full">
                  <Link
                    href={contact?.url}
                    aria-label={contact?.title}
                    className="text-gray-200 opacity-90 hover:opacity-100 underline transition-all duration-200 lg:text-[16px] xl:text-[18px] whitespace-nowrap"
                  >
                    {contact?.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <div className="w-full padding-x">
        <div className="w-full my-16 border border-neutral-800" />
      </div>

      <FooterLocations />

      <div className="w-full padding-x">
        <div className="w-full my-16 border border-neutral-800" />
      </div>

      <section className="w-full flex flex-col items-center gap-5 justify-center mt-10 lg:mt-20 relative">
        <Image
          src={"/footer-lb-image.png"}
          alt="footer-lb-image"
          width={1919}
          height={142}
          loading="lazy"
          className="w-full absolute z-0 inset-x-0 top-14 lg:top-10 midlg:top-1.5"
        />
        <p className="text-sm md:text-base font-semibold opacity-70 z-10 relative top-5">
          © 2025 LaunchBox Global. All Rights Reserved.
        </p>

        <div className="flex items-center justify-end gap-3 z-10 relative top-3">
          <Link
            href={"https://www.facebook.com/LaunchboxGlobal"}
            target="_blank"
            aria-label="launchbox global facebook page link"
            className="w-[35px] h-[35px] md:w-[45px] md:h-[45px] flex items-center justify-center rounded-full bg-[#F40E00]"
          >
            <RiFacebookFill className="text-white w-[16.96px] h-[21.35px]" />
          </Link>
          <Link
            href={"https://www.linkedin.com/company/launchboxglobal/"}
            target="_blank"
            aria-label="launchbox global linkedin page link"
            className="w-[35px] h-[35px] md:w-[45px] md:h-[45px] flex items-center justify-center rounded-full bg-[#F40E00]"
          >
            <RiLinkedinFill className="text-white w-[19.93px] h-[19.93px]" />
          </Link>
          <Link
            href={"https://www.instagram.com/launchboxglobal/"}
            target="_blank"
            aria-label="launchbox global instagram page link"
            className="w-[35px] h-[35px] md:w-[45px] md:h-[45px] flex items-center justify-center rounded-full bg-[#F40E00]"
          >
            <FaInstagram className="text-white w-[18px] h-[18px]" />
          </Link>
        </div>
      </section>
    </footer>
  );
};

export default HomeFooter;

//  <FooterLocations />
