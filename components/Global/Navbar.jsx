"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { TbMenu2 } from "react-icons/tb";
import Sidebar from "./Sidebar";
import { usePathname, useRouter } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleScrollToServices = (e) => {
    e.preventDefault();

    if (pathname === "/") {
      // Already on Home, smooth scroll to #services
      const section = document.getElementById("services");
      section?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Not on Home, navigate to Home with hash
      router.push("/#services");
    }
  };

  const toggleSidebar = () => {
    setOpenSidebar((prev) => !prev);
  };
  return (
    <nav
      className={`py-3 md:py-7 flex items-center justify-between fixed top-0 z-50 w-full padding-x bg-white lg:bg-transparent shadow-md lg:shadow-none`}
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
          className="w-[188px] lg:w-[152px] lg:h-auto xl:w-[182px] 2xl:w-[220px] h-[35px] 2xl:h-[40px] block"
        />

        <div className="border border-[#CECEEA] w-[0.5px] h-[27px] opacity-50 hidden lg:block" />
        <span className="text-xs font-light lg:leading-[12px] xl:leading-[14px] hidden lg:block">
          <strong>
            Trusted Talent, <br /> Anywhere, Anytime.
          </strong>
        </span>
      </Link>

      <ul className="hidden lg:flex items-center justify-center gap-x-10 bg-[#fff] px-8 rounded-[17px] border border-[#CECEEA] h-[50px] 2xl:h-[62px]">
        <li>
          <Link
            href={`/`}
            className={`font-normal text-[16px] 2xl:text-[22px] flex items-center justify-start gap-1 group`}
          >
            Home{" "}
          </Link>
        </li>
        <li className="relative">
          <button
            type="button"
            onClick={toggleDropdown}
            className="font-normal text-[16px] 2xl:text-[22px] flex items-center justify-start gap-1 group"
          >
            Services{" "}
            <IoIosArrowDown
              className={`transition-transform duration-300 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>

          {/* Dropdown */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-[#CECEEA] rounded-xl p-5 xl:min-w-[333px] xl:max-w-[350px] absolute left-[0%] mt-4 z-50"
            >
              <ul className="space-y-2">
                <li className="">
                  <Link
                    href={`/services/mobile-app-development-services`}
                    className={`font-normal text-[16px] 2xl:text-[22px] flex items-center justify-start gap-1 group`}
                  >
                    Mobile App Development Services
                  </Link>
                </li>
                <li className="">
                  <Link
                    href={`/services/web-app-development-services`}
                    className={`font-normal text-[16px] 2xl:text-[22px] flex items-center justify-start gap-1 group`}
                  >
                    Web App Development Services
                  </Link>
                </li>
                <li className="">
                  <Link
                    href={`/services/custom-software-development-services`}
                    className={`font-normal text-[16px] 2xl:text-[22px] flex items-center justify-start gap-1 group`}
                  >
                    Custom Software Development Services
                  </Link>
                </li>
                <li className=""> </li>
              </ul>
            </motion.div>
          )}
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

      <div className="hidden lg:flex items-center justify-center gap-4">
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
        className="lg:hidden mr-3"
      >
        <TbMenu2 className="text-2xl text-[#F40E00]" />
      </button>
      <div
        className={`w-full h-screen bg-transparent z-50 fixed inset-0 ${
          openSidebar ? "-translate-x-0" : "translate-x-full"
        } transition-all duration-700 pt-3 bg-white`}
      >
        <Sidebar onclose={toggleSidebar} />
      </div>
    </nav>
  );
};

export default Navbar;
