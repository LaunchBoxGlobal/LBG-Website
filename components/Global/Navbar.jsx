"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { TbMenu2 } from "react-icons/tb";
import Sidebar from "./Sidebar";
import { usePathname } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setOpenSidebar((prev) => !prev);
  };
  return (
    <nav
      className={`py-6 md:py-7 flex items-center justify-between fixed top-0 z-50 w-full padding-x`}
    >
      <Link
        href={"/"}
        className="rounded-[17px] bg-white lg:border border-[#CECEEA] h-[50px] 2xl:h-[60px] flex items-center justify-center gap-3 px-3.5"
      >
        <Image
          src={`/logo02.png`}
          width={180}
          height={45.73}
          alt="launchbox global logo"
          className="w-[110px] lg:w-[182px] 2xl:w-[220px] h-[31px] 2xl:h-[40px] hidden lg:block"
        />
        <Image
          src={`/lb-logo-mobile.png`}
          width={180}
          height={45.73}
          alt="launchbox global logo"
          className="w-[40px] lg:hidden"
        />
        <div className="border border-[#CECEEA] w-[0.5px] h-[27px] opacity-50 hidden lg:block" />
        <span className="text-xs 2xl:text-sm font-[300] lg:leading-[14px] 2xl:leading-[14px] hidden lg:block">
          <strong>
            Trusted Talent, <br /> Anywhere, Anytime.
          </strong>
        </span>
      </Link>

      <ul className="hidden xl:flex items-center justify-center gap-x-10 bg-[#fff] px-8 rounded-[17px] border border-[#CECEEA] h-[50px] 2xl:h-[62px]">
        <li>
          <Link
            href={`/`}
            className={`font-normal text-[16px] 2xl:text-[22px] flex items-center justify-start gap-1 group`}
          >
            Home{" "}
            {/* <IoIosArrowDown className="group-hover:rotate-180 transition-all duration-300 rotate-0 text-lg mt-0.5" /> */}
          </Link>
        </li>
        <li>
          <Link
            href={`#services`}
            className={`font-normal text-[16px] 2xl:text-[22px] flex items-center justify-start gap-1 group`}
          >
            Services{" "}
            {/* <IoIosArrowDown className="group-hover:rotate-180 transition-all duration-300 rotate-0 text-lg mt-0.5" /> */}
          </Link>
        </li>
        <li>
          <Link
            href={`#workflow`}
            className={`font-normal text-[16px] 2xl:text-[22px] flex items-center justify-start gap-1 group`}
          >
            Work Flow{" "}
            {/* <IoIosArrowDown className="group-hover:rotate-180 transition-all duration-300 rotate-0 mt-0.5" /> */}
          </Link>
        </li>
        <li>
          <Link
            href={`#teckstack`}
            className={`font-normal text-[16px] 2xl:text-[22px] flex items-center justify-start gap-1 group`}
          >
            Tech Stack{" "}
            {/* <IoIosArrowDown className="group-hover:rotate-180 transition-all duration-300 rotate-0" /> */}
          </Link>
        </li>
        <li>
          <Link
            href={`#testimonials`}
            className={`font-normal text-[16px] 2xl:text-[22px]`}
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            href={`#faqs`}
            className={`font-normal text-[16px] 2xl:text-[22px]`}
          >
            FAQs
          </Link>
        </li>
      </ul>

      <div className="hidden xl:flex items-center justify-center gap-4">
        {/* <Link
          href={`/`}
          className="flex items-center justify-end gap-1 outline-none font-medium text-[16px] 2xl:text-[18px]"
        >
          <span>Login</span>
          <IoIosArrowDown className="text-lg mt-0.5" />
        </Link> */}
        <Link
          href={`/contact-us`}
          className="red-bg px-6 h-[48px] 2xl:h-[60px] rounded-[17px] text-white hover:bg-black hover:text-white transition-all duration-300 hidden lg:flex items-center justify-end gap-3 outline-none font-medium text-[17px] 2xl:text-[18px]"
        >
          <span>Contact Sales</span>
        </Link>
      </div>

      <button
        type="button"
        name="sidebar menu button"
        onClick={toggleSidebar}
        className="xl:hidden"
      >
        <TbMenu2 className="text-2xl" />
      </button>
      <div
        className={`w-full h-screen bg-transparent z-50 fixed inset-0 ${
          openSidebar ? "-translate-x-0" : "translate-x-full"
        } transition-all duration-700 pt-20`}
        onClick={toggleSidebar}
      >
        <Sidebar onclick={toggleSidebar} />
      </div>
    </nav>
  );
};

export default Navbar;
