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
      className={`py-6 md:py-7 flex items-center justify-between padding-x fixed top-0 z-50 w-full`}
    >
      <Link
        href={"/"}
        className="rounded-[17px] bg-white lg:border border-[#CECEEA] h-[57px] flex items-center justify-center gap-3 px-3"
      >
        <Image
          src={`/logo02.png`}
          width={180}
          height={45.73}
          alt="launchbox global logo"
          className="w-[110px] lg:w-[182px] 2xl:w-[210px] h-[31px] hidden lg:block"
        />

        <Image
          src={`/lb-logo-mobile.png`}
          width={180}
          height={45.73}
          alt="launchbox global logo"
          className="w-[40px] lg:hidden"
        />
        <div className="border border-[#CECEEA] w-[0.5px] h-[27px] opacity-50 hidden lg:block" />
        <span className="text-xs 2xl:text-sm font-semibold lg:leading-[14px] hidden lg:block">
          <strong>
            Trusted Talent, <br /> Anywhere, Anytime.
          </strong>
        </span>
      </Link>

      <ul className="hidden lg:flex items-center justify-center gap-x-6 bg-[#fff] py-3 px-6 rounded-[17px] border border-[#CECEEA] h-[57px]">
        <li>
          <Link
            href={`/`}
            className={`font-medium text-sm 2xl:text-[18px] flex items-center justify-start gap-1 group`}
          >
            Services{" "}
            <IoIosArrowDown className="group-hover:rotate-180 transition-all duration-300 rotate-0" />
          </Link>
        </li>
        <li>
          <Link
            href={`#services`}
            className={`font-medium text-sm 2xl:text-[18px] flex items-center justify-start gap-1 group`}
          >
            Solutions{" "}
            <IoIosArrowDown className="group-hover:rotate-180 transition-all duration-300 rotate-0" />
          </Link>
        </li>
        <li>
          <Link
            href={`#portfolio`}
            className={`font-medium text-sm 2xl:text-[18px] flex items-center justify-start gap-1 group`}
          >
            Resources{" "}
            <IoIosArrowDown className="group-hover:rotate-180 transition-all duration-300 rotate-0" />
          </Link>
        </li>
        <li>
          <Link
            href={`#portfolio`}
            className={`font-medium text-sm 2xl:text-[18px]`}
          >
            Pricing
          </Link>
        </li>
        <li>
          <Link
            href={`#portfolio`}
            className={`font-medium text-sm 2xl:text-[18px]`}
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            href={`/contact-us`}
            className={`font-medium text-sm 2xl:text-[18px] text-black`}
          >
            Contact Us
          </Link>
        </li>
      </ul>

      <div className="bg-white hidden lg:flex items-center justify-center gap-4 pl-5 pr-2 rounded-[17px] border border-[#CECEEA] h-[57px]">
        <Link
          href={`/`}
          className="flex items-center justify-end gap-1 outline-none font-medium text-sm 2xl:text-[18px]"
        >
          <span>Login</span>
          <IoIosArrowDown />
        </Link>
        <Link
          href={`/`}
          className="red-bg px-3 py-3 rounded-[11px] text-white hidden lg:flex items-center justify-end gap-3 outline-none font-medium text-sm 2xl:text-[18px]"
        >
          <span>Contact Sales</span>
        </Link>
      </div>

      <button
        type="button"
        name="sidebar menu button"
        onClick={toggleSidebar}
        className="lg:hidden"
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
